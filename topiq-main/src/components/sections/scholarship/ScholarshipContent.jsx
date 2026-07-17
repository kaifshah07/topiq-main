// src/components/sections/scholarship/ScholarshipContent.jsx


import {
Sparkles,
ArrowRight
} from "lucide-react";


import FadeUp from "../../../animations/FadeUp";
import AnimatedText from "../../../animations/AnimatedText";


import scholarshipData from "./scholarshipData";


export default function ScholarshipContent(){


return (

<div>


<FadeUp>

<span
className="
inline-flex
items-center
gap-2
rounded-full
border
border-blue-200
bg-blue-50
px-5
py-2
text-sm
font-semibold
text-blue-700
"
>

<Sparkles size={16}/>

{scholarshipData.badge}

</span>


</FadeUp>




<h2
className="
mt-6
text-4xl
font-extrabold
leading-tight
text-slate-900
md:text-5xl
"
>


<AnimatedText>

{scholarshipData.title}

</AnimatedText>


<span
className="
block
bg-gradient-to-r
from-blue-700
via-blue-600
to-cyan-500
bg-clip-text
text-transparent
"
>

{scholarshipData.highlight}

</span>


</h2>




<FadeUp delay={0.3}>


<p
className="
mt-6
text-lg
leading-8
text-slate-600
"
>

{scholarshipData.description}

</p>


</FadeUp>




<div
className="
scholarship-stats-grid
grid
grid-cols-2
gap-5
"
>

{

scholarshipData.statistics.map((item)=>(


<div

key={item.label}

className="
rounded-2xl
border
border-slate-200
bg-white
p-5
shadow-sm
"

>

<h3
className="
text-2xl
font-extrabold
text-orange-600
"
>

{item.value}

</h3>


<p
className="
mt-2
text-sm
text-slate-600
"
>

{item.label}

</p>


</div>


))

}


</div>



<button

className="
scholarship-explore-cta
inline-flex
items-center
gap-3
rounded-2xl
bg-gradient-to-r
from-blue-700
to-blue-500
px-7
py-4
font-semibold
text-white
shadow-lg
"

>

Explore Scholarships

<ArrowRight size={20}/>

</button>



</div>

)

}
