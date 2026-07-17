import { motion } from "framer-motion";

import {
  FaArrowUp,
  FaArrowDown
} from "react-icons/fa";



export default function DashboardCard({

  title,

  value,

  description,

  icon,

  trend,

  trendType="up",

  variant="light",

  children,

}) {



const variants = {


light:`

bg-white

text-slate-900

border-gray-100

`,


dark:`

bg-[#01295A]

text-white

border-blue-900

`,


orange:`

bg-gradient-to-br

from-orange-500

to-orange-600

text-white

border-orange-500

`,


glass:`

bg-white/10

backdrop-blur-xl

border-white/20

text-white

`

};







return (

<motion.div


initial={{

opacity:0,

y:30

}}


whileInView={{

opacity:1,

y:0

}}


viewport={{

once:true

}}


whileHover={{

y:-8

}}


transition={{

duration:.5

}}



className={`

rounded-3xl

border

shadow-xl

p-6

relative

overflow-hidden

${variants[variant]}

`}


>





{/* Top Row */}


<div

className="

flex

items-center

justify-between

"


>


<div>


<p

className="

text-sm

opacity-70

font-semibold

"

>

{title}

</p>


<h2

className="

text-4xl

font-black

mt-3

"

>

{value}

</h2>


</div>





{/* Icon */}



{

icon &&

(

<div

className="

w-14

h-14

rounded-2xl

bg-orange-100

text-orange-500

flex

items-center

justify-center

text-2xl

"

>


{icon}


</div>

)

}



</div>









{/* Description */}



{

description &&

(

<p

className="

mt-5

text-sm

opacity-70

leading-6

"

>

{description}

</p>

)

}









{/* Trend */}



{

trend &&

(

<div

className={`

mt-5

flex

items-center

gap-2

font-bold

text-sm

${

trendType==="up"

?

"text-green-500"

:

"text-red-500"

}

`}

>


{

trendType==="up"

?

<FaArrowUp />

:

<FaArrowDown />

}


{trend}


</div>

)

}








{/* Custom Content */}



{

children &&

(

<div className="mt-5">

{children}

</div>

)

}





</motion.div>

);

}