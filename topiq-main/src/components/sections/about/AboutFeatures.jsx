// src/components/sections/about/AboutFeatures.jsx

import StaggerContainer from "../../../animations/StaggerContainer";
import AboutFeatureCard from "./AboutFeatureCard";

import {
  Brain,
  Target,
  BarChart3,
  Users,
} from "lucide-react";

const features = [
  {
    id: 1,
    icon: Brain,
    title: "AI Powered Learning",
    description:
      "Get personalized study recommendations, smart practice sessions, and AI-driven learning assistance.",
  },

  {
    id: 2,
    icon: Target,
    title: "Exam Focused Preparation",
    description:
      "Prepare with syllabus-based content, mock tests, and strategies designed for competitive exams.",
  },

  {
    id: 3,
    icon: BarChart3,
    title: "Performance Analytics",
    description:
      "Track your progress, identify weak areas, and improve your preparation with detailed insights.",
  },

  {
    id: 4,
    icon: Users,
    title: "Expert Learning Community",
    description:
      "Learn with thousands of aspirants and stay motivated throughout your exam journey.",
  },
];

export default function AboutFeatures() {
  return (
    <section className="mt-14 sm:mt-16 lg:mt-20">
      <StaggerContainer
        className="
          grid
          grid-cols-1
          gap-6
          sm:grid-cols-2
          lg:grid-cols-4
          mobile-grid-3
        "
      >
        {features.map((feature) => (
          <AboutFeatureCard
            key={feature.id}
            {...feature}
          />
        ))}
      </StaggerContainer>
    </section>
  );
}
