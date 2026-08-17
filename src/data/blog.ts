import contentImg from "@/assets/blog-content.jpg";
import aiImg from "@/assets/blog-ai.jpg";
import seoImg from "@/assets/blog-seo.jpg";
import digitalImg from "@/assets/blog-digital.jpg";
import growthImg from "@/assets/blog-growth.jpg";

export const categories = [
  "Social Media Growth",
  "Digital Marketing",
  "SEO & AI Search",
  "AI For Business",
  "Business Growth",
] as const;

export type Category = (typeof categories)[number];

export interface Block {
  type: "h2" | "p" | "list";
  text?: string;
  items?: string[];
}

export interface Post {
  slug: string;
  title: string;
  category: Category;
  summary: string;
  date: string;
  readingTime: string;
  author: string;
  image: string;
  imageAlt: string;
  body: Block[];
}

export const posts: Post[] = [
  {
    slug: "why-posting-content-alone-is-not-enough",
    title: "Why Posting Content Alone Is Not Enough To Grow Your Business",
    category: "Social Media Growth",
    summary:
      "Consistent posting builds visibility, but visibility alone does not create customers. Here is what turns content into business results.",
    date: "2026-08-04",
    readingTime: "6 min read",
    author: "Upbeatz Marcom",
    image: contentImg,
    imageAlt: "Abstract glowing social media content cards on a dark background",
    body: [
      { type: "p", text: "Many businesses post every day and still struggle to attract customers. The issue is rarely effort — it is usually that content is created without a strategy behind it." },
      { type: "h2", text: "Content without strategy is just noise" },
      { type: "p", text: "Content should answer a question your customer is already asking, remove a doubt that stops them buying, or prove that you can be trusted. When posts are created just to fill a calendar, they do none of these things." },
      { type: "h2", text: "What actually turns content into customers" },
      { type: "list", items: [
        "A clear positioning statement that explains who you help and how",
        "Content built around buying objections, not trends alone",
        "A consistent visual identity people begin to recognise",
        "Clear calls to action on every piece of content",
        "A way to capture enquiries: WhatsApp, a landing page or a form",
      ] },
      { type: "h2", text: "Build a system, not a posting habit" },
      { type: "p", text: "A growth system connects content, advertising, search visibility and follow-up. Content brings attention, advertising accelerates it, search captures demand and follow-up converts it. Remove one and the rest works harder for less." },
      { type: "p", text: "If your content is consistent but your enquiries are not, the gap is almost always in strategy and conversion, not in how often you post." },
    ],
  },
  {
    slug: "how-small-businesses-can-use-ai",
    title: "How Small Businesses Can Use AI To Save Time And Grow Faster",
    category: "AI For Business",
    summary:
      "AI will not replace your marketing, but it will remove the slow parts. Practical ways small businesses are using AI today.",
    date: "2026-07-21",
    readingTime: "5 min read",
    author: "Upbeatz Marcom",
    image: aiImg,
    imageAlt: "Abstract AI network illustration in red on a black background",
    body: [
      { type: "p", text: "Small business owners rarely lack ideas. They lack time. AI is most valuable when it removes repetitive work so you can focus on customers." },
      { type: "h2", text: "Where AI helps immediately" },
      { type: "list", items: [
        "Research: understanding your audience, competitors and market language",
        "Planning: turning one idea into a month of content angles",
        "Drafting: first versions of captions, emails and product descriptions",
        "Customer support: answering repeat questions instantly",
        "Reporting: summarising performance so decisions happen faster",
      ] },
      { type: "h2", text: "Where AI should not be left alone" },
      { type: "p", text: "Brand voice, offers, pricing and customer relationships still need human judgement. AI-generated content that has not been shaped by someone who understands the business reads generic — and customers notice." },
      { type: "h2", text: "Start small" },
      { type: "p", text: "Pick one repetitive task this month and build an AI-supported workflow around it. Measure the time saved, then move to the next one." },
    ],
  },
  {
    slug: "seo-vs-aeo-future-of-search",
    title: "SEO vs AEO: How Businesses Can Prepare For The Future Of Search",
    category: "SEO & AI Search",
    summary:
      "Customers now ask AI assistants the questions they used to type into Google. Here is how to stay visible in both.",
    date: "2026-07-08",
    readingTime: "7 min read",
    author: "Upbeatz Marcom",
    image: seoImg,
    imageAlt: "Glowing magnifier over digital search data on a dark background",
    body: [
      { type: "p", text: "Search Engine Optimisation helps people find you on Google. Answer Engine Optimisation helps AI-powered platforms recommend you when someone asks a question." },
      { type: "h2", text: "What still matters in SEO" },
      { type: "list", items: [
        "Keyword research based on real customer language",
        "Fast, well-structured, mobile-friendly pages",
        "Content that fully answers a search intent",
        "Local SEO and an accurate business profile",
        "Technical health: indexing, sitemaps and metadata",
      ] },
      { type: "h2", text: "What AEO adds" },
      { type: "list", items: [
        "Clear, structured answers AI systems can quote",
        "Consistent business information across the web",
        "Demonstrated expertise and authority in your niche",
        "Content written as questions and direct answers",
      ] },
      { type: "h2", text: "The practical takeaway" },
      { type: "p", text: "You do not need two strategies. You need content that is genuinely useful, structured clearly and published consistently — that satisfies both search engines and answer engines." },
    ],
  },
  {
    slug: "more-than-social-media-presence",
    title: "Why Your Business Needs More Than Just Social Media Presence",
    category: "Digital Marketing",
    summary:
      "Social platforms rent you an audience. Owned digital assets are what make growth durable.",
    date: "2026-06-19",
    readingTime: "5 min read",
    author: "Upbeatz Marcom",
    image: digitalImg,
    imageAlt: "Neon outlines of digital devices on a black background",
    body: [
      { type: "p", text: "An Instagram page is a great shopfront, but it is built on land you do not own. Algorithms change, reach drops and accounts get restricted." },
      { type: "h2", text: "Assets your business should own" },
      { type: "list", items: [
        "A professional website that builds credibility and converts visitors",
        "A customer or enquiry list you control",
        "Search visibility that brings traffic without ad spend",
        "Reviews and proof that live outside social platforms",
      ] },
      { type: "h2", text: "Social media plus infrastructure" },
      { type: "p", text: "The strongest setup is simple: social media creates attention, your website converts it, and search and advertising keep the pipeline full. Each part supports the others." },
    ],
  },
  {
    slug: "turn-followers-into-customers",
    title: "How To Turn Social Media Followers Into Real Customers",
    category: "Business Growth",
    summary:
      "Followers are not revenue. A clear path from attention to enquiry is what closes the gap.",
    date: "2026-06-02",
    readingTime: "6 min read",
    author: "Upbeatz Marcom",
    image: growthImg,
    imageAlt: "Red growth chart rising above an audience silhouette",
    body: [
      { type: "p", text: "A large following with few sales usually means one thing: there is no clear next step for people who are interested." },
      { type: "h2", text: "Design the path deliberately" },
      { type: "list", items: [
        "Make the offer obvious in your bio and pinned content",
        "Give one clear next action: message, book or buy",
        "Reduce friction — WhatsApp, a short form or direct checkout",
        "Answer objections publicly through content",
        "Follow up; most enquiries convert after the second conversation",
      ] },
      { type: "h2", text: "Track what matters" },
      { type: "p", text: "Measure enquiries, conversations and sales — not likes. Once you can see which content produces enquiries, you can produce more of it deliberately." },
      { type: "h2", text: "Consistency beats intensity" },
      { type: "p", text: "A steady, well-structured system delivers more customers over twelve months than an occasional burst of activity ever will." },
    ],
  },
];

export const getPost = (slug?: string) => posts.find((p) => p.slug === slug);

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });