// src/components/sections/franchise/Franchise.jsx

import FranchiseHero from "./FranchiseHero";
import FranchiseStats from "./FranchiseStats";
import FranchiseBenefits from "./FranchiseBenefits";
import FranchiseProcess from "./FranchiseProcess";
import FranchiseForm from "./FranchiseForm";

export default function Franchise() {
  return (
    <section id="franchise" className="relative overflow-hidden border-t border-slate-100 bg-gradient-to-b from-slate-50 via-white to-slate-50 py-14 sm:py-16 lg:py-20">
      {/* Background Glow Decorations */}
      <div className="absolute -left-40 top-0 h-[500px] w-[420px] rounded-full bg-blue-200/20 blur-3xl pointer-events-none" />
      <div className="absolute -right-40 bottom-0 h-[500px] w-[420px] rounded-full bg-indigo-200/20 blur-3xl pointer-events-none" />

      {/* Modern Grid Pattern Layer */}
      <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] [background-size:40px_40px] pointer-events-none" />

      <div className="container relative z-10 mx-auto w-full max-w-7xl px-0 lg:px-8">
        <div className="w-full">
          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,0.88fr)_minmax(520px,1.12fr)] lg:gap-10 xl:gap-14">
            <div className="lg:sticky lg:top-28">
              <FranchiseHero />
            </div>
            <div className="w-full">
              <FranchiseForm />
            </div>
          </div>
          {/* 2. Numeric Statistics Core Matrix */}
          <div className="mt-14 w-full lg:mt-20">
            <FranchiseStats />
          </div>

          {/* 3. Platform Growth Benefits Cards Matrix */}
          <div className="mt-14 w-full lg:mt-20">
            <FranchiseBenefits />
          </div>



          {/* 5. Horizontal Journey Pathway Timeline steps */}
          <div className="mt-14 w-full lg:mt-20">
            <FranchiseProcess />
          </div>

        </div>
      </div>
    </section>
  );
}
