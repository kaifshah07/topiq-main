// src/components/sections/downloadApp/StoreButton.jsx

import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { FaApple, FaGooglePlay } from "react-icons/fa6";
import { buttonHover } from "../../../utils/animationVariants";

export default function StoreButton({ name, subtitle, url }) {
  const StoreIcon = name === "App Store" ? FaApple : FaGooglePlay;

  return (
    <motion.a
      {...buttonHover}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex min-h-[68px] w-full select-none items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-[0_8px_22px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_14px_30px_rgba(37,99,235,0.14)]"
    >
      <div className="flex min-w-0 items-center gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#01295A] transition-colors group-hover:bg-[#01295A] group-hover:text-white">
          <StoreIcon size={22} aria-hidden="true" />
        </span>

        {/* Labels info stack description details */}
        <div className="flex min-w-0 flex-col items-start gap-1">
          <p className="whitespace-nowrap text-[10px] font-bold uppercase leading-none tracking-[0.12em] text-slate-400">
            {subtitle}
          </p>
          <h4 className="whitespace-nowrap text-base font-extrabold leading-tight tracking-tight text-slate-900">
            {name}
          </h4>
        </div>
      </div>

      {/* Link Indicators direction icons elements */}
      <ExternalLink size={16} className="shrink-0 text-slate-400 transition-colors group-hover:text-blue-600" />
    </motion.a>
  );
}
