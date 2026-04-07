interface Env {
  MAILERLITE_API_TOKEN?: string;
  MAILERLITE_GROUP_ID?: string;
}

type NewsletterRequestBody = {
  email?: string;
};

function jsonResponse(body: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export const onRequestOptions: PagesFunction = async () =>
  new Response(null, {
    status: 204,
    headers: {
      Allow: "POST, OPTIONS",
    },
  });

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const apiToken = context.env.MAILERLITE_API_TOKEN;

  if (!apiToken) {
    return jsonResponse(
      {
        error:
          "Newsletter is not configured yet. Add MAILERLITE_API_TOKEN in Cloudflare Pages environment variables.",
      },
      500,
    );
  }

  let body: NewsletterRequestBody;

  try {
    body = (await context.request.json()) as NewsletterRequestBody;
  } catch {
    return jsonResponse({ error: "Invalid JSON payload." }, 400);
  }

  const email = body.email?.trim().toLowerCase();

  if (!email || !isValidEmail(email)) {
    return jsonResponse({ error: "Podaj poprawny adres e-mail." }, 400);
  }

  const payload: Record<string, unknown> = {
    email,
    status: "active",
  };

  if (context.env.MAILERLITE_GROUP_ID) {
    payload.groups = [context.env.MAILERLITE_GROUP_ID];
  }

  const mailerLiteResponse = await fetch(
    "https://connect.mailerlite.com/api/subscribers",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${apiToken}`,
      },
      body: JSON.stringify(payload),
    },
  );

  if (!mailerLiteResponse.ok) {
    let errorMessage = "Nie udało się zapisać do newslettera.";

    try {
      const errorData = (await mailerLiteResponse.json()) as {
        message?: string;
        errors?: Record<string, string[]>;
      };

      if (errorData.errors?.email?.[0]) {
        errorMessage = errorData.errors.email[0];
      } else if (errorData.message) {
        errorMessage = errorData.message;
      }
    } catch {
      // Keep the generic message if MailerLite does not return JSON.
    }

    return jsonResponse({ error: errorMessage }, mailerLiteResponse.status);
  }

  return jsonResponse({ ok: true });
};
