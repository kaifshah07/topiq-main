import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaTwitter,
  FaGlobe,
} from "react-icons/fa";



export default function TeamCard({

  name,

  role,

  image,

  description,

  linkedin,

  twitter,

  website,

  variant="light",

  className="",

}) {



  const variants = {


    light: `
      bg-white
      text-slate-900
      border-gray-100
    `,


    glass: `
      bg-white/10
      backdrop-blur-xl
      text-white
      border-white/20
    `,


    dark: `
      bg-[#01295A]
      text-white
      border-blue-900
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

        y:-12,

        scale:1.03

      }}



      className={`

        rounded-[35px]

        overflow-hidden

        shadow-xl

        border

        p-6

        text-center


        ${variants[variant]}


        ${className}

      `}

    >





      {/* Image */}


      <div

        className="

          relative

          flex

          justify-center

        "

      >


        {


          image

          ?

          (

            <img

              src={image}

              alt={name}

              className="

                w-36

                h-36

                rounded-full

                object-cover

                border-4

                border-orange-500

              "

            />

          )


          :

          (

            <div

              className="

                w-36

                h-36

                rounded-full

                bg-orange-100

                text-orange-600

                flex

                items-center

                justify-center

                text-5xl

                font-black

              "

            >

              {name?.charAt(0)}

            </div>

          )

        }



      </div>







      {/* Name */}


      <h3

        className="

          mt-6

          text-2xl

          font-black

        "

      >

        {name}

      </h3>







      {/* Role */}


      <span

        className="

          inline-block

          mt-3

          px-4

          py-2

          rounded-full

          bg-orange-100

          text-orange-600

          font-semibold

          text-sm

        "

      >

        {role}

      </span>







      {/* Description */}


      {

        description && (


          <p

            className="

              mt-5

              opacity-75

              leading-7

            "

          >

            {description}

          </p>


        )

      }








      {/* Social Links */}


      <div

        className="

          flex

          justify-center

          gap-5

          mt-7

        "

      >



        {

          linkedin && (

            <a

              href={linkedin}

              target="_blank"

              rel="noreferrer"

              className="

                text-xl

                hover:text-orange-500

                transition

              "

            >

              <FaLinkedin />

            </a>

          )

        }





        {

          twitter && (

            <a

              href={twitter}

              target="_blank"

              rel="noreferrer"

              className="

                text-xl

                hover:text-orange-500

                transition

              "

            >

              <FaTwitter />

            </a>

          )

        }





        {

          website && (

            <a

              href={website}

              target="_blank"

              rel="noreferrer"

              className="

                text-xl

                hover:text-orange-500

                transition

              "

            >

              <FaGlobe />

            </a>

          )

        }



      </div>




    </motion.div>


  );

}