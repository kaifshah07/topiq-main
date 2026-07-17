import {
  motion,
  AnimatePresence
} from "framer-motion";


import {
  FaTrash,
  FaExclamationTriangle,
  FaCheckCircle,
  FaTimes
} from "react-icons/fa";





export default function ConfirmDialog({

  open,

  onClose,

  onConfirm,

  title="Are you sure?",

  message="This action cannot be undone.",

  confirmText="Confirm",

  cancelText="Cancel",

  variant="danger",

  loading=false,

}) {





const variants={


danger:{

icon:<FaTrash />,

iconBg:"bg-red-100",

iconColor:"text-red-500",

button:"bg-red-500 hover:bg-red-600"

},



warning:{

icon:<FaExclamationTriangle />,

iconBg:"bg-yellow-100",

iconColor:"text-yellow-500",

button:"bg-yellow-500 hover:bg-yellow-600"

},



success:{

icon:<FaCheckCircle />,

iconBg:"bg-green-100",

iconColor:"text-green-500",

button:"bg-green-500 hover:bg-green-600"

}


};




const style=variants[variant];









return (

<AnimatePresence>


{

open &&

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

z-[999]

flex

items-center

justify-center

px-5

"


>






{/* Background */}



<div

onClick={onClose}


className="

absolute

inset-0

bg-black/50

backdrop-blur-md

"

/>








{/* Dialog */}



<motion.div


initial={{

scale:.9,

opacity:0,

y:30

}}


animate={{

scale:1,

opacity:1,

y:0

}}


exit={{

scale:.9,

opacity:0,

y:30

}}



transition={{

duration:.25

}}



className="

relative

bg-white

rounded-3xl

shadow-2xl

max-w-md

w-full

p-8

text-center

"


>








{/* Close */}



<button


onClick={onClose}


className="

absolute

right-5

top-5

text-gray-400

hover:text-gray-700

"


>

<FaTimes />

</button>








{/* Icon */}



<div

className={`

mx-auto

w-20

h-20

rounded-full

flex

items-center

justify-center

text-3xl

${style.iconBg}

${style.iconColor}

`}


>

{style.icon}

</div>









{/* Content */}



<h2

className="

mt-6

text-2xl

font-black

text-slate-900

"

>

{title}

</h2>





<p

className="

mt-3

text-gray-500

leading-7

"

>

{message}

</p>









{/* Buttons */}



<div

className="

mt-8

flex

gap-4

justify-center

"

>


<button


onClick={onClose}


disabled={loading}


className="

px-6

py-3

rounded-xl

bg-gray-100

hover:bg-gray-200

font-bold

text-gray-700

"

>

{cancelText}

</button>







<button


onClick={onConfirm}


disabled={loading}


className={`

px-6

py-3

rounded-xl

text-white

font-bold

transition

${style.button}

disabled:opacity-50

`}


>

{


loading

?

"Processing..."

:

confirmText


}

</button>





</div>








</motion.div>






</motion.div>


)

}



</AnimatePresence>

);

}