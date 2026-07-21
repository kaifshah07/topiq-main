// src/components/sections/downloadApp/DownloadAppContent.jsx

import { motion } from "framer-motion";
import { Smartphone, CheckCircle2, ArrowRight } from "lucide-react";
import FadeUp from "../../../animations/FadeUp";
import ScaleIn from "../../../animations/ScaleIn";
import AnimatedText from "../../../animations/AnimatedText";
import { buttonHover } from "../../../utils/animationVariants";
import downloadAppData from "./downloadAppData";
import StoreButton from "./StoreButton";

export default function DownloadAppContent() {
  return (
    <div className="flex flex-col items-start gap-y-6 lg:gap-y-8 w-full">
      {/* Badge Pill tag */}
      <div>
        <FadeUp>
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-1.5 text-xs font-semibold text-blue-700 uppercase tracking-wider items-center gap-2">
            <Smartphone size={14} />
            {downloadAppData.badge}
          </span>
        </FadeUp>
      </div>

      {/* Title Header text string typography */}
      <div className="w-full">
        <h2 className="text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl tracking-tight">
          <AnimatedText>{downloadAppData.title}</AnimatedText>
          <span className={`mt-1 block bg-gradient-to-r ${downloadAppData.accent} bg-clip-text text-transparent`}>
            {downloadAppData.highlight}
          </span>
        </h2>
      </div>

      {/* Main Copy Statement Summary paragraph */}
      <div className="w-full">
        <FadeUp delay={0.2}>
          <p className="max-w-xl text-base sm:text-lg leading-relaxed text-slate-600">
            {downloadAppData.description}
          </p>
        </FadeUp>
      </div>

      {/* Feature Stack Layout block loops */}
      <div className="w-full mt-2">
        <FadeUp delay={0.35}>
          <div className="download-features-mobile-row flex flex-col gap-y-5">
            {downloadAppData.features.map((feature) => (
              <div key={feature.id} className="download-feature-mobile-card flex items-start gap-4 w-full">
                <CheckCircle2 size={18} className="mt-1 shrink-0 text-blue-600" />
                <div className="flex flex-col gap-y-0.5">
                  <h4 className="font-bold text-slate-950 text-base">
                    {feature.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-slate-500 font-medium max-w-md">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>

      {/* Marketplace Stores Download Platforms buttons */}
      <div className="w-full mt-2">
        <ScaleIn delay={0.5}>
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            {downloadAppData.stores.map((store) => (
              <div key={store.id} className="sm:w-1/2">
                <StoreButton {...store} />
              </div>
            ))}
          </div>
        </ScaleIn>
      </div>

      {/* Grid Dashboard Metrics parameters panel row */}
      <div className="w-full mt-4">
        <FadeUp delay={0.7}>
          <div className="grid gap-4 grid-cols-2 md:grid-cols-4 w-full items-stretch">
            {downloadAppData.statistics.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-200/60 bg-white p-5 text-center shadow-[0_8px_25px_rgba(15,23,42,0.01)] flex flex-col gap-y-1 justify-center box-border"
              >
                <h3 className="text-2xl font-extrabold text-blue-600 tracking-tight leading-none">
                  {item.value}
                </h3>
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-1">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>

      {/* Footer Secondary Action Button trigger */}
      <div className="w-full mt-2">
        <ScaleIn delay={0.8}>
          <motion.a
            {...buttonHover}
            href="#contact"
            className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 px-7 h-14 text-sm font-bold text-white shadow-lg shadow-blue-500/20 hover:opacity-95 transition-opacity"
          >
            Start Learning Today
            <ArrowRight size={16} />
          </motion.a>
        </ScaleIn>
      </div>
    </div>
  );
}
