import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About AGRICONES | Our Story & Consulting Team" },
      { name: "description", content: "Meet the multidisciplinary AGRICONES consulting team — PhDs, economists, agribusiness specialists, and environmental scientists serving Belize and the Caribbean since 2010." },
      { property: "og:title", content: "About AGRICONES" },
      { property: "og:description", content: "Experts in Agriculture, Development, and Sustainable Solutions since 2010." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const HERO = "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1920&q=80";
const STORY = "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1200&q=80";

const team = [
  {
    name: "Dr. Romaldo Isaac Lewis, DBA/PhD",
    role: "Founder & Lead Consultant",
    initials: "RL",
    tags: ["DBA", "MSc Project Management", "MBA"],
    bio: [
      "Dr. Romaldo Isaac Lewis is a highly accomplished consultant, academic, and development specialist with more than 20 years of experience in agricultural systems, business strategy, project management, and socio-economic development across Belize, Central America, and the Caribbean. As the Founder and Lead Consultant of AGRICONES, he brings a results-driven approach to addressing complex challenges in agriculture, rural development, and enterprise growth.",
      "Dr. Lewis holds a Doctor of Business Administration (DBA), a Master of Science in Project Management, and a Master of Business Administration, and is currently pursuing a Post-Doctorate in Business Management and Innovation.",
      "He serves as a faculty member at the University of Belize, teaching operations and supply chain management, project management, quantitative research methods, and strategic decision-making, and has served as Faculty Chair of the Faculty of Management and Social Sciences.",
      "His consulting portfolio includes major assignments with IICA, the Statistical Institute of Belize (SIB), FAO, IFAD, the Inter-American Development Bank (IDB), and the World Bank — encompassing project design and evaluation, infrastructure impact assessments, agricultural value chain analyses, feasibility studies, and strategic and business plan development.",
    ],
    clients: ["FAO", "World Bank", "IFAD", "IDB", "IICA", "SIB"],
  },
  {
    name: "Dr. Philip Castillo, PhD",
    role: "Senior Consultant — Development Economics",
    initials: "PC",
    tags: ["PhD Development Studies", "MSc Development Studies", "BSc Economics"],
    bio: [
      "Dr. Philip Castillo is a distinguished development economist, researcher, and academic with over 30 years of experience in economic policy, socio-economic analysis, and development planning in Belize and the wider Caribbean. As a Senior Consultant with AGRICONES, he brings extensive expertise in public policy design, poverty assessment, economic modeling, and institutional strengthening.",
      "Dr. Castillo holds a Ph.D. in Development Studies and MSc from the University of the West Indies (UWI), complemented by specialized training in results-based management, financial programming, and project management.",
      "He has held key leadership roles including faculty membership for nearly two decades at the University of Belize and Chair of the Faculty of Management and Social Sciences. He has also worked as an Economist at Belize's Ministry of Finance and as a Research Assistant at SALISES, UWI.",
      "His international consultancy portfolio spans the World Bank, UNDP, IDB, ECLAC, and IOM — covering poverty and vulnerability assessments, social protection programme evaluation, labour migration, public finance reform, health systems analysis, and national development strategy design.",
    ],
    clients: ["World Bank", "UNDP", "IDB", "ECLAC", "IOM"],
  },
  {
    name: "Dr. Desiree Ann Avila, DBA",
    role: "Consultant — Business Administration & Research",
    initials: "DA",
    tags: ["DBA", "MBA Finance (Magna Cum Laude)", "BSc Business Administration"],
    bio: [
      "Dr. Desiree Ann Avila is a highly accomplished Belizean academic, administrator, and consultant with over 20 years of professional experience spanning higher education, research, and organizational leadership. She currently serves as Faculty Chair at the University of Belize in Belmopan.",
      "Dr. Avila holds a Doctorate in Business Administration from Unicaf University, an MBA in Finance from Galen University (Magna Cum Laude), and a BSc in Business Administration from the University of Belize. Her research examines the relationship between leadership styles, employee motivation, and organizational performance.",
      "She has led major national studies including a countrywide data collection initiative for UNICEF on out-of-pocket expenditures for health and education in Belize, and has worked with Unicomer on focus group research supporting marketing strategies.",
      "Dr. Avila's scholarly contributions include publications on tourism micro-entrepreneurship, international business practices, and public service perceptions. At AGRICONES, she brings academic rigor, consulting expertise, and strategic insight to every engagement.",
    ],
    clients: ["UNICEF", "University of Belize", "Unicomer"],
  },
  {
    name: "Mr. Antonio Cano",
    role: "Senior Consultant — Environmental Sciences & GIS",
    initials: "AC",
    tags: ["Environmental Science", "GIS & Remote Sensing", "Public Administration"],
    bio: [
      "Mr. Antonio Cano brings a unique blend of academic excellence, applied environmental science, and advanced geospatial expertise to AGRICONES. His contribution strengthens the organization's ability to design, implement, and monitor sustainable environmental solutions across agricultural landscapes.",
      "At the core of his value is expertise in Geographic Information Systems (GIS), remote sensing, and spatial analysis — enabling data-driven environmental management through high-quality geospatial products including land-use maps, environmental sensitivity analyses, and climate risk assessments.",
      "His extensive experience in watershed and ecosystem management planning enhances AGRICONES' capacity to deliver integrated environmental services. Having led watershed management plan development and contributed to national-level forest mapping protocols, Mr. Cano designs strategies that protect water resources, restore degraded lands, and promote biodiversity conservation.",
      "Mr. Cano has worked with international organizations including FAO, translating climate science into practical adaptation strategies. He also leads capacity-building programs for staff and stakeholders and supports proposal development, environmental reporting, and monitoring frameworks aligned with international standards.",
    ],
    clients: ["FAO", "Environmental Planning", "GIS Services"],
  },
];

function AboutPage() {
  return (
    <>
      <PageHero crumb="About" title="About AGRICONES" subtitle="Experts in Agriculture, Development, and Sustainable Solutions since 2010." image={HERO} />

      {/* OUR STORY */}
      <section className="py-24 px-6">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-14 items-start">
          <img src={STORY} alt="Tropical Belizean landscape" className="rounded-lg shadow-xl w-full h-[560px] object-cover sticky top-28" />
          <div>
            <span className="eyebrow" style={{ color: "var(--amber-brand)" }}>Our Story</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold leading-tight" style={{ color: "var(--forest)" }}>
              Who We Are
            </h2>
            <div className="mt-6 space-y-5 text-charcoal/80 leading-relaxed">
              <p>AGRICONES is a multidisciplinary consulting firm delivering reliable, results-driven advisory services across Agriculture, Business Development, Project Management, and Real Estate. We work at the intersection of strategy, execution, and impact helping clients move from ideas to implementation with clarity, discipline, and measurable results.</p>
              <p>With a strong foundation in emerging and developing markets, AGRICONES supports private enterprises, cooperatives, investors, development partners, and public institutions seeking practical solutions to complex challenges. Our approach combines technical expertise, sound governance, and market intelligence, ensuring that every engagement is both commercially viable and sustainably designed.</p>
              <p>What sets AGRICONES apart is our integrated consulting model — bringing together sector expertise, disciplined project delivery, and a strong understanding of local and international markets since our founding on January 4th, 2010. We do not offer one-size-fits-all solutions; instead, we design tailored, practical strategies grounded in real-world experience.</p>
              <p>AGRICONES is committed to delivering solutions that are reliable, transparent, and impact-driven — supporting sustainable growth for businesses, communities, and investors worldwide.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="py-24 px-6 scroll-mt-24" style={{ background: "var(--cream)" }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow" style={{ color: "var(--amber-brand)" }}>The Team</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold" style={{ color: "var(--forest)" }}>
              Our Consulting Experts
            </h2>
            <p className="mt-5 text-charcoal/75 leading-relaxed">
              AGRICONES brings together a multidisciplinary team of PhDs, economists, agribusiness specialists, and environmental scientists with deep experience in Belize and across the wider Caribbean and Central American region.
            </p>
          </div>

          <div className="mt-16 space-y-10">
            {team.map((m) => (
              <article key={m.name} className="bg-white rounded-xl shadow-sm border border-border p-8 md:p-10 grid md:grid-cols-[200px_1fr] gap-8">
                <div className="text-center md:text-left">
                  <div className="w-36 h-36 rounded-full mx-auto md:mx-0 flex items-center justify-center text-4xl font-bold text-white shadow-md"
                    style={{ background: "linear-gradient(135deg, var(--forest), var(--sage))", fontFamily: "var(--font-display)" }}>
                    {m.initials}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold" style={{ color: "var(--forest)" }}>{m.name}</h3>
                  <p className="mt-1 eyebrow" style={{ color: "var(--amber-brand)" }}>{m.role}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {m.tags.map((t) => (
                      <span key={t} className="px-3 py-1 rounded-full text-xs border border-border bg-cream text-charcoal/70" style={{ background: "var(--cream)" }}>{t}</span>
                    ))}
                  </div>
                  <div className="mt-5 space-y-3 text-charcoal/80 leading-relaxed text-[15px]">
                    {m.bio.map((p, i) => <p key={i}>{p}</p>)}
                  </div>
                  <div className="mt-5 pt-5 border-t border-border">
                    <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Key Clients</div>
                    <div className="flex flex-wrap gap-2">
                      {m.clients.map((c) => (
                        <span key={c} className="px-3 py-1 rounded-full text-xs font-semibold text-white" style={{ background: "var(--forest)" }}>{c}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center" style={{ background: "var(--forest)", color: "white" }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold">Work With Our Experts</h2>
          <p className="mt-5 text-white/85 leading-relaxed">
            Ready to engage a multidisciplinary team with a track record of delivering results in complex and emerging markets?
          </p>
          <Link to="/contact" className="btn-primary mt-8">Contact AGRICONES <ArrowRight size={16} /></Link>
        </div>
      </section>
    </>
  );
}

export function PageHero({ crumb, title, subtitle, image, height = "60vh" }: { crumb: string; title: string; subtitle: string; image: string; height?: string }) {
  return (
    <section className="relative flex items-center justify-center text-center text-white px-6" style={{ minHeight: height }}>
      <div className="absolute inset-0">
        <img src={image} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(28,77,53,0.7), rgba(20,40,30,0.85))" }} />
      </div>
      <div className="relative pt-16 max-w-3xl">
        <div className="text-xs uppercase tracking-widest text-white/70">
          <Link to="/" className="hover:text-white">Home</Link> <span className="mx-2">›</span> {crumb}
        </div>
        <h1 className="mt-4 text-5xl md:text-6xl font-semibold leading-tight">{title}</h1>
        <p className="mt-5 text-lg text-white/85">{subtitle}</p>
      </div>
    </section>
  );
}
