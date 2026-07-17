import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";


export default function Button({

children,

variant="primary",

icon=false,

className="",

onClick,

type="button",

}) {


const styles = {


primary:`

bg-[#01295A]

text-white

shadow-lg

shadow-blue-900/20

hover:bg-[#013A80]

`,


secondary:`

bg-white

text-[#01295A]

border

border-slate-200

shadow-sm

hover:border-[#01295A]

`,


orange:`

bg-[#FE7C02]

text-white

shadow-lg

shadow-orange-500/20

hover:bg-orange-600

`,


ghost:`

bg-transparent

text-[#01295A]

hover:bg-blue-50

`

};




return (


<motion.button


type={type}


onClick={onClick}


whileHover={{
y:-2,
scale:1.02
}}


whileTap={{
scale:0.97
}}



className={`

h-11

px-6


rounded-xl


inline-flex

items-center

justify-center


gap-2



text-sm

font-semibold


transition-all

duration-300



whitespace-nowrap



${styles[variant]}



${className}

`}


>


{children}



{
icon &&

<ArrowRight

size={16}

/>

}



</motion.button>


);


}