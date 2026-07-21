// src/components/sections/cta/CTAButtons.jsx

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { buttonHover } from "../../../utils/animationVariants";

export default function CTAButtons({ primary, secondary }) {
  return (
    <div className="flex flex-col w-full sm:w-auto sm:flex-row items-center gap-4">
      {/* Primary Button */}
      <motion.a
        {...buttonHover}
        href={primary.href}
        className="inline-flex h-14 w-full items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-[#01295A] to-blue-600 px-8 text-sm font-bold text-white shadow-lg shadow-blue-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl sm:w-auto"
      >
        {primary.text}
        <ArrowRight size={16} />
      </motion.a>

      {/* Secondary Button */}
      <motion.a
        {...buttonHover}
        href={secondary.href}
        className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto rounded-2xl border border-slate-200 bg-white px-8 h-14 text-sm font-bold text-slate-700 shadow-sm transition-all duration-300 hover:bg-slate-50"
      >
        <PlayCircle size={16} className="text-[#FE7C02]" />
        {secondary.text}
      </motion.a>
    </div>
  );
}
