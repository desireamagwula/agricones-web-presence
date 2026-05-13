import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import romaldoLewis from "../images/romaldo lewis.png";
import philipCastillo from "../images/philip castillo.png";
import desireeAvila from "../images/desiree avila.png";
import antonioCano from "../images/antonio cano.jpg";

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
    image: romaldoLewis,
    tags: ["DBA", "MSc Project Management", "MBA"],
    bio: [
      "Dr. Romaldo Isaac Lewis (DBA/PhD) is a highly accomplished consultant, academic, and development specialist with more than 20 years of experience in agricultural systems, business strategy, project management, and socio-economic development across Belize, Central America, and the Caribbean.",
      "As the founder and Lead consultant of AGRICONES for the past 16 years, he brings a result-driven approach to addressing complex challenges in agriculture, rural development, and enterprise growth.",
      "Dr. Lewis holds a Doctor of Business Administration (DBA), a Master of Science in Project Management, and a Master of Business Administration, and is currently pursuing a Post-Doctorate in Business Management and Innovation.",
      "His multidisciplinary academic background is complemented by extensive practical experience, enabling him to bridge the gap between theory, policy, and real-world implementation.",
      "Dr. Lewis serves as a faculty member at the University of Belize, where he teaches at both undergraduate and graduate levels in operations and supply chain management, project management, quantitative research methods, and strategic decision-making.",
      "His academic leadership experience includes serving as Faculty Chair of the Faculty of Management and Social Sciences, where he played a key role in curriculum development, institutional planning, and policy design to strengthen higher education outcomes.",
      "Throughout his career, Dr. Lewis has worked with government ministries, international development agencies, private sector organizations, and community-based groups.",
      "His consulting portfolio includes major assignments with the Inter-American Institute for Cooperation on Agriculture (IICA), the Statistical Institute of Belize (SIB), the Food and Agriculture Organization (FAO), the International Fund for Agricultural Development (IFAD), the Inter-American Development Bank (IDB), and the World Bank.",
      "His work has focused on project design and evaluation, infrastructure impact assessments, agricultural value chain analyses, economic and financial analysis, data analytics, feasibility studies, and strategic and business plan development.",
      "Dr. Lewis is deeply committed to advancing sustainable agriculture, inclusive economic development, and capacity building through innovative, data-driven, and client-centered solutions that deliver measurable impact.",
    ],
    clients: ["FAO", "World Bank", "IFAD", "IDB", "IICA", "SIB"],
  },
  {
    name: "Dr. Philip Castillo, PhD",
    role: "Senior Consultant — Development Economics",
    image: philipCastillo,
    tags: ["PhD Development Studies", "MSc Development Studies", "BSc Economics"],
    bio: [
      "Dr. Phillip Castillo is a distinguished development economist, researcher, and academic with over 30 years of experience in economic policy, socio-economic analysis, and development planning in Belize and the wider Caribbean.",
      "As a senior consultant with AGRICONES, he brings extensive expertise in public policy design, poverty assessment, economic modeling, and institutional strengthening, supporting evidence-based decision-making for sustainable development.",
      "Dr. Castillo holds a Ph.D. in Development Studies and a Master of Science in Development Studies from the University of the West Indies (UWI), along with a Bachelor of Science in Economics and an Associate Degree in Economics from Belize.",
      "His academic foundation is complemented by specialized training in results-based management, financial programming and policies, and project management across leading regional and international institutions.",
      "Throughout his career, Dr. Castillo has held key leadership roles in academia, government, and research institutions. He served for nearly two decades as a faculty member at the University of Belize, including as Chair of the Faculty of Management and Social Sciences.",
      "Earlier in his career, he worked as an Economist at the Ministry of Finance in Belize and as a Research Assistant at the Sir Arthur Lewis Institute of Social and Economic Studies (SALISES) at UWI.",
      "Dr. Castillo has an extensive portfolio of high-level consultancies with international and regional organizations, including the World Bank, United Nations Development Programme (UNDP), Inter-American Development Bank (IDB), Economic Commission for Latin America and the Caribbean (ECLAC), and the International Organization for Migration (IOM).",
      "His consultancy work spans poverty and vulnerability assessments, social protection programme evaluation, labour migration, energy efficiency, public finance reform, health systems analysis, and national development strategy design.",
      "He has led and contributed to several landmark national and regional studies, including Belize's Millennium Development Goals (MDG) Report and Post-2015 Development Agenda, evaluation of the BOOST+ social protection programme, and strategic assessments of labour migration and the citrus industry.",
      "An accomplished author and researcher, Dr. Castillo has published in peer-reviewed journals and international outlets on topics such as health inequality, quality of life, migration, and economic development.",
    ],
    clients: ["World Bank", "UNDP", "IDB", "ECLAC", "IOM"],
  },
  {
    name: "Dr. Desiree Ann Avila, DBA",
    role: "Consultant — Business Administration & Research",
    image: desireeAvila,
    tags: ["DBA", "MBA Finance (Magna Cum Laude)", "BSc Business Administration"],
    bio: [
      "Dr. Desiree Ann Avila (DBA) is a highly accomplished Belizean academic, administrator, and consultant with over 20 years of professional experience spanning higher education, research, and organizational leadership.",
      "She currently serves as Faculty Chair at the University of Belize in Belmopan, where she plays a pivotal role in advancing strategic initiatives, strengthening academic systems, and supporting institutional transformation.",
      "Dr. Avila holds a Doctorate in Business Administration from Unicaf University, an MBA in Finance from Galen University (Magna Cum Laude), and a Bachelor's degree in Business Administration from the University of Belize.",
      "Her research examined the relationship between leadership styles, employee motivation, and organizational performance using advanced quantitative methods.",
      "Since joining the University of Belize as a Lecturer in 2011, she has taught a wide range of accounting and finance courses, coordinated academic programs, and developed student-focused initiatives such as tutoring systems and internship programs.",
      "Her leadership as Faculty Chair includes faculty supervision, policy compliance, academic planning, and active participation in national accreditation and strategic planning processes.",
      "Beyond academia, Dr. Avila has built a strong portfolio as a consultant and applied researcher. She has led and contributed to major national studies, including a countrywide data collection initiative for UNICEF examining out-of-pocket expenditures on health and education in Belize.",
      "She has also worked with private sector organizations such as Unicomer, where she planned and managed focus group research to support marketing strategies and customer insights.",
      "Her scholarly contributions include publications on tourism micro entrepreneurship, international business practices, and public service perceptions in Belize. At AGRICONES, she brings a unique combination of academic excellence, consulting expertise, and strategic insight.",
    ],
    clients: ["UNICEF", "University of Belize", "Unicomer"],
  },
  {
    name: "Mr. Antonio Cano",
    role: "Senior Consultant — Environmental Sciences & GIS",
    image: antonioCano,
    tags: ["Environmental Science", "GIS & Remote Sensing", "Public Administration"],
    bio: [
      "Mr. Antonio Cano, as a senior consultant, brings a unique blend of academic excellence, applied environmental science, and advanced geospatial expertise that strengthens AGRICONES' environmental service portfolio.",
      "At the core of his value is expertise in Geographic Information Systems (GIS), remote sensing, and spatial analysis, enabling data-driven environmental management.",
      "Mr. Cano supports AGRICONES by developing high-quality geospatial products such as land-use maps, environmental sensitivity analyses, and climate risk assessments.",
      "His extensive experience in watershed and ecosystem management planning enhances AGRICONES' capacity to deliver integrated environmental services.",
      "Having led the development of watershed management plans and contributed to national-level forest mapping protocols, Mr. Cano guides strategies that protect water resources, restore degraded lands, and promote biodiversity conservation within agricultural systems.",
      "In the context of climate change, Mr. Cano's work with international organizations such as FAO demonstrates his ability to translate climate science into practical adaptation strategies.",
      "He assists AGRICONES to develop and implement climate-smart agriculture initiatives, including systems for monitoring ecosystem health, forecasting environmental change, and building resilience among farming communities.",
      "Another key contribution lies in his strength as a capacity builder and educator. He has a proven track record of delivering technical trainings and developing instructional materials for staff, partners, and stakeholders.",
      "Additionally, his experience in project development, stakeholder engagement, and technical reporting enables him to support AGRICONES in securing funding and executing projects efficiently.",
      "His multidisciplinary background spanning environmental science, public administration, and geospatial technology helps bridge science, policy, and practical implementation.",
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
                  <img
                    src={m.image}
                    alt={m.name}
                    className="w-36 h-36 rounded-full mx-auto md:mx-0 object-cover object-top border-4 border-white shadow-md"
                  />
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
