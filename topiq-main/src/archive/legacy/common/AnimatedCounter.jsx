import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";


export default function AnimatedCounter({

  value,

  prefix = "",

  suffix = "",

  duration = 2,

  decimals = 0,

  className = "",

}) {


  const ref = useRef(null);


  const isInView = useInView(ref, {

    once:true,

    amount:0.5,

  });




  return (

    <motion.div

      ref={ref}

      initial={{
        opacity:0,
        y:30
      }}

      animate={

        isInView

        ?

        {
          opacity:1,
          y:0
        }

        :

        {}

      }


      transition={{

        duration:0.8

      }}


      className={className}

    >


      {

        isInView && (

          <CountUp

            start={0}

            end={value}

            duration={duration}

            decimals={decimals}

            prefix={prefix}

            suffix={suffix}

            separator=","

          />

        )

      }



    </motion.div>

  );

}