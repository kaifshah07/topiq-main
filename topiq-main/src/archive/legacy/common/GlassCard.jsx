import { motion } from "framer-motion";


export default function GlassCard({

  children,

  variant = "light",

  hover = true,

  floating = false,

  glow = false,

  className = "",

}) {



  const variants = {


    light: `
      bg-white/80
      backdrop-blur-xl
      border
      border-white/40
      text-slate-900
    `,


    dark: `
      bg-white/10
      backdrop-blur-2xl
      border
      border-white/20
      text-white
    `,


    blue: `
      bg-blue-900/40
      backdrop-blur-xl
      border
      border-blue-300/20
      text-white
    `,


    orange: `
      bg-orange-500/10
      backdrop-blur-xl
      border
      border-orange-300/30
      text-slate-900
    `,


  };





  return (

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

        once:true,

        amount:0.2

      }}


      animate={

        floating

        ?

        {

          y:[0,-12,0]

        }

        :

        {}

      }


      transition={

        floating

        ?

        {

          duration:5,

          repeat:Infinity,

          ease:"easeInOut"

        }

        :

        {

          duration:0.7

        }

      }



      whileHover={

        hover

        ?

        {

          scale:1.03,

          y:-8

        }

        :

        {}

      }



      className={`

        rounded-3xl

        p-6

        shadow-2xl

        transition-all

        duration-300


        ${variants[variant]}


        ${
          glow
          ?
          "shadow-orange-500/20"
          :
          ""
        }


        ${className}

      `}


    >

      {children}


    </motion.div>

  );

}