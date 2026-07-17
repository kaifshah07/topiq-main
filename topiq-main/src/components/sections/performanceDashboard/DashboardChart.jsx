// src/components/sections/performanceDashboard/DashboardChart.jsx

import {
  motion,
} from "framer-motion";

import ScaleIn from "../../../animations/ScaleIn";


/**
 * ==========================================================
 * DashboardChart
 * ==========================================================
 *
 * Production Ready Performance Chart
 *
 * Features
 * ----------
 * ✅ Animated graph line
 * ✅ Gradient area chart style
 * ✅ Monthly performance data
 * ✅ Responsive container
 * ✅ No external chart dependency
 *
 */


const performanceData = [

  {
    month:"Jan",
    score:55,
  },

  {
    month:"Feb",
    score:62,
  },

  {
    month:"Mar",
    score:68,
  },

  {
    month:"Apr",
    score:76,
  },

  {
    month:"May",
    score:84,
  },

  {
    month:"Jun",
    score:92,
  },

];



export default function DashboardChart(){



  const points = performanceData
    .map(
      (item,index)=>{

        const x =
          index *
          70
          +
          40;


        const y =
          180 -
          (
            item.score *
            1.4
          );


        return `${x},${y}`;

      }
    )
    .join(" ");




  return (

    <ScaleIn className="h-full">


      <div

        className="
        h-full
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-6
        shadow-sm
        "

      >




        {/* Header */}

        <div

          className="
          flex
          items-center
          justify-between
          "

        >

          <div>

            <h3

              className="
              text-xl
              font-bold
              text-slate-900
              "

            >

              Performance Growth

            </h3>


            <p

              className="
              mt-1
              text-sm
              text-slate-500
              "

            >

              Your score improvement over time

            </p>


          </div>



          <span

            className="
            rounded-full
            bg-green-100
            px-3
            py-1
            text-sm
            font-semibold
            text-green-700
            "

          >

            +37%

          </span>


        </div>







        {/* Chart */}

        <div

          className="
          mt-8
          overflow-hidden
          "

        >


          <svg

            viewBox="0 0 460 220"

            className="
            h-auto
            w-full
            "

          >




            {/* Grid Lines */}

            {
              [40,80,120,160].map(

                (line)=>(

                  <line

                    key={line}

                    x1="30"

                    y1={line}

                    x2="450"

                    y2={line}

                    strokeWidth="1"

                    className="
                    stroke-slate-200
                    "

                  />

                )

              )
            }






            {/* Animated Line */}

            <motion.polyline


              points={points}


              fill="none"


              strokeWidth="4"


              strokeLinecap="round"


              strokeLinejoin="round"


              className="
              stroke-blue-600
              "

              initial={{

                pathLength:0,

              }}

              whileInView={{

                pathLength:1,

              }}

              transition={{

                duration:2,

                ease:"easeInOut",

              }}


            />






            {/* Data Points */}

            {
              performanceData.map(

                (item,index)=>(


                  <motion.circle


                    key={index}


                    cx={
                      index *
                      70
                      +
                      40
                    }


                    cy={
                      180 -
                      (
                        item.score *
                        1.4
                      )
                    }


                    r="6"


                    className="
                    fill-blue-600
                    "

                    initial={{

                      scale:0,

                    }}

                    whileInView={{

                      scale:1,

                    }}

                    transition={{

                      delay:index*0.15,

                    }}

                  />


                )

              )
            }




          </svg>



        </div>






        {/* Month Labels */}

        <div

          className="
          mt-3
          grid
          grid-cols-6
          text-center
          text-xs
          text-slate-500
          "

        >

          {
            performanceData.map(

              (item)=>(

                <span

                  key={item.month}

                >

                  {item.month}

                </span>

              )

            )
          }


        </div>




      </div>



    </ScaleIn>


  );

}
