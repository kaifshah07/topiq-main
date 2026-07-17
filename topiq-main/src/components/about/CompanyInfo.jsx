import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import logo from "../../../assets/images/logos/logo.png";

export default function CompanyInfo() {
  return (
    <div>

      {/* Logo */}

      <Link
        to="/"
        className="inline-flex items-center gap-4"
      >
        <img
          src={logo}
          alt="TOPIQ Talent Test"
          className="
            h-24
            w-auto
            object-contain
            drop-shadow-xl
          "
        />

        <div>

          <h2 className="text-3xl font-black text-blue-900">
            TOPIQ
          </h2>

          <p className="text-orange-500 font-semibold tracking-wide">
            Talent Test (TTT)
          </p>

        </div>

      </Link>

      {/* Description */}

      <p className="mt-8 text-slate-600 leading-8">

        TOPIQ Talent Test (TTT) is Maharashtra's premier
        <span className="font-semibold text-blue-900">
          {" "}100-Day Online MCQ Talent Recognition &
          Scholarship Program{" "}
        </span>

        designed to help students strengthen concepts,
        improve academic performance, develop competitive
        skills and unlock scholarship opportunities through
        continuous learning and healthy competition.

      </p>

      {/* Tagline */}

      <div className="mt-8">

        <span
          className="
            inline-flex
            items-center
            rounded-full
            bg-orange-100
            text-orange-600
            px-6
            py-3
            font-bold
          "
        >
          Every Talent Deserves Recognition
        </span>

      </div>

      {/* Highlights */}

      <div className="grid grid-cols-3 gap-4 mt-10">

        <div
          className="
            bg-white
            rounded-2xl
            shadow-md
            p-5
            text-center
          "
        >

          <h3 className="text-3xl font-black text-blue-900">
            100+
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            Challenge Days
          </p>

        </div>

        <div
          className="
            bg-white
            rounded-2xl
            shadow-md
            p-5
            text-center
          "
        >

          <h3 className="text-3xl font-black text-orange-500">
            6000+
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            Practice MCQs
          </p>

        </div>

        <div
          className="
            bg-white
            rounded-2xl
            shadow-md
            p-5
            text-center
          "
        >

          <h3 className="text-3xl font-black text-green-600">
            24×7
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            Online Access
          </p>

        </div>

      </div>

      {/* Buttons */}

      <div className="flex flex-wrap gap-4 mt-10">

        <Link
          to="/register"
          className="
            inline-flex
            items-center
            gap-2
            bg-blue-900
            text-white
            px-7
            py-4
            rounded-full
            font-bold
            shadow-lg
            hover:bg-blue-800
            hover:-translate-y-1
            transition-all
          "
        >
          Register Now

          <ArrowRight size={18} />
        </Link>

        <Link
          to="/about"
          className="
            inline-flex
            items-center
            rounded-full
            border-2
            border-blue-900
            px-7
            py-4
            font-bold
            text-blue-900
            hover:bg-blue-900
            hover:text-white
            transition-all
          "
        >
          Learn More
        </Link>

      </div>

    </div>
  );
}