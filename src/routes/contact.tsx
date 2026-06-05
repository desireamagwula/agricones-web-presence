import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Linkedin, Twitter, Instagram, Lock, CheckCircle2, Globe2, Zap, Send } from "lucide-react";
import { PageHero } from "./about";
import { z } from "zod";
import { absoluteUrl } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact AGRICONES | Get a Free Consultation" },
      { name: "description", content: "Contact AGRICONES — multidisciplinary consulting for agribusiness, real estate, project management, and environmental services. Email info@agricones.com." },
      { property: "og:title", content: "Contact AGRICONES" },
      { property: "og:description", content: "Tell us about your challenge. We'll respond within 2 business days." },
      { property: "og:url", content: absoluteUrl("/contact") },
      { property: "og:image", content: absoluteUrl("/og-default.png") },
      { name: "twitter:title", content: "Contact AGRICONES" },
      { name: "twitter:description", content: "Tell us about your challenge. We'll respond within 2 business days." },
      { name: "twitter:image", content: absoluteUrl("/og-default.png") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/contact") }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: absoluteUrl("/"),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Contact",
            item: absoluteUrl("/contact"),
          },
        ],
      }),
    }],
  }),
  component: ContactPage,
});

const HERO = "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1920&q=80";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  organization: z.string().trim().max(150).optional(),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().max(40).optional(),
  service: z.string().min(1, "Please select a service"),
  country: z.string().trim().max(100).optional(),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000),
  source: z.string().max(60).optional(),
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData) as Record<string, string>;
    const result = schema.safeParse(data);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitting(true);
    // Open user's mail client as a fallback delivery to info@agricones.com
    const body = encodeURIComponent(
      `Name: ${result.data.name}\nOrganization: ${result.data.organization || "-"}\nEmail: ${result.data.email}\nPhone: ${result.data.phone || "-"}\nService: ${result.data.service}\nCountry: ${result.data.country || "-"}\nSource: ${result.data.source || "-"}\n\nMessage:\n${result.data.message}`
    );
    const subject = encodeURIComponent(`AGRICONES Inquiry — ${result.data.service}`);
    window.location.href = `mailto:info@agricones.com?subject=${subject}&body=${body}`;
    setTimeout(() => { setSubmitted(true); setSubmitting(false); }, 400);
  };

  return (
    <>
      <PageHero crumb="Contact" title="Get In Touch" subtitle="Tell us about your challenge. We'll respond within 2 business days." image={HERO} height="50vh" />

      <section className="py-24 px-6">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-14">
          {/* LEFT */}
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight" style={{ color: "var(--forest)" }}>
              Let's Start a Conversation
            </h2>
            <p className="mt-5 text-charcoal/80 leading-relaxed">
              Whether you're an investor, agribusiness, cooperative, government institution, or development partner — AGRICONES is ready to listen and deliver. Reach out and let's explore what's possible together.
            </p>

            <div className="mt-8 space-y-4">
              <a href="mailto:info@agricones.com" className="flex items-center gap-3 group">
                <div className="w-11 h-11 rounded-md flex items-center justify-center" style={{ background: "var(--cream)", color: "var(--forest)" }}>
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div>
                  <div className="font-semibold text-charcoal group-hover:text-[color:var(--amber-brand)]">info@agricones.com</div>
                </div>
              </a>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-md flex items-center justify-center" style={{ background: "var(--cream)", color: "var(--forest)" }}>
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Location</div>
                  <div className="font-semibold text-charcoal">Belize, Central America</div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                <a key={i} href="#" aria-label="social" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-[color:var(--forest)] hover:text-white hover:border-[color:var(--forest)] transition">
                  <Icon size={16} />
                </a>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {[
                { icon: Lock, label: "Confidential & Secure" },
                { icon: CheckCircle2, label: "16+ Years of Experience" },
                { icon: Globe2, label: "Regional & International Expertise" },
                { icon: Zap, label: "Response Within 2 Business Days" },
              ].map((b) => (
                <div key={b.label} className="flex items-center gap-3 p-4 rounded-lg" style={{ background: "var(--cream)" }}>
                  <b.icon size={18} style={{ color: "var(--amber-brand)" }} />
                  <span className="text-sm font-medium text-charcoal/85">{b.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* FORM */}
          <div className="bg-white rounded-xl shadow-xl border border-border p-8 md:p-10">
            <h3 className="text-2xl font-semibold" style={{ color: "var(--forest)" }}>Send Us a Message</h3>

            {submitted ? (
              <div className="mt-8 p-6 rounded-lg text-center" style={{ background: "var(--cream)" }}>
                <CheckCircle2 size={48} className="mx-auto" style={{ color: "var(--forest)" }} />
                <p className="mt-4 text-charcoal font-medium">
                  Thank you! Your message has been received. A member of the AGRICONES team will respond within 2 business days.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="mt-6 space-y-4">
                <Field label="Full Name *" name="name" placeholder="Your Full Name" error={errors.name} />
                <Field label="Organization / Company" name="organization" placeholder="Your Organization or Business" error={errors.organization} />
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Email Address *" name="email" type="email" placeholder="your@email.com" error={errors.email} />
                  <Field label="Phone Number" name="phone" type="tel" placeholder="+1 (000) 000-0000" error={errors.phone} />
                </div>
                <SelectField label="Service of Interest *" name="service" error={errors.service} options={[
                  "Select a Service...",
                  "Agribusiness Services",
                  "Business Development Services",
                  "Project Management Services",
                  "Real Estate Services",
                  "Environmental Services",
                  "General Inquiry",
                ]} />
                <Field label="Country / Location" name="country" placeholder="Your Country or Region" error={errors.country} />
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold mb-1.5" style={{ color: "var(--forest)" }}>Your Message *</label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Describe your project, challenge, or question..."
                    className="w-full px-4 py-3 rounded-md border border-border bg-white focus:outline-none focus:border-[color:var(--amber-brand)] focus:ring-2 focus:ring-[color:var(--amber-brand)]/20 transition"
                  />
                  {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
                </div>
                <SelectField label="How did you hear about us?" name="source" options={[
                  "Select an option...", "Google Search", "Referral", "Social Media", "International Partner", "Other",
                ]} />
                <button type="submit" disabled={submitting} className="btn-primary w-full justify-center !py-3.5 disabled:opacity-60">
                  {submitting ? "Sending..." : <>Send Message <Send size={16} /></>}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="px-0">
        <iframe
          title="AGRICONES Belize location map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d959680.2!2d-89.0!3d17.25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbz!4v1700000000000"
          className="w-full h-[420px] border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <p className="text-center text-sm text-muted-foreground py-5 px-6 bg-cream" style={{ background: "var(--cream)" }}>
          AGRICONES operates primarily in Belize and across Central America and the Caribbean, with the capacity to support international projects worldwide.
        </p>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", placeholder, error }: { label: string; name: string; type?: string; placeholder?: string; error?: string }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-wider font-semibold mb-1.5" style={{ color: "var(--forest)" }}>{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-md border border-border bg-white focus:outline-none focus:border-[color:var(--amber-brand)] focus:ring-2 focus:ring-[color:var(--amber-brand)]/20 transition"
      />
      {error && <p className="text-xs text-destructive mt-1">{error}</p>}
    </div>
  );
}

function SelectField({ label, name, options, error }: { label: string; name: string; options: string[]; error?: string }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-wider font-semibold mb-1.5" style={{ color: "var(--forest)" }}>{label}</label>
      <select
        name={name}
        defaultValue=""
        className="w-full px-4 py-3 rounded-md border border-border bg-white focus:outline-none focus:border-[color:var(--amber-brand)] focus:ring-2 focus:ring-[color:var(--amber-brand)]/20 transition"
      >
        <option value="">{options[0]}</option>
        {options.slice(1).map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
      {error && <p className="text-xs text-destructive mt-1">{error}</p>}
    </div>
  );
}
