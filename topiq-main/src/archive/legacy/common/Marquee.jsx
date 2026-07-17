import { motion } from "framer-motion";


export default function Marquee({

  children,

  speed = 25,

  reverse = false,

  pauseOnHover = true,

  className = "",

}) {



  return (

    <div

      className={`

        overflow-hidden

        w-full

        ${className}

      `}

    >


      <motion.div


        className={`

          flex

          gap-10

          w-max


          ${

            reverse

            ?

            "marquee-reverse"

            :

            "marquee-track"

          }

        `}


        style={{

          animationDuration:`${speed}s`

        }}



        whileHover={

          pauseOnHover

          ?

          {

            animationPlayState:"paused"

          }

          :

          {}

        }


      >


        {children}


        {/* Duplicate for infinite loop */}

        {children}


      </motion.div>


    </div>


  );

}