// src/components/sections/scholarship/ScholarshipIllustration.jsx


import { motion } from "framer-motion";

import {
Gift,
Trophy,
Star
} from "lucide-react";


export default function ScholarshipIllustration(){


return (

<div
className="
relative
flex
justify-center
"
>


<div
className="
absolute
h-80
w-80
rounded-full
bg-blue-200/50
blur-3xl
"
/>



<motion.div

animate={{
y:[0,-15,0]
}}

transition={{
duration:4,
repeat:Infinity
}}

className="
rounded-[3rem]
bg-gradient-to-br
from-blue-700
via-blue-600
to-cyan-500
p-14
text-white
shadow-2xl
"

>


<Trophy size={120}/>


<h3
className="
mt-6
text-3xl
font-bold
"
>

Scholar Champion

</h3>


<p
className="
mt-2
text-yellow-100
"
>

Your Talent Deserves Recognition

</p>


</motion.div>



<div
className="
absolute
right-10
top-10
rounded-2xl
bg-white
p-4
shadow-xl
"
>

<Gift className="text-blue-600"/>

</div>



<div
className="
absolute
bottom-10
left-10
rounded-2xl
bg-white
p-4
shadow-xl
"
>

<Star className="text-yellow-500"/>

</div>


</div>

)

}
