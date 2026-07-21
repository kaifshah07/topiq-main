// src/components/sections/cta/CTAIllustration.jsx

import { motion } from "framer-motion";
import { Rocket, Trophy, Users, Target } from "lucide-react";
import SlideRight from "../../../animations/SlideRight";
import useParallax from "../../../hooks/useParallax";
import { floatingAnimation, imageHover } from "../../../utils/animationVariants";
import ctaData from "./ctaData";

export default function CTAIllustration() {
  const { ref, style } = useParallax({
    speed: 0.08,
    direction: "up",
  });

  return (
    <SlideRight className="w-full">
      {/* Container max width increased to max-w-2xl for better structural impact */}
      <div className="cta-visual-shell relative mx-auto flex w-full max-w-[460px] items-center justify-center px-4 sm:px-0 lg:ml-auto lg:mr-0">
        
        {/* Decorative Background Glows */}
        <motion.div
          variants={floatingAnimation}
          animate="animate"
          className="absolute -left-12 top-10 h-80 w-80 rounded-full bg-white-100/60 blur-3xl pointer-events-none"
        />
        <motion.div
          variants={floatingAnimation}
          animate="animate"
          transition={{ delay: 0.8 }}
          className="absolute -right-12 bottom-0 h-80 w-80 rounded-full bg-indigo-100/50 blur-3xl pointer-events-none"
        />

        {/* Floating Tag 1: Students */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="hidden"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <Users size={18} />
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Students</p>
              <h4 className="text-lg font-extrabold text-slate-900">25K+</h4>
            </div>
          </div>
        </motion.div>

        {/* Floating Tag 2: Success Rate */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="hidden"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
              <Trophy size={18} />
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Success</p>
              <h4 className="text-lg font-extrabold text-slate-900">95%</h4>
            </div>
          </div>
        </motion.div>

        {/* Floating Tag 3: Goals */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="hidden"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
              <Target size={18} />
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Goal</p>
              <h4 className="text-base font-extrabold text-slate-900">Achieve</h4>
            </div>
          </div>
        </motion.div>

        {/* Image wrapper width scaling modified to occupy maximum display boundary */}
        <motion.div
          ref={ref}
          style={style}
          {...imageHover}
          className="cta-image-frame relative z-10 overflow-hidden rounded-[2rem] w-full flex justify-center"
        >
          <img
            src={ctaData.illustration}
            alt="TOPIQ Call To Action"
            loading="lazy"
            className="cta-clean-image w-full border border-slate-100 bg-white shadow-2xl object-cover"
          />
        </motion.div>

        {/* Floating Tag 4: Rocket Accent Icon */}
        <motion.div
          variants={floatingAnimation}
          animate="animate"
          transition={{ delay: 0.5 }}
          className="absolute right-6 bottom-24 z-20 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#01295A] to-blue-600 text-white shadow-xl"
        >
          <Rocket size={24} />
        </motion.div>

      </div>
    </SlideRight>
  );
}
