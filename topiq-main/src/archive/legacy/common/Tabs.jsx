import { motion } from "framer-motion";





export default function Tabs({

  tabs=[],

  activeTab,

  setActiveTab,

  variant="default",

}) {





return (

<div className="w-full">





<div

className="

flex

gap-2

border-b

border-gray-200

overflow-x-auto

"


>



{

tabs.map((tab)=>(


<button


key={tab.id}


onClick={()=>setActiveTab(tab.id)}


className={`

relative

flex

items-center

gap-2

px-5

py-3

font-semibold

whitespace-nowrap

transition

${

activeTab===tab.id

?

"text-orange-500"

:

"text-gray-500 hover:text-slate-900"

}

`}



>


{

tab.icon &&

(

<span>

{tab.icon}

</span>

)

}


{tab.label}







{

activeTab===tab.id &&

(

<motion.div


layoutId="activeTab"


className="

absolute

bottom-0

left-0

right-0

h-0.5

bg-orange-500

"


/>

)

}



</button>


))

}



</div>







</div>

);

}