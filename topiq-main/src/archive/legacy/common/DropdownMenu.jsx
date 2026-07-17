import {
  useState,
  useEffect,
  useRef
} from "react";


import {
  motion,
  AnimatePresence
} from "framer-motion";





export default function DropdownMenu({

  trigger,

  items=[],

  position="right",

  width="w-56",

}) {



const [open,setOpen]=useState(false);


const dropdownRef=useRef();






useEffect(()=>{


const handleClickOutside=(event)=>{


if(

dropdownRef.current &&

!dropdownRef.current.contains(event.target)

){

setOpen(false);

}


};



document.addEventListener(
"mousedown",
handleClickOutside
);



return()=>{


document.removeEventListener(
"mousedown",
handleClickOutside
);


};



},[]);









const positions={


left:

"right-0",

right:

"left-0",

center:

"left-1/2 -translate-x-1/2"


};









return (

<div

ref={dropdownRef}

className="relative inline-block"

>







{/* Trigger */}



<div

onClick={()=>setOpen(!open)}

className="cursor-pointer"

>

{trigger}

</div>









<AnimatePresence>


{

open &&

(

<motion.div


initial={{

opacity:0,

y:-10,

scale:.95

}}


animate={{

opacity:1,

y:0,

scale:1

}}


exit={{

opacity:0,

y:-10,

scale:.95

}}



transition={{

duration:.2

}}



className={`

absolute

top-full

mt-3

z-[999]

${positions[position]}

${width}

bg-white

rounded-2xl

shadow-2xl

border

border-gray-100

p-2

overflow-hidden

`

}


>







{

items.map((item,index)=>(


<button


key={index}


onClick={()=>{


item.onClick?.();


setOpen(false);


}}



className={`

w-full

flex

items-center

gap-3

px-4

py-3

rounded-xl

text-left

font-medium

transition

${

item.danger

?

"text-red-500 hover:bg-red-50"

:

"text-slate-700 hover:bg-orange-50 hover:text-orange-600"

}

`}


>





{

item.icon &&

<span

className="text-lg"

>

{item.icon}

</span>

}



<span>

{item.label}

</span>




</button>



))


}







</motion.div>

)

}


</AnimatePresence>







</div>

);

}