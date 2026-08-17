import LegalPage from "@/components/LegalPage";

const TermsAndConditions = () => (
  <LegalPage
    title="Terms & Conditions"
    metaTitle="Terms & Conditions | Upbeatz Marcom"
    metaDescription="The terms that govern the use of the Upbeatz Marcom website and the digital marketing services we provide to clients."
    path="/terms-and-conditions"
    updated="17 August 2026"
    intro="These terms govern your use of the Upbeatz Marcom website and the services we provide. By using this website or engaging our services, you agree to these terms."
    sections={[
      {
        heading: "1. Our services",
        paragraphs: [
          "Upbeatz Marcom provides digital marketing services including social media management, content creation, paid advertising, search visibility, branding, websites and related digital solutions. The specific scope of each engagement is set out in a written proposal, quotation or service agreement.",
        ],
      },
      {
        heading: "2. Engagements and payment",
        items: [
          "Work begins once a proposal is accepted and any required deposit is received",
          "Monthly retainers are billed in advance unless otherwise agreed in writing",
          "Advertising budgets are separate from service fees and are paid to the advertising platforms",
          "Late payment may result in work being paused until the account is settled",
        ],
      },
      {
        heading: "3. Client responsibilities",
        items: [
          "Provide accurate business information, brand assets and approvals in good time",
          "Ensure you hold the rights to any materials supplied to us",
          "Provide access to accounts and platforms required to deliver the work",
        ],
      },
      {
        heading: "4. Results and performance",
        paragraphs: [
          "Marketing outcomes depend on many factors including market conditions, budget, offer and competition. We apply professional expertise and best practice but do not guarantee specific rankings, reach, leads, sales or revenue.",
        ],
      },
      {
        heading: "5. Intellectual property",
        paragraphs: [
          "Deliverables created for a client transfer to that client on full payment, except for third-party assets, licensed materials and our internal tools, templates and processes which remain our property.",
        ],
      },
      {
        heading: "6. Confidentiality",
        paragraphs: [
          "Each party agrees to keep confidential any non-public information shared during an engagement and to use it only for the purposes of that engagement.",
        ],
      },
      {
        heading: "7. Cancellation",
        paragraphs: [
          "Either party may end an ongoing engagement with 30 days' written notice. Fees for work completed up to the end of the notice period remain payable.",
        ],
      },
      {
        heading: "8. Limitation of liability",
        paragraphs: [
          "To the fullest extent permitted by law, our total liability arising from any engagement is limited to the fees paid for the services in the three months preceding the claim. We are not liable for indirect or consequential losses, including loss of profit or business.",
        ],
      },
      {
        heading: "9. Third-party platforms",
        paragraphs: [
          "Our services may rely on third-party platforms such as Meta, Google, TikTok, LinkedIn and hosting providers. We are not responsible for their availability, policy changes, account decisions or pricing.",
        ],
      },
      {
        heading: "10. Governing law",
        paragraphs: [
          "These terms are governed by the laws of the Federal Republic of Nigeria, and where services are supplied to United Kingdom clients, by the laws of England and Wales.",
        ],
      },
      {
        heading: "11. Contact",
        paragraphs: ["Questions about these terms can be sent to hello@upbeatzmarcom.com."],
      },
    ]}
  />
);

export default TermsAndConditions;