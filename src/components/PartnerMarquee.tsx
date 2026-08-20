import { motion } from "framer-motion";
import giltLogo from "@/assets/gilt-ai-logo.webp";
import fihanLogo from "@/assets/fihan-logo.webp";
import storvoLogo from "@/assets/storvo-logo.png";
import savviLogo from "@/assets/savvi-logo.png";
import zebraLogo from "@/assets/zebralink-logo.png";
import safehavenLogo from "@/assets/safehaven-logo.jpg";

export type Partner = { name: string; desc: string; logo?: string; light?: boolean };

export const partners: Partner[] = [
  { name: "Zuri AI", desc: "Africa's 24/7 AI design agency that creates content your market understands." },
  { name: "Gilt AI", desc: "Turns your brand into high-converting Meta and TikTok ads through automation.", logo: giltLogo },
  { name: "Fihan", desc: "Helps businesses get found on Google by auditing and improving search visibility.", logo: fihanLogo, light: true },
  { name: "Storvo", desc: "Helps businesses create professional websites and digital stores that turn online presence into growth.", logo: storvoLogo, light: true },
  { name: "ZebraLink", desc: "Africa's intelligent digital business card that captures leads through QR and NFC technology.", logo: zebraLogo, light: true },
  { name: "Safe Haven", desc: "The hosting platform for AI-built apps, websites and digital creations.", logo: safehavenLogo },
  { name: "Savvi", desc: "Verifies Nigerian students so they can access valuable brand discounts.", logo: savviLogo },
];

const PartnerCard = ({ p }: { p: Partner }) => (
  <div className="glass-card-hover w-[280px] shrink-0 p-6">
    <div className={`h-16 rounded-xl mb-5 flex items-center justify-center overflow-hidden ${p.light ? "bg-white/90 px-4" : "bg-secondary/60 px-4"}`}>
      {p.logo ? (
        <img src={p.logo} alt={`${p.name} logo`} loading="lazy" className="max-h-10 w-auto object-contain" />
      ) : (
        <span className="font-display font-extrabold text-lg tracking-tight text-foreground">{p.name}</span>
      )}
    </div>
    <h3 className="font-display font-bold text-foreground mb-2">{p.name}</h3>
    <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
  </div>
);

const PartnerMarquee = () => {
  const row = [...partners, ...partners];
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 z-10"
        style={{ background: "linear-gradient(to right, hsl(var(--background)), transparent)" }} />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 z-10"
        style={{ background: "linear-gradient(to left, hsl(var(--background)), transparent)" }} />
      <motion.div
        className="flex gap-5 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
      >
        {row.map((p, i) => (
          <PartnerCard key={`${p.name}-${i}`} p={p} />
        ))}
      </motion.div>
    </div>
  );
};

export default PartnerMarquee;
