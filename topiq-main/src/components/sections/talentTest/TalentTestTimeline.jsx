// src/components/sections/talentTest/TalentTestTimeline.jsx


import talentTestData from "./talentTestData";

import TalentTestCard from "./TalentTestCard";


export default function TalentTestTimeline(){


return (

<div>


<div
className="
text-center
mb-12
"
>

<h2
className="
text-4xl
font-extrabold
text-slate-900
"
>

How TOPIQ Talent Test Works

</h2>


</div>



<div
className="
grid
gap-8
md:grid-cols-4
"
>

{
talentTestData.timeline.map((item)=>(

<TalentTestCard

key={item.id}

icon={item.icon}

title={item.title}

description={item.description}

/>

))

}

</div>


</div>

)

}