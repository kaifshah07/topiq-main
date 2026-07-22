// src/components/sections/Hero.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import FadeUp from "../../../animations/FadeUp";
import SlideRight from "../../../animations/SlideRight";

import {
  buttonHover,
} from "../../../utils/animationVariants";

import {
  ArrowRight,
  Play,
  Sparkles,
  CheckCircle,
} from "lucide-react";

export default function Hero() {
  return (
   <section
  id="home"
  className="relative overflow-hidden"
>
    
      {/* Background */}

<div className="absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-blue-100/50 blur-[100px]" />

<div className="absolute bottom-0 right-0 h-45 w-45 rounded-full bg-orange-100/50 blur-[80px]" />

      <div className="container mx-auto max-w-1x4 px-5 sm:px-6 lg:px-2">

<div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">

          {/* LEFT */}

<div className="mx-auto max-w-135 text-center lg:mx-0 lg:text-left">

            <FadeUp>

              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/90 px-4 py-2 text-xs font-semibold text-[#01295A] shadow-sm backdrop-blur-md sm:text-sm">

                <Sparkles size={14} />

                India's Smart Exam Preparation Platform

              </div>

            </FadeUp>

<h1 className="mt-2 text-10xl font-extrabold leading-tight tracking-tight text-3xl sm:text-4xl lg:text-[48px]">

              Prepare Smarter

              <span className="mt-3 block bg-linear-to-r from-[#01295A] via-blue-600 to-[#FE7C02] bg-clip-text text-transparent">

                Achieve Faster

              </span>

            </h1>

            <FadeUp delay={0.3}>

<p className="mx-auto mt-5 max-w-125 text-base leading-7 text-slate-600 lg:mx-0">

                TOPIQ helps students crack SSC,
                Banking, Railway, UPSC, MPSC,
                and other competitive exams with
                AI-powered learning,
                personalized study plans,
                and smart performance analytics.

              </p>

            </FadeUp>

            <FadeUp delay={0.5}>

<div className="mt-6 flex flex-row gap-2 sm:gap-3 sm:justify-center lg:justify-start">

                <Link
                  to="/student-enquiry"
                  className="min-w-0 flex-1 sm:flex-none"
                >

                  <motion.button
                    {...buttonHover}
                    className="btn-primary flex h-12 w-full items-center justify-center gap-1.5 whitespace-nowrap px-3 text-xs font-semibold sm:w-auto sm:gap-2 sm:px-7 sm:text-sm"
                  >

                      Start Learning

                      <ArrowRight size={17} />

                  </motion.button>

                </Link>

                <motion.button
                  {...buttonHover}
                  className="btn-secondary flex h-12 min-w-0 flex-1 items-center justify-center gap-1.5 whitespace-nowrap px-3 text-xs font-semibold sm:flex-none sm:gap-2 sm:px-7 sm:text-sm"
                >

                  <Play size={16} />

                  Watch Demo

                </motion.button>

              </div>

            </FadeUp>

            <FadeUp delay={0.7}>

<div className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start">


                <div className="flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-sm">

                  <CheckCircle
                    size={15}
                    className="text-emerald-500"
                  />

                  AI Powered Learning

                </div>

                <div className="flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-sm">

                  <CheckCircle
                    size={15}
                    className="text-emerald-500"
                  />

                  Smart Analytics

                </div>

              </div>

            </FadeUp>

          </div>

          {/* RIGHT IMAGE STARTS HERE */}

                 {/* RIGHT */}

          {/* RIGHT */}
<SlideRight>
  <motion.div
    className="page-visual hero-page-visual relative mx-auto flex w-full max-w-[400px] sm:max-w-[320px] lg:max-w-[380px] items-center justify-center"
  >
    {/* Background Glow */}
    <div className="absolute inset-0 rounded-full bg-blue-200/30 blur-3xl" />

    <img
      src="/image/1.png"
      alt="TOPIQ learning platform"
      className="relative z-10 h-auto w-full object-contain drop-shadow-2xl"
    />
  </motion.div>
</SlideRight>

        </div>

      </div>

    </section>

  );

}
