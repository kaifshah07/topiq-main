import {motion} from "framer-motion";

export default function FloatingShapes(){

return(

<div className="absolute inset-0 overflow-hidden">

<motion.div

animate={{

y:[0,-40,0]

}}

transition={{

duration:8,

repeat:Infinity

}}

className="

absolute

top-20

left-20

w-40

h-40

rounded-full

bg-orange-400/20

blur-3xl

"

/>

<motion.div

animate={{

y:[0,50,0]

}}

transition={{

duration:10,

repeat:Infinity

}}

className="

absolute

bottom-20

right-20

w-52

h-52

rounded-full

bg-blue-400/20

blur-3xl

"

/>

</div>

)

}