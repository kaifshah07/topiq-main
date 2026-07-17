import { motion } from "framer-motion";


export default function FloatingShape({

  type = "circle",

  color = "orange",

  size = "medium",

  blur = true,

  position = "",

  duration = 8,

  className = "",

}) {



  const colors = {


    orange:
    "bg-orange-500/30",


    blue:
    "bg-blue-500/30",


    purple:
    "bg-purple-500/30",


    cyan:
    "bg-cyan-400/30",


    white:
    "bg-white/20",


  };





  const sizes = {


    small:
    "w-20 h-20",


    medium:
    "w-48 h-48",


    large:
    "w-80 h-80",


    xl:
    "w-[450px] h-[450px]",


  };






  const shapes = {


    circle:
    "rounded-full",


    square:
    "rounded-3xl",


    blob:
    "rounded-[40%_60%_70%_30%/40%_50%_60%_50%]",


  };






  return (


    <motion.div


      animate={{

        y:[0,-30,0],

        x:[0,20,0],

        rotate:[0,10,0],

      }}


      transition={{

        duration,

        repeat:Infinity,

        ease:"easeInOut"

      }}



      className={`

        absolute


        ${colors[color]}


        ${sizes[size]}


        ${shapes[type]}


        ${

          blur

          ?

          "blur-3xl"

          :

          ""

        }


        pointer-events-none


        ${position}


        ${className}


      `}


    />

  );

}