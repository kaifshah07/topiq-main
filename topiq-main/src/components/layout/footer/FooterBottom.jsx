// src/components/layout/footer/FooterBottom.jsx

import { motion } from "framer-motion";
import { ArrowUp, Heart } from "lucide-react";
import footerData from "./footer";

export default function FooterBottom() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="mt-16 border-t border-slate-100 pt-8">
      <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
        
        {/* Copyright Stack */}
        <div className="flex flex-col items-center gap-1.5 text-center md:items-start md:text-left">
          <p className="text-sm font-medium text-slate-500">
            {footerData.copyright}
          </p>
          <div className="flex items-center gap-1.5 text-xs text-slate-400">
            <span>Designed with</span>
            <Heart size={12} className="fill-red-400 text-red-400" />
            <span>for ambitious learners.</span>
          </div>
        </div>

        {/* Back To Top Button */}
        <motion.button
          whileHover={{ y: -3, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={scrollToTop}
          aria-label="Back to top"
          className="flex items-center gap-2.5 rounded-full border border-slate-200 bg-slate-50 px-5 py-2.5 text-xs font-bold text-slate-600 transition-all duration-300 hover:border-[#01295A] hover:bg-[#01295A] hover:text-white"
        >
          <ArrowUp size={14} />
          Back to Top
        </motion.button>

      </div>
    </div>
  );
}