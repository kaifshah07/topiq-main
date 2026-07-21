// src/components/sections/howItWorks/HowItWorksIllustration.jsx

import SlideRight from "../../../animations/SlideRight";

export default function HowItWorksIllustration() {
  return (
    <SlideRight>
      <div
        className="
          page-visual
          how-it-works-page-visual
          relative
          mx-auto
          w-full
          max-w-[300px]
          sm:max-w-[360px]
          lg:max-w-[420px]
        "
      >


 <img
  src="/student.png"
  alt="TOPIQ learning process"
  loading="lazy"
  className="
    w-full
    max-h-[400px]
    object-contain
    rounded-[32px]
    drop-shadow-2xl
  "
/>

      </div>
    </SlideRight>
  );
}
