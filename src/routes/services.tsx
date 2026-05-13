import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Wheat, BarChart3, ClipboardList, Home, Leaf } from "lucide-react";
import { PageHero } from "./about";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | AGRICONES Consulting" },
      { name: "description", content: "Five specialized consulting domains: Agribusiness, Business Development, Project Management, Real Estate, and Environmental Services." },
      { property: "og:title", content: "Our Services | AGRICONES" },
      { property: "og:description", content: "Five specialized domains. One integrated consulting model." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const HERO = "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1920&q=80";

const sections = [
  {
    id: "agribusiness",
    icon: Wheat,
    eyebrow: "Agribusiness Services",
    title: "Strengthening Agricultural Value Chains",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=1200&q=80",
    paras: [
      "AGRICONES provides specialized agribusiness consulting services designed to strengthen agricultural value chains, improve enterprise performance, and connect producers to sustainable markets. We support agribusinesses, cooperatives, SMEs, investors, and development partners in transforming agriculture from primary production into commercially viable, market-driven, and resilient enterprises.",
      "Our agribusiness services span the full value chain from production systems and post-harvest handling to processing, marketing, and export readiness. AGRICONES works closely with clients to identify operational bottlenecks, reduce inefficiencies, and introduce best practices that improve productivity, quality, and profitability.",
      "A core focus of AGRICONES is sustainable and climate resilient agribusiness development. We integrate climate smart agriculture, regenerative practices, and environmental stewardship into business models, ensuring compliance with international sustainability standards while enhancing long-term resource efficiency. This approach allows agribusinesses to meet growing global demand for responsibly sourced products.",
    ],
    items: [
      "Agribusiness project preparation & formulation",
      "Agribusiness training & development",
      "Sustainable & Regenerative Agriculture Advisory",
      "Tropical Crop Production & Value-Chain Development",
      "Agro-Processing, Value Addition & Market Readiness",
      "Farmer Organization, Cooperative & SME Agribusiness Development",
      "Climate Resilience, ESG & Nature-Based Solutions Consulting",
    ],
    cta: "Request Agribusiness Consulting",
    bg: "cream",
  },
  {
    id: "business",
    icon: BarChart3,
    eyebrow: "Business Development Services",
    title: "Strategic Growth for Resilient Enterprises",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    paras: [
      "AGRICONES delivers business development consulting services that enable organizations to grow strategically, operate efficiently, and compete successfully in local, regional, and international markets. We support SMEs, agribusinesses, cooperatives, start-ups, investors, and institutions seeking structured, practical, and results-oriented growth solutions.",
      "Our business development services begin with a diagnostic assessment of the organization's strategy, operations, and market positioning. Based on this analysis, AGRICONES designs tailored growth strategies that address market entry, expansion, diversification, and revenue optimization, ensuring alignment between business objectives and market opportunities.",
      "AGRICONES specializes in investment readiness and capital mobilization, helping organizations become bankable and attractive to financiers, donors, and strategic partners. We support clients in developing business plans, financial models, investment proposals, and pitch materials that meet international standards and clearly communicate value, risk, and return.",
      "We also strengthen organizational systems and governance, recognizing that sustainable growth depends on strong internal structures. AGRICONES supports clients in organizational design, performance management, policy development, and operational efficiency. In an increasingly digital and competitive environment, we integrate market intelligence and right-sized digital tools that improve customer engagement and decision-making.",
    ],
    items: [
      "Feasibility study",
      "Business & Marketing Plan development",
      "Operational Plan development",
      "Strategic Plan development",
      "Business development training & development",
      "Impact, ESG & Sustainability Business Integration",
      "Investment Readiness, Grant Packaging & Fundraising Support",
      "SME Growth Strategy & Market Expansion Advisory",
    ],
    cta: "Request Business Development Consulting",
    bg: "white",
  },
  {
    id: "project",
    icon: ClipboardList,
    eyebrow: "Project Management Services",
    title: "Disciplined Delivery from Planning to Closure",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    paras: [
      "AGRICONES provides comprehensive Project Management Services that support organizations in planning, executing, and delivering projects efficiently, on time, and within budget. We apply internationally recognized project management methodologies while adapting them to the scale, complexity, and operating environment of each project.",
      "Our services cover the full project lifecycle, including project design, planning, implementation, monitoring, control, and closure. AGRICONES specializes in managing complex, multi-stakeholder and multi-sector projects, where coordination, risk management, and accountability are critical.",
      "A core strength of AGRICONES is risk-based project management. We proactively identify technical, financial, operational, and environmental risks and implement mitigation strategies to prevent delays, cost overruns, and scope creep.",
      "AGRICONES integrates Monitoring, Evaluation, and Results-Based Management (RBM) into all project engagements. We design performance frameworks, indicators, and reporting systems that track progress, measure outcomes, and support evidence-based decision-making.",
    ],
    items: [
      "Project preparation & formulation",
      "Project Implementation",
      "Monitoring, Evaluation & Results-Based Management (RBM)",
      "Project Evaluation (Ex-ante, During, Mid-Term, Ex-post / Final)",
      "Project Management training & development",
      "End-to-End Project Management (PMO-as-a-Service)",
      "Program & Portfolio Management for Multi-Country Initiatives",
      "Project design, proposal development, and reporting",
      "Project Recovery, Turnaround & Risk Management",
    ],
    cta: "Request Project Management Services",
    bg: "cream",
  },
  {
    id: "realestate",
    icon: Home,
    eyebrow: "Real Estate Services",
    title: "Strategic Property Advisory & Investment",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1200&q=80",
    paras: [
      "AGRICONES provides integrated Real Estate consulting and advisory services that support investors, developers, businesses, and institutions in making informed decisions across the real estate value chain. We combine market intelligence, financial analysis, and disciplined project delivery to help clients maximize asset value while managing risk.",
      "Our real estate services begin with investment and feasibility advisory, including market analysis, highest-and-best-use assessments, and financial modelling. AGRICONES supports clients in evaluating opportunities, understanding regulatory and market dynamics, and structuring real estate investments that are commercially viable and aligned with long-term objectives.",
      "AGRICONES also delivers real estate development and project management services, overseeing planning, design coordination, budgeting, scheduling, and construction oversight. We act as an independent advisor, ensuring quality, cost control, and timely delivery while coordinating consultants, contractors, and stakeholders.",
      "A key area of expertise is sustainable and climate resilient real estate development. AGRICONES integrates environmental, social, and governance (ESG) principles into real estate projects, supporting energy efficiency, resource optimization, climate risk mitigation, and long-term asset resilience.",
      "In addition, AGRICONES provides asset and portfolio advisory services, helping clients optimize operational performance, improve returns, and extend asset life cycles. Our understanding of emerging and developing market contexts enables clients to reduce transaction risks and avoid costly delays.",
    ],
    items: [
      "We buy and sell Residential properties",
      "We buy and sell beach or river front properties",
      "We buy and sell Commercial or Industrial properties",
      "We buy and sell Agricultural properties",
      "Market Entry, Licensing & Regulatory Advisory",
      "Property Portfolio Management & Asset Optimization",
      "Sustainable, Climate-Resilient & ESG Real Estate Consulting",
      "Project & Development Management for Real Estate",
      "International Real Estate Investment Advisory",
    ],
    cta: "Request Real Estate Advisory",
    bg: "white",
  },
  {
    id: "environmental",
    icon: Leaf,
    eyebrow: "Environmental Services",
    title: "Science-Driven Environmental Management",
    image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=1200&q=80",
    paras: [
      "AGRICONES contributes to environmental control by advancing agricultural systems that actively manage and reduce human impact on natural resources. Our approach recognizes that agriculture is not only a food production system, but also a critical interface between human activity and the environment - one that can either degrade ecosystems or restore and sustain them.",
      "Through the integration of climate-smart practices, resource-efficient technologies, and regenerative land management strategies, AGRICONES promotes farming systems that optimize the use of water, soil, and energy while minimizing waste, emissions, and ecological disruption.",
      "AGRICONES also emphasizes the restoration and preservation of natural systems by encouraging practices that enhance soil health, protect watersheds, and support ecosystem resilience. By aligning agricultural productivity with environmental stewardship, it enables farmers and agricultural stakeholders to become active agents of environmental control.",
      "Ultimately, AGRICONES positions agriculture as a solution to environmental challenges - demonstrating that productive landscapes can coexist with ecological integrity while safeguarding natural resources essential for future generations.",
    ],
    items: [
      "Advanced GIS and spatial analysis for environmental planning",
      "Drone surveying, image processing, and analysis",
      "Watershed, forest, and ecosystem management expertise",
      "Climate change adaptation and resilience planning",
      "Climate Risk Mitigation and Adaptation Planning",
      "Environmental Monitoring and Impact Assessment",
      "Environmental monitoring and data-driven decision support",
      "Capacity building and technical training",
      "Environmental project design, proposal development, and reporting",
      "Integration of science, policy, and agricultural practice",
    ],
    cta: "Request Environmental Consulting",
    bg: "cream",
  },
];

const tabs = [
  { id: "agribusiness", icon: Wheat, label: "Agribusiness" },
  { id: "business", icon: BarChart3, label: "Business Development" },
  { id: "project", icon: ClipboardList, label: "Project Management" },
  { id: "realestate", icon: Home, label: "Real Estate" },
  { id: "environmental", icon: Leaf, label: "Environmental" },
];

function ServicesPage() {
  const [active, setActive] = useState("agribusiness");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <PageHero crumb="Services" title="Our Services" subtitle="Five specialized domains. One integrated consulting model." image={HERO} />

      {/* Sticky tab bar */}
      <div className="sticky top-20 z-30 shadow-md" style={{ background: "var(--forest)" }}>
        <div className="max-w-[1200px] mx-auto px-2 overflow-x-auto">
          <div className="flex">
            {tabs.map((t) => {
              const isActive = active === t.id;
              return (
                <a
                  key={t.id}
                  href={`#${t.id}`}
                  className={`flex items-center gap-2 px-5 py-4 text-xs uppercase tracking-wider font-semibold whitespace-nowrap border-b-2 transition ${
                    isActive ? "border-[color:var(--amber-brand)] text-white" : "border-transparent text-white/70 hover:text-white"
                  }`}
                  style={{ fontFamily: "var(--font-accent)" }}
                >
                  <t.icon size={14} /> {t.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {sections.map((s) => (
        <section
          key={s.id}
          id={s.id}
          className="py-24 px-6 scroll-mt-40"
          style={{ background: s.bg === "cream" ? "var(--cream)" : "white" }}
        >
          <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-14 items-start">
            <img src={s.image} alt={s.title} className="rounded-lg shadow-xl w-full h-[460px] object-cover order-1 lg:order-none" />
            <div>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-md flex items-center justify-center" style={{ background: "var(--forest)", color: "white" }}>
                  <s.icon size={20} />
                </div>
                <span className="eyebrow" style={{ color: "var(--amber-brand)" }}>{s.eyebrow}</span>
              </div>
              <h2 className="mt-4 text-3xl md:text-4xl font-semibold leading-tight" style={{ color: "var(--forest)" }}>
                {s.title}
              </h2>
              <div className="mt-5 space-y-4 text-charcoal/80 leading-relaxed">
                {s.paras.map((p, i) => <p key={i}>{p}</p>)}
              </div>
              <ul className="mt-7 grid sm:grid-cols-2 gap-x-5 gap-y-2.5">
                {s.items.map((i) => (
                  <li key={i} className="flex gap-2 text-sm text-charcoal/85">
                    <Check size={16} className="mt-0.5 flex-shrink-0" style={{ color: "var(--amber-brand)" }} />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn-primary mt-8">{s.cta} <ArrowRight size={16} /></Link>
            </div>
          </div>
        </section>
      ))}

      <section className="py-20 px-6 text-center text-white" style={{ background: "var(--forest)" }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold">Not Sure Which Service Is Right for You?</h2>
          <p className="mt-5 text-white/85 leading-relaxed">
            Our team will listen to your challenge and recommend the most effective consulting approach. No obligation — just a conversation.
          </p>
          <Link to="/contact" className="btn-primary mt-8">Get a Free Consultation <ArrowRight size={16} /></Link>
        </div>
      </section>
    </>
  );
}
