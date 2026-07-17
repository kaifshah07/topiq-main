import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";


export default function NavDropdown({
  title,
  items,
  open,
  onOpen,
  onClose,
}) {


  return (

    <div
      className="relative"

      onMouseEnter={onOpen}

      onMouseLeave={onClose}

    >


      {/* Dropdown Trigger */}

      <button

        className="
          flex
          items-center
          gap-1

          text-sm
          font-medium

          text-slate-700

          hover:text-blue-600

          transition-colors
          duration-300
        "

      >

        {title}


        <ChevronDown

          size={15}

          className={`
            transition-transform
            duration-300

            ${
              open
              ? "rotate-180"
              : ""
            }
          `}

        />


      </button>




      {/* Dropdown Panel */}

      <AnimatePresence>


        {open && (

          <motion.div

            initial={{
              opacity:0,
              y:12,
              scale:0.96
            }}

            animate={{
              opacity:1,
              y:0,
              scale:1
            }}

            exit={{
              opacity:0,
              y:12,
              scale:0.96
            }}

            transition={{
              duration:0.2,
              ease:"easeOut"
            }}


            className="
              absolute

              top-10

              left-1/2

              -translate-x-1/2


              w-80


              rounded-3xl


              bg-white/90

              backdrop-blur-xl


              border

              border-slate-200/60


              shadow-xl

              shadow-slate-900/10


              p-3


              z-50
            "

          >


            {items?.map((item)=>(


              <Link

                key={item.name}

                to={item.path}


                className="
                  group

                  flex
                  flex-col

                  rounded-2xl

                  px-4
                  py-3


                  hover:bg-blue-50


                  transition-all

                  duration-300
                "

              >


                <span

                  className="
                    text-sm

                    font-semibold

                    text-slate-800

                    group-hover:text-blue-600

                    transition-colors
                  "

                >

                  {item.name}

                </span>



                {item.desc && (

                  <span

                    className="
                      mt-1

                      text-xs

                      text-slate-500
                    "

                  >

                    {item.desc}

                  </span>

                )}


              </Link>


            ))}


          </motion.div>

        )}


      </AnimatePresence>


    </div>

  );

}