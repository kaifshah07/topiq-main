// src/components/sections/performanceDashboard/DashboardStats.jsx

import { motion } from "framer-motion";

import ScaleIn from "../../../animations/ScaleIn";

import {
  cardHover,
} from "../../../utils/animationVariants";

import {
  TrendingUp,
  Target,
  Clock3,
  Award,
} from "lucide-react";



const stats = [

  {
    id:1,

    icon:TrendingUp,

    value:"92%",

    title:"Accuracy",

    description:
      "Improved answer precision",

    accent:
      "from-blue-500 to-cyan-500",
  },


  {
    id:2,

    icon:Target,

    value:"850+",

    title:"Mock Tests",

    description:
      "Completed practice sessions",

    accent:
      "from-purple-500 to-indigo-500",
  },


  {
    id:3,

    icon:Clock3,

    value:"120 Hrs",

    title:"Study Time",

    description:
      "Focused learning hours",

    accent:
      "from-emerald-500 to-teal-500",
  },


  {
    id:4,

    icon:Award,

    value:"#12",

    title:"Rank",

    description:
      "Current leaderboard position",

    accent:
      "from-orange-500 to-red-500",
  },


];



export default function DashboardStats(){


  return (

    <div

      className="
      grid
      gap-6
      lg:gap-8
      sm:grid-cols-2
      lg:grid-cols-4
      mobile-grid-3
      "

    >



      {
        stats.map(

          (stat,index)=>(


            <ScaleIn

              key={stat.id}

              delay={index * 0.1}

            >


              <motion.div

                {...cardHover}

                className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-6
                shadow-sm
                transition-all
                hover:shadow-xl
                "

              >



                {/* Icon */}

                <div

                  className={`
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  bg-gradient-to-br
                  ${stat.accent}
                  text-white
                  shadow-md
                  `}

                >

                  <stat.icon size={24}/>


                </div>






                {/* Value */}

                <h3

                  className="
                  mt-5
                  text-3xl
                  font-extrabold
                  text-slate-900
                  "

                >

                  {stat.value}


                </h3>






                {/* Title */}

                <h4

                  className="
                  mt-2
                  font-bold
                  text-slate-800
                  "

                >

                  {stat.title}


                </h4>






                {/* Description */}

                <p

                  className="
                  mt-1
                  text-sm
                  leading-6
                  text-slate-500
                  "

                >

                  {stat.description}


                </p>






                {/* Hover Glow */}

                <div

                  className="
                  absolute
                  -bottom-10
                  -right-10
                  h-28
                  w-28
                  rounded-full
                  bg-blue-100/30
                  blur-2xl
                  transition-transform
                  duration-500
                  group-hover:scale-150
                  "

                />



              </motion.div>



            </ScaleIn>


          )

        )
      }



    </div>


  );

}
