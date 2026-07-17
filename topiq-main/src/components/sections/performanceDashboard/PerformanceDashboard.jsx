// src/components/sections/performanceDashboard/PerformanceDashboard.jsx

import AnimatedSection from "../../../animations/AnimatedSection";
import ScaleIn from "../../../animations/ScaleIn";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { buttonHover } from "../../../utils/animationVariants";

import DashboardContent from "./DashboardContent";
import DashboardIllustration from "./DashboardIllustration";
import DashboardStats from "./DashboardStats";
import DashboardChart from "./DashboardChart";
import DashboardProgress from "./DashboardProgress";
import DashboardLeaderboard from "./DashboardLeaderboard";



/**
 * ==========================================================
 * PerformanceDashboard
 * ==========================================================
 *
 * Complete Performance Dashboard Section
 *
 * Includes:
 * ----------
 * ✅ Dashboard Hero Content
 * ✅ Analytics Illustration
 * ✅ Performance Statistics
 * ✅ Growth Chart
 * ✅ Subject Progress
 * ✅ Leaderboard
 * ✅ Responsive Layout
 *
 */


export default function PerformanceDashboard(){


  return (

    <section

      id="performance-dashboard"

      className="
      relative
      overflow-hidden
      bg-slate-50
      py-20
      lg:py-28
      "

    >





      {/* Background Decorations */}

      <div

        className="
        absolute
        -left-40
        top-20
        h-96
        w-96
        rounded-full
        bg-blue-200/30
        blur-3xl
        "

      />



      <div

        className="
        absolute
        -right-40
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





          {/* Main Dashboard Introduction */}

          <div

            className="
            grid
            items-center
            gap-10
            lg:grid-cols-2
            "

          >



            {/* Content */}

            <DashboardContent />





            {/* Illustration */}

            <DashboardIllustration />



          </div>









          <div className="section-cta-band">
            <ScaleIn delay={0.7}>
              <motion.button {...buttonHover} className="section-cta-button">
                View Your Dashboard
                <ArrowRight size={20} />
              </motion.button>
            </ScaleIn>
          </div>

          {/* Statistics */}

          <div

            className="
            section-followup
            "

          >

            <DashboardStats />

          </div>









          {/* Analytics Grid */}

          <div

            className="
            performance-panel-gap
            grid
            gap-8
            lg:grid-cols-2
            "

          >



            <DashboardChart />



            <DashboardProgress />



          </div>









          {/* Leaderboard */}

          <div

            className="
            performance-panel-gap
            "

          >

            <DashboardLeaderboard />


          </div>







        </AnimatedSection>




      </div>



    </section>

  );

}
