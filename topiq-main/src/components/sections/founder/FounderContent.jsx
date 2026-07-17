// src/components/sections/founder/FounderContent.jsx

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import FadeUp from "../../../animations/FadeUp";
import AnimatedText from "../../../animations/AnimatedText";
import ScaleIn from "../../../animations/ScaleIn";
import { buttonHover } from "../../../utils/animationVariants";

const highlights = [
  "Building technology-driven education solutions",
  "Focused on student success and innovation",
  "Creating opportunities through digital learning",
  "Developing future-ready skills ecosystem",
];

export default function FounderContent() {
  return (
    <div className="flex flex-col items-start gap-y-6 lg:gap-y-8 w-full">
      {/* Upper Tag Badge Component */}
      <div>
        <FadeUp>
          <span className="inline-flex rounded-full bg-indigo-100 px-4 py-1.5 text-xs font-semibold text-indigo-700 uppercase tracking-wider">
            Meet Our Founder
          </span>
        </FadeUp>
      </div>

      {/* Primary Section Heading */}
      <div className="w-full">
        <h2 className="text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl tracking-tight">
          <AnimatedText>Leading With Vision,</AnimatedText>
          <span className="mt-1 block bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Building The Future
          </span>
        </h2>
      </div>

      {/* Founder Message Body text */}
      <div className="w-full">
        <FadeUp delay={0.25}>
          <p className="max-w-xl text-base sm:text-lg leading-relaxed text-slate-600">
            The journey of TOPIQ started with a vision to transform the way students learn and prepare
            for their future. By combining education, technology, and innovation, we aim to create
            a smarter and more accessible learning ecosystem for everyone.
          </p>
        </FadeUp>
      </div>

      {/* Checklist Feature Highlights row blocks */}
      <div className="w-full flex flex-col gap-y-3.5 mt-2">
        {highlights.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.12 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <CheckCircle2 size={18} className="text-indigo-600 shrink-0" />
            <span className="font-semibold text-slate-700 text-sm sm:text-base">
              {item}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Trigger CTA Action Button */}
      <div className="w-full mt-2">
        <ScaleIn delay={0.7}>
          <motion.button
            {...buttonHover}
            className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-indigo-600 px-7 h-14 text-sm font-bold text-white shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-colors"
          >
            Read Founder Message
            <ArrowRight size={16} />
          </motion.button>
        </ScaleIn>
      </div>
    </div>
  );
}