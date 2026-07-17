// src/components/sections/scholarship/ScholarshipGrid.jsx


import scholarshipData from "./scholarshipData";

import ScholarshipCard from "./ScholarshipCard";


export default function ScholarshipGrid(){


return (

<div className="scholarship-benefits-block">


<div
className="
mb-12
text-center
"
>

<h2
className="
text-4xl
font-extrabold
text-slate-900
"
>

Scholarship Benefits

</h2>


</div>



<div
className="
grid
gap-8
md:grid-cols-4
scholarship-benefits-grid
"
>


{

scholarshipData.scholarships.map((item)=>(


<ScholarshipCard

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
