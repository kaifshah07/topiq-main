import {
  Trophy,
  Target,
  BookOpen,
  Medal,
  Award,
  TrendingUp,
  Star,
  GraduationCap,
} from "lucide-react";

/* ===========================
   Dashboard Statistics
=========================== */

export const dashboardStats = [
  {
    id: 1,
    title: "Current Rank",
    value: "#23",
    subtitle: "State Leaderboard",
    icon: Trophy,
    color: "text-yellow-500",
    bg: "bg-yellow-100",
  },
  {
    id: 2,
    title: "Accuracy",
    value: "92%",
    subtitle: "Correct Answers",
    icon: Target,
    color: "text-green-600",
    bg: "bg-green-100",
  },
  {
    id: 3,
    title: "Daily MCQs",
    value: "15",
    subtitle: "Completed Today",
    icon: BookOpen,
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    id: 4,
    title: "Scholarship Score",
    value: "860",
    subtitle: "Reward Points",
    icon: GraduationCap,
    color: "text-purple-600",
    bg: "bg-purple-100",
  },
];

/* ===========================
   Weekly Performance Chart
=========================== */

export const performanceChart = [
  { day: "Mon", score: 82 },
  { day: "Tue", score: 90 },
  { day: "Wed", score: 87 },
  { day: "Thu", score: 95 },
  { day: "Fri", score: 91 },
  { day: "Sat", score: 97 },
  { day: "Sun", score: 94 },
];

/* ===========================
   Progress Tracking
=========================== */

export const progressData = [
  {
    title: "100-Day Challenge",
    progress: 76,
    color: "bg-blue-600",
  },
  {
    title: "Daily MCQ Completion",
    progress: 92,
    color: "bg-green-500",
  },
  {
    title: "Scholarship Eligibility",
    progress: 81,
    color: "bg-orange-500",
  },
  {
    title: "Learning Streak",
    progress: 68,
    color: "bg-purple-500",
  },
];

/* ===========================
   Subject Performance
=========================== */

export const subjectPerformance = [
  {
    subject: "Mathematics",
    score: 96,
  },
  {
    subject: "Science",
    score: 91,
  },
  {
    subject: "English",
    score: 89,
  },
  {
    subject: "Reasoning",
    score: 94,
  },
  {
    subject: "General Knowledge",
    score: 88,
  },
];

/* ===========================
   Leaderboard
=========================== */

export const leaderboard = [
  {
    id: 1,
    rank: 1,
    name: "Rahul Sharma",
    score: 99,
    badge: "Gold",
  },
  {
    id: 2,
    rank: 2,
    name: "Priya Patil",
    score: 98,
    badge: "Silver",
  },
  {
    id: 3,
    rank: 3,
    name: "Aman Verma",
    score: 97,
    badge: "Bronze",
  },
  {
    id: 4,
    rank: 4,
    name: "Sneha Kulkarni",
    score: 96,
    badge: "Top Performer",
  },
  {
    id: 5,
    rank: 5,
    name: "Aryan Singh",
    score: 95,
    badge: "Rising Star",
  },
];

/* ===========================
   Dashboard Features
=========================== */

export const dashboardFeatures = [
  {
    title: "Live Leaderboard",
    icon: Trophy,
  },
  {
    title: "Performance Analytics",
    icon: TrendingUp,
  },
  {
    title: "Daily Progress",
    icon: Target,
  },
  {
    title: "Scholarship Tracking",
    icon: GraduationCap,
  },
  {
    title: "Achievement Badges",
    icon: Award,
  },
  {
    title: "Top Rankings",
    icon: Medal,
  },
];

/* ===========================
   Achievement Badges
=========================== */

export const achievements = [
  {
    title: "Top 100",
    icon: Trophy,
  },
  {
    title: "92% Accuracy",
    icon: Target,
  },
  {
    title: "30-Day Streak",
    icon: Star,
  },
  {
    title: "Scholarship Eligible",
    icon: GraduationCap,
  },
];