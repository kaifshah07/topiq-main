import {
  UserPlus,
  BookOpen,
  ClipboardCheck,
  BarChart3,
  Trophy,
  Award,
  Clock,
  Target,
  Medal,
  GraduationCap,
} from "lucide-react";

/* ===============================
   Exam Timeline
================================ */

export const examSteps = [
  {
    id: 1,
    title: "Register",
    description:
      "Complete your online registration and choose your appropriate learning group.",
    icon: UserPlus,
    color: "text-blue-700",
    bg: "bg-blue-100",
  },

  {
    id: 2,
    title: "100-Day Challenge",
    description:
      "Receive daily MCQs and participate in the TOPIQ Talent Test for 100 consecutive days.",
    icon: BookOpen,
    color: "text-orange-600",
    bg: "bg-orange-100",
  },

  {
    id: 3,
    title: "Daily Evaluation",
    description:
      "Get instant scores after each day's assessment with detailed performance insights.",
    icon: ClipboardCheck,
    color: "text-green-700",
    bg: "bg-green-100",
  },

  {
    id: 4,
    title: "Performance Tracking",
    description:
      "Monitor your progress through smart analytics, rankings and detailed reports.",
    icon: BarChart3,
    color: "text-purple-700",
    bg: "bg-purple-100",
  },

  {
    id: 5,
    title: "Final Ranking",
    description:
      "State-level rankings are prepared based on your overall performance throughout the challenge.",
    icon: Trophy,
    color: "text-red-600",
    bg: "bg-red-100",
  },

  {
    id: 6,
    title: "Awards & Scholarships",
    description:
      "Top-performing students receive scholarships, certificates, medals and recognition.",
    icon: Award,
    color: "text-yellow-600",
    bg: "bg-yellow-100",
  },
];

/* ===============================
   Feature Grid
================================ */

export const examFeatures = [
  {
    id: 1,
    title: "100-Day Learning Journey",
    icon: Clock,
  },
  {
    id: 2,
    title: "Daily MCQ Practice",
    icon: BookOpen,
  },
  {
    id: 3,
    title: "Instant Score & Feedback",
    icon: Target,
  },
  {
    id: 4,
    title: "Live Performance Analytics",
    icon: BarChart3,
  },
  {
    id: 5,
    title: "State-Level Rankings",
    icon: Trophy,
  },
  {
    id: 6,
    title: "Scholarships & Awards",
    icon: Medal,
  },
  {
    id: 7,
    title: "Digital Certificates",
    icon: GraduationCap,
  },
  {
    id: 8,
    title: "Fair Group-wise Competition",
    icon: UserPlus,
  },
];

/* ===============================
   Quick Highlights
================================ */

export const examHighlights = [
  "100-Day Online Challenge",
  "Daily MCQ Assessments",
  "Instant Score & Feedback",
  "Real-Time Leaderboard",
  "Performance Analytics",
  "Digital Certificates",
  "Scholarship Opportunities",
  "State-Level Recognition",
];