// src/components/sections/talentTest/TalentTestContent.jsx


import {
Sparkles,
ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";


import FadeUp from "../../../animations/FadeUp";
import AnimatedText from "../../../animations/AnimatedText";

import talentTestData from "./talentTestData";


export default function TalentTestContent(){


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

{talentTestData.badge}

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

{talentTestData.title}

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

{talentTestData.highlight}

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

{talentTestData.description}

</p>

</FadeUp>                


<Link to="/register">
  <button
  className="
  talent-register-cta
  inline-flex
  items-center
  gap-3
  rounded-2xl
  bg-gradient-to-r
  from-blue-600
  to-indigo-600
  px-7
  py-4
  font-semibold
  text-white
  shadow-lg
  "
  >

  Register For Talent Test

  <ArrowRight size={20}/>

  </button>
</Link>


</div>

);


}
