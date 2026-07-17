import { motion } from "framer-motion";

import {
  FaChevronRight,
  FaHome
} from "react-icons/fa";





export default function Breadcrumb({

  items=[],

  separator,

}) {





return (

<motion.nav


initial={{

opacity:0,

y:-10

}}


animate={{

opacity:1,

y:0

}}



transition={{

duration:.4

}}



className="

flex

items-center

gap-2

text-sm

text-gray-500

overflow-x-auto

whitespace-nowrap

"

>







{/* Home */}



<FaHome

className="

text-orange-500

"

/>







{

items.map((item,index)=>(



<div

key={index}

className="

flex

items-center

gap-2

"

>





{

separator

?

separator

:

<FaChevronRight

className="

text-gray-300

text-xs

"

/>

}







{

item.href

?

<a


href={item.href}


className="

hover:text-orange-500

transition

font-medium

"

>

{item.label}

</a>



:

<span


className={`

font-semibold

${

index===items.length-1

?

"text-slate-900"

:

"text-gray-500"

}

`}


>

{item.label}

</span>

}





</div>


))


}







</motion.nav>

);

}