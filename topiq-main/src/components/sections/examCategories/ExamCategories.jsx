// src/components/sections/examCategories/ExamCategories.jsx

import AnimatedSection from "../../../animations/AnimatedSection";

import ExamCategoryHeader from "./ExamCategoryHeader";
import ExamCategoriesGrid from "./ExamCategoriesGrid";
import ExamCategoryContent from "./ExamCategoryContent";



/**
 * ==========================================================
 * ExamCategories
 * ==========================================================
 *
 * Complete Exam Categories Section
 *
 * Includes:
 * ----------
 * ✅ Animated Header
 * ✅ Category Cards Grid
 * ✅ Supporting Content
 * ✅ CTA Section
 * ✅ Responsive Layout
 *
 */


export default function ExamCategories(){


  return (

    <section

      id="exam-categories"

      className="
      relative
      overflow-hidden
      bg-white
      py-20
      lg:py-28
      "

    >



      {/* Background Decoration */}

      <div

        className="
        absolute
        left-0
        top-32
        h-72
        w-72
        rounded-full
        bg-blue-100/40
        blur-3xl
        "

      />



      <div

        className="
        absolute
        right-0
        bottom-20
        h-80
        w-80
        rounded-full
        bg-cyan-100/40
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


          {/* Section Header */}

          <ExamCategoryHeader />





          {/* Category Cards */}

          <ExamCategoriesGrid />





          {/* Additional Content */}

          <ExamCategoryContent />



        </AnimatedSection>



      </div>



    </section>

  );

}