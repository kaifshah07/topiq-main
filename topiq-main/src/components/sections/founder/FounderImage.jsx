// src/components/sections/founder/FounderImage.jsx

import { motion } from "framer-motion";
import SlideRight from "../../../animations/SlideRight";
import useParallax from "../../../hooks/useParallax";
import { Award, Users, Rocket } from "lucide-react";
import { floatingAnimation, imageHover } from "../../../utils/animationVariants";

export default function FounderImage() {
  const { ref, style } = useParallax({
    speed: 0.08,
    direction: "up",
  });

  return (
    <SlideRight className="w-full flex items-center justify-center">
      <div className="relative mx-auto flex w-full max-w-[440px] lg:max-w-none items-center justify-center px-4 sm:px-0">
        
        {/* Decorative Ambient Background Orbs */}
        <motion.div
          variants={floatingAnimation}
          animate="animate"
          className="absolute -left-12 top-16 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl pointer-events-none"
        />
        <motion.div
          variants={floatingAnimation}
          animate="animate"
          transition={{ delay: 1 }}
          className="absolute -right-12 bottom-6 h-72 w-72 rounded-full bg-indigo-100/40 blur-3xl pointer-events-none"
        />

        {/* Floating Overlay Card Badge 1: Achievements */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-4 top-12 z-20 rounded-2xl border border-slate-100 bg-white/95 px-4 py-3.5 shadow-xl shadow-slate-900/5 backdrop-blur-md"
        >
          <div className="flex items-center gap-2.5 min-w-[100px]">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-yellow-50 text-yellow-600">
              <Award size={16} />
            </div>
            <div className="flex flex-col">
              <p className="text-[9px] uppercase font-bold tracking-wider text-slate-400 leading-none">Awards</p>
              <h4 className="text-sm font-extrabold text-slate-900 tracking-tight mt-0.5">15+</h4>
            </div>
          </div>
        </motion.div>

        {/* Floating Overlay Card Badge 2: Learners Community */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-6 top-1/2 z-20 rounded-2xl border border-slate-100 bg-white/95 px-4 py-3.5 shadow-xl shadow-slate-900/5 backdrop-blur-md"
        >
          <div className="flex items-center gap-2.5 min-w-[100px]">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-50 text-green-600">
              <Users size={16} />
            </div>
            <div className="flex flex-col">
              <p className="text-[9px] uppercase font-bold tracking-wider text-slate-400 loop-none leading-none">Learners</p>
              <h4 className="text-sm font-extrabold text-slate-900 tracking-tight mt-0.5">25K+</h4>
            </div>
          </div>
        </motion.div>

        {/* Floating Overlay Card Badge 3: Corporate Mission Vision */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-14 bottom-0 z-20 rounded-2xl border border-slate-100 bg-white/95 p-4 shadow-xl shadow-slate-900/5 backdrop-blur-md"
        >
          <div className="flex items-center gap-2.5 min-w-[110px]">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-purple-50 text-purple-600">
              <Rocket size={16} />
            </div>
            <div className="flex flex-col">
              <p className="text-[9px] uppercase font-bold tracking-wider text-slate-400 leading-none">Mission</p>
              <h4 className="text-sm font-extrabold text-slate-900 tracking-tight mt-0.5">Vision</h4>
            </div>
          </div>
        </motion.div>

        {/* Main Canvas Canvas Frame Container Illustration Box */}
        <motion.div
          ref={ref}
          style={style}
          {...imageHover}
          className="relative z-10 overflow-hidden rounded-[2.5rem] w-full border border-slate-200/65 bg-white p-3 shadow-[0_30px_70px_rgba(1,41,90,0.07)]"
        >
          <img
            src="/images/founder.webp"
            alt="TOPIQ Founder dashboard view corporate landscape portrait"
            className="w-full h-auto min-h-[400px] max-h-[540px] rounded-[2.2rem] object-cover bg-slate-50"
            loading="lazy"
          />
        </motion.div>

      </div>
    </SlideRight>
  );
}