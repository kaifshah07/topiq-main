// src/components/layout/footer/footer.js

const footerData = {
  company: {
    name: "TOPIQ",
    tagline: "AI-Powered Learning Platform for Competitive Exams",
    description: "TOPIQ helps students prepare smarter with AI-powered learning, personalized study plans, mock tests, performance analytics, leaderboards, scholarships, and expert guidance.",
    logo: "/images/logo.svg",
  },
  companyLinks: [
    { id: 1, label: "Home", href: "#hero" },
    { id: 2, label: "About", href: "#about" },
    { id: 3, label: "Features", href: "#why-topiq" },
    { id: 4, label: "How It Works", href: "#how-it-works" },
    { id: 5, label: "Download App", href: "#download-app" },
  ],
  examLinks: [
    { id: 1, label: "UPSC", href: "#exam-categories" },
    { id: 2, label: "MPSC", href: "#exam-categories" },
    { id: 3, label: "SSC", href: "#exam-categories" },
    { id: 4, label: "Banking", href: "#exam-categories" },
    { id: 5, label: "Railway", href: "#exam-categories" },
    { id: 6, label: "NEET / JEE", href: "#exam-categories" },
  ],
  resources: [
    { id: 1, label: "FAQ", href: "#faq" },
    { id: 2, label: "Testimonials", href: "#testimonials" },
    { id: 3, label: "Privacy Policy", href: "/privacy-policy" },
    { id: 4, label: "Terms & Conditions", href: "/terms" },
    { id: 5, label: "Support", href: "#contact" },
  ],
  contact: {
    email: "support@topiq.in",
    phone: "+91 98765 43210",
    address: "Aurangabad, Maharashtra, India",
  },
  social: [
    { id: 1, platform: "Facebook", icon: "Facebook", url: "https://facebook.com/" },
    { id: 2, platform: "Instagram", icon: "Instagram", url: "https://instagram.com/" },
    { id: 3, platform: "LinkedIn", icon: "Linkedin", url: "https://linkedin.com/" },
    { id: 4, platform: "YouTube", icon: "Youtube", url: "https://youtube.com/" },
    { id: 5, platform: "X", icon: "Twitter", url: "https://x.com/" },
  ],
  app: {
    googlePlay: {
      title: "Google Play",
      icon: "/images/download-app/google-play.svg",
      url: "https://play.google.com/",
    },
    appStore: {
      title: "App Store",
      icon: "/images/download-app/app-store.svg",
      url: "https://www.apple.com/app-store/",
    },
  },
  copyright: `© ${new Date().getFullYear()} TOPIQ. All Rights Reserved.`,
  madeWith: "Designed with ❤️ for ambitious learners.",
  accent: "from-blue-600 via-indigo-600 to-cyan-500",
};

export default footerData;