// src/components/sections/eligibility/EligibilityCard.jsx

import {motion} from "framer-motion";

import {
cardHover
} from "../../../utils/animationVariants";


export default function EligibilityCard({

icon:Icon,

title,

description,

color,

bg

}){


return (

<motion.article

{...cardHover}

className="
group
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

className={`
flex
h-16
w-16
items-center
justify-center
rounded-2xl
${bg}
${color}
transition-transform
duration-300
group-hover:scale-110
`}

>

<Icon size={32}/>

</div>



<h3

className="
mt-6
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


</motion.article>


);


}