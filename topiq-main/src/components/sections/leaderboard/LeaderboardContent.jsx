// src/components/sections/leaderboard/LeaderboardContent.jsx


import {
Sparkles
} from "lucide-react";


import FadeUp from "../../../animations/FadeUp";
import AnimatedText from "../../../animations/AnimatedText";


import leaderboardData from "./leaderboardData";


export default function LeaderboardContent(){


return (

<div
className="
mx-auto
max-w-3xl
text-center
"
>


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

{leaderboardData.badge}

</span>

</FadeUp>



<h2
className="
mt-8
text-4xl
font-extrabold
md:text-5xl
"
>

<AnimatedText>

{leaderboardData.title}

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

{leaderboardData.highlight}

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

{leaderboardData.description}

</p>


</FadeUp>


</div>

)

}