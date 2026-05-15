import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, Globe, Linkedin, Instagram, Twitter } from "lucide-react";

const services = [
  { label: "Agribusiness Services", hash: "agribusiness-services" },
  { label: "Business Development", hash: "business-development-services" },
  { label: "Project Management", hash: "project-management-services" },
  { label: "Real Estate", hash: "real-estate-services" },
  { label: "Environmental Services", hash: "environmental-services" },
];

const langs = ["EN", "ES", "ZH", "HI", "AR", "RU"];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lang, setLang] = useState("EN");
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? "bg-[color:var(--forest)] shadow-[0_2px_20px_rgba(0,0,0,0.16)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center min-w-[220px]">
          <span
            className="text-[36px] leading-none font-bold tracking-[0.08em]"
            style={{
              fontFamily: "Playfair Display, Georgia, serif",
              textShadow: "0 2px 8px rgba(0,0,0,0.15)",
            }}
          >
            <span style={{ color: "#C8902A" }}>AGRI</span>
            <span style={{ color: scrolled || mobileOpen ? "#FFFFFF" : "#1A4D2E" }}>CONES</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          <NavLink to="/" scrolled={scrolled} label="Home" />
          <NavDropdown
            scrolled={scrolled}
            label="About"
            items={[
              { label: "Our Story", to: "/about" },
              { label: "Consulting Team", to: "/about", hash: "team" },
            ]}
          />
          <NavDropdown
            scrolled={scrolled}
            label="Services"
            items={services.map((s) => ({ label: s.label, to: "/services", hash: s.hash }))}
          />
          <NavLink to="/contact" scrolled={scrolled} label="Contact" />

          <div className="relative ml-3">
            <button
              onClick={() => setLangOpen((o) => !o)}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-sm font-medium transition ${
                scrolled ? "text-white hover:bg-white/10" : "text-white hover:bg-white/10"
              }`}
            >
              <Globe size={16} />
              {lang}
              <ChevronDown size={14} />
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-2 bg-white rounded-md shadow-lg border border-border py-1 min-w-[80px]">
                {langs.map((l) => (
                  <button
                    key={l}
                    onClick={() => { setLang(l); setLangOpen(false); }}
                    className="w-full text-left px-3 py-1.5 text-sm hover:bg-cream"
                  >
                    {l}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className={`hidden xl:flex items-center gap-3 ml-3 ${scrolled ? "text-white" : "text-white"}`}>
            <a href="#" aria-label="LinkedIn" className="hover:text-[color:var(--amber-brand)]"><Linkedin size={16} /></a>
            <a href="#" aria-label="Twitter" className="hover:text-[color:var(--amber-brand)]"><Twitter size={16} /></a>
            <a href="#" aria-label="Instagram" className="hover:text-[color:var(--amber-brand)]"><Instagram size={16} /></a>
          </div>

          <Link to="/contact" className="btn-primary ml-3">Get a Consultation</Link>
        </nav>

        <button
          className={`lg:hidden p-2 ${scrolled || mobileOpen ? "text-charcoal" : "text-white"}`}
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-border">
          <div className="px-6 py-4 flex flex-col gap-1">
            <MobileLink to="/" onClick={() => setMobileOpen(false)}>Home</MobileLink>
            <MobileLink to="/about" onClick={() => setMobileOpen(false)}>About</MobileLink>
            <MobileLink to="/services" onClick={() => setMobileOpen(false)}>Services</MobileLink>
            <MobileLink to="/contact" onClick={() => setMobileOpen(false)}>Contact</MobileLink>
            <Link to="/contact" onClick={() => setMobileOpen(false)} className="btn-primary mt-3 justify-center">
              Get a Consultation
            </Link>
            <div className="flex gap-2 mt-3 flex-wrap">
              {langs.map((l) => (
                <button key={l} onClick={() => setLang(l)}
                  className={`px-2 py-1 text-xs rounded border ${lang === l ? "bg-forest text-white border-forest" : "border-border"}`}
                  style={lang === l ? { background: "var(--forest)", color: "white", borderColor: "var(--forest)" } : {}}>
                  {l}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({ to, label, scrolled }: { to: string; label: string; scrolled: boolean }) {
  return (
    <Link
      to={to}
      activeOptions={{ exact: to === "/" }}
      activeProps={{ style: { color: "var(--amber-brand)" } }}
      className={`px-3 py-2 text-sm font-medium tracking-wide transition ${
        scrolled ? "text-white hover:text-[color:var(--cream)]" : "text-white hover:text-[color:var(--cream)]"
      }`}
      style={{ fontFamily: "var(--font-accent)" }}
    >
      {label}
    </Link>
  );
}

function NavDropdown({
  label, items, scrolled,
}: {
  label: string;
  items: { label: string; to: string; hash?: string }[];
  scrolled: boolean;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        className={`px-3 py-2 text-sm font-medium tracking-wide transition flex items-center gap-1 ${
          scrolled ? "text-white hover:text-[color:var(--cream)]" : "text-white hover:text-[color:var(--cream)]"
        }`}
        style={{ fontFamily: "var(--font-accent)" }}
      >
        {label} <ChevronDown size={14} />
      </button>
      {open && (
        <div className="absolute left-0 top-full pt-2">
          <div className="bg-white rounded-md shadow-xl border border-border py-2 min-w-[260px]">
            {items.map((i) => (
              <Link
                key={i.label + (i.hash ?? "")}
                to={i.to}
                hash={i.hash}
                className="block px-4 py-2 text-sm text-charcoal hover:bg-cream hover:text-[color:var(--forest)]"
              >
                {i.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function MobileLink({ to, children, onClick }: { to: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <Link to={to} onClick={onClick} className="py-2.5 px-2 text-charcoal font-medium border-b border-border/50">
      {children}
    </Link>
  );
}
