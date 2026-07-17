import { motion } from "framer-motion";
import {
  FaStar,
  FaQuoteLeft,
} from "react-icons/fa";


export default function TestimonialCard({

  name,

  role,

  message,

  image,

  rating = 5,

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

        once:true

      }}


      transition={{

        duration:.6

      }}



      whileHover={{

        y:-10,

        scale:1.02

      }}



      className={`

        rounded-3xl

        p-8

        shadow-xl

        w-full

        max-w-md

        ${variants[variant]}

        ${className}

      `}

    >



      {/* Quote Icon */}


      <FaQuoteLeft

        className="

          text-orange-500

          text-4xl

          mb-6

        "

      />





      {/* Message */}


      <p className="

        text-lg

        leading-8

        opacity-90

      ">

        {message}

      </p>





      {/* Rating */}


      <div className="

        flex

        gap-1

        mt-6

      ">


        {

          Array.from({

            length:rating

          }).map((_,index)=>(


            <FaStar

              key={index}

              className="

                text-yellow-400

              "

            />


          ))

        }


      </div>





      {/* User */}


      <div className="

        flex

        items-center

        gap-4

        mt-8

      ">


        {

          image

          ?

          (

            <img

              src={image}

              alt={name}

              className="

                w-14

                h-14

                rounded-full

                object-cover

              "

            />

          )


          :

          (

            <div

              className="

                w-14

                h-14

                rounded-full

                bg-orange-100

                flex

                items-center

                justify-center

                text-orange-600

                font-bold

                text-xl

              "

            >

              {name?.charAt(0)}

            </div>

          )


        }



        <div>


          <h4 className="

            font-bold

            text-lg

          ">

            {name}

          </h4>


          <p className="

            text-sm

            opacity-70

          ">

            {role}

          </p>


        </div>


      </div>



    </motion.div>


  );

}