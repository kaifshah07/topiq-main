// src/components/sections/performanceDashboard/DashboardProgress.jsx

import { motion } from "framer-motion";

import ScaleIn from "../../../animations/ScaleIn";



const subjects = [

  {
    id:1,

    subject:"Quantitative Aptitude",

    progress:92,

    color:
      "from-blue-500 to-cyan-500",

  },


  {
    id:2,

    subject:"Logical Reasoning",

    progress:85,

    color:
      "from-purple-500 to-indigo-500",

  },


  {
    id:3,

    subject:"English Language",

    progress:78,

    color:
      "from-emerald-500 to-teal-500",

  },


  {
    id:4,

    subject:"General Knowledge",

    progress:70,

    color:
      "from-orange-500 to-red-500",

  },

];



export default function DashboardProgress(){


  return (

    <ScaleIn>


      <div

        className="
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
          mb-8
          "

        >

          <h3

            className="
            text-xl
            font-bold
            text-slate-900
            "

          >

            Subject Progress

          </h3>



          <p

            className="
            mt-1
            text-sm
            text-slate-500
            "

          >

            Track your preparation level

          </p>


        </div>






        {/* Progress Items */}

        <div

          className="
          space-y-8
          "

        >



          {
            subjects.map(

              (item,index)=>(



                <motion.div

                  key={item.id}


                  initial={{

                    opacity:0,

                    y:20,

                  }}


                  whileInView={{

                    opacity:1,

                    y:0,

                  }}


                  viewport={{

                    once:true,

                  }}


                  transition={{

                    delay:index*0.15,

                  }}


                >




                  {/* Label */}

                  <div

                    className="
                    mb-2
                    flex
                    items-center
                    justify-between
                    "

                  >

                    <span

                      className="
                      font-medium
                      text-slate-700
                      "

                    >

                      {item.subject}

                    </span>



                    <span

                      className="
                      text-sm
                      font-bold
                      text-slate-900
                      "

                    >

                      {item.progress}%

                    </span>


                  </div>








                  {/* Progress Bar */}

                  <div

                    className="
                    h-3
                    overflow-hidden
                    rounded-full
                    bg-slate-100
                    "

                  >


                    <motion.div


                      className={`
                      h-full
                      rounded-full
                      bg-gradient-to-r
                      ${item.color}
                      `}


                      initial={{

                        width:0,

                      }}


                      whileInView={{

                        width:`${item.progress}%`,

                      }}


                      viewport={{

                        once:true,

                      }}


                      transition={{

                        duration:1.2,

                        ease:"easeOut",

                        delay:index*0.15,

                      }}


                    />



                  </div>





                </motion.div>


              )

            )
          }



        </div>



      </div>



    </ScaleIn>

  );

}
