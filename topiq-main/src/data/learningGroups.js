import {
  BookOpen,
  Pencil,
  GraduationCap,
  Brain,
  Trophy,
  Star,
} from "lucide-react";

export const learningGroups = [
  {
    id: 1,
    group: "Group A",
    title: "Classes 1 - 2",
    description:
      "Young learners begin their TOPIQ journey by building strong fundamentals through engaging daily practice and fun learning activities.",
    icon: BookOpen,
    color: "text-blue-700",
    bg: "bg-blue-100",
    gradient: "from-blue-600 to-cyan-500",
  },

  {
    id: 2,
    group: "Group B",
    title: "Classes 3 - 4",
    description:
      "Students strengthen conceptual understanding while developing confidence through regular MCQ-based assessments.",
    icon: Pencil,
    color: "text-orange-600",
    bg: "bg-orange-100",
    gradient: "from-orange-500 to-amber-500",
  },

  {
    id: 3,
    group: "Group C",
    title: "Classes 5 - 6",
    description:
      "Focused learning encourages analytical thinking, better problem-solving and improved academic performance.",
    icon: Brain,
    color: "text-green-700",
    bg: "bg-green-100",
    gradient: "from-green-600 to-emerald-500",
  },

  {
    id: 4,
    group: "Group D",
    title: "Classes 7 - 8",
    description:
      "Students prepare for advanced concepts with structured practice, performance tracking and statewide competition.",
    icon: GraduationCap,
    color: "text-purple-700",
    bg: "bg-purple-100",
    gradient: "from-purple-600 to-indigo-500",
  },

  {
    id: 5,
    group: "Group E",
    title: "Classes 9 - 10",
    description:
      "Special focus on board examination readiness, competitive learning and scholarship opportunities.",
    icon: Trophy,
    color: "text-red-600",
    bg: "bg-red-100",
    gradient: "from-red-500 to-pink-500",
  },

  {
    id: 6,
    group: "Group F",
    title: "Classes 11 - 12",
    description:
      "Advanced academic preparation with intelligent analytics, leadership rankings and career-focused excellence.",
    icon: Star,
    color: "text-yellow-600",
    bg: "bg-yellow-100",
    gradient: "from-yellow-500 to-orange-500",
  },
];

export const learningHighlights = [
  "6 Academic Learning Groups",
  "Class-wise Fair Competition",
  "Daily MCQ Practice",
  "Performance Analytics",
  "State Level Rankings",
  "Scholarships & Awards",
  "Digital Certificates",
  "Continuous Progress Tracking",
];