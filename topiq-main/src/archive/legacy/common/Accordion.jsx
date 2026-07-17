import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";


export default function Accordion({

  items = [],

  variant = "light",

  className = "",

}) {


  const [activeIndex, setActiveIndex] = useState(null);



  const variants = {


    light: `

      bg-white

      text-slate-900

      border-gray-100

    `,


    glass: `

      bg-white/10

      backdrop-blur-xl

      text-white

      border-white/20

    `,


    dark: `

      bg-[#01295A]

      text-white

      border-blue-800

    `,


  };




  return (

    <div

      className={`

        space-y-5

        w-full

        ${className}

      `}

    >



      {

        items.map((item,index)=>(


          <motion.div


            key={index}


            initial={{

              opacity:0,

              y:20

            }}


            whileInView={{

              opacity:1,

              y:0

            }}


            viewport={{

              once:true

            }}


            transition={{

              duration:.5,

              delay:index*.1

            }}


            className={`

              rounded-3xl

              border

              shadow-lg

              overflow-hidden

              ${variants[variant]}

            `}

          >




            {/* Question */}


            <button

              onClick={()=>


                setActiveIndex(

                  activeIndex === index

                  ?

                  null

                  :

                  index

                )

              }


              className="

                w-full

                flex

                items-center

                justify-between

                p-7

                text-left

              "


            >



              <span

                className="

                  text-lg

                  md:text-xl

                  font-bold

                "

              >

                {item.question}

              </span>





              <motion.span


                animate={{

                  rotate:

                  activeIndex === index

                  ?

                  180

                  :

                  0

                }}


                transition={{

                  duration:.3

                }}


              >


                <FaChevronDown

                  className="

                    text-orange-500

                  "

                />


              </motion.span>



            </button>






            {/* Answer */}



            <AnimatePresence>



              {

                activeIndex === index && (



                  <motion.div


                    initial={{

                      height:0,

                      opacity:0

                    }}


                    animate={{

                      height:"auto",

                      opacity:1

                    }}


                    exit={{

                      height:0,

                      opacity:0

                    }}


                    transition={{

                      duration:.35

                    }}



                    className="

                      overflow-hidden

                    "


                  >


                    <div

                      className="

                        px-7

                        pb-7

                        leading-8

                        opacity-80

                      "

                    >

                      {item.answer}


                    </div>


                  </motion.div>


                )

              }


            </AnimatePresence>




          </motion.div>


        ))

      }




    </div>


  );

}