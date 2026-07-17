import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import WhyTopiq from "../pages/WhyTopiq";
import ExamCategories from "../pages/ExamCategories";
import HowItWorks from "../pages/HowItWorks";
import SmartExam from "../pages/SmartExam";
import Performance from "../pages/Performance";
import LearningGroups from "../pages/LearningGroups";
import Recognition from "../pages/Recognition";
import VisionMission from "../pages/VisionMission";
import Founder from "../pages/Founder";
import Testimonials from "../pages/Testimonials";
import FAQ from "../pages/FAQ";
import DownloadApp from "../pages/DownloadApp";


export default function AppRoutes(){

return(

<Routes>

<Route path="/" element={<Home/>}/>

<Route path="/about" element={<About/>}/>

<Route path="/why-topiq" element={<WhyTopiq/>}/>

<Route path="/exam-categories" element={<ExamCategories/>}/>

<Route path="/how-it-works" element={<HowItWorks/>}/>

<Route path="/smart-exam" element={<SmartExam/>}/>

<Route path="/performance" element={<Performance/>}/>

<Route path="/learning-groups" element={<LearningGroups/>}/>

<Route path="/recognition" element={<Recognition/>}/>

<Route path="/vision-mission" element={<VisionMission/>}/>

<Route path="/founder" element={<Founder/>}/>

<Route path="/testimonials" element={<Testimonials/>}/>

<Route path="/faq" element={<FAQ/>}/>

<Route path="/download-app" element={<DownloadApp/>}/>

</Routes>

)

}