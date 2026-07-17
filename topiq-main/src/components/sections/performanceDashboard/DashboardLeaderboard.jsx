// src/components/sections/performanceDashboard/DashboardLeaderboard.jsx

import { motion } from "framer-motion";

import ScaleIn from "../../../animations/ScaleIn";

import {
  Trophy,
  Medal,
} from "lucide-react";



const leaderboard = [

  {
    id:1,

    rank:1,

    name:"Aarav Sharma",

    score:985,

    avatar:"AS",

    badge:"Gold",

  },


  {
    id:2,

    rank:2,

    name:"Priya Patil",

    score:962,

    avatar:"PP",

    badge:"Silver",

  },


  {
    id:3,

    rank:3,

    name:"Rahul Verma",

    score:948,

    avatar:"RV",

    badge:"Bronze",

  },


  {
    id:4,

    rank:4,

    name:"You",

    score:932,

    avatar:"YO",

    badge:"Current",

  },

];



const rankStyles = {

  1:
    "from-yellow-400 to-orange-500",

  2:
    "from-slate-300 to-slate-500",

  3:
    "from-orange-400 to-orange-600",

  4:
    "from-blue-500 to-indigo-500",

};




export default function DashboardLeaderboard(){


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
          mb-7
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

              Leaderboard

            </h3>



            <p

              className="
              mt-1
              text-sm
              text-slate-500
              "

            >

              Compare your performance

            </p>


          </div>




          <div

            className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-xl
            bg-yellow-100
            "

          >

            <Trophy

              size={24}

              className="
              text-yellow-600
              "

            />


          </div>



        </div>








        {/* Ranking List */}

        <div

          className="
          space-y-6
          "

        >



          {
            leaderboard.map(

              (user,index)=>(


                <motion.div


                  key={user.id}


                  initial={{

                    opacity:0,

                    x:30,

                  }}


                  whileInView={{

                    opacity:1,

                    x:0,

                  }}


                  viewport={{

                    once:true,

                  }}


                  transition={{

                    delay:index*0.15,

                  }}



                  className="
                  flex
                  items-center
                  justify-between
                  rounded-2xl
                  bg-slate-50
                  p-4
                  "

                >





                  {/* User Info */}

                  <div

                    className="
                    flex
                    items-center
                    gap-4
                    "

                  >



                    {/* Rank */}

                    <div

                      className={`
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      bg-gradient-to-br
                      ${rankStyles[user.rank]}
                      text-sm
                      font-bold
                      text-white
                      `}

                    >

                      {
                        user.rank <= 3
                        ?
                        <Medal size={20}/>
                        :
                        user.rank
                      }


                    </div>







                    {/* Avatar */}

                    <div

                      className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      bg-blue-100
                      font-bold
                      text-blue-700
                      "

                    >

                      {user.avatar}


                    </div>







                    <div>


                      <h4

                        className="
                        font-semibold
                        text-slate-800
                        "

                      >

                        {user.name}

                      </h4>



                      <p

                        className="
                        text-xs
                        text-slate-500
                        "

                      >

                        {user.badge}

                      </p>


                    </div>



                  </div>







                  {/* Score */}

                  <div

                    className="
                    text-right
                    "

                  >

                    <p

                      className="
                      text-lg
                      font-extrabold
                      text-slate-900
                      "

                    >

                      {user.score}

                    </p>


                    <span

                      className="
                      text-xs
                      text-slate-500
                      "

                    >

                      Points

                    </span>


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
