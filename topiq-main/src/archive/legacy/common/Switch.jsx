import { motion } from "framer-motion";





export default function Switch({

  checked=false,

  onChange,

  label,

  description,

  disabled=false,

  size="md",

}) {





const sizes={


sm:{

wrapper:"w-10 h-5",

circle:"w-4 h-4",

translate:"translate-x-5"

},


md:{

wrapper:"w-12 h-6",

circle:"w-5 h-5",

translate:"translate-x-6"

},


lg:{

wrapper:"w-14 h-7",

circle:"w-6 h-6",

translate:"translate-x-7"

}

};





const current=sizes[size];









return (

<div

className="

flex

items-center

justify-between

gap-5

"

>









{/* Label */}



{

(label || description) &&

(

<div

className="flex-1"

>


{

label &&

<h4

className="

font-semibold

text-slate-900

"

>

{label}

</h4>

}





{

description &&

<p

className="

text-sm

text-gray-500

mt-1

"

>

{description}

</p>

}



</div>

)

}









{/* Switch */}



<button


type="button"


disabled={disabled}


onClick={()=>{

if(!disabled)

onChange(!checked);

}}


className={`

relative

${current.wrapper}

rounded-full

transition

duration-300

flex

items-center

px-1

${

checked

?

"bg-orange-500"

:

"bg-gray-300"

}


${

disabled

?

"opacity-50 cursor-not-allowed"

:

"cursor-pointer"

}

`}


>







<motion.div


layout


transition={{

type:"spring",

stiffness:500,

damping:30

}}



className={`

${current.circle}

bg-white

rounded-full

shadow-md

`

}



/>







</button>








</div>

);

}