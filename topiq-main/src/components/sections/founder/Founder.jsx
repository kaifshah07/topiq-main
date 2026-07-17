// src/components/sections/founder/Founder.jsx

import AnimatedSection from "../../../animations/AnimatedSection";
import FounderContent from "./FounderContent";
import FounderImage from "./FounderImage";
import FounderCard from "./FounderCard";
import founderData from "./founderData";

export default function Founder() {
  return (
    <section id="founder" className="relative overflow-hidden bg-white py-20 lg:py-24 flex items-center justify-center">
      {/* Background Decorations */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-indigo-100/40 blur-3xl pointer-events-none" />
      <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-cyan-100/40 blur-3xl pointer-events-none" />

      <div className="container relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full flex flex-col items-center justify-center">
        <AnimatedSection animation="fadeUp" className="w-full flex flex-col items-center">
          
          {/* Main Hero Row Split Section */}
          <div className="grid items-center gap-12 lg:gap-16 xl:gap-24 lg:grid-cols-2 w-full">
            <div className="w-full">
              <FounderContent />
            </div>
            <div className="flex items-center justify-center w-full">
              <FounderImage />
            </div>
          </div>

          {/* Premium Founder Profile Card Layer */}
          <div className="w-full mt-20 lg:mt-24">
            <FounderCard
              image={founderData.image}
              name={founderData.name}
              role={`${founderData.designation} • ${founderData.company}`}
              description={founderData.description}
              achievements={founderData.achievements}
              accent={founderData.accent}
            />
          </div>

        </AnimatedSection>
      </div>
    </section>
  );
}