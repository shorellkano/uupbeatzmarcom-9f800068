import { useState } from "react";
import { z } from "zod";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { toast } from "sonner";
import { Mail, MapPin, MessageCircle, Phone, ArrowRight } from "lucide-react";

const services = [
  "Social Media Growth",
  "Advertising",
  "SEO & AEO",
  "Website",
  "Ecommerce",
  "Digital Platform",
  "Other",
];

const schema = z.object({
  name: z.string().trim().min(2, { message: "Please enter your name" }).max(100),
  business: z.string().trim().min(2, { message: "Please enter your business name" }).max(120),
  email: z.string().trim().email({ message: "Enter a valid email address" }).max(255),
  phone: z.string().trim().min(7, { message: "Enter a valid phone or WhatsApp number" }).max(30),
  service: z.string().trim().min(1, { message: "Select a service" }),
  details: z.string().trim().min(10, { message: "Tell us a little more about your project" }).max(1500),
});

const initial = { name: "", business: "", email: "", phone: "", service: "", details: "" };

const inputClass =
  "w-full rounded-xl bg-secondary/50 border border-border/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all duration-300 focus:border-primary/50 focus:bg-secondary/70";

const Contact = () => {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const set = (k: keyof typeof initial, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      parsed.error.issues.forEach((i) => { next[String(i.path[0])] = i.message; });
      setErrors(next);
      toast.error("Please check the highlighted fields.");
      return;
    }
    setErrors({});
    const d = parsed.data;
    const msg =
      `Hi Upbeatz Marcom, I'd like to start a project.\n\n` +
      `Name: ${d.name}\nBusiness: ${d.business}\nEmail: ${d.email}\nPhone/WhatsApp: ${d.phone}\n` +
      `Service required: ${d.service}\n\nProject details:\n${d.details}`;
    window.open(`https://wa.me/2349097927111?text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer");
    toast.success("Opening WhatsApp with your enquiry.");
  };

  const details = [
    { icon: MessageCircle, label: "Phone / WhatsApp", value: "+234 909 792 7111", href: "https://wa.me/2349097927111" },
    { icon: Phone, label: "Phone", value: "+234 707 104 2782", href: "tel:+2347071042782" },
    { icon: Mail, label: "Email", value: "hello@upbeatzmarcom.com", href: "mailto:hello@upbeatzmarcom.com" },
  ];

  return (
    <Layout>
      <section className="relative pt-36 pb-16 md:pt-44 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-20" />
        <div className="absolute inset-0 bg-radial-center" />
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <AnimatedSection>
            <p className="text-primary font-display font-semibold text-label uppercase mb-6 tracking-[0.25em]">Contact</p>
            <h1 className="text-[clamp(2rem,7vw,4.5rem)] font-display font-extrabold leading-[1.05] tracking-[-0.03em] mb-6">
              <span className="gradient-text">LET'S GROW YOUR </span>
              <span className="gradient-text-primary">BUSINESS</span>
            </h1>
            <p className="text-muted-foreground text-body-lg max-w-2xl mx-auto leading-relaxed">
              Tell us about your business and we'll respond with the right growth approach.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding !pt-4 bg-mesh relative">
        <div className="container mx-auto max-w-6xl relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-6">
          <AnimatedSection className="lg:col-span-2">
            <div className="glass-card p-8 h-full">
              <h2 className="font-display font-bold text-xl text-foreground mb-8">Get in touch</h2>
              <div className="space-y-6">
                {details.map((d) => (
                  <a key={d.label} href={d.href} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <d.icon className="text-primary" size={18} />
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs uppercase tracking-wider mb-1">{d.label}</p>
                      <p className="text-foreground text-sm group-hover:text-primary transition-colors">{d.value}</p>
                    </div>
                  </a>
                ))}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <MapPin className="text-primary" size={18} />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs uppercase tracking-wider mb-1">Locations</p>
                    <p className="text-foreground text-sm leading-relaxed">1 Modupe Johnson Crescent, Surulere, Lagos</p>
                    <p className="text-foreground text-sm leading-relaxed mt-1">43 Ajayi Road, Ogba, Lagos</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="lg:col-span-3">
            <form onSubmit={onSubmit} className="glass-card p-8 border-primary/15" noValidate>
              <h2 className="font-display font-bold text-xl text-foreground mb-8">Project enquiry</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {([
                  { k: "name", label: "Name", type: "text", ph: "Your full name" },
                  { k: "business", label: "Business Name", type: "text", ph: "Your business" },
                  { k: "email", label: "Email", type: "email", ph: "you@business.com" },
                  { k: "phone", label: "Phone / WhatsApp", type: "tel", ph: "+234..." },
                ] as const).map((f) => (
                  <div key={f.k}>
                    <label htmlFor={f.k} className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">{f.label}</label>
                    <input id={f.k} type={f.type} value={form[f.k]} placeholder={f.ph}
                      onChange={(e) => set(f.k, e.target.value)} className={inputClass} />
                    {errors[f.k] && <p className="text-destructive text-xs mt-1.5">{errors[f.k]}</p>}
                  </div>
                ))}
              </div>

              <div className="mt-5">
                <label htmlFor="service" className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">Service Required</label>
                <select id="service" value={form.service} onChange={(e) => set("service", e.target.value)} className={inputClass}>
                  <option value="">Select a service</option>
                  {services.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
                {errors.service && <p className="text-destructive text-xs mt-1.5">{errors.service}</p>}
              </div>

              <div className="mt-5">
                <label htmlFor="details" className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">Project Details</label>
                <textarea id="details" rows={5} value={form.details} placeholder="Tell us about your business and what you want to achieve."
                  onChange={(e) => set("details", e.target.value)} className={`${inputClass} resize-none`} />
                {errors.details && <p className="text-destructive text-xs mt-1.5">{errors.details}</p>}
              </div>

              <button type="submit" className="btn-primary w-full mt-8 flex items-center justify-center gap-2 group">
                Start Your Project
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </form>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
