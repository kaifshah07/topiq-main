// src/components/sections/talentTest/TalentTestHero.jsx

import {
  Sparkles,
  Trophy,
  Users,
  Award
} from "lucide-react";

import FadeUp from "../../../animations/FadeUp";
import ScaleIn from "../../../animations/ScaleIn";


export default function TalentTestHero(){

const stats=[
  {
    icon:Users,
    value:"1 Lakh+",
    label:"Participants"
  },

  {
    icon:Trophy,
    value:"1000+",
    label:"Scholarships"
  },

  {
    icon:Award,
    value:"500+",
    label:"Awards"
  }
];


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

TOPIQ Talent Test 2026

</span>

</FadeUp>



<h1
className="
mt-6
text-4xl
font-extrabold
leading-tight
text-slate-900
md:text-6xl
"
>

Identify Your Talent.

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

Achieve Excellence.

</span>

</h1>



<FadeUp delay={0.3}>

<p
className="
mt-6
max-w-xl
text-lg
leading-8
text-slate-600
"
>

A national level online talent examination for
Class 1 to Class 12 students. Test your knowledge,
earn rankings, win scholarships and get recognized.

</p>

</FadeUp>



<ScaleIn delay={0.5}>

<div
className="
mt-10
grid
grid-cols-3
gap-4
"
>

{
stats.map((item)=>{

const Icon=item.icon;

return(

<div
key={item.label}
className="
rounded-2xl
border
border-slate-200
bg-white
p-5
text-center
shadow-sm
"
>

<Icon
className="
mx-auto
text-blue-600
"
/>


<h3
className="
mt-3
text-xl
font-bold
"
>
{item.value}
</h3>


<p
className="
text-sm
text-slate-500
"
>
{item.label}
</p>


</div>

)

})
}

</div>

</ScaleIn>


</div>

);

}
