import { motion } from "framer-motion";

import {
  FaCheck
} from "react-icons/fa";





export default function Stepper({

  steps=[],

  currentStep=1,

  orientation="horizontal",

}) {





return (

<div

className={`

flex

${

orientation==="vertical"

?

"flex-col gap-6"

:

"items-center justify-between"

}

w-full

`

}

>







{

steps.map((step,index)=>{


const stepNumber=index+1;

const active=currentStep===stepNumber;

const completed=currentStep>stepNumber;







return (

<div

key={index}

className={`

relative

flex

${

orientation==="vertical"

?

"items-start gap-4"

:

"flex-col items-center flex-1"

}

`

}

>









{/* Connector */}



{

index < steps.length-1 &&

(

<div


className={`

absolute

${

orientation==="vertical"

?

"left-5 top-10 h-full w-0.5"

:

"top-5 left-1/2 w-full h-0.5"

}


${

completed

?

"bg-orange-500"

:

"bg-gray-200"

}

`}


/>

)

}









{/* Circle */}



<motion.div


initial={{

scale:.8

}}


animate={{

scale:1

}}



className={`

relative

z-10

w-10

h-10

rounded-full

flex

items-center

justify-center

font-bold

transition

${

completed

?

"bg-orange-500 text-white"

:

active

?

"bg-orange-500 text-white shadow-lg shadow-orange-200"

:

"bg-gray-200 text-gray-500"

}

`

}



>





{

completed

?

<FaCheck />

:

step.icon

?

step.icon

:

stepNumber

}





</motion.div>









{/* Label */}



<div

className={`

${

orientation==="vertical"

?

"pt-1"

:

"mt-3 text-center"

}

`

}

>





<h4

className={`

font-bold

${

active || completed

?

"text-slate-900"

:

"text-gray-400"

}

`

}

>

{step.title}

</h4>






{

step.description &&

<p

className="

text-sm

text-gray-500

mt-1

"

>

{step.description}

</p>

}





</div>









</div>

)

})


}







</div>

);

}