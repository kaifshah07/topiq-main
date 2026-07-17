import {
  Users,
  School,
  Trophy,
  BookOpen,
  GraduationCap,
  Award,
} from "lucide-react";

export const statistics = [
  {
    id: 1,
    icon: Users,
    number: 50000,
    suffix: "+",
    title: "Students",
    description: "Registered Across Maharashtra",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    borderColor: "border-blue-200",
  },

  {
    id: 2,
    icon: School,
    number: 500,
    suffix: "+",
    title: "Schools",
    description: "Participating Schools",
    color: "text-green-600",
    bgColor: "bg-green-100",
    borderColor: "border-green-200",
  },

  {
    id: 3,
    icon: Trophy,
    number: 100,
    suffix: "",
    title: "Days",
    description: "Daily Learning Challenge",
    color: "text-orange-500",
    bgColor: "bg-orange-100",
    borderColor: "border-orange-200",
  },

  {
    id: 4,
    icon: BookOpen,
    number: 100000,
    suffix: "+",
    title: "MCQs",
    description: "Practice Questions",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
    borderColor: "border-purple-200",
  },

  {
    id: 5,
    icon: GraduationCap,
    number: 15,
    suffix: "+",
    title: "Learning Groups",
    description: "Class-wise Categories",
    color: "text-cyan-600",
    bgColor: "bg-cyan-100",
    borderColor: "border-cyan-200",
  },

  {
    id: 6,
    icon: Award,
    number: 10,
    prefix: "₹",
    suffix: "L+",
    title: "Scholarships",
    description: "Rewards & Recognition",
    color: "text-red-600",
    bgColor: "bg-red-100",
    borderColor: "border-red-200",
  },
];