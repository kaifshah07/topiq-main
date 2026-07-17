import { motion } from "framer-motion";

import IconBox from "./IconBox";
import AnimatedCounter from "./AnimatedCounter";


export default function StatCard({

  icon,

  value,

  prefix = "",

  suffix = "",

  label,

  description,

  color = "orange",

  variant = "light",

  className = "",

}) {



  const variants = {


    light: `

      bg-white

      text-slate-900

      border

      border-gray-100

    `,


    glass: `

      bg-white/10

      backdrop-blur-xl

      border

      border-white/20

      text-white

    `,


    dark: `

      bg-[#01295A]

      text-white

    `,


  };




  return (

    <motion.div


      initial={{

        opacity:0,

        y:40

      }}



      whileInView={{

        opacity:1,

        y:0

      }}



      viewport={{

        once:true,

        amount:0.3

      }}



      transition={{

        duration:.6

      }}



      whileHover={{

        y:-10,

        scale:1.03

      }}



      className={`

        rounded-3xl

        p-8

        shadow-xl

        transition-all


        ${variants[variant]}


        ${className}

      `}

    >




      {/* Icon */}


      {

        icon && (

          <IconBox

            icon={icon}

            color={color}

            size="large"

          />

        )

      }





      {/* Counter */}


      <div className="mt-6">


        <AnimatedCounter


          value={value}


          prefix={prefix}


          suffix={suffix}


          className="

            text-5xl

            font-black

          "


        />


      </div>





      {/* Label */}


      <h3 className="

        text-xl

        font-bold

        mt-4

      ">


        {label}


      </h3>





      {/* Description */}


      {

        description && (

          <p className="

            mt-3

            opacity-70

            leading-7

          ">


            {description}


          </p>

        )

      }



    </motion.div>


  );

}