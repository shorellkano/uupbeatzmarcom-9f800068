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
    slug: "how-ai-search-will-change-how-customers-find-businesses",
    title: "How AI Search Will Change The Way Customers Find Businesses",
    category: "SEO & AI Search",
    summary:
      "Customers are asking AI assistants for recommendations instead of scrolling results pages. Here is what that means for your business.",
    date: "2026-08-18",
    readingTime: "6 min read",
    author: "Upbeatz Marcom",
    image: aiImg,
    imageAlt: "Abstract network of glowing nodes representing AI search",
    body: [
      { type: "p", text: "For two decades, being found meant ranking on a page of blue links. Today a growing share of buying journeys starts with a question asked to an AI assistant — and the answer names only a handful of businesses." },
      { type: "h2", text: "From ten results to one answer" },
      { type: "p", text: "AI assistants summarise. Instead of ten options, a customer receives a short recommendation with reasons attached. The businesses named are the ones the system can clearly understand and confidently vouch for." },
      { type: "h2", text: "What AI systems look for" },
      { type: "list", items: [
        "Clear, factual descriptions of what you do and who you serve",
        "Consistent business information across your website, listings and profiles",
        "Content that answers real customer questions directly",
        "Independent trust signals: reviews, mentions and coverage",
        "A website structured so machines can read it, not just people",
      ] },
      { type: "h2", text: "What to do now" },
      { type: "p", text: "Treat clarity as a growth asset. Say plainly what you offer, where you operate and what outcomes customers get. Publish answers, not adverts. Keep your details identical everywhere they appear." },
      { type: "h2", text: "The advantage belongs to the early" },
      { type: "p", text: "AI-era discovery rewards businesses that prepared before their competitors noticed the shift. That preparation is exactly what the Upbeatz AI Growth Engine is built to deliver." },
    ],
  },
  {
    slug: "google-seo-vs-ai-search-what-business-owners-need-to-know",
    title: "Google SEO vs AI Search: What Business Owners Need To Know",
    category: "SEO & AI Search",
    summary:
      "SEO and Answer Engine Optimisation are related but not the same. Understanding the difference protects your visibility.",
    date: "2026-08-12",
    readingTime: "5 min read",
    author: "Upbeatz Marcom",
    image: seoImg,
    imageAlt: "Split abstract visual comparing search rankings and AI answers",
    body: [
      { type: "p", text: "SEO earns a position. Answer Engine Optimisation earns a mention. Both matter, and the work overlaps — but the goals are different." },
      { type: "h2", text: "How they differ" },
      { type: "list", items: [
        "SEO optimises for ranking on a results page; AEO optimises for being used inside an answer",
        "SEO rewards keywords and links; AEO rewards clarity, structure and authority",
        "SEO traffic clicks through; AI answers often decide before the click",
        "SEO is measured in positions; AEO is measured in mentions and recommendations",
      ] },
      { type: "h2", text: "What stays the same" },
      { type: "p", text: "Useful content, a fast well-structured website, accurate business information and genuine reputation still underpin everything. Nothing you invested in good SEO is wasted." },
      { type: "h2", text: "What to add" },
      { type: "p", text: "Structured data, question-led content, expertise signals and consistent presence across the places AI systems learn from — directories, reviews, publications and social profiles." },
      { type: "h2", text: "Do both, deliberately" },
      { type: "p", text: "The winning approach is not choosing between Google and AI search. It is building one digital presence that both understand." },
    ],
  },
  {
    slug: "why-your-website-may-not-be-ready-for-ai",
    title: "Why Your Website May Not Be Ready For AI",
    category: "AI For Business",
    summary:
      "A website can look excellent to customers and still be unreadable to the systems that recommend businesses.",
    date: "2026-08-06",
    readingTime: "5 min read",
    author: "Upbeatz Marcom",
    image: digitalImg,
    imageAlt: "Abstract layered interface panels on a dark background",
    body: [
      { type: "p", text: "Design impresses people. Structure convinces machines. Many beautiful websites give AI systems almost nothing to work with." },
      { type: "h2", text: "Common gaps" },
      { type: "list", items: [
        "Key information trapped inside images, sliders or videos",
        "No clear statement of services, locations or pricing",
        "Missing structured data for the organisation, services and reviews",
        "Vague headings that describe style rather than substance",
        "Inconsistent business details across the site and external profiles",
      ] },
      { type: "h2", text: "What an AI-ready website looks like" },
      { type: "p", text: "Plain descriptive headings, service pages that answer real questions, visible contact and location details, structured data behind the scenes, and fast accessible pages on mobile." },
      { type: "h2", text: "Start with a check" },
      { type: "p", text: "An AI Visibility Assessment shows how your business currently reads to search engines and AI platforms, and which fixes will move the needle first." },
    ],
  },

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