import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown, Sprout, Globe2, Link2, Wheat, BarChart3, ClipboardList, Home, Leaf } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AGRICONES | From Ideas to Impact" },
      { name: "description", content: "Multidisciplinary consulting firm in Belize delivering results across Agriculture, Business, Project Management, Real Estate & Environmental Services." },
      { property: "og:title", content: "AGRICONES | From Ideas to Impact" },
      { property: "og:description", content: "Multidisciplinary consulting firm in Belize delivering results across five integrated service domains." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "AGRICONES",
        email: "info@agricones.com",
        foundingDate: "2010-01-04",
        address: { "@type": "PostalAddress", addressCountry: "BZ", addressRegion: "Belize" },
        areaServed: ["Belize", "Central America", "Caribbean"],
        description: "Multidisciplinary consulting firm offering agribusiness, business development, project management, real estate, and environmental services.",
      }),
    }],
  }),
  component: HomePage,
});

const HERO_IMG = "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1920&q=80";
const ABOUT_IMG = "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80";
const CTA_IMG = "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=1920&q=80";

const services = [
  { icon: Wheat, name: "Agribusiness Services", desc: "Value chain strengthening, sustainable agriculture, crop production, and agro-processing advisory.", hash: "agribusiness" },
  { icon: BarChart3, name: "Business Development", desc: "Feasibility studies, investment readiness, strategic planning, and market expansion.", hash: "business" },
  { icon: ClipboardList, name: "Project Management", desc: "End-to-end project execution, monitoring, evaluation, and results-based management.", hash: "project" },
  { icon: Home, name: "Real Estate", desc: "Property acquisition, development management, ESG real estate, and investment advisory.", hash: "realestate" },
  { icon: Leaf, name: "Environmental Services", desc: "GIS analysis, drone surveying, watershed management, and climate resilience planning.", hash: "environmental" },
];

const team = [
  { name: "Dr. Romaldo Isaac Lewis, DBA/PhD", role: "Founder & Lead Consultant", desc: "20+ years in agricultural systems, business strategy, and development across Belize and the Caribbean.", initials: "RL" },
  { name: "Dr. Philip Castillo, PhD", role: "Senior Consultant", desc: "30+ years in economic policy, socio-economic analysis, and development planning.", initials: "PC" },
  { name: "Dr. Desiree Ann Avila, DBA", role: "Consultant", desc: "20+ years in higher education, organizational leadership, finance, and applied research.", initials: "DA" },
  { name: "Mr. Antonio Cano", role: "Senior Consultant", desc: "Expert in GIS, remote sensing, watershed management, and environmental science.", initials: "AC" },
];

const partners = ["FAO", "World Bank", "IFAD", "IDB", "UNDP", "IICA", "UNICEF", "ECLAC"];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-6">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Tropical agricultural landscape in Central America" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(28,77,53,0.65) 0%, rgba(28,77,53,0.55) 60%, rgba(20,40,30,0.8) 100%)" }} />
        </div>
        <div className="relative max-w-4xl mx-auto text-white pt-16">
          <p className="eyebrow text-white/80">Consulting · Agriculture · Development</p>
          <h1 className="mt-6 text-5xl md:text-7xl font-semibold leading-tight">From Ideas to Impact.</h1>
          <p className="mt-6 text-lg md:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed">
            Multidisciplinary consulting delivering results across Agriculture, Business, Project Management, Real Estate & the Environment.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/services" className="btn-primary">Explore Our Services <ArrowRight size={16} /></Link>
            <Link to="/about" className="btn-outline-light">Meet Our Team</Link>
          </div>
        </div>
        <a href="#why" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 animate-bounce">
          <ChevronDown size={32} />
        </a>
      </section>

      {/* VALUE PROP */}
      <section id="why" className="py-20" style={{ background: "var(--forest)", color: "white" }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-center text-4xl md:text-5xl font-semibold">Why AGRICONES?</h2>
          <div className="mt-14 grid md:grid-cols-3 gap-10">
            {[
              { icon: Sprout, title: "Results-Driven", desc: "We move clients from ideas to implementation with clarity, discipline, and measurable outcomes." },
              { icon: Globe2, title: "Regional Expertise", desc: "Over 16 years operating in Belize, Central America, and the Caribbean, with global institutional partnerships." },
              { icon: Link2, title: "Integrated Approach", desc: "We combine technical expertise, sound governance, and market intelligence across 5 service domains." },
            ].map((v) => (
              <div key={v.title} className="text-center">
                <div className="inline-flex w-14 h-14 rounded-full items-center justify-center mb-4" style={{ background: "rgba(200,144,42,0.2)", color: "var(--amber-brand)" }}>
                  <v.icon size={26} />
                </div>
                <h3 className="text-xl font-semibold">{v.title}</h3>
                <p className="mt-3 text-white/80 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="py-24 px-6">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <img src={ABOUT_IMG} alt="Consultants meeting with farmers in tropical setting" className="rounded-lg shadow-xl w-full h-[500px] object-cover" />
            <div className="absolute -bottom-6 -right-6 hidden md:block bg-[color:var(--amber-brand)] text-white px-6 py-4 rounded-lg shadow-lg">
              <div className="text-3xl font-bold" style={{ fontFamily: "var(--font-display)" }}>16+</div>
              <div className="text-xs uppercase tracking-widest">Years</div>
            </div>
          </div>
          <div>
            <span className="eyebrow" style={{ color: "var(--amber-brand)" }}>Founded January 4, 2010</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold leading-tight" style={{ color: "var(--forest)" }}>
              A Trusted Partner for Sustainable Growth
            </h2>
            <div className="mt-6 space-y-4 text-charcoal/80 leading-relaxed">
              <p>AGRICONES is a multidisciplinary consulting firm delivering reliable, results-driven advisory services across Agriculture, Business Development, Project Management, and Real Estate. We work at the intersection of strategy, execution, and impact — helping clients move from ideas to implementation with clarity, discipline, and measurable results.</p>
              <p>With a strong foundation in emerging and developing markets, AGRICONES supports private enterprises, cooperatives, investors, development partners, and public institutions seeking practical solutions to complex challenges.</p>
            </div>
            <Link to="/about" className="btn-ghost-forest mt-6">Learn More About Us <ArrowRight size={14} /></Link>

            <div className="mt-10 grid grid-cols-3 gap-4 pt-8 border-t border-border">
              {[
                ["16+", "Years of Experience"],
                ["5", "Service Domains"],
                ["3", "Countries & Growing"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="text-3xl font-bold" style={{ color: "var(--forest)", fontFamily: "var(--font-display)" }}>{n}</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 px-6" style={{ background: "var(--cream)" }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow" style={{ color: "var(--amber-brand)" }}>What We Do</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold" style={{ color: "var(--forest)" }}>
              Five Pillars of Expert Consulting
            </h2>
            <p className="mt-5 text-charcoal/75 leading-relaxed">
              AGRICONES delivers specialized, end-to-end consulting across five integrated service areas, designed to drive results in complex and emerging markets.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link
                key={s.name}
                to="/services"
                hash={s.hash}
                className="group bg-white p-8 rounded-lg border border-border hover:border-[color:var(--amber-brand)] hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-md flex items-center justify-center mb-5" style={{ background: "var(--cream)", color: "var(--forest)" }}>
                  <s.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold" style={{ color: "var(--forest)" }}>{s.name}</h3>
                <p className="mt-3 text-sm text-charcoal/70 leading-relaxed">{s.desc}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-xs uppercase tracking-wider font-semibold group-hover:gap-2 transition-all" style={{ color: "var(--amber-brand)" }}>
                  Learn More <ArrowRight size={12} />
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="btn-primary">View All Services <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* TEAM TEASER */}
      <section className="py-24 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow" style={{ color: "var(--amber-brand)" }}>Our Experts</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold" style={{ color: "var(--forest)" }}>
              Meet the Consulting Team
            </h2>
            <p className="mt-5 text-charcoal/75 leading-relaxed">
              A team of PhDs, economists, agribusiness experts, and environmental specialists united by a commitment to sustainable development.
            </p>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m) => (
              <div key={m.name} className="text-center bg-cream p-6 rounded-lg" style={{ background: "var(--cream)" }}>
                <div className="w-24 h-24 rounded-full mx-auto flex items-center justify-center text-2xl font-bold text-white"
                  style={{ background: "linear-gradient(135deg, var(--forest), var(--sage))", fontFamily: "var(--font-display)" }}>
                  {m.initials}
                </div>
                <h3 className="mt-5 font-semibold text-base leading-snug" style={{ color: "var(--forest)" }}>{m.name}</h3>
                <p className="text-xs uppercase tracking-wider mt-1.5" style={{ color: "var(--amber-brand)" }}>{m.role}</p>
                <p className="mt-3 text-sm text-charcoal/70 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/about" className="btn-ghost-forest">Read Full Bios <ArrowRight size={14} /></Link>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="py-20 px-6" style={{ background: "var(--cream)" }}>
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold" style={{ color: "var(--forest)" }}>Trusted by Leading Institutions</h2>
          <p className="mt-3 text-charcoal/70 max-w-2xl mx-auto">
            Our consultants have worked with international development organizations, government bodies, and private sector clients.
          </p>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {partners.map((p) => (
              <div key={p} className="bg-white border border-border rounded px-4 py-5 text-sm font-semibold text-charcoal/60 hover:text-[color:var(--forest)] transition" style={{ fontFamily: "var(--font-accent)" }}>
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative py-28 px-6 text-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src={CTA_IMG} alt="Sustainable agricultural landscape" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(28,77,53,0.92), rgba(20,40,30,0.85))" }} />
        </div>
        <div className="relative max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">Ready to Turn Strategy Into Results?</h2>
          <p className="mt-5 text-white/85 leading-relaxed">
            Whether you're an investor, agribusiness, cooperative, government body, or development partner — AGRICONES has the expertise to move your goals forward.
          </p>
          <Link to="/contact" className="btn-primary mt-8">Start a Conversation <ArrowRight size={16} /></Link>
        </div>
      </section>
    </>
  );
}
