import { motion } from "framer-motion";



export default function ProgressBar({

  label,

  value=0,

  showPercentage=true,

  height="h-3",

  variant="orange",

  animated=true,

  description,

}) {



const variants={


orange:

"from-orange-500 to-orange-400",



blue:

"from-blue-600 to-cyan-400",



green:

"from-green-500 to-emerald-400",



purple:

"from-purple-600 to-pink-500",



gradient:

"from-orange-500 via-purple-500 to-blue-500"

};






return (

<div className="w-full">





{/* Header */}



{

(label || showPercentage) &&

(

<div className="

flex

justify-between

items-center

mb-3

"


>


{

label &&

(

<span className="

font-semibold

text-slate-800

"

>

{label}

</span>

)

}



{

showPercentage &&

(

<span className="

font-bold

text-orange-500

"

>

{value}%

</span>

)

}



</div>

)

}







{/* Progress Background */}



<div

className={`

w-full

bg-gray-200

rounded-full

overflow-hidden

${height}

`}


>


<motion.div


initial={

animated

?

{

width:0

}

:

false

}



whileInView={{

width:`${value}%`

}}



viewport={{

once:true

}}


transition={{

duration:1.2,

ease:"easeOut"

}}



className={`

h-full

rounded-full

bg-gradient-to-r

${variants[variant]}

`}


>

</motion.div>


</div>







{

description &&

(

<p

className="

text-sm

text-gray-500

mt-3

"

>

{description}

</p>

)

}





</div>

);

}