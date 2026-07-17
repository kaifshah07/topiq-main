import { motion } from "framer-motion";

import { aboutFeatures } from "../../../data/about";
import FeatureCard from "./FeatureCard";

export default function FeatureGrid() {
  return (
    <section className="mt-20">
      {/* Section Header */}

      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.6,
        }}
        className="text-center max-w-3xl mx-auto"
      >
        <span
          className="
            inline-flex
            items-center
            rounded-full
            bg-blue-100
            px-5
            py-2
            text-sm
            font-semibold
            text-blue-700
          "
        >
          Why Students Choose TOPIQ
        </span>

        <h2
          className="
            mt-5
            text-4xl
            lg:text-5xl
            font-black
            text-slate-900
          "
        >
          Learn.
          <span className="text-blue-900"> Compete.</span>
          <span className="text-orange-500"> Excel.</span>
        </h2>

        <p
          className="
            mt-6
            text-lg
            leading-8
            text-slate-600
          "
        >
          TOPIQ combines daily learning, intelligent performance tracking,
          scholarships, and recognition to help every student achieve their
          academic goals.
        </p>
      </motion.div>

      {/* Feature Cards */}

      <div
        className="
          mt-16
          grid
          gap-8
          sm:grid-cols-2
          xl:grid-cols-4
        "
      >
        {aboutFeatures.map((feature, index) => (
          <FeatureCard
            key={feature.id}
            feature={feature}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}