import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

import { useState } from "react";



export default function NavbarDropdown({

    title,

    items=[],

    icon

}){


const [open,setOpen]=useState(false);



return (

<div

className="relative"

onMouseEnter={()=>setOpen(true)}

onMouseLeave={()=>setOpen(false)}

>




{/* Trigger */}


<button

className="

flex

items-center

gap-2

text-white

font-semibold

hover:text-orange-500

transition

"

>


{

icon && icon

}


{title}


<FaChevronDown

className={

`

text-xs

transition

${open ? "rotate-180":""}

`

}

/>


</button>







{/* Dropdown */}


<AnimatePresence>


{

open && (



<motion.div


initial={{

opacity:0,

y:15,

scale:.95

}}


animate={{

opacity:1,

y:0,

scale:1

}}


exit={{

opacity:0,

y:15,

scale:.95

}}


transition={{

duration:.25

}}



className="

absolute

top-10

left-0

w-72

bg-white

rounded-3xl

shadow-2xl

border

border-gray-100

p-4

z-50

"


>





{

items.map((item,index)=>(


<a


key={index}


href={item.path}


className="

flex

gap-4

items-center

p-4

rounded-2xl

hover:bg-orange-50

transition

group

"


>





{

item.icon && (

<div

className="

w-10

h-10

rounded-xl

bg-orange-100

text-orange-500

flex

items-center

justify-center

group-hover:bg-orange-500

group-hover:text-white

transition

"

>

{item.icon}

</div>


)

}





<div>


<h4

className="

font-bold

text-slate-900

"

>

{item.title}

</h4>


{

item.description &&

(

<p

className="

text-sm

text-gray-500

mt-1

"

>

{item.description}

</p>

)

}



</div>





</a>



))


}





</motion.div>



)

}


</AnimatePresence>



</div>

);

}