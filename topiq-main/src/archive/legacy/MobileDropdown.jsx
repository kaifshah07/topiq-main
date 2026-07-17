import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";


export default function MobileDropdown({
  title,
  items,
  open,
  onToggle,
  onClose,
}) {


  return (

    <div
      className="
        border-b
        border-slate-100
      "
    >


      {/* Dropdown Header */}

      <button

        onClick={onToggle}

        className="
          w-full

          flex
          items-center
          justify-between

          py-4

          text-base

          font-medium

          text-slate-800

          transition-colors

          hover:text-blue-600
        "

      >

        {title}


        <ChevronDown

          size={18}

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




      {/* Dropdown Content */}

      <AnimatePresence>


        {open && (

          <motion.div

            initial={{
              height:0,
              opacity:0
            }}

            animate={{
              height:"auto",
              opacity:1
            }}

            exit={{
              height:0,
              opacity:0
            }}

            transition={{
              duration:0.25,
              ease:"easeInOut"
            }}

            className="
              overflow-hidden
            "

          >


            <div
              className="
                pb-4

                space-y-1

                pl-3
              "
            >


              {items?.map((item)=>(


                <Link

                  key={item.name}

                  to={item.path}

                  onClick={onClose}


                  className="
                    block

                    rounded-xl

                    px-4
                    py-3


                    text-sm

                    text-slate-600


                    hover:bg-blue-50

                    hover:text-blue-600


                    transition-all

                    duration-300
                  "

                >


                  <div
                    className="
                      font-medium
                    "
                  >
                    {item.name}
                  </div>



                  {item.desc && (

                    <p
                      className="
                        mt-1

                        text-xs

                        text-slate-500
                      "
                    >
                      {item.desc}
                    </p>

                  )}


                </Link>


              ))}


            </div>


          </motion.div>

        )}


      </AnimatePresence>


    </div>

  );

}