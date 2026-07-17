import { motion } from "framer-motion";


export default function GradientText({

  children,

  variant = "orange",

  animated = false,

  className = "",

}) {



  const gradients = {


    orange: `
      from-orange-500
      via-orange-400
      to-yellow-400
    `,


    blue: `
      from-blue-600
      via-blue-400
      to-cyan-400
    `,


    purple: `
      from-purple-600
      via-pink-500
      to-orange-400
    `,


    premium: `
      from-orange-500
      via-yellow-400
      to-orange-600
    `,


    ocean: `
      from-cyan-400
      via-blue-500
      to-indigo-600
    `,


  };





  return (

    <motion.span


      animate={

        animated

        ?

        {

          backgroundPosition:[
            "0% 50%",
            "100% 50%",
            "0% 50%"
          ]

        }

        :

        {}

      }



      transition={

        animated

        ?

        {

          duration:6,

          repeat:Infinity,

          ease:"linear"

        }

        :

        {}

      }



      className={`

        bg-gradient-to-r

        ${gradients[variant]}

        bg-clip-text

        text-transparent

        bg-[length:200%_auto]

        font-black

        ${className}

      `}


    >

      {children}


    </motion.span>


  );

}