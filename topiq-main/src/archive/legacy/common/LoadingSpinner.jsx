import { motion } from "framer-motion";





export default function LoadingSpinner({

  size="md",

  text,

  fullScreen=false,

  overlay=false,

}) {



const sizes={

sm:"w-5 h-5 border-2",

md:"w-10 h-10 border-4",

lg:"w-16 h-16 border-4",

xl:"w-24 h-24 border-8"

};







const loader=(

<div

className={`

${sizes[size]}

rounded-full

border-gray-200

border-t-orange-500

animate-spin

`}

>

</div>

);









if(fullScreen)

{

return (

<div

className="

fixed

inset-0

z-[999]

flex

flex-col

items-center

justify-center

bg-white

"

>

{loader}


{

text &&

<p

className="

mt-5

text-lg

font-semibold

text-slate-700

"

>

{text}

</p>

}


</div>

);

}









if(overlay)

{

return (

<div

className="

absolute

inset-0

z-50

flex

items-center

justify-center

bg-white/70

backdrop-blur-sm

rounded-3xl

"

>

{loader}

</div>

);

}








return (

<motion.div


initial={{

opacity:0

}}


animate={{

opacity:1

}}


className="

flex

flex-col

items-center

justify-center

gap-3

"


>


{loader}



{

text &&

<p

className="

text-sm

text-gray-500

font-medium

"

>

{text}

</p>

}


</motion.div>

);

}