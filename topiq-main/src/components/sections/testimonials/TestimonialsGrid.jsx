// src/components/sections/testimonials/TestimonialsGrid.jsx

import StaggerContainer from "../../../animations/StaggerContainer";

import TestimonialCard from "./TestimonialCard";

import testimonialsData from "./testimonialsData";


/**
 * ==========================================================
 * TestimonialsGrid
 * ==========================================================
 *
 * Production Ready Testimonials Grid
 *
 * Features:
 * ✅ Data driven rendering
 * ✅ Responsive grid
 * ✅ Animation support
 * ✅ Reusable cards
 *
 */


export default function TestimonialsGrid() {


  return (

    <StaggerContainer>

      <div

        className="
          grid
          gap-8
          sm:grid-cols-2
          xl:grid-cols-3
        "

      >


        {
          testimonialsData.map(

            (testimonial)=>(

              <TestimonialCard

                key={testimonial.id}

                name={testimonial.name}

                role={testimonial.role}

                location={testimonial.location}

                image={testimonial.image}

                rating={testimonial.rating}

                review={testimonial.review}

                achievement={testimonial.achievement}

                exam={testimonial.exam}

                accent={testimonial.accent}

              />

            )

          )
        }


      </div>


    </StaggerContainer>

  );

}