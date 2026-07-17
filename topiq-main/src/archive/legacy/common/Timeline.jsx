import { motion } from "framer-motion";


export default function Timeline({

  items = [],

  variant = "light",

  className = "",

}) {



  const variants = {


    light: `

      text-slate-900

    `,


    dark: `

      text-white

    `,


  };




  return (

    <div

      className={`

        relative

        max-w-5xl

        mx-auto

        ${variants[variant]}

        ${className}

      `}

    >




      {/* Center Line */}


      <div

        className="

          absolute

          left-5

          md:left-1/2

          top-0

          bottom-0

          w-[3px]

          bg-gradient-to-b

          from-orange-500

          via-blue-500

          to-orange-500

          md:-translate-x-1/2

        "

      />






      {

        items.map((item,index)=>(



          <motion.div


            key={index}



            initial={{

              opacity:0,

              y:50

            }}



            whileInView={{

              opacity:1,

              y:0

            }}



            viewport={{

              once:true,

              amount:.3

            }}



            transition={{

              duration:.7,

              delay:index*.15

            }}




            className={`

              relative

              flex

              items-center

              mb-16


              ${

                index % 2 === 0

                ?

                "md:flex-row"

                :

                "md:flex-row-reverse"

              }

            `}

          >





            {/* Dot */}


            <div

              className="

                absolute

                left-0

                md:left-1/2

                w-10

                h-10

                rounded-full

                bg-orange-500

                border-4

                border-white

                shadow-xl

                flex

                items-center

                justify-center

                text-white

                font-bold

                z-10

                md:-translate-x-1/2

              "

            >

              {

                item.icon

                ?

                item.icon

                :

                index + 1

              }


            </div>







            {/* Content */}


            <div

              className={`

                ml-16

                md:ml-0

                md:w-5/12

                bg-white

                rounded-3xl

                shadow-xl

                p-8


                ${

                  variant==="dark"

                  ?

                  "bg-white/10 backdrop-blur-xl border border-white/20"

                  :

                  ""

                }

              `}

            >



              <span

                className="

                  text-orange-500

                  font-bold

                  text-sm

                "

              >

                STEP {index+1}

              </span>




              <h3

                className="

                  text-2xl

                  font-black

                  mt-3

                "

              >

                {item.title}

              </h3>





              <p

                className="

                  mt-4

                  text-gray-600

                  leading-8

                "

              >

                {item.description}

              </p>



            </div>




          </motion.div>



        ))

      }




    </div>


  );

}