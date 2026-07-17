// src/components/sections/eligibility/EligibilityContent.jsx


import {
ShieldCheck
}
from "lucide-react";


import FadeUp from "../../../animations/FadeUp";

import AnimatedText from "../../../animations/AnimatedText";



export default function EligibilityContent(){


return (

<div className="mx-auto max-w-3xl text-center">


<FadeUp>


<span

className="
inline-flex
items-center
gap-2
rounded-full
bg-blue-50
px-5
py-2
text-sm
font-semibold
text-blue-700
"

>

<ShieldCheck size={16}/>

Eligibility Criteria

</span>


</FadeUp>



<h2

className="
mt-6
text-4xl
font-extrabold
text-slate-900
md:text-5xl
"

>

<AnimatedText>

Who Can Participate

</AnimatedText>


<span

className="
block
bg-gradient-to-r
from-blue-600
via-indigo-600
to-cyan-500
bg-clip-text
text-transparent
"

>

In TOPIQ Talent Test

</span>


</h2>




<p

className="
mt-6
text-lg
leading-8
text-slate-600
"

>

TOPIQ Talent Test is designed for school students
across Maharashtra with equal opportunities,
scholarships and recognition.

</p>



</div>


);


}