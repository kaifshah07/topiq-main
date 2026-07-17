// src/components/layout/footer/Footer.jsx

import AnimatedSection from "../../animations/AnimatedSection";
import { useContext } from "react";
import FooterBrand from "./footer/FooterBrand";
import FooterLinks from "./footer/FooterLinks";
import FooterSocial from "./footer/FooterSocial";
import FooterBottom from "./footer/FooterBottom";
import NestedSiteShellContext from "../../context/SiteShellContext";

export default function Footer() {
  const nestedSiteShell = useContext(NestedSiteShellContext);

  if (nestedSiteShell) return null;

  return (
    <footer id="footer" className="relative overflow-hidden bg-slate-50/60 border-t border-slate-200/80">
      {/* Soft Background Blurs */}
      <div className="absolute -left-24 top-0 h-[320px] w-[320px] rounded-full bg-blue-100/40 blur-3xl pointer-events-none" />
      <div className="absolute -right-24 bottom-0 h-[360px] w-[360px] rounded-full bg-cyan-100/30 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.015] [background-image:linear-gradient(to_right,#01295A_1px,transparent_1px),linear-gradient(to_bottom,#01295A_1px,transparent_1px)] [background-size:48px_48px] pointer-events-none" />

      <div className="container relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8 w-full">
        <AnimatedSection animation="fadeUp">
          <div className="rounded-[32px] border border-slate-200/80 bg-white p-6 shadow-[0_20px_60px_rgba(1,41,90,0.03)] sm:p-8 lg:p-12 w-full">
            
            {/* Multi-column Grid Matrix Layout */}
            <div className="grid gap-12 lg:grid-cols-[1.2fr_1.3fr_0.9fr] items-start">
              <FooterBrand />
              <FooterLinks />
              <FooterSocial />
            </div>

            <FooterBottom />
          </div>
        </AnimatedSection>
      </div>
    </footer>
  );
}
