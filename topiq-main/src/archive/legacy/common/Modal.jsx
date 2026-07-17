import {
  useEffect
} from "react";


import {
  motion,
  AnimatePresence
} from "framer-motion";


import {
  FaTimes
} from "react-icons/fa";





export default function Modal({

  isOpen,

  onClose,

  title="Modal",

  children,

  footer,

  size="md",

  closeOnOutside=true,

}) {



useEffect(()=>{


const handleEscape=(e)=>{


if(e.key==="Escape"){

onClose();

}


};



document.addEventListener(

"keydown",

handleEscape

);



return ()=>{


document.removeEventListener(

"keydown",

handleEscape

);


};


},[onClose]);









const sizes={


sm:"max-w-md",


md:"max-w-xl",


lg:"max-w-3xl",


xl:"max-w-5xl",


full:"max-w-7xl"


};







return (

<AnimatePresence>



{

isOpen &&

(



<motion.div


initial={{

opacity:0

}}


animate={{

opacity:1

}}


exit={{

opacity:0

}}


className="

fixed

inset-0

z-[100]

flex

items-center

justify-center

px-4

"


>





{/* Overlay */}



<div


onClick={

closeOnOutside

?

onClose

:

undefined

}


className="

absolute

inset-0

bg-black/50

backdrop-blur-md

"


></div>









{/* Modal Box */}



<motion.div


initial={{

opacity:0,

scale:.9,

y:40

}}


animate={{

opacity:1,

scale:1,

y:0

}}


exit={{

opacity:0,

scale:.9,

y:40

}}



transition={{

duration:.3

}}



className={`

relative

bg-white

rounded-3xl

shadow-2xl

w-full

${sizes[size]}

overflow-hidden

`}


>







{/* Header */}



<div

className="

flex

items-center

justify-between

px-6

py-5

border-b

"

>


<h2

className="

text-2xl

font-black

text-slate-900

"

>

{title}

</h2>





<button


onClick={onClose}


className="

w-10

h-10

rounded-xl

bg-gray-100

hover:bg-orange-100

hover:text-orange-500

flex

items-center

justify-center

transition

"


>


<FaTimes />


</button>



</div>










{/* Body */}



<div

className="

p-6

max-h-[70vh]

overflow-y-auto

"


>


{children}

</div>









{/* Footer */}



{

footer &&

(


<div

className="

px-6

py-5

border-t

bg-gray-50

"


>

{footer}

</div>


)

}





</motion.div>






</motion.div>



)

}



</AnimatePresence>

);

}