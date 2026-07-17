// src/components/sections/talentTest/TalentTestBenefits.jsx


import talentTestData from "./talentTestData";

import TalentTestCard from "./TalentTestCard";


export default function TalentTestBenefits(){


return (

<section>


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

Why Participate?

</h2>


<p
className="
mt-4
text-slate-600
"
>

Experience competitive learning with recognition
and rewards.

</p>


</div>



<div
className="
grid
gap-8
md:grid-cols-3
"
>

{

talentTestData.benefits.map((item)=>(

<TalentTestCard

key={item.id}

icon={item.icon}

title={item.title}

description={item.description}

/>

))

}

</div>


</section>

)

}