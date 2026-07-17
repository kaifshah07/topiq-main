// src/components/sections/downloadApp/DownloadApp.jsx

import AnimatedSection from "../../../animations/AnimatedSection";
import DownloadAppContent from "./DownloadAppContent";
import DownloadAppImage from "./DownloadAppImage";

export default function DownloadApp() {
  return (
    <section id="download-app" className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 py-20 lg:py-24 flex items-center justify-center border-t border-slate-100">
      {/* Background Glow Highlights */}
      <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-blue-200/40 blur-3xl pointer-events-none" />
      <div className="absolute -right-40 bottom-10 h-[420px] w-[420px] rounded-full bg-indigo-200/40 blur-3xl pointer-events-none" />

      {/* Grid Pattern Layer overlay */}
      <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] [background-size:40px_40px] pointer-events-none" />

      <div className="container relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full">
        <AnimatedSection animation="fadeUp" className="w-full">
          <div className="grid items-center gap-12 lg:gap-16 xl:gap-24 lg:grid-cols-2 w-full">
            {/* Content Left stack */}
            <div className="w-full">
              <DownloadAppContent />
            </div>
            {/* Illustration Right Frame */}
            <div className="flex items-center justify-center w-full">
              <DownloadAppImage />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}