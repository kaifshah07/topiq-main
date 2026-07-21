import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import SiteLayout from "./components/layout/SiteLayout";

const pages = {
  Home: lazy(() => import("./pages/Home")),
  About: lazy(() => import("./pages/About")),
  WhyTopiq: lazy(() => import("./pages/WhyTopiq")),
  HowItWorks: lazy(() => import("./pages/HowItWorks")),
  SmartExam: lazy(() => import("./pages/SmartExam")),
  TalentTest: lazy(() => import("./pages/TalentTest")),
  Scholarship: lazy(() => import("./pages/Scholarship")),
  ExamCategories: lazy(() => import("./pages/ExamCategories")),
  LearningGroups: lazy(() => import("./pages/LearningGroups")),
  Performance: lazy(() => import("./pages/Performance")),
  Leaderboard: lazy(() => import("./pages/Leaderboard")),
  Recognition: lazy(() => import("./pages/Recognition")),
  Eligibility: lazy(() => import("./pages/Eligibility")),
  DownloadApp: lazy(() => import("./pages/DownloadApp")),
  VisionMission: lazy(() => import("./pages/VisionMission")),
  Founder: lazy(() => import("./pages/Founder")),
  Franchise: lazy(() => import("./pages/Franchise")),
  FranchiseEnquiry: lazy(() => import("./pages/FranchiseEnquiry")),
  StudentEnquiry: lazy(() => import("./pages/StudentEnquiry")),
  Contact: lazy(() => import("./pages/Contact")),
  Login: lazy(() => import("./pages/Login")),
  Register: lazy(() => import("./pages/Register")),
  FAQ: lazy(() => import("./pages/FAQ")),
  PrivacyPolicy: lazy(() => import("./pages/PrivacyPolicy")),
  NotFound: lazy(() => import("./pages/NotFound")),
};

const routes = [
  ["/", "Home"], ["/about", "About"], ["/why-topiq", "WhyTopiq"],
  ["/how-it-works", "HowItWorks"], ["/smart-exam", "SmartExam"],
  ["/talent-test", "TalentTest"], ["/scholarship", "Scholarship"],
  ["/exam-categories", "ExamCategories"], ["/learning-groups", "LearningGroups"],
  ["/performance", "Performance"], ["/leaderboard", "Leaderboard"],
  ["/recognition", "Recognition"], ["/eligibility", "Eligibility"],
  ["/download-app", "DownloadApp"], ["/vision-mission", "VisionMission"],
  ["/founder", "Founder"], ["/franchise", "Franchise"],
  ["/franchise-enquiry", "FranchiseEnquiry"], ["/student-enquiry", "StudentEnquiry"],
  ["/contact", "Contact"], ["/login", "Login"], ["/register", "Register"],
  ["/faq", "FAQ"], ["/privacy-policy", "PrivacyPolicy"], ["*", "NotFound"],
];

function RouteFallback() {
  return (
    <div className="grid min-h-[55vh] place-items-center" role="status" aria-live="polite">
      <div className="flex items-center gap-3 text-sm font-semibold text-slate-600">
        <span className="h-5 w-5 animate-spin rounded-full border-2 border-blue-200 border-t-blue-700" />
        Loading page…
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route element={<SiteLayout />}>
            {routes.map(([path, pageName]) => {
              const Page = pages[pageName];
              return <Route key={path} path={path} element={<Page />} />;
            })}
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
