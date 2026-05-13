import { Link } from "@tanstack/react-router";
import { Linkedin, Twitter, Instagram, Mail, MapPin } from "lucide-react";
import logo from "../images/agricones.ico";

export function SiteFooter() {
  return (
    <footer style={{ background: "var(--forest)", color: "rgba(255,255,255,0.85)" }}>
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <img src={logo} alt="AGRICONES" className="h-14 w-auto" />
            <p className="mt-3 italic text-sm text-white/70">"From Ideas to Impact."</p>
            <div className="flex gap-3 mt-5">
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10"><Linkedin size={16} /></a>
              <a href="#" aria-label="Twitter" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10"><Twitter size={16} /></a>
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10"><Instagram size={16} /></a>
            </div>
          </div>

          <FooterCol title="Quick Links">
            <FooterLink to="/">Home</FooterLink>
            <FooterLink to="/about">About</FooterLink>
            <FooterLink to="/about" hash="team">Consulting Team</FooterLink>
            <FooterLink to="/services">Services</FooterLink>
            <FooterLink to="/contact">Contact</FooterLink>
          </FooterCol>

          <FooterCol title="Services">
            <FooterLink to="/services" hash="agribusiness">Agribusiness Services</FooterLink>
            <FooterLink to="/services" hash="business">Business Development</FooterLink>
            <FooterLink to="/services" hash="project">Project Management</FooterLink>
            <FooterLink to="/services" hash="realestate">Real Estate Services</FooterLink>
            <FooterLink to="/services" hash="environmental">Environmental Services</FooterLink>
          </FooterCol>

          <FooterCol title="Contact">
            <a href="mailto:info@agricones.com" className="flex items-center gap-2 hover:text-white">
              <Mail size={14} /> info@agricones.com
            </a>
            <div className="flex items-center gap-2"><MapPin size={14} /> Belize, Central America</div>
            <div className="pt-2">
              <div className="text-xs uppercase tracking-widest text-white/50 mb-2">Languages</div>
              <div className="flex gap-2 flex-wrap text-xs">
                {["EN", "ES", "ZH", "HI", "AR", "RU"].map((l) => (
                  <span key={l} className="px-2 py-0.5 border border-white/20 rounded">{l}</span>
                ))}
              </div>
            </div>
          </FooterCol>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8 py-5 flex flex-col md:flex-row justify-between gap-3 text-xs text-white/60">
          <div>© {new Date().getFullYear()} AGRICONES. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase" style={{ fontFamily: "var(--font-accent)" }}>{title}</h4>
      <div className="flex flex-col gap-2.5 text-sm">{children}</div>
    </div>
  );
}

function FooterLink({ to, hash, children }: { to: string; hash?: string; children: React.ReactNode }) {
  return <Link to={to} hash={hash} className="hover:text-white transition">{children}</Link>;
}
