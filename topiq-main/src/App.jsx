import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Home from "./pages/Home";
import About from "./pages/About";
import FAQ from "./pages/FAQ";

import TalentTest from "./pages/TalentTest";
import Scholarship from "./pages/Scholarship";

import ExamCategories from "./pages/ExamCategories";
import LearningGroups from "./pages/LearningGroups";
import Performance from "./pages/Performance";
import Leaderboard from "./pages/Leaderboard";
import Recognition from "./pages/Recognition";
import Eligibility from "./pages/Eligibility";
import DownloadApp from "./pages/DownloadApp";

import VisionMission from "./pages/VisionMission";
import Founder from "./pages/Founder";
import Franchise from "./pages/Franchise";
import FranchiseEnquiry from "./pages/FranchiseEnquiry";
import StudentEnquiry from "./pages/StudentEnquiry";
import Contact from "./pages/Contact";

import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";
import HowItWorks from "./pages/HowItWorks";
import SmartExam from "./pages/SmartExam";
import WhyTopiq from "./pages/WhyTopiq";
import SiteLayout from "./components/layout/SiteLayout";

function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <Routes location={location}>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/why-topiq" element={<WhyTopiq />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/smart-exam" element={<SmartExam />} />

            <Route path="/talent-test" element={<TalentTest />} />
          <Route path="/scholarship" element={<Scholarship />} />
          <Route path="/exam-categories" element={<ExamCategories />} />
          <Route path="/learning-groups" element={<LearningGroups />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/recognition" element={<Recognition />} />
          <Route path="/eligibility" element={<Eligibility />} />
          <Route path="/download-app" element={<DownloadApp />} />

          <Route path="/vision-mission" element={<VisionMission />} />
          <Route path="/founder" element={<Founder />} />
          <Route path="/franchise" element={<Franchise />} />
          <Route path="/franchise-enquiry" element={<FranchiseEnquiry />} />
          <Route path="/student-enquiry" element={<StudentEnquiry />} />
          <Route path="/contact" element={<Contact />} />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
