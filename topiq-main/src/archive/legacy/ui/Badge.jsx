import { motion } from "framer-motion";


export default function Badge({

children,

variant="blue",

icon,

className="",

}) {


const variants = {


blue:`

bg-blue-50

text-[#01295A]

border-blue-100

`,


orange:`

bg-orange-50

text-[#FE7C02]

border-orange-100

`,


dark:`

bg-[#01295A]

text-white

border-[#01295A]

`,


glass:`

bg-white/70

backdrop-blur-md

text-[#01295A]

border-white

`

};





return (

<motion.div


initial={{
opacity:0,
y:10
}}


animate={{
opacity:1,
y:0
}}



transition={{

duration:0.4

}}



className={`


inline-flex


items-center


gap-2



rounded-full



border



px-3.5

py-1.5



text-xs


font-semibold



${variants[variant]}



${className}



`}



>


{
icon &&
<span>

{icon}

</span>
}



{children}



</motion.div>


);


}