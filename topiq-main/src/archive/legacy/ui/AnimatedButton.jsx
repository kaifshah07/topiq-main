import { motion } from "framer-motion";

export default function AnimatedButton({
text,
className=""
}){

return(

<motion.button

whileHover={{
scale:1.08
}}

whileTap={{
scale:.96
}}

className={`bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold transition ${className}`}

>

{text}

</motion.button>

)

}