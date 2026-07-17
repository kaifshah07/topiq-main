import { motion } from "framer-motion";

import {
  FaInbox,
  FaPlus,
  FaSearch
} from "react-icons/fa";





export default function EmptyState({

  title="No Data Available",

  description="There is nothing to display here yet.",

  icon,

  buttonText,

  onClick,

  variant="default",

}) {





const icons={


default:

<FaInbox />,


search:

<FaSearch />,


create:

<FaPlus />


};







return (

<motion.div


initial={{

opacity:0,

y:30

}}


animate={{

opacity:1,

y:0

}}



transition={{

duration:.5

}}



className="

flex

flex-col

items-center

justify-center

text-center

py-16

px-6

bg-white

rounded-3xl

shadow-sm

"

>







{/* Icon */}



<div

className="

w-20

h-20

rounded-full

bg-orange-100

text-orange-500

flex

items-center

justify-center

text-4xl

mb-6

"

>


{

icon

?

icon

:

icons[variant]

}


</div>








{/* Title */}



<h3

className="

text-2xl

font-black

text-slate-900

"

>

{title}

</h3>








{/* Description */}



<p

className="

mt-3

max-w-md

text-gray-500

leading-7

"

>

{description}

</p>









{/* Button */}



{

buttonText &&

(

<button


onClick={onClick}


className="

mt-8

px-7

py-3.5

rounded-xl

bg-orange-500

hover:bg-orange-600

text-white

font-bold

transition

flex

items-center

gap-2

"


>


{buttonText}


</button>

)

}







</motion.div>

);

}