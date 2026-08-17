import LegalPage from "@/components/LegalPage";

const PrivacyPolicy = () => (
  <LegalPage
    title="Privacy Policy"
    metaTitle="Privacy Policy | Upbeatz Marcom"
    metaDescription="How Upbeatz Marcom collects, uses, stores and protects personal data for clients and website visitors in the UK and Nigeria."
    path="/privacy-policy"
    updated="17 August 2026"
    intro="Upbeatz Marcom ('we', 'us', 'our') is a digital marketing agency operating in the United Kingdom and Nigeria. This policy explains how we collect and handle personal information when you use our website or engage our services."
    sections={[
      {
        heading: "1. Information we collect",
        paragraphs: ["We collect information you provide directly and information collected automatically when you browse our website."],
        items: [
          "Contact details such as name, business name, email address and phone or WhatsApp number",
          "Enquiry details you submit through our forms or messaging channels",
          "Technical data such as IP address, browser type, device type and pages visited",
          "Marketing and analytics data collected through cookies and similar technologies",
        ],
      },
      {
        heading: "2. How we use your information",
        items: [
          "To respond to enquiries and provide quotations",
          "To deliver marketing, advertising, website and related services",
          "To improve our website, campaigns and service quality",
          "To send service updates and, where permitted, marketing communications",
          "To comply with legal, tax and regulatory obligations",
        ],
      },
      {
        heading: "3. Legal bases for processing",
        paragraphs: [
          "Where UK GDPR applies, we process personal data on the basis of your consent, the performance of a contract, our legitimate interests in operating and promoting our business, and compliance with legal obligations. In Nigeria we process personal data in line with the Nigeria Data Protection Act.",
        ],
      },
      {
        heading: "4. Sharing your information",
        paragraphs: [
          "We do not sell personal data. We may share information with trusted service providers who support our operations, such as hosting, analytics, advertising and communication platforms, and with authorities where required by law.",
        ],
      },
      {
        heading: "5. International transfers",
        paragraphs: [
          "As we operate across the United Kingdom and Nigeria, your information may be transferred and stored outside your country of residence. Where this happens we take reasonable steps to ensure an appropriate level of protection.",
        ],
      },
      {
        heading: "6. Data retention",
        paragraphs: [
          "We keep personal data only for as long as necessary for the purposes described in this policy, or for as long as required by law.",
        ],
      },
      {
        heading: "7. Your rights",
        items: [
          "Request access to the personal data we hold about you",
          "Request correction of inaccurate or incomplete data",
          "Request deletion of your data where applicable",
          "Object to or restrict certain processing",
          "Withdraw consent to marketing communications at any time",
        ],
      },
      {
        heading: "8. Security",
        paragraphs: [
          "We apply reasonable technical and organisational measures to protect personal data. No method of transmission over the internet is completely secure, so we cannot guarantee absolute security.",
        ],
      },
      {
        heading: "9. Contact us",
        paragraphs: [
          "For any privacy request or question, contact hello@upbeatzmarcom.com or call +234 707 104 2782. Our offices are at 1 Modupe Johnson Crescent, Surulere, Lagos and 43 Ajayi Road, Ogba, Lagos.",
        ],
      },
    ]}
  />
);

export default PrivacyPolicy;