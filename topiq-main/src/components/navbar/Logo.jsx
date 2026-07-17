import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logos/logo.png";

export default function Logo() {
  return (
    <Link
      to="/"
      aria-label="TOPIQ Home"
      className="flex shrink-0 items-center"
    >
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
        className="flex items-center gap-2 lg:gap-3"
      >
        {/* Logo */}

        <div
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            overflow-hidden
            rounded-xl
            bg-white
            shadow-sm
            ring-1
            ring-slate-200
            sm:h-11
            sm:w-11
            md:h-12
            md:w-12
            lg:h-14
            lg:w-14
          "
        >
          <img
            src={logo}
            alt="TOPIQ Logo"
            draggable="false"
            className="h-full w-full object-contain p-1"
          />
        </div>

        {/* Brand */}

        <div className="leading-none">
          <h1
            className="
              text-lg
              font-extrabold
              tracking-tight
              sm:text-xl
              md:text-2xl
            "
          >
            <span className="text-[#01295A]">TOP</span>
            <span className="text-[#FE7C02]">-IQ</span>
          </h1>

          <p
            className="
              hidden
              sm:block
              mt-0.5
              text-[8px]
              uppercase
              tracking-[0.22em]
              text-slate-500
            "
          >
            Learn. Compete. Excel.
          </p>
        </div>
      </motion.div>
    </Link>
  );
}