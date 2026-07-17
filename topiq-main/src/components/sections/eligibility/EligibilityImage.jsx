import { motion } from "framer-motion";
import {
  GraduationCap,
  Trophy,
  BookOpen,
  Award,
} from "lucide-react";

import eligibilityImage from "../../../assets/images/eligibility/eligibility-students.png";

export default function EligibilityImage() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -60,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.7,
      }}
      className="relative"
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          -top-10
          -left-10
          w-72
          h-72
          rounded-full
          bg-blue-200/40
          blur-3xl
          -z-10
        "
      />

      <div
        className="
          absolute
          -bottom-10
          -right-10
          w-80
          h-80
          rounded-full
          bg-orange-200/40
          blur-3xl
          -z-10
        "
      />

      {/* Main Image */}

      <img
        src={eligibilityImage}
        alt="Eligible Students"
        className="
          w-full
          rounded-3xl
          shadow-2xl
          object-cover
        "
      />

      {/* Floating Badge 1 */}

      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="
          absolute
          top-8
          -left-8
          bg-white
          rounded-2xl
          shadow-xl
          px-5
          py-4
          flex
          items-center
          gap-4
        "
      >
        <div
          className="
            w-12
            h-12
            rounded-xl
            bg-blue-100
            flex
            items-center
            justify-center
          "
        >
          <GraduationCap
            className="text-blue-900"
            size={24}
          />
        </div>

        <div>
          <h4 className="font-bold text-slate-900">
            Classes
          </h4>

          <p className="text-sm text-slate-500">
            1 to 12
          </p>
        </div>
      </motion.div>

      {/* Floating Badge 2 */}

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
        }}
        className="
          absolute
          top-1/2
          -right-10
          bg-white
          rounded-2xl
          shadow-xl
          px-5
          py-4
          flex
          items-center
          gap-4
        "
      >
        <div
          className="
            w-12
            h-12
            rounded-xl
            bg-orange-100
            flex
            items-center
            justify-center
          "
        >
          <BookOpen
            className="text-orange-500"
            size={24}
          />
        </div>

        <div>
          <h4 className="font-bold text-slate-900">
            All Boards
          </h4>

          <p className="text-sm text-slate-500">
            State • CBSE • ICSE
          </p>
        </div>
      </motion.div>

      {/* Floating Badge 3 */}

      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-8
          left-10
          bg-white
          rounded-2xl
          shadow-xl
          px-5
          py-4
          flex
          items-center
          gap-4
        "
      >
        <div
          className="
            w-12
            h-12
            rounded-xl
            bg-green-100
            flex
            items-center
            justify-center
          "
        >
          <Trophy
            className="text-green-600"
            size={24}
          />
        </div>

        <div>
          <h4 className="font-bold text-slate-900">
            Scholarships
          </h4>

          <p className="text-sm text-slate-500">
            Merit Based
          </p>
        </div>
      </motion.div>

      {/* Floating Badge 4 */}

      <motion.div
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
        }}
        className="
          absolute
          -bottom-6
          right-8
          bg-white
          rounded-2xl
          shadow-xl
          px-5
          py-4
          flex
          items-center
          gap-4
        "
      >
        <div
          className="
            w-12
            h-12
            rounded-xl
            bg-purple-100
            flex
            items-center
            justify-center
          "
        >
          <Award
            className="text-purple-600"
            size={24}
          />
        </div>

        <div>
          <h4 className="font-bold text-slate-900">
            Certificate
          </h4>

          <p className="text-sm text-slate-500">
            Digital & Verified
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}