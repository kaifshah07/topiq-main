import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import {
  FaBell,
  FaCheckCircle,
  FaTrophy,
  FaBookOpen,
  FaTimes,
} from "react-icons/fa";



export default function NotificationBell({

  notifications = [],

  variant="light",

}) {



const [open,setOpen]=useState(false);


const [items,setItems]=useState(

notifications

);





const unreadCount = items.filter(

(item)=>!item.read

).length;






const markAsRead=(id)=>{


setItems(

items.map(item=>

item.id===id

?

{

...item,

read:true

}

:

item

)

);


};







const variants={


light:`

bg-white

text-slate-900

border-gray-200

`,


dark:`

bg-[#01295A]

text-white

border-blue-900

`,


glass:`

bg-white/10

backdrop-blur-xl

text-white

border-white/20

`

};





return (

<div className="relative">






{/* Bell Button */}



<button

onClick={()=>setOpen(!open)}

className="

relative

w-12

h-12

rounded-full

flex

items-center

justify-center

bg-white

shadow-lg

hover:scale-105

transition

"


>


<FaBell

className="

text-orange-500

text-xl

"

/>





{

unreadCount>0 &&

(


<span

className="

absolute

-top-1

-right-1

w-6

h-6

rounded-full

bg-red-500

text-white

text-xs

font-bold

flex

items-center

justify-center

"


>


{unreadCount}


</span>


)


}



</button>









{/* Dropdown */}



<AnimatePresence>


{

open &&

(


<motion.div


initial={{

opacity:0,

y:20,

scale:.95

}}


animate={{

opacity:1,

y:0,

scale:1

}}


exit={{

opacity:0,

y:20,

scale:.95

}}



transition={{

duration:.25

}}



className={`

absolute

right-0

mt-4

w-96

rounded-3xl

shadow-2xl

border

overflow-hidden

z-50

${variants[variant]}

`}


>


{/* Header */}



<div className="

flex

justify-between

items-center

p-5

border-b

border-gray-200/20

">


<h3 className="

font-black

text-xl

">

Notifications

</h3>


<button

onClick={()=>setOpen(false)}

>


<FaTimes />

</button>



</div>








{/* Notification List */}



<div className="

max-h-96

overflow-y-auto

">


{


items.length===0

?

(

<div className="

p-8

text-center

opacity-60

">


No notifications


</div>

)


:

items.map((item)=>(



<motion.div


key={item.id}


whileHover={{

scale:1.02

}}



onClick={()=>markAsRead(item.id)}


className={`

p-5

flex

gap-4

cursor-pointer

transition


${

!item.read

?

"bg-orange-50"

:

""

}

`}


>



<div className="

w-12

h-12

rounded-2xl

bg-orange-100

text-orange-500

flex

items-center

justify-center

">


{

item.icon || <FaBell />

}


</div>





<div className="flex-1">


<h4 className="

font-bold

">


{item.title}


</h4>


<p className="

text-sm

opacity-70

mt-1

">


{item.message}


</p>



<span className="

text-xs

opacity-50

mt-2

block

">


{item.time}


</span>


</div>





{

!item.read &&

(

<FaCheckCircle

className="

text-green-500

mt-2

"

/>

)

}



</motion.div>



))


}


</div>





</motion.div>


)

}


</AnimatePresence>





</div>

);

}