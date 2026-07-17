import {
  motion,
  AnimatePresence
} from "framer-motion";


import {
  FaCheckCircle,
  FaTimesCircle,
  FaExclamationTriangle,
  FaInfoCircle,
  FaTimes
} from "react-icons/fa";





const icons={

success:<FaCheckCircle />,

error:<FaTimesCircle />,

warning:<FaExclamationTriangle />,

info:<FaInfoCircle />

};





const styles={


success:

"bg-green-50 border-green-200 text-green-700",


error:

"bg-red-50 border-red-200 text-red-700",


warning:

"bg-yellow-50 border-yellow-200 text-yellow-700",


info:

"bg-blue-50 border-blue-200 text-blue-700"

};







export default function Toast({

  show,

  message,

  type="success",

  onClose,

  duration=3000

}) {



if(show){


setTimeout(()=>{


onClose();


},duration);


}





return (

<AnimatePresence>


{

show &&

(

<motion.div


initial={{

opacity:0,

x:80

}}


animate={{

opacity:1,

x:0

}}


exit={{

opacity:0,

x:80

}}



transition={{

duration:.3

}}



className={`

fixed

top-6

right-6

z-[999]

w-[350px]

rounded-2xl

border

shadow-2xl

p-4

flex

items-start

gap-4

${styles[type]}

`}



>







{/* Icon */}



<div

className="

text-2xl

mt-1

"

>

{icons[type]}

</div>







{/* Message */}



<div

className="flex-1"

>


<p

className="

font-semibold

leading-6

"

>

{message}

</p>


</div>








{/* Close */}



<button


onClick={onClose}


className="

text-gray-500

hover:text-black

"

>

<FaTimes />

</button>







</motion.div>

)

}



</AnimatePresence>

);

}