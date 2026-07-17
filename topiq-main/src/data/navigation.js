// src/data/navigation.js

import {
  Info,
  Trophy,
  GraduationCap,
  BarChart3,
  Medal,
  Download,
  HelpCircle,
  Target,
  Building2,
  Eye,
  User,
  Award,
  Phone,
  Users,
  BookOpen,
  ClipboardCheck,
} from "lucide-react";

/* ==========================================================
   Main Navbar Navigation
========================================================== */

export const navigation = [
  {
    name: "Home",
    path: "/",
  },

  {
    name: "About",
    path: "/about",
  },

  {
    name: "Talent Test",
    path: "/talent-test",
  },

  {
    name: "Scholarship",
    path: "/scholarship",
  },

  {
    name: "Resources",
    dropdown: true,
    type: "resources",
  },

  {
    name: "About Us",
    dropdown: true,
    type: "company",
  },

  {
    name: "Franchise Enquiry",
    path: "/franchise-enquiry",
    highlight: true,
  },
];

/* ==========================================================
   Resources Mega Menu
========================================================== */

export const resourcesMenu = [
  {
    icon: ClipboardCheck,
    name: "Exam Categories",
    description: "Explore available tests",
    path: "/exam-categories",
    badge: "New",
  },

  {
    icon: BookOpen,
    name: "Learning Groups",
    description: "Smart learning communities",
    path: "/learning-groups",
  },

  {
    icon: BarChart3,
    name: "Performance Dashboard",
    description: "Track your progress",
    path: "/performance",
    badge: "Popular",
  },

  {
    icon: Medal,
    name: "Leaderboard",
    description: "Compete with toppers",
    path: "/leaderboard",
  },

  {
    icon: Award,
    name: "Awards & Recognition",
    description: "Celebrate achievements",
    path: "/recognition",
  },

  {
    icon: GraduationCap,
    name: "Scholarships",
    description: "Earn rewards & support",
    path: "/scholarship",
    badge: "Popular",
  },

  {
    icon: Target,
    name: "Eligibility",
    description: "Check participation criteria",
    path: "/eligibility",
  },

  {
    icon: Download,
    name: "Download App",
    description: "Learn anytime anywhere",
    path: "/download-app",
    badge: "Free",
  },

  {
    icon: HelpCircle,
    name: "FAQ",
    description: "Common questions",
    path: "/faq",
  },
];

/* ==========================================================
   Company Mega Menu
========================================================== */

export const companyMenu = [
  {
    icon: Info,
    name: "About TOPIQ",
    description: "Our story & journey",
    path: "/about",
  },

  {
    icon: Eye,
    name: "Vision & Mission",
    description: "Our future direction",
    path: "/vision-mission",
  },

  {
    icon: User,
    name: "Founder",
    description: "Meet our founder",
    path: "/founder",
  },

  {
    icon: Trophy,
    name: "Recognition",
    description: "Awards & Milestones",
    path: "/recognition",
  },

  {
    icon: Building2,
    name: "Franchise",
    description: "Partner with TOPIQ",
    path: "/franchise",
  },

  {
    icon: Users,
    name: "Student Enquiry",
    description: "Get expert guidance",
    path: "/student-enquiry",
  },

  {
    icon: Phone,
    name: "Contact",
    description: "Connect with us",
    path: "/contact",
  },
];

/* ==========================================================
   Footer Navigation
========================================================== */

export const footerNavigation = [
  {
    title: "Company",

    links: [
      {
        name: "About TOPIQ",
        path: "/about",
      },

      {
        name: "Vision & Mission",
        path: "/vision-mission",
      },

      {
        name: "Founder",
        path: "/founder",
      },

      {
        name: "Contact",
        path: "/contact",
      },
    ],
  },

  {
    title: "Resources",

    links: [
      {
        name: "Talent Test",
        path: "/talent-test",
      },

      {
        name: "Performance",
        path: "/performance",
      },

      {
        name: "Leaderboard",
        path: "/leaderboard",
      },

      {
        name: "Scholarship",
        path: "/scholarship",
      },

      {
        name: "Download App",
        path: "/download-app",
      },
    ],
  },
];

/* ==========================================================
   Navbar CTA
========================================================== */

export const navbarCTA = {
  login: {
    text: "Login",
    path: "/login",
  },

  register: {
    text: "Start Learning",
    path: "/register",
  },
};