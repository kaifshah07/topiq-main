import { motion } from "framer-motion";

import { scholarships } from "../../../data/awards";
import ScholarshipCard from "./ScholarshipCard";

export default function ScholarshipGrid() {
  return (
    <section className="mt-24">

      {/* ================= Section Heading ================= */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
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
            text-blue-900
          "
        >
          Scholarships
        </span>

        <h2
          className="
            mt-6
            text-4xl
            lg:text-5xl
            font-black
            text-slate-900
          "
        >
          Earn
          <span className="text-blue-900">
            {" "}Scholarships Through Excellence
          </span>
        </h2>

        <p
          className="
            mt-6
            text-lg
            leading-8
            text-slate-600
          "
        >
          TOPIQ rewards dedication, consistency and academic
          performance. Students can earn scholarships,
          exciting rewards and statewide recognition by
          participating in the 100-Day Talent Test.
        </p>
      </motion.div>

      {/* ================= Scholarship Cards ================= */}

      <div
        className="
          mt-16
          grid
          gap-8
          md:grid-cols-2
          lg:grid-cols-3
        "
      >
        {scholarships.map((scholarship, index) => (
          <ScholarshipCard
            key={scholarship.id}
            scholarship={scholarship}
            index={index}
          />
        ))}
      </div>

      {/* ================= Bottom CTA ================= */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="
          mt-20
          rounded-3xl
          bg-gradient-to-r
          from-blue-900
          via-blue-800
          to-blue-600
          p-10
          lg:p-14
          text-center
          shadow-2xl
        "
      >
        <h3
          className="
            text-3xl
            lg:text-4xl
            font-black
            text-white
          "
        >
          Turn Your Knowledge Into Rewards
        </h3>

        <p
          className="
            mt-5
            max-w-3xl
            mx-auto
            text-lg
            leading-8
            text-blue-100
          "
        >
          Every correct answer brings you one step closer to
          scholarships, certificates, awards and statewide
          recognition. Learn consistently, compete confidently
          and unlock your true potential with TOPIQ.
        </p>

        <button
          className="
            mt-10
            rounded-full
            bg-white
            px-8
            py-4
            font-bold
            text-blue-900
            shadow-lg
            transition-all
            duration-300
            hover:scale-105
            hover:bg-orange-500
            hover:text-white
          "
        >
          Apply Now
        </button>
      </motion.div>

    </section>
  );
}