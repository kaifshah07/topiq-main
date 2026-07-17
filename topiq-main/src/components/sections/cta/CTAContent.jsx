// src/components/sections/cta/CTAContent.jsx

import { motion } from "framer-motion";
import { Sparkles, CheckCircle2 } from "lucide-react";
import FadeUp from "../../../animations/FadeUp";
import ScaleIn from "../../../animations/ScaleIn";
import AnimatedText from "../../../animations/AnimatedText";
import CTAButtons from "./CTAButtons";
import ctaData from "./ctaData";

export default function CTAContent() {
  return (
    <div className="flex flex-col items-start gap-y-8 w-full">
      
      {/* Badge */}
      <div>
        <FadeUp>
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/60 px-4 py-1.5 text-xs font-semibold text-[#01295A]">
            <Sparkles size={14} className="text-[#FE7C02]" />
            {ctaData.badge}
          </span>
        </FadeUp>
      </div>

      {/* Heading */}
      <div className="w-full">
        <h2 className="text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl lg:text-[54px] tracking-tight">
          <AnimatedText>{ctaData.title}</AnimatedText>
          <span className={`block bg-gradient-to-r ${ctaData.accent} bg-clip-text text-transparent mt-1`}>
            {ctaData.highlight}
          </span>
        </h2>
      </div>

      {/* Description */}
      <div className="w-full">
        <FadeUp delay={0.2}>
          <p className="max-w-xl text-[16px] md:text-lg leading-relaxed text-slate-600">
            {ctaData.description}
          </p>
        </FadeUp>
      </div>

      {/* Benefits Layout */}
      <div className="w-full">
        <FadeUp delay={0.35}>
          <div className="grid gap-x-6 gap-y-3.5 sm:grid-cols-2 text-sm font-medium text-slate-700">
            {ctaData.benefits.map((benefit) => (
              <motion.div
                key={benefit.id}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-2.5"
              >
                <CheckCircle2 size={16} className="shrink-0 text-emerald-500" />
                <span>{benefit.title}</span>
              </motion.div>
            ))}
          </div>
        </FadeUp>
      </div>

      {/* Statistics Block */}
      <div className="w-full">
        <FadeUp delay={0.5}>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 w-full">
            {ctaData.statistics.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-slate-100 bg-white p-4 text-center shadow-sm"
              >
                <h3 className="text-2xl font-extrabold text-[#01295A] tracking-tight">
                  {item.value}
                </h3>
                <p className="mt-1 text-xs text-slate-500 font-medium">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>

      {/* Buttons Action Container */}
      <div className="w-full">
        <ScaleIn delay={0.7}>
          <CTAButtons
            primary={ctaData.primaryButton}
            secondary={ctaData.secondaryButton}
          />
        </ScaleIn>
      </div>

    </div>
  );
}