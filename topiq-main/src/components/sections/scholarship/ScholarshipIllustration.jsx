// src/components/sections/scholarship/ScholarshipIllustration.jsx

import { motion } from "framer-motion";

export default function ScholarshipIllustration() {
  return (
    <div className="relative mx-auto flex w-full max-w-[460px] items-center justify-center">
      <div className="absolute inset-8 rounded-full bg-blue-200/50 blur-3xl" />

      <motion.img
        src="/image/8.png"
        alt="TOPIQ Scholarship Program"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="relative z-10 h-[260px] w-full rounded-[2rem] object-cover shadow-2xl sm:h-[300px] lg:h-[340px]"
        loading="lazy"
      />
    </div>
  );
}
