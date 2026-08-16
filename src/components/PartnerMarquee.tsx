import { motion } from "framer-motion";
import giltAsset from "@/assets/gilt-ai.png.asset.json";
import fihanAsset from "@/assets/fihan.png.asset.json";
import storvoAsset from "@/assets/storvo.png.asset.json";
import savviAsset from "@/assets/savvi.png.asset.json";
import zebraAsset from "@/assets/zebralink.png.asset.json";
import safehavenAsset from "@/assets/safehaven.jpg.asset.json";

export type Partner = { name: string; desc: string; logo?: string; light?: boolean };

export const partners: Partner[] = [
  { name: "Zuri AI", desc: "Africa's 24/7 AI design agency that creates content your market understands." },
  { name: "Gilt AI", desc: "Turns your brand into high-converting Meta and TikTok ads through automation.", logo: giltAsset.url },
  { name: "Fihan", desc: "Helps businesses get found on Google by auditing and improving search visibility.", logo: fihanAsset.url, light: true },
  { name: "Storvo", desc: "Helps businesses create professional websites and digital stores that turn online presence into growth.", logo: storvoAsset.url, light: true },
  { name: "ZebraLink", desc: "Africa's intelligent digital business card that captures leads through QR and NFC technology.", logo: zebraAsset.url, light: true },
  { name: "Safe Haven", desc: "The hosting platform for AI-built apps, websites and digital creations.", logo: safehavenAsset.url },
  { name: "Savvi", desc: "Verifies Nigerian students so they can access valuable brand discounts.", logo: savviAsset.url },
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
