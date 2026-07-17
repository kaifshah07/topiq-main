import { motion } from "framer-motion";


export default function IconBox({

  icon,

  color = "orange",

  size = "default",

  variant = "gradient",

  rounded = "xl",

  className = "",

}) {



  const colors = {


    orange: `
      from-orange-500
      to-orange-400
    `,


    blue: `
      from-blue-600
      to-blue-400
    `,


    green: `
      from-green-500
      to-emerald-400
    `,


    purple: `
      from-purple-600
      to-pink-500
    `,


    red: `
      from-red-500
      to-orange-500
    `,


    navy: `
      from-[#01295A]
      to-[#063B7A]
    `,


  };







  const variants = {


    gradient: `

      bg-gradient-to-r

      ${colors[color]}

      text-white

      shadow-lg

    `,


    glass: `

      bg-white/10

      backdrop-blur-xl

      border

      border-white/20

      text-white

    `,


    soft: `

      bg-slate-100

      text-slate-900

    `,


    outline: `

      border-2

      border-orange-500

      text-orange-500

    `,


  };







  const sizes = {


    small: `

      w-10
      h-10
      text-lg

    `,


    default: `

      w-16
      h-16
      text-2xl

    `,


    large: `

      w-20
      h-20
      text-3xl

    `,


  };








  const radius = {


    md: "rounded-md",


    lg: "rounded-lg",


    xl: "rounded-2xl",


    full: "rounded-full",


  };







  return (

    <motion.div


      whileHover={{

        y:-6,

        scale:1.08,

      }}


      transition={{

        duration:0.3,

      }}


      className={`

        flex

        items-center

        justify-center


        ${sizes[size]}


        ${variants[variant]}


        ${radius[rounded]}


        ${className}

      `}


    >

      {icon}


    </motion.div>


  );

}