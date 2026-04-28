type MetaPixelValue = string | number | boolean | null | undefined;

type MetaPixelParams = Record<string, MetaPixelValue | MetaPixelValue[] | Record<string, unknown>>;

declare global {
  interface Window {
    fbq?: {
      (...args: unknown[]): void;
      callMethod?: (...args: unknown[]) => void;
      queue?: unknown[];
      loaded?: boolean;
      version?: string;
    };
  }
}

function getFbq() {
  if (typeof window === "undefined") return null;
  return typeof window.fbq === "function" ? window.fbq : null;
}

export function trackMetaEvent(eventName: string, params?: MetaPixelParams) {
  const fbq = getFbq();
  if (!fbq) return;

  if (params) {
    fbq("track", eventName, params);
    return;
  }

  fbq("track", eventName);
}

export function trackMetaCustomEvent(eventName: string, params?: MetaPixelParams) {
  const fbq = getFbq();
  if (!fbq) return;

  if (params) {
    fbq("trackCustom", eventName, params);
    return;
  }

  fbq("trackCustom", eventName);
}

export function trackMetaEventOncePerSession(
  storageKey: string,
  eventName: string,
  params?: MetaPixelParams,
) {
  if (typeof window === "undefined") return;

  const sessionKey = `meta:${storageKey}`;
  if (window.sessionStorage.getItem(sessionKey) === "1") return;

  trackMetaEvent(eventName, params);
  window.sessionStorage.setItem(sessionKey, "1");
}
