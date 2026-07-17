import Marquee from "./Marquee";
import { motion } from "framer-motion";


export default function LogoCloud({

  title = "Trusted By Leading Institutions",

  logos = [],

  className = "",

}) {



  return (

    <section

      className={`

        py-20

        overflow-hidden

        ${className}

      `}

    >



      {/* Heading */}

      <motion.div

        initial={{
          opacity:0,
          y:30
        }}

        whileInView={{
          opacity:1,
          y:0
        }}

        viewport={{
          once:true
        }}

        transition={{
          duration:.7
        }}

        className="
          text-center
          mb-12
        "

      >


        <h2 className="
          text-3xl
          md:text-4xl
          font-black
          text-slate-900
        ">

          {title}

        </h2>


        <p className="
          mt-4
          text-gray-500
          text-lg
        ">

          Trusted by schools, educators and learning communities across India.

        </p>


      </motion.div>





      {/* Logo Marquee */}


      <Marquee speed={25}>


        {

          logos.map((logo,index)=>(


            <motion.div


              key={index}


              whileHover={{

                y:-8,

                scale:1.05

              }}


              className="

                w-48

                h-24

                bg-white

                rounded-3xl

                shadow-lg

                border

                border-gray-100

                flex

                items-center

                justify-center

                px-6

              "

            >


              {

                logo.image

                ?

                (

                  <img

                    src={logo.image}

                    alt={logo.name}

                    className="
                      max-h-14
                      object-contain
                    "

                  />

                )

                :

                (

                  <span className="
                    font-bold
                    text-slate-700
                    text-center
                  ">

                    {logo.name}

                  </span>

                )

              }


            </motion.div>


          ))

        }


      </Marquee>



    </section>


  );

}