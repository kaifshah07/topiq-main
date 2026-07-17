import { motion } from "framer-motion";


export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.8,
  distance = 60,
  once = true,
  amount = 0.2,
  className = "",
}) {


  const variants = {

    up: {
      hidden: {
        opacity: 0,
        y: distance,
      },

      visible: {
        opacity: 1,
        y: 0,
      },
    },


    down: {
      hidden: {
        opacity: 0,
        y: -distance,
      },

      visible: {
        opacity: 1,
        y: 0,
      },
    },


    left: {
      hidden: {
        opacity: 0,
        x: -distance,
      },

      visible: {
        opacity: 1,
        x: 0,
      },
    },


    right: {
      hidden: {
        opacity: 0,
        x: distance,
      },

      visible: {
        opacity: 1,
        x: 0,
      },
    },


    zoom: {
      hidden: {
        opacity: 0,
        scale: 0.85,
      },

      visible: {
        opacity: 1,
        scale: 1,
      },
    },


    fade: {
      hidden: {
        opacity: 0,
      },

      visible: {
        opacity: 1,
      },
    },


  };





  return (

    <motion.div

      variants={variants[direction] || variants.up}


      initial="hidden"


      whileInView="visible"


      viewport={{
        once,
        amount,
      }}


      transition={{
        duration,
        delay,
        ease: [
          0.25,
          0.1,
          0.25,
          1
        ],
      }}


      className={className}

    >

      {children}

    </motion.div>

  );

}