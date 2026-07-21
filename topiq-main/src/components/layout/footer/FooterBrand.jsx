// src/components/layout/footer/FooterBrand.jsx

import { motion } from "framer-motion";
import { GraduationCap, Sparkles, Mail, Phone, MapPin } from "lucide-react";
import FadeUp from "../../../animations/FadeUp";
import footerData from "./footer";

export default function FooterBrand() {
  const { company, contact } = footerData;

  return (
    <FadeUp>
      <div className="max-w-sm flex flex-col items-start gap-y-6">
        
        {/* Brand Link */}
        <motion.a href="#home" whileHover={{ scale: 1.02 }} className="inline-flex items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#01295A] to-blue-600 text-white shadow-md shadow-blue-900/10">
            <GraduationCap size={30} />
          </div>
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight">
              <span className="text-[#01295A]">TOP</span>
              <span className="text-[#FE7C02]">-IQ</span>
            </h2>
            <p className="text-xs font-semibold text-slate-500 mt-0.5">
              {company.tagline}
            </p>
          </div>
        </motion.a>

        {/* Brand Description */}
        <p className="text-sm leading-relaxed text-slate-600">
          {company.description}
        </p>

        {/* Sparkle Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/50 px-4 py-1.5 text-xs font-semibold text-[#01295A]">
          <Sparkles size={14} className="text-[#FE7C02]" />
          AI Powered Learning Platform
        </div>

        {/* Contact Links Stack */}
        <div className="flex flex-col gap-y-3.5 w-full text-sm">
          <a href={`mailto:${contact.email}`} className="flex items-center gap-3 text-slate-600 hover:text-[#FE7C02] transition-colors duration-200 font-medium">
            <Mail size={16} className="text-[#01295A] flex-shrink-0" />
            <span>{contact.email}</span>
          </a>

          <a href={`tel:${contact.phone.replace(/\s+/g, "")}`} className="flex items-center gap-3 text-slate-600 hover:text-[#FE7C02] transition-colors duration-200 font-medium">
            <Phone size={16} className="text-[#01295A] flex-shrink-0" />
            <span>{contact.phone}</span>
          </a>

          <div className="flex items-start gap-3 text-slate-600">
            <MapPin size={16} className="text-[#01295A] mt-0.5 flex-shrink-0" />
            <span className="font-medium">{contact.address}</span>
          </div>
        </div>

      </div>
    </FadeUp>
  );
}
