import { motion } from "framer-motion";
import { FaGooglePlay, FaApple } from "react-icons/fa";

export default function AppDownload() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-20"
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div>
          <span className="inline-block bg-blue-100 text-blue-900 px-4 py-2 rounded-full font-semibold text-sm">
            Mobile Learning
          </span>

          <h2 className="mt-5 text-4xl lg:text-5xl font-black text-blue-900 leading-tight">
            Download the
            <br />
            TOPIQ App
          </h2>

          <p className="mt-6 text-slate-600 leading-8 text-lg">
            Practice daily MCQs, participate in talent tests, check rankings,
            download marksheets, earn scholarships and receive important
            notifications directly on your mobile.
          </p>

          <ul className="mt-8 space-y-3 text-slate-700">
            <li>✅ Daily MCQ Practice</li>
            <li>✅ Live Rankings</li>
            <li>✅ Scholarship Updates</li>
            <li>✅ Instant Results</li>
            <li>✅ Digital Certificates</li>
          </ul>
        </div>

        {/* Right Side */}
        <div className="flex flex-col sm:flex-row gap-5">
          {/* Google Play */}
          <button
            className="
              flex
              items-center
              gap-4
              bg-black
              text-white
              px-8
              py-5
              rounded-2xl
              shadow-xl
              hover:scale-105
              transition-all
              duration-300
            "
          >
            <FaGooglePlay size={34} />

            <div className="text-left">
              <p className="text-xs uppercase tracking-wide">
                Get it on
              </p>

              <p className="font-bold text-lg">
                Google Play
              </p>
            </div>
          </button>

          {/* App Store */}
          <button
            className="
              flex
              items-center
              gap-4
              bg-slate-900
              text-white
              px-8
              py-5
              rounded-2xl
              shadow-xl
              opacity-80
              cursor-not-allowed
            "
          >
            <FaApple size={34} />

            <div className="text-left">
              <p className="text-xs uppercase tracking-wide">
                Coming Soon
              </p>

              <p className="font-bold text-lg">
                App Store
              </p>
            </div>
          </button>
        </div>
      </div>
    </motion.section>
  );
}