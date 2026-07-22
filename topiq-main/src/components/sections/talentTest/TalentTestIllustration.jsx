// src/components/sections/talentTest/TalentTestIllustration.jsx

import { motion } from "framer-motion";

export default function TalentTestIllustration() {
  return (
    <div className="relative mx-auto flex w-full max-w-[460px] items-center justify-center">
      <div className="absolute inset-8 rounded-full bg-blue-100 blur-3xl" />

      <motion.img
        src="/image/7.png"
        alt="TOPIQ Talent Test"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="relative z-10 h-[260px] w-full rounded-[2rem] object-cover shadow-2xl sm:h-[300px] lg:h-[340px]"
        loading="lazy"
      />
    </div>
  );
}
