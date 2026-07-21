import { motion } from "framer-motion";
import {
  FaTrophy,
  FaChartLine,
  FaUsers,
  FaMedal,
} from "react-icons/fa";

export default function HeroDashboard() {
  return (
    <div
      className="
        relative
        mx-auto
        flex
        h-[480px]
        w-full
        max-w-lg
        items-center
        justify-center
      "
    >
      {/* ===================== MAIN DASHBOARD ===================== */}

      <motion.div
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          relative
          z-10
          aspect-square
          w-[320px]
          overflow-hidden
          rounded-[30px]
          bg-white
          p-6
          shadow-[0_20px_60px_rgba(15,23,42,0.15)]
        "
      >
        {/* Header */}

        <div className="flex items-center justify-between">
          <h3 className="text-lg font-black text-slate-900">
            TOPIQ Dashboard
          </h3>

          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-orange-100
            "
          >
            <FaMedal className="text-lg text-orange-500" />
          </div>
        </div>

        {/* Performance Card */}

        <div className="mt-5 rounded-3xl bg-slate-100 p-5">
          <p className="text-sm text-gray-500">
            Today's Performance
          </p>

          <h2 className="mt-2 text-4xl font-black text-blue-900">
            95%
          </h2>

          <div className="mt-5 h-3 overflow-hidden rounded-full bg-gray-200">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "95%" }}
              transition={{
                duration: 2,
                ease: "easeOut",
              }}
              className="
                h-full
                rounded-full
                bg-gradient-to-r
                from-orange-500
                to-orange-400
              "
            />
          </div>
        </div>

        {/* Stats */}

        <div className="mt-5 grid grid-cols-2 gap-4">
          {/* Rank */}

          <div className="rounded-2xl bg-blue-50 p-4">
            <p className="text-xs text-gray-500">
              Rank
            </p>

            <h3 className="mt-1 text-2xl font-black text-blue-700">
              #24
            </h3>
          </div>

          {/* Accuracy */}

          <div className="rounded-2xl bg-green-50 p-4">
            <p className="text-xs text-gray-500">
              Accuracy
            </p>

            <h3 className="mt-1 text-2xl font-black text-green-600">
              98%
            </h3>
          </div>
        </div>
      </motion.div>
            {/* ===================== RANK CARD ===================== */}

      <motion.div
        initial={{
          opacity: 0,
          x: -60,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          delay: 0.4,
          duration: 0.6,
        }}
        whileHover={{
          scale: 1.04,
          y: -4,
        }}
        className="
          absolute
          left-0
          top-16
          z-20
          w-56
          rounded-3xl
          bg-white
          p-4
          shadow-xl
        "
      >
        <div className="flex items-center gap-4">
          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-orange-100
            "
          >
            <FaTrophy className="text-xl text-orange-500" />
          </div>

          <div>
            <p className="text-xs text-gray-500">
              Today's Rank
            </p>

            <h3 className="text-3xl font-black text-orange-500">
              #24
            </h3>
          </div>
        </div>

        <p className="mt-3 text-sm font-bold text-green-600">
          ▲ +12 Places
        </p>
      </motion.div>

      {/* ===================== PERFORMANCE CARD ===================== */}

      <motion.div
        initial={{
          opacity: 0,
          x: 60,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          delay: 0.6,
          duration: 0.6,
        }}
        whileHover={{
          scale: 1.04,
          y: -4,
        }}
        className="
          absolute
          right-0
          bottom-16
          z-20
          w-60
          rounded-3xl
          bg-white
          p-4
          shadow-xl
        "
      >
        <div className="flex items-center gap-4">
          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-blue-100
            "
          >
            <FaChartLine className="text-lg text-blue-700" />
          </div>

          <div>
            <p className="text-xs text-gray-500">
              Score
            </p>

            <h3 className="text-2xl font-black text-blue-900">
              38/40
            </h3>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>Progress</span>
            <span>95%</span>
          </div>

          <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-200">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "95%" }}
              transition={{
                duration: 2,
                delay: 0.8,
              }}
              className="
                h-full
                rounded-full
                bg-gradient-to-r
                from-blue-600
                to-blue-400
              "
            />
          </div>
        </div>
      </motion.div>
            {/* ===================== STUDENTS ONLINE ===================== */}

      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.04,
        }}
        className="
          absolute
          bottom-4
          left-6
          z-30
          w-52
          rounded-3xl
          bg-white
          p-4
          shadow-xl
        "
      >
        <div className="flex items-center gap-3">
          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-green-100
            "
          >
            <FaUsers className="text-2xl text-green-600" />
          </div>

          <div>
            <p className="text-xs text-gray-500">
              Students Online
            </p>

            <h3 className="text-2xl font-black text-green-600">
              12,486
            </h3>
          </div>
        </div>
      </motion.div>

      {/* ===================== AI PREDICTION ===================== */}

      <motion.div
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.04,
        }}
        className="
          absolute
          right-6
          top-4
          z-30
          w-52
          rounded-3xl
          bg-gradient-to-r
          from-blue-700
          to-blue-900
          p-5
          text-white
          shadow-2xl
        "
      >
        <p className="text-xs uppercase tracking-wide opacity-80">
          AI Prediction
        </p>

        <h2 className="mt-2 text-3xl font-black">
          98%
        </h2>

        <p className="mt-2 text-sm opacity-90">
          Score improvement probability
        </p>
      </motion.div>
    </div>
  );
}