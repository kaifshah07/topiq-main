import { motion } from "framer-motion";
import IconBox from "./IconBox";


export default function FeatureCard({

  icon,

  title,

  description,

  color = "orange",

  variant = "light",

  buttonText,

  onClick,

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

        amount:0.2

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

        duration-300


        ${variants[variant]}


        ${className}

      `}


    >


      {/* Icon */}


      <IconBox

        icon={icon}

        color={color}

      />




      {/* Title */}


      <h3 className="

        text-2xl

        font-black

        mt-6

      ">

        {title}

      </h3>





      {/* Description */}


      <p className="

        mt-4

        leading-8

        opacity-80

      ">

        {description}

      </p>





      {/* Optional Button */}


      {

        buttonText && (

          <button


            onClick={onClick}


            className="

              mt-6

              text-orange-500

              font-bold

              hover:text-orange-600

              transition

            "


          >

            {buttonText}

          </button>

        )

      }



    </motion.div>

  );

}