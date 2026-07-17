import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function DesktopButtons() {
  const navigate = useNavigate();

  const handleStartLearning = () => {
    const enquiryForm = document.getElementById(
      "student-enquiry-form"
    );

    // If the form is already available on the current page
    if (enquiryForm) {
      enquiryForm.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      return;
    }

    // Go to the home page where StudentEnquiryForm is displayed
    navigate("/");

    // Wait for the home page and form to load
    setTimeout(() => {
      const form = document.getElementById(
        "student-enquiry-form"
      );

      if (form) {
        form.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 300);
  };

  return (
    <div className="flex items-center gap-3">
      {/* Login Button */}

      <Link to="/login">
        <motion.button
          type="button"
          whileHover={{
            y: -2,
          }}
          whileTap={{
            scale: 0.97,
          }}
          className="
            h-11
            whitespace-nowrap
            rounded-xl
            border
            border-slate-200
            bg-white/80
            px-6
            text-sm
            font-semibold
            text-[#01295A]
            shadow-sm
            transition-all
            duration-300
            hover:border-[#01295A]
            hover:shadow-md
          "
        >
          Login
        </motion.button>
      </Link>

      {/* Start Learning Button */}

      <motion.button
        type="button"
        onClick={handleStartLearning}
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
          h-11
          items-center
          gap-2
          whitespace-nowrap
          rounded-xl
          bg-[#01295A]
          px-6
          text-sm
          font-semibold
          text-white
          shadow-lg
          shadow-blue-900/20
          transition-all
          duration-300
          hover:bg-[#013A80]
        "
      >
        <span>Start Learning</span>

        <motion.span
          className="flex items-center"
          whileHover={{
            x: 3,
          }}
        >
          <ArrowRight size={16} />
        </motion.span>
      </motion.button>
    </div>
  );
}