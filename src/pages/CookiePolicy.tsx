import LegalPage from "@/components/LegalPage";

const CookiePolicy = () => (
  <LegalPage
    title="Cookie Policy"
    metaTitle="Cookie Policy | Upbeatz Marcom"
    metaDescription="How Upbeatz Marcom uses cookies and similar technologies for analytics, advertising and website performance."
    path="/cookie-policy"
    updated="17 August 2026"
    intro="This policy explains how the Upbeatz Marcom website uses cookies and similar technologies, and how you can control them."
    sections={[
      {
        heading: "1. What cookies are",
        paragraphs: [
          "Cookies are small text files stored on your device when you visit a website. They help the site function correctly and help us understand how visitors use it.",
        ],
      },
      {
        heading: "2. Types of cookies we use",
        items: [
          "Essential cookies: required for the website to function and cannot be switched off",
          "Analytics cookies: help us understand page views, traffic sources and user behaviour (for example Google Analytics)",
          "Advertising cookies: measure campaign performance and support remarketing on platforms such as Google Ads and Meta",
          "Preference cookies: remember choices such as your selected options on the site",
        ],
      },
      {
        heading: "3. Third-party cookies",
        paragraphs: [
          "Some cookies are set by third parties whose services appear on our site, including Google Analytics, Google Tag Manager, Google Ads and social media platforms. These providers have their own privacy and cookie policies.",
        ],
      },
      {
        heading: "4. Managing cookies",
        paragraphs: [
          "You can accept, block or delete cookies through your browser settings. Blocking some cookies may affect how parts of the website work. You may also opt out of Google Analytics using Google's browser add-on.",
        ],
      },
      {
        heading: "5. Consent",
        paragraphs: [
          "Where required under UK GDPR and the Nigeria Data Protection Act, non-essential cookies are only used with your consent, which you may withdraw at any time by adjusting your browser settings.",
        ],
      },
      {
        heading: "6. Contact",
        paragraphs: ["For questions about this policy, contact hello@upbeatzmarcom.com."],
      },
    ]}
  />
);

export default CookiePolicy;