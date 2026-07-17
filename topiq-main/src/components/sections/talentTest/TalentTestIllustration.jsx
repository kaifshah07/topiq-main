// src/components/sections/talentTest/TalentTestIllustration.jsx


import { motion } from "framer-motion";

import {
Trophy,
Medal,
Star
} from "lucide-react";


export default function TalentTestIllustration(){


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
bg-blue-100
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
relative
rounded-[3rem]
bg-gradient-to-br
from-blue-600
via-indigo-600
to-cyan-500
p-12
text-white
shadow-2xl
"

>


<Trophy
size={120}
/>


<h3
className="
mt-6
text-3xl
font-bold
"
>

TOPIQ

</h3>


<p
className="
mt-2
text-blue-100
"
>

Talent Champion

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

<Medal
className="text-yellow-500"
/>

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

<Star
className="text-orange-500"
/>

</div>



</div>

)

}