import FadeUp from "../../../animations/FadeUp";

import franchiseData from "./franchiseData";


/**
 * ==========================================================
 * FranchiseStats
 * ==========================================================
 *
 * Premium Franchise Statistics
 *
 * Features
 * ----------
 * ✅ Data driven
 * ✅ Responsive cards
 * ✅ Animated reveal
 * ✅ SaaS style UI
 *
 */


export default function FranchiseStats() {


  return (

    <FadeUp delay={0.2}>

      <div
        className="
          franchise-stats-grid
          grid
          gap-6
          sm:grid-cols-2
          lg:grid-cols-4
        "
      >

        {franchiseData.heroStats.map((item) => (

          <div
            key={item.label}
            className="
              franchise-stat-card
              group
              rounded-3xl
              border
              border-slate-200
              bg-white
              p-7
              text-center
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-blue-200
              hover:shadow-xl
            "
          >

            {/* Value */}

            <h3
              className="
                bg-gradient-to-r
                from-blue-600
                via-indigo-600
                to-cyan-500
                bg-clip-text
                text-4xl
                font-extrabold
                text-transparent
              "
            >

              {item.value}

            </h3>



            {/* Label */}

            <p
              className="
                mt-3
                text-sm
                font-semibold
                text-slate-600
              "
            >

              {item.label}

            </p>



            {/* Bottom Accent */}

            <div
              className="
                mx-auto
                mt-5
                h-1
                w-12
                rounded-full
                bg-gradient-to-r
                from-blue-600
                to-cyan-500
                transition-all
                duration-300
                group-hover:w-20
              "
            />


          </div>

        ))}

      </div>

    </FadeUp>

  );

}
