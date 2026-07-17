// src/components/sections/Hero.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import FadeUp from "../../../animations/FadeUp";
import SlideRight from "../../../animations/SlideRight";

import {
  floatingAnimation,
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
      className="relative overflow-hidden pt-24 pb-16 sm:pt-28 lg:pt-32 lg:pb-24"
    >
      {/* Background */}

      <div className="absolute left-1/2 top-10 h-[420px] w-[620px] -translate-x-1/2 rounded-full bg-blue-100/50 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-[260px] w-[260px] rounded-full bg-orange-100/50 blur-[100px]" />

      <div className="container mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">

          {/* LEFT */}

          <div className="pt-2 text-center lg:pt-4 lg:text-left">

            <FadeUp>

              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/90 px-4 py-2 text-xs font-semibold text-[#01295A] shadow-sm backdrop-blur-md sm:text-sm">

                <Sparkles size={14} />

                India's Smart Exam Preparation Platform

              </div>

            </FadeUp>

            <h1 className="mt-8 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-[58px]">

              Prepare Smarter

              <span className="mt-3 block bg-gradient-to-r from-[#01295A] via-blue-600 to-[#FE7C02] bg-clip-text text-transparent">

                Achieve Faster

              </span>

            </h1>

            <FadeUp delay={0.3}>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg lg:mx-0">

                TOPIQ helps students crack SSC,
                Banking, Railway, UPSC, MPSC,
                and other competitive exams with
                AI-powered learning,
                personalized study plans,
                and smart performance analytics.

              </p>

            </FadeUp>

            <FadeUp delay={0.5}>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">

                <Link
                  to="/student-enquiry"
                  className="w-full sm:w-auto"
                >

                  <motion.button
                    {...buttonHover}
                    className="btn-primary flex h-12 w-full items-center justify-center gap-2 px-7 text-sm font-semibold sm:w-auto"
                  >

                      Start Learning

                      <ArrowRight size={17} />

                  </motion.button>

                </Link>

                <motion.button
                  {...buttonHover}
                  className="btn-secondary flex h-12 w-full items-center justify-center gap-2 px-7 text-sm font-semibold sm:w-auto"
                >

                  <Play size={16} />

                  Watch Demo

                </motion.button>

              </div>

            </FadeUp>

            <FadeUp delay={0.7}>

              <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">

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

          <SlideRight>

            <motion.div className="relative mx-auto mt-4 w-full max-w-[560px] lg:mt-0">

              <div className="absolute inset-8 rounded-full bg-blue-200/45 blur-3xl" />

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[24px]
                  sm:rounded-[32px]
                  border
                  border-white/80
                  bg-white/75
                  p-3
                  sm:p-4
                  shadow-[0_24px_70px_rgba(1,41,90,0.16)]
                  backdrop-blur-xl
                "
              >

                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-br from-blue-500/12 via-transparent to-transparent" />

                {/* Dashboard */}

                <motion.div
                  animate="animate"
                  variants={floatingAnimation}
                  className="hero-dashboard"
                  aria-hidden="true"
                >

                  <div className="hero-dashboard__sidebar">
                    <span className="hero-dashboard__logo" />
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>

                  <div className="hero-dashboard__content">

                    <div className="hero-dashboard__topbar">
                      <span />
                      <i />
                      <i />
                    </div>

                    <div className="hero-dashboard__welcome">
                      <div>
                        <span />
                        <span />
                      </div>
                      <i />
                    </div>

                    <div className="hero-dashboard__metrics">

                      <div>
                        <i />
                        <span />
                        <span />
                      </div>

                      <div>
                        <i />
                        <span />
                        <span />
                      </div>

                      <div>
                        <i />
                        <span />
                        <span />
                      </div>

                    </div>

                    <div className="hero-dashboard__lower">

                      <div className="hero-dashboard__chart">
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                      </div>

                      <div className="hero-dashboard__progress">
                        <i />
                        <i />
                        <i />
                      </div>

                    </div>

                  </div>

                </motion.div>

                {/* Floating Card */}

                <div
                  className="
                    absolute
                    bottom-3
                    left-3
                    sm:bottom-5
                    sm:left-5
                    rounded-2xl
                    border
                    border-white/70
                    bg-white/95
                    px-3
                    py-2
                    sm:px-4
                    sm:py-3
                    shadow-xl
                  "
                >

                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-800 sm:text-sm">

                    <Sparkles
                      size={15}
                      className="text-[#FE7C02]"
                    />

                    Personalized Plans

                  </div>

                  <p className="mt-1 hidden text-xs text-slate-500 sm:block">
                    Adaptive study routines in real time
                  </p>

                </div>

                {/* Live Card */}

                <div
                  className="
                    absolute
                    right-3
                    top-3
                    sm:right-5
                    sm:top-5
                    rounded-2xl
                    border
                    border-orange-100
                    bg-orange-50/95
                    px-3
                    py-2
                    shadow-lg
                  "
                >

                  <div className="text-[9px] font-semibold uppercase tracking-[0.25em] text-orange-600">

                    LIVE

                  </div>

                  <div className="text-base font-bold text-slate-900 sm:text-lg">

                    98.4%

                  </div>

                </div>

              </div>

            </motion.div>

          </SlideRight>

        </div>

      </div>

    </section>

  );

}
