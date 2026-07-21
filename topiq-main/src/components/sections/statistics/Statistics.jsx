// src/components/sections/statistics/Statistics.jsx

import FadeUp from "../../../animations/FadeUp";
import StaggerContainer from "../../../animations/StaggerContainer";

import StatisticCard from "./StatisticCard";

import {
  Users,
  Trophy,
  BookOpen,
  Target,
} from "lucide-react";

const statisticsData = [
  {
    id: 1,
    value: 50000,
    suffix: "+",
    title: "Active Students",
    description: "Students preparing with TOPIQ",
    icon: Users,
  },
  {
    id: 2,
    value: 10000,
    suffix: "+",
    title: "Successful Selections",
    description: "Students achieved their goals",
    icon: Trophy,
  },
  {
    id: 3,
    value: 500,
    suffix: "+",
    title: "Mock Tests",
    description: "Exam-level practice tests",
    icon: BookOpen,
  },
  {
    id: 4,
    value: 95,
    suffix: "%",
    title: "Success Rate",
    description: "Improved student performance",
    icon: Target,
  },
];

export default function Statistics() {
  return (
    <section
      id="statistics"
      className="bg-slate-50 py-16 sm:py-20 lg:py-24"
    >
      <div className="container mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Header */}

        <FadeUp>
          <div className="mx-auto max-w-3xl text-center">

            <span
              className="
                inline-flex
                items-center
                rounded-full
                bg-blue-100
                px-4
                py-2
                text-xs
                font-semibold
                text-blue-700
                sm:text-sm
              "
            >
              TOPIQ Achievements
            </span>

            <h2
              className="
                mt-6
                text-3xl
                font-extrabold
                leading-tight
                text-slate-900
                sm:text-4xl
                lg:text-5xl
              "
            >
              Trusted By Thousands Of

              <span
                className="
                  mt-2
                  block
                  bg-gradient-to-r
                  from-blue-600
                  to-cyan-500
                  bg-clip-text
                  text-transparent
                "
              >
                Successful Aspirants
              </span>
            </h2>

            <p
              className="
                mx-auto
                mt-5
                max-w-2xl
                text-base
                leading-7
                text-slate-600
                sm:text-lg
              "
            >
              Our smart learning ecosystem helps students improve
              preparation, accuracy, and confidence.
            </p>

          </div>
        </FadeUp>

        {/* Cards */}

        <StaggerContainer
          className="
            mt-12
            grid
            grid-cols-1
            gap-6
            sm:grid-cols-2
            lg:grid-cols-4
            lg:gap-8
            mobile-grid-3
            achievements-compact-grid
          "
        >
          {statisticsData.map((item) => (
            <StatisticCard
              key={item.id}
              {...item}
            />
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
}
