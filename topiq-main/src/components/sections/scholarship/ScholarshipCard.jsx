// src/components/sections/scholarship/ScholarshipCard.jsx


import { motion } from "framer-motion";

import ScaleIn from "../../../animations/ScaleIn";


export default function ScholarshipCard({

icon:Icon,
title,
description

}){


return (

<ScaleIn>


<motion.div

whileHover={{
y:-8
}}

className="
rounded-3xl
border
border-slate-200
bg-white
p-7
shadow-sm
transition-all
hover:shadow-xl
"

>


<div
className="
flex
h-14
w-14
items-center
justify-center
rounded-2xl
bg-yellow-100
text-orange-600
"
>

<Icon size={28}/>

</div>



<h3
className="
mt-5
text-xl
font-bold
text-slate-900
"
>

{title}

</h3>



<p
className="
mt-3
leading-7
text-slate-600
"
>

{description}

</p>


</motion.div>


</ScaleIn>


)

}