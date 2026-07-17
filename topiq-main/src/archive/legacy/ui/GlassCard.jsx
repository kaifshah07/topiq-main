import { motion } from "framer-motion";


export default function GlassCard({

children,

className = "",

hover = true,

}) {


return (

<motion.div


whileHover={
hover
?
{
y:-6,
scale:1.02
}
:
{}
}



transition={{

duration:0.3,

ease:"easeOut"

}}



className={`


relative


rounded-3xl



border

border-white/60



bg-white/70



backdrop-blur-xl



shadow-[0_20px_50px_rgba(1,41,90,0.08)]



overflow-hidden



${

hover

?

`

hover:shadow-[0_30px_70px_rgba(1,41,90,0.15)]

`

:

""

}



transition-all

duration-300



${className}



`}



>


{/* Soft Glow */}


<div

className="

absolute

top-0

right-0


h-24

w-24


rounded-full


bg-blue-100/40


blur-3xl


pointer-events-none

"

/>





<div

className="

relative

z-10

"

>

{children}


</div>



</motion.div>


);


}