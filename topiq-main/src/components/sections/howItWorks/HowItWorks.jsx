// src/components/sections/howItWorks/HowItWorks.jsx

import AnimatedSection from "../../../animations/AnimatedSection";
import ScaleIn from "../../../animations/ScaleIn";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { buttonHover } from "../../../utils/animationVariants";

import HowItWorksContent from "./HowItWorksContent";
import HowItWorksIllustration from "./HowItWorksIllustration";
import HowItWorksTimeline from "./HowItWorksTimeline";



/**
 * ==========================================================
 * HowItWorks
 * ==========================================================
 *
 * Complete How TOPIQ Works Section
 *
 * Includes:
 * ----------
 * ✅ Animated Header Content
 * ✅ Illustration Animation
 * ✅ Process Timeline
 * ✅ Responsive Layout
 *
 */


export default function HowItWorks(){


  return (

    <section

      id="how-it-works"

      className="
      relative
      overflow-hidden
      bg-slate-50
      pb-20
      pt-36
      lg:pb-28
      lg:pt-48
      "

    >




      {/* Background Decorations */}


      <div

        className="
        absolute
        -left-32
        top-20
        h-80
        w-80
        rounded-full
        bg-blue-200/30
        blur-3xl
        "

      />



      <div

        className="
        absolute
        -right-32
        bottom-20
        h-96
        w-96
        rounded-full
        bg-cyan-200/30
        blur-3xl
        "

      />






      <div

        className="
        container
        relative
        z-10
        mx-auto
        max-w-7xl
        px-6
        lg:px-8
        "

      >




        <AnimatedSection
          animation="fadeUp"
        >



          {/* Top Content Section */}

          <div

            className="
            grid
            items-center
            gap-14
            lg:grid-cols-2
            "

          >



            {/* Left */}

            <HowItWorksContent />





            {/* Right */}

            <HowItWorksIllustration />



          </div>








          <div className="section-cta-band">
            <ScaleIn delay={0.7}>
              <Link to="/register">
                <motion.button
                  {...buttonHover}
                  className="section-cta-button"
                >
                  Start Learning Now
                  <ArrowRight size={20} />
                </motion.button>
              </Link>
            </ScaleIn>
          </div>

          {/* Timeline */}

          <HowItWorksTimeline />




        </AnimatedSection>




      </div>




    </section>

  );

}
