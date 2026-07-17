import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function DesktopButtons() {
  const scrollToEnquiryForm = () => {
    const enquiryForm = document.getElementById("student-enquiry-form");

    if (enquiryForm) {
      enquiryForm.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="hidden lg:flex items-center gap-3 xl:gap-4">
      {/* Login Button */}

      <Link to="/login">
        <motion.button
          type="button"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="
            h-10
            xl:h-11
            rounded-xl
            border
            border-slate-200
            bg-white
            px-5
            xl:px-6
            text-sm
            font-semibold
            text-[#01295A]
            transition-all
            duration-300
            hover:border-[#01295A]
            hover:shadow-md
            whitespace-nowrap
          "
        >
          Login
        </motion.button>
      </Link>

      {/* Start Learning */}

      <motion.button
        type="button"
        onClick={scrollToEnquiryForm}
        whileHover={{
          y: -2,
          scale: 1.02,
        }}
        whileTap={{
          scale: 0.97,
        }}
        className="
          group
          flex
          h-10
          xl:h-11
          items-center
          gap-2
          rounded-xl
          bg-[#01295A]
          px-5
          xl:px-6
          text-sm
          font-semibold
          text-white
          shadow-lg
          transition-all
          duration-300
          hover:bg-[#013A80]
          whitespace-nowrap
        "
      >
        <span>Start Learning</span>

        <motion.span
          whileHover={{ x: 3 }}
          className="flex items-center"
        >
          <ArrowRight size={16} />
        </motion.span>
      </motion.button>
    </div>
  );
}