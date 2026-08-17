type Gtag = (...args: unknown[]) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
  }
}

const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;
const GTM_ID = import.meta.env.VITE_GTM_ID as string | undefined;
const ADS_ID = import.meta.env.VITE_GOOGLE_ADS_ID as string | undefined;

let initialised = false;

const injectScript = (src: string) => {
  const s = document.createElement("script");
  s.async = true;
  s.src = src;
  document.head.appendChild(s);
};

/** Loads GA4 / Google Ads / GTM when their IDs are configured. Safe no-op otherwise. */
export const initAnalytics = () => {
  if (initialised || typeof window === "undefined") return;
  initialised = true;

  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag() {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer!.push(arguments);
    };

  window.gtag("js", new Date());

  if (GA_ID || ADS_ID) {
    injectScript(`https://www.googletagmanager.com/gtag/js?id=${GA_ID || ADS_ID}`);
    if (GA_ID) window.gtag("config", GA_ID, { send_page_view: false });
    if (ADS_ID) window.gtag("config", ADS_ID);
  }

  if (GTM_ID) {
    window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
    injectScript(`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`);
  }
};

/** Generic event: pushed to the GTM dataLayer and to GA4 when available. */
export const trackEvent = (name: string, params: Record<string, unknown> = {}) => {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: name, ...params });
  window.gtag?.("event", name, params);
};

export const trackPageView = (path: string, title?: string) => {
  trackEvent("page_view", { page_path: path, page_title: title ?? document.title, page_location: window.location.href });
};

/** Conversion-critical helpers used across CTAs. */
export const trackCta = (label: string, location: string) =>
  trackEvent("cta_click", { cta_label: label, cta_location: location });

export const trackWhatsApp = (location: string, label = "WhatsApp") =>
  trackEvent("whatsapp_click", { cta_label: label, cta_location: location });

export const trackLead = (source: string, params: Record<string, unknown> = {}) =>
  trackEvent("generate_lead", { lead_source: source, ...params });