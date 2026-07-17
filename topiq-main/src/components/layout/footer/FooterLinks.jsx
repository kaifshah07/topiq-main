// src/components/layout/footer/FooterLinks.jsx

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import FadeUp from "../../../animations/FadeUp";
import footerData from "./footer";

function LinkColumn({ title, links, delay = 0 }) {
  return (
    <FadeUp delay={delay}>
      <div className="flex flex-col gap-y-5">
        <h3 className="text-sm font-bold uppercase tracking-wider text-[#01295A]">
          {title}
        </h3>
        <ul className="flex flex-col gap-y-3.5">
          {links.map((link) => (
            <li key={link.id}>
              <motion.a
                href={link.href}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                className="group flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-[#FE7C02] transition-colors duration-200"
              >
                <ChevronRight size={14} className="text-slate-400 group-hover:text-[#FE7C02] transition-colors duration-200" />
                <span>{link.label}</span>
              </motion.a>
            </li>
          ))}
        </ul>
      </div>
    </FadeUp>
  );
}

export default function FooterLinks() {
  return (
    <div className="grid gap-10 sm:grid-cols-3">
      <LinkColumn title="Company" links={footerData.companyLinks} />
      <LinkColumn title="Exams" links={footerData.examLinks} delay={0.05} />
      <LinkColumn title="Resources" links={footerData.resources} delay={0.1} />
    </div>
  );
}