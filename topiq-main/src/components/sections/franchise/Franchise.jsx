// src/components/sections/franchise/Franchise.jsx

import FranchiseHero from "./FranchiseHero";
import FranchiseStats from "./FranchiseStats";
import FranchiseBenefits from "./FranchiseBenefits";
import FranchiseProcess from "./FranchiseProcess";
import FranchiseForm from "./FranchiseForm";

export default function Franchise() {
  return (
    <section id="franchise" className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 pb-20 pt-28 sm:pt-32 lg:py-24 flex items-center justify-center border-t border-slate-100">
      {/* Background Glow Decorations */}
      <div className="absolute -left-40 top-0 h-[500px] w-[420px] rounded-full bg-blue-200/20 blur-3xl pointer-events-none" />
      <div className="absolute -right-40 bottom-0 h-[500px] w-[420px] rounded-full bg-indigo-200/20 blur-3xl pointer-events-none" />

      {/* Modern Grid Pattern Layer */}
      <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] [background-size:40px_40px] pointer-events-none" />

      <div className="container relative z-10 mx-auto max-w-7xl px-0 lg:px-8 w-full flex flex-col items-center">
        <div className="w-full flex flex-col items-center">
          
          {/* 1. Hero Title & Highlights */}
          <FranchiseHero />
          {/* 4. Combined Lead Onboarding Form Area (Form Placed on Top of Journey Process Map) */}
          <div className="w-full mt-14 sm:mt-20 lg:mt-28 flex flex-col items-center">
            <FranchiseForm />
          </div>
          {/* 2. Numeric Statistics Core Matrix */}
          <div className="w-full mt-16">
            <FranchiseStats />
          </div>

          {/* 3. Platform Growth Benefits Cards Matrix */}
          <div className="w-full mt-16 sm:mt-20 lg:mt-24">
            <FranchiseBenefits />
          </div>



          {/* 5. Horizontal Journey Pathway Timeline steps */}
          <div className="w-full mt-16 sm:mt-20 lg:mt-28">
            <FranchiseProcess />
          </div>

        </div>
      </div>
    </section>
  );
}
