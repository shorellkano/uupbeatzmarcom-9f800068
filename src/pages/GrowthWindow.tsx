import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Clock3,
  Instagram,
  Layers3,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Star,
  ExternalLink,
  BadgeCheck,
  Zap,
} from "lucide-react";

import logo from "@/assets/upbeatz-logo.png";
import zebralinkLogo from "@/assets/zebralink-logo.png";
import storvoLogo from "@/assets/storvo-logo.png";
import safehavenLogo from "@/assets/safehaven-logo-official.png";
import mandmLogo from "@/assets/mandm-logo.png";
import roweparkLogo from "@/assets/rowepark-logo.jpg";
import relishLogo from "@/assets/relish-logo.jpg";
import felicitousLogo from "@/assets/felicitous-logo.png";
import puretemLogo from "@/assets/puretem-logo.jpg";

const WHATSAPP_NUMBER = "2349097927111";
const NAIRA = "\u20A6";

const WEBSITE_MESSAGE = encodeURIComponent(
  `Hi Upbeatz Marcom, I want to claim the ${NAIRA}150,000 Website Growth Window slot. Please confirm availability and next steps.`
);

const SOCIAL_MESSAGE = encodeURIComponent(
  `Hi Upbeatz Marcom, I want to claim the ${NAIRA}150,000 Social Growth November intake slot. Please confirm availability and next steps.`
);

const BUNDLE_MESSAGE = encodeURIComponent(
  `Hi Upbeatz Marcom, I want to claim the ${NAIRA}290,000 Website + Social Growth Bundle. Please confirm availability and next steps.`
);

const GENERAL_MESSAGE = encodeURIComponent(
  "Hi Upbeatz Marcom, I saw the Growth Window offer and I would like to discuss the best option for my business."
);

const whatsappUrl = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

const offers = [
  {
    name: "Website Launch Slot",
    eyebrow: "Digital presence",
    price: `${NAIRA}150,000`,
    was: `Usually from ${NAIRA}350,000`,
    description:
      "A professional, mobile-first business website designed to make your brand easier to trust, understand and contact.",
    features: [
      "Up to 5 core pages",
      "Mobile-first responsive design",
      "WhatsApp & enquiry integration",
      "Basic Search Engine Optimisation setup",
      "Social media integration",
      "Free .com.ng domain for the first year where applicable",
      "Professional email setup assistance",
    ],
    cta: "Claim Website Slot",
    href: whatsappUrl(WEBSITE_MESSAGE),
  },
  {
    name: "Social Growth Launch",
    eyebrow: "November intake",
    price: `${NAIRA}150,000`,
    was: `Regular package ${NAIRA}450,000`,
    description:
      "A complete first month of strategic content built to keep your brand visible, credible and consistently in front of customers.",
    features: [
      "30 social media posts",
      "30 story publications",
      "10 flexible content reserve ideas",
      "Monthly strategy & content calendar",
      "Hooks, captions, CTAs & hashtags",
      "Graphics, carousels, Reels & edited videos",
      "Platform-specific content adaptation",
    ],
    cta: "Claim Social Growth Slot",
    href: whatsappUrl(SOCIAL_MESSAGE),
  },
  {
    name: "Digital Growth Launch Bundle",
    eyebrow: "Best value",
    price: `${NAIRA}290,000`,
    was: `Save ${NAIRA}10,000 when you take both`,
    description:
      "Launch a stronger digital presence and immediately back it with a month of strategic social content.",
    features: [
      "Everything in the Website Launch Slot",
      "Everything in the Social Growth Launch",
      "Digital presence audit",
      "30-day launch strategy",
      "Business email setup assistance",
      "Priority onboarding",
    ],
    cta: "Claim Bundle",
    href: whatsappUrl(BUNDLE_MESSAGE),
    featured: true,
  },
];

const portfolio = [
  {
    name: "Savvi",
    type: "Student Verification & Discount Platform",
    url: "https://about.savvi.ng/",
    logo: savviLogo,
  },
  {
    name: "ZebraLink",
    type: "Digital Business Card Web App",
    url: "https://zebralinkcard.com",
    logo: zebralinkLogo,
  },
  {
    name: "Storvo",
    type: "Ecommerce Platform",
    url: "https://storvo.co",
    logo: storvoLogo,
  },
  {
    name: "Safe Haven",
    type: "Hosting Platform Web App",
    url: "https://safehaven.host",
    logo: safehavenLogo,
  },
  {
    name: "M&M Group",
    type: "Corporate Website",
    url: "https://mandmgroup.ng",
    logo: mandmLogo,
  },
  {
    name: "Rowe Park Swimming Pool",
    type: "Sports & Leisure Website",
    url: "https://roweparkpool.mandmgroup.ng",
    logo: roweparkLogo,
  },
  {
    name: "Relish Lounge",
    type: "Hospitality Website",
    url: "https://relishlounge.com.ng",
    logo: relishLogo,
  },
  {
    name: "Felicitous Travels",
    type: "Travel Website",
    url: "https://travelwithfelicitous.com.ng",
    logo: felicitousLogo,
  },
  {
    name: "Puretem Nigeria",
    type: "Corporate Services Website",
    url: "https://puretem.com.ng",
    logo: puretemLogo,
  },
  {
    name: "OpsHelm OS",
    type: "Distribution & Growth Engine for Brands",
    url: "https://revenue-os-5.safehaven.host/",
    logo: opshelmLogo,
  },
];

const proofPoints = [
  {
    icon: BadgeCheck,
    text: "Strategy before execution",
  },
  {
    icon: Sparkles,
    text: "Professional creative direction",
  },
  {
    icon: Zap,
    text: "AI-supported marketing workflows",
  },
  {
    icon: ShieldCheck,
    text: "Clear scope before payment",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Choose",
    description: "Select the offer that fits your immediate business need.",
  },
  {
    number: "02",
    title: "WhatsApp",
    description: "Message us directly so we can confirm fit and availability.",
  },
  {
    number: "03",
    title: "Secure",
    description: "Payment confirms the promotional slot during the window.",
  },
  {
    number: "04",
    title: "Onboard",
    description: "Send your assets and business information so work can begin.",
  },
];

const getFallbackEnd = () => {
  return new Date("2026-10-29T12:00:00+01:00").getTime();
};

const getCampaignEnd = () => {
  const envEnd = import.meta.env.VITE_GROWTH_WINDOW_END as
    | string
    | undefined;

  if (envEnd) {
    const parsed = new Date(envEnd).getTime();

    if (!Number.isNaN(parsed)) {
      return parsed;
    }
  }

  return getFallbackEnd();
};

const Countdown = () => {
  const end = useMemo(getCampaignEnd, []);

  const [remaining, setRemaining] = useState(
    Math.max(0, end - Date.now())
  );

  useEffect(() => {
    const interval = window.setInterval(() => {
      setRemaining(Math.max(0, end - Date.now()));
    }, 1000);

    return () => window.clearInterval(interval);
  }, [end]);

  const hours = Math.floor(remaining / 3_600_000);
  const minutes = Math.floor((remaining % 3_600_000) / 60_000);
  const seconds = Math.floor((remaining % 60_000) / 1000);

  const ended = remaining <= 0;

  if (ended) {
    return (
      <div className="inline-flex items-center gap-2 rounded-full border border-border/40 bg-card/50 px-4 py-2 text-xs text-muted-foreground">
        <Clock3 size={14} className="text-primary" />
        This Growth Window has closed. Message us for current availability.
      </div>
    );
  }

  return (
    <div className="inline-flex items-center gap-3 rounded-2xl border border-primary/20 bg-primary/[0.06] px-4 py-3 shadow-[0_0_40px_-20px_hsl(var(--primary))]">
      <Clock3 size={17} className="text-primary" />

      <div className="text-left">
        <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          Growth Window closes in
        </p>

        <p className="font-display text-lg font-extrabold tracking-tight text-foreground">
          {String(hours).padStart(2, "0")}h :{" "}
          {String(minutes).padStart(2, "0")}m :{" "}
          {String(seconds).padStart(2, "0")}s
        </p>
      </div>
    </div>
  );
};

const GrowthWindow = () => {
  useEffect(() => {
    const oldTitle = document.title;

    const description =
      "Limited Upbeatz Marcom Growth Window: professional business websites and strategic social media growth packages for businesses ready to move now.";

    document.title =
      "Growth Window | Website & Social Growth Offers | Upbeatz Marcom";

    const ensureMeta = (
      name: string,
      content: string,
      property = false
    ) => {
      const selector = property
        ? `meta[property="${name}"]`
        : `meta[name="${name}"]`;

      let meta = document.querySelector(
        selector
      ) as HTMLMetaElement | null;

      if (!meta) {
        meta = document.createElement("meta");

        if (property) {
          meta.setAttribute("property", name);
        } else {
          meta.setAttribute("name", name);
        }

        document.head.appendChild(meta);
      }

      meta.content = content;
    };

    ensureMeta("description", description);
    ensureMeta("og:title", document.title, true);
    ensureMeta("og:description", description, true);
    ensureMeta("og:type", "website", true);
    ensureMeta(
      "og:url",
      "https://upbeatzmarcom.com/growth-window",
      true
    );
    ensureMeta("twitter:card", "summary_large_image");

    let canonical = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement | null;

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }

    canonical.href =
      "https://upbeatzmarcom.com/growth-window";

    return () => {
      document.title = oldTitle;
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden relative noise">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 grid-overlay opacity-25" />

        <div
          className="absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(ellipse, hsl(347 77% 50% / 0.13) 0%, transparent 68%)",
          }}
        />

        <div
          className="absolute top-[40%] -right-52 h-[540px] w-[540px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, hsl(350 90% 68% / 0.06) 0%, transparent 70%)",
          }}
        />
      </div>

      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/20 bg-background/80 backdrop-blur-2xl">
        <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
          <a href="/" className="flex items-center">
            <img
              src={logo}
              alt="Upbeatz Marcom"
              className="h-9 w-auto rounded-sm object-contain md:h-11"
            />
          </a>

          <a
            href={whatsappUrl(GENERAL_MESSAGE)}
            target="_blank"
            rel="noreferrer"
            className="btn-primary !px-4 !py-2.5 md:!px-6 md:!py-3 flex items-center gap-2 !text-xs"
          >
            <MessageCircle size={15} />

            <span className="hidden sm:inline">
              Talk to Upbeatz
            </span>

            <span className="sm:hidden">
              WhatsApp
            </span>
          </a>
        </div>
      </header>

      <main className="relative z-10 pt-16 md:pt-20">
        <section className="relative px-5 pb-16 pt-12 md:px-8 md:pb-20 md:pt-16">
          <div className="container mx-auto max-w-6xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-7 flex justify-center">
                <Countdown />
              </div>

              <p className="mb-5 font-display text-xs font-bold uppercase tracking-[0.28em] text-primary md:text-sm">
                5 website slots - 5 social growth slots - serious businesses only
              </p>

              <h1 className="mx-auto max-w-4xl font-display text-[clamp(2.35rem,6vw,5.2rem)] font-extrabold leading-[0.94] tracking-[-0.04em]">
                <span className="gradient-text block">
                  THE UPBEATZ
                </span>

                <span className="gradient-text-primary block">
                  GROWTH WINDOW
                </span>
              </h1>

              <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-xl">
                Your business may already be doing great work. This is your
                opportunity to make sure your digital presence looks like it
                and starts working harder for growth.
              </p>

              <div className="mx-auto mt-9 flex max-w-3xl flex-wrap items-center justify-center gap-3 text-sm text-foreground/85">
                <span className="glass-card px-4 py-2">
                  Websites{" "}
                  <strong className="text-primary">
                    {NAIRA}150K
                  </strong>
                </span>

                <span className="glass-card px-4 py-2">
                  Social Growth{" "}
                  <strong className="text-primary">
                    {NAIRA}150K
                  </strong>
                </span>

                <span className="glass-card px-4 py-2">
                  Bundle{" "}
                  <strong className="text-primary">
                    {NAIRA}290K
                  </strong>
                </span>
              </div>

              <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
                <a
                  href="#offers"
                  className="btn-primary flex items-center justify-center gap-2 group"
                >
                  See the Offers

                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>

                <a
                  href="#proof"
                  className="btn-outline flex items-center justify-center gap-2"
                >
                  See Our Work
                </a>
              </div>

              <p className="mt-5 text-xs text-muted-foreground/70">
                Slots are confirmed by payment. Enquiries alone do not reserve
                availability.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="section-divider" />

      <section
  className="section-padding !py-20 md:!py-28 scroll-mt-20 md:scroll-mt-24"
  id="proof"
>
          <div className="container mx-auto max-w-7xl">
            <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
              <p className="mb-4 font-display text-xs font-bold uppercase tracking-[0.24em] text-primary">
                Choose your growth move
              </p>

              <h2 className="font-display text-3xl font-bold tracking-tight md:text-5xl">
                Premium work. A short window. Clear scope.
              </h2>

              <p className="mt-5 text-muted-foreground">
                No watered-down package. Choose the digital foundation your
                business needs now and speak directly with us before payment.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {offers.map((offer, index) => (
                <motion.div
                  key={offer.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{
                    once: true,
                    margin: "-80px",
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  className={`glass-card-hover relative flex h-full flex-col p-7 md:p-8 ${
                    offer.featured
                      ? "border-primary/40 glow-red-subtle"
                      : ""
                  }`}
                >
                  {offer.featured && (
                    <div className="absolute -top-3 right-5 rounded-full bg-primary px-3 py-1 font-display text-[10px] font-bold uppercase tracking-wider text-white">
                      Best value
                    </div>
                  )}

                  <p className="font-display text-[10px] font-bold uppercase tracking-[0.22em] text-primary">
                    {offer.eyebrow}
                  </p>

                  <h3 className="mt-3 font-display text-2xl font-bold">
                    {offer.name}
                  </h3>

                  <div className="mt-6">
                    <p className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">
                      {offer.price}
                    </p>

                    <p className="mt-1 text-xs text-muted-foreground">
                      {offer.was}
                    </p>
                  </div>

                  <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                    {offer.description}
                  </p>

                  <div className="my-7 h-px bg-border/30" />

                  <ul className="space-y-3">
                    {offer.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex gap-3 text-sm text-foreground/85"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                          <Check
                            size={12}
                            className="text-primary"
                          />
                        </span>

                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={offer.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`${
                      offer.featured
                        ? "btn-primary"
                        : "btn-outline"
                    } mt-8 flex items-center justify-center gap-2`}
                  >
                    <MessageCircle size={16} />

                    {offer.cta}
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider" />

        <section
          className="section-padding !py-20 md:!py-28"
          id="proof"
        >
          <div className="container mx-auto max-w-7xl">
            <div className="grid items-end gap-6 md:grid-cols-2">
              <div>
                <p className="mb-4 font-display text-xs font-bold uppercase tracking-[0.24em] text-primary">
                  Selected Upbeatz work
                </p>

                <h2 className="font-display text-3xl font-bold tracking-tight md:text-5xl">
                  Real businesses. Real platforms. Work you can visit.
                </h2>
              </div>

              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                From corporate brands and hospitality businesses to ecommerce,
                technology and digital products, explore selected work
                delivered by Upbeatz Marcom.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {portfolio.map((project, index) => (
                <motion.a
                  key={project.name}
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  initial={{
                    opacity: 0,
                    y: 18,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.04,
                  }}
                  className="glass-card-hover group p-6"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-24 flex-1 items-center justify-center overflow-hidden rounded-2xl bg-white p-4">
                      <img
                        src={project.logo}
                        alt={`${project.name} logo`}
                        loading="lazy"
                        className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.04]"
                      />
                    </div>

                    <ExternalLink
                      size={15}
                      className="mt-1 shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
                    />
                  </div>

                  <h3 className="mt-6 font-display text-lg font-bold">
                    {project.name}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {project.type}
                  </p>

                  <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.16em] text-primary opacity-80">
                    Visit project
                  </p>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 pb-20 md:px-8 md:pb-28">
          <div className="container mx-auto max-w-6xl rounded-3xl border border-primary/20 bg-primary/[0.045] p-7 md:p-12 relative overflow-hidden">
            <div
              className="absolute -right-24 -top-24 h-72 w-72 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, hsl(347 77% 50% / 0.16), transparent 68%)",
              }}
            />

            <div className="relative z-10 grid gap-10 md:grid-cols-[1.2fr_.8fr] md:items-center">
              <div>
                <p className="mb-3 font-display text-xs font-bold uppercase tracking-[0.24em] text-primary">
                  Why Upbeatz
                </p>

                <h2 className="font-display text-3xl font-bold md:text-4xl">
                  We understand both visibility and what happens after the
                  click.
                </h2>

                <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                  Upbeatz Marcom is a digital marketing and growth agency.
                  That means your website or content is not treated as
                  decoration. It is built as part of a bigger customer
                  journey.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-1">
                {proofPoints.map(({ icon: Icon, text }) => (
                  <div
                    key={text}
                    className="glass-card flex items-center gap-3 px-4 py-3 text-sm"
                  >
                    <Icon
                      size={16}
                      className="text-primary"
                    />

                    {text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        <section className="section-padding !py-20 md:!py-28 bg-mesh">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center">
              <p className="mb-4 font-display text-xs font-bold uppercase tracking-[0.24em] text-primary">
                Simple process
              </p>

              <h2 className="font-display text-3xl font-bold md:text-5xl">
                Claim. Confirm. Onboard. Build.
              </h2>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-4">
              {processSteps.map(
                ({ number, title, description }) => (
                  <div
                    key={number}
                    className="glass-card p-6"
                  >
                    <span className="font-display text-sm font-extrabold text-primary">
                      {number}
                    </span>

                    <h3 className="mt-7 font-display text-xl font-bold">
                      {title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {description}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        <div className="section-divider" />

        <section className="section-padding !py-20 md:!py-28">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center">
              <p className="mb-4 font-display text-xs font-bold uppercase tracking-[0.24em] text-primary">
                Before you claim a slot
              </p>

              <h2 className="font-display text-3xl font-bold md:text-5xl">
                Straight answers.
              </h2>
            </div>

            <div className="mt-10 space-y-3">
              {faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="glass-card group p-5 md:p-6"
                >
                  <summary className="cursor-pointer list-none pr-6 font-display text-base font-bold md:text-lg">
                    {faq.q}
                  </summary>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 pb-24 md:px-8 md:pb-32">
          <div className="container mx-auto max-w-5xl text-center rounded-3xl border border-primary/25 bg-card/50 px-6 py-12 glow-red-subtle md:px-12 md:py-16">
            <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
              <Layers3 className="text-primary" />
            </div>

            <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-5xl">
              Your business deserves to look as good as the work you already
              do.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              If you are ready to move now, message us. We will confirm the
              right package, availability and payment details privately.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={whatsappUrl(GENERAL_MESSAGE)}
                target="_blank"
                rel="noreferrer"
                className="btn-primary flex items-center justify-center gap-2"
              >
                <MessageCircle size={17} />

                Claim a Growth Slot
              </a>

              <a
                href="mailto:hello@upbeatzmarcom.com?subject=Upbeatz%20Growth%20Window"
                className="btn-outline flex items-center justify-center gap-2"
              >
                Email Upbeatz
              </a>
            </div>

            <p className="mt-5 text-xs text-muted-foreground/60">
              WhatsApp: +234 909 792 7111 | hello@upbeatzmarcom.com
            </p>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-border/20 px-5 py-10 md:px-8">
        <div className="container mx-auto flex max-w-7xl flex-col gap-6 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <img
              src={logo}
              alt="Upbeatz Marcom"
              className="h-9 w-auto rounded-sm object-contain"
            />

            <p className="mt-3 max-w-md text-xs leading-relaxed text-muted-foreground">
              Digital marketing and growth solutions built to help businesses
              get noticed, build trust and attract customers online.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground md:justify-end">
            <a
              href="mailto:hello@upbeatzmarcom.com"
              className="hover:text-primary"
            >
              hello@upbeatzmarcom.com
            </a>

            <a
              href="tel:+2347071042782"
              className="hover:text-primary"
            >
              +234 707 104 2782
            </a>

            <a
              href="https://www.instagram.com/upbeatzmarcom"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 hover:text-primary"
            >
              <Instagram size={13} />
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GrowthWindow;