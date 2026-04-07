# dorotamatula.pl

Statyczna strona Vite wdrażana na Cloudflare Pages.

## Newsletter na Cloudflare

Formularz newslettera korzysta z Pages Function w `functions/api/newsletter.ts`.

W Cloudflare Pages ustaw:

- `MAILERLITE_API_TOKEN` - sekret API MailerLite
- `MAILERLITE_GROUP_ID` - opcjonalnie, jeśli zapis ma trafiać do konkretnej grupy

Do lokalnego developmentu możesz użyć pliku `.dev.vars` na podstawie `.dev.vars.example`.
