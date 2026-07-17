import {
  useState
} from "react";


import {
  motion,
  AnimatePresence
} from "framer-motion";





export default function Tooltip({

  children,

  content,

  position="top",

  delay=200,

}) {



const [show,setShow]=useState(false);





let timer;





const handleEnter=()=>{


timer=setTimeout(()=>{

setShow(true);

},delay);


};




const handleLeave=()=>{


clearTimeout(timer);


setShow(false);


};









const positions={


top:

"bottom-full left-1/2 -translate-x-1/2 mb-3",


bottom:

"top-full left-1/2 -translate-x-1/2 mt-3",


left:

"right-full top-1/2 -translate-y-1/2 mr-3",


right:

"left-full top-1/2 -translate-y-1/2 ml-3"


};







return (

<div

className="

relative

inline-flex

"

onMouseEnter={handleEnter}

onMouseLeave={handleLeave}

>



{children}







<AnimatePresence>


{

show &&

(

<motion.div


initial={{

opacity:0,

scale:.9,

y:5

}}


animate={{

opacity:1,

scale:1,

y:0

}}


exit={{

opacity:0,

scale:.9,

y:5

}}



transition={{

duration:.2

}}



className={`

absolute

z-[999]

${positions[position]}

px-3

py-2

rounded-lg

bg-slate-900

text-white

text-xs

font-semibold

whitespace-nowrap

shadow-xl

`

}



>

{content}



</motion.div>

)

}



</AnimatePresence>







</div>

);

}