import { motion } from "framer-motion";
import {
  FaCheck,
  FaCrown,
} from "react-icons/fa";

import Button from "./Button";


export default function PricingCard({

  title,

  price,

  duration = "/month",

  description,

  features = [],

  buttonText = "Get Started",

  popular = false,

  variant = "light",

  color = "orange",

  onClick,

  className = "",

}) {



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
      border-blue-900
    `,


  };





  return (

    <motion.div


      initial={{

        opacity:0,

        y:50

      }}



      whileInView={{

        opacity:1,

        y:0

      }}



      viewport={{

        once:true

      }}



      transition={{

        duration:.6

      }}



      whileHover={{

        y:-12,

        scale:1.03

      }}




      className={`

        relative

        rounded-[35px]

        border

        shadow-2xl

        p-8

        overflow-hidden


        ${variants[variant]}


        ${

          popular

          ?

          "ring-4 ring-orange-500"

          :

          ""

        }


        ${className}

      `}


    >





      {/* Popular Badge */}


      {

        popular && (


          <div

            className="

              absolute

              top-0

              right-0

              bg-orange-500

              text-white

              px-5

              py-2

              rounded-bl-3xl

              font-bold

              flex

              items-center

              gap-2

            "

          >

            <FaCrown />

            Popular

          </div>


        )

      }





      {/* Title */}


      <h3

        className="

          text-2xl

          font-black

        "

      >

        {title}

      </h3>





      {/* Description */}


      <p

        className="

          mt-3

          opacity-70

          leading-7

        "

      >

        {description}

      </p>







      {/* Price */}


      <div

        className="

          mt-8

          flex

          items-end

          gap-2

        "

      >


        <span

          className="

            text-5xl

            font-black

          "

        >

          {price}

        </span>


        <span

          className="

            opacity-70

            mb-2

          "

        >

          {duration}

        </span>


      </div>







      {/* Features */}


      <div

        className="

          mt-8

          space-y-4

        "

      >


        {

          features.map((feature,index)=>(


            <div

              key={index}

              className="

                flex

                items-center

                gap-3

              "

            >


              <div

                className="

                  w-6

                  h-6

                  rounded-full

                  bg-orange-100

                  text-orange-600

                  flex

                  items-center

                  justify-center

                  text-xs

                "

              >

                <FaCheck />

              </div>


              <span>

                {feature}

              </span>


            </div>


          ))

        }


      </div>







      {/* Button */}


      <div className="mt-10">


        <Button

          variant={

            popular

            ?

            "primary"

            :

            "outline"

          }

          onClick={onClick}

          className="w-full"

        >

          {buttonText}


        </Button>


      </div>





    </motion.div>


  );

}