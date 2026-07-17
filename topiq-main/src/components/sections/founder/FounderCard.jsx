// src/components/sections/founder/FounderCard.jsx

import { motion } from "framer-motion";
import ScaleIn from "../../../animations/ScaleIn";
import { cardHover } from "../../../utils/animationVariants";

export default function FounderCard({
  image,
  name,
  role,
  description,
  achievements = [],
  accent = "from-blue-600 to-indigo-600",
}) {
  return (
    <ScaleIn className="w-full">
      <motion.article
        {...cardHover}
        className="group relative w-full flex flex-col items-center rounded-3xl border border-slate-200/60 bg-white p-8 sm:p-10 shadow-[0_10px_30px_rgba(15,23,42,0.015)] hover:shadow-[0_24px_50px_rgba(1,41,90,0.06)] transition-all duration-300 overflow-hidden select-none box-border"
      >
        {/* Gradient Accent Indicator Bar */}
        <div className={`absolute left-0 top-0 h-1 w-full bg-gradient-to-r ${accent}`} />

        {/* Round Avatar Container Wrapper */}
        <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-slate-50 shadow-md mb-6 shrink-0 z-10">
          <img
            src={image}
            alt={`${name} profile view`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
        </div>

        {/* Core Description Details Stack */}
        <div className="flex flex-col items-center text-center w-full max-w-2xl relative z-10 gap-y-3">
          <h3 className="text-2xl font-extrabold text-slate-950 tracking-tight">
            {name}
          </h3>
          <p className={`bg-gradient-to-r ${accent} bg-clip-text text-transparent font-bold text-sm tracking-wide uppercase`}>
            {role}
          </p>
          <p className="text-sm sm:text-base leading-relaxed text-slate-500 font-medium tracking-normal">
            {description}
          </p>
        </div>

        {/* Achievements Elements Grid Array Row */}
        {achievements.length > 0 && (
          <div className="mt-8 grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full items-stretch justify-items-center relative z-10 box-border">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="w-full rounded-2xl border border-slate-100 bg-slate-50/50 px-5 py-4 text-center text-xs font-bold text-slate-600 flex items-center justify-center leading-normal tracking-wide box-border"
              >
                {item}
              </motion.div>
            ))}
          </div>
        )}

        {/* Backdrop Ambient Blur Shapes Overlay */}
        <div className="absolute -bottom-14 -right-14 h-40 w-40 rounded-full bg-blue-100/20 blur-3xl transition-transform duration-500 group-hover:scale-150 pointer-events-none" />
      </motion.article>
    </ScaleIn>
  );
}