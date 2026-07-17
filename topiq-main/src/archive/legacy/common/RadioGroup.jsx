import { motion } from "framer-motion";





export default function RadioGroup({

  options=[],

  value,

  onChange,

  name="radio",

  direction="vertical",

  variant="default",

}) {









return (

<div

className={`

flex

${

direction==="horizontal"

?

"flex-row flex-wrap"

:

"flex-col"

}

gap-4

`

}

>







{

options.map((option,index)=>{


const selected=value===option.value;






return (

<motion.label


key={index}


whileTap={{

scale:.98

}}



className={`

relative

flex

items-center

gap-4

cursor-pointer

rounded-2xl

border

p-4

transition

${

selected

?

"border-orange-500 bg-orange-50"

:

"border-gray-200 hover:border-orange-300"

}



${

option.disabled

?

"opacity-50 cursor-not-allowed"

:

""

}

`}



>







<input


type="radio"


name={name}


value={option.value}


checked={selected}


disabled={option.disabled}


onChange={()=>{


if(!option.disabled)

onChange(option.value);


}}



className="hidden"



/>









{/* Radio Circle */}



<div

className={`

w-5

h-5

rounded-full

border-2

flex

items-center

justify-center

${

selected

?

"border-orange-500"

:

"border-gray-300"

}

`

}

>





{

selected &&

<motion.div


initial={{

scale:0

}}


animate={{

scale:1

}}



className="

w-2.5

h-2.5

bg-orange-500

rounded-full

"

/>

}



</div>








{/* Icon */}



{

option.icon &&

<div

className="text-xl text-orange-500"

>

{option.icon}

</div>

}








{/* Text */}



<div>


<h4

className="

font-semibold

text-slate-900

"

>

{option.label}

</h4>






{

option.description &&

<p

className="

text-sm

text-gray-500

mt-1

"

>

{option.description}

</p>

}





</div>







</motion.label>

)

})


}



</div>

);

}