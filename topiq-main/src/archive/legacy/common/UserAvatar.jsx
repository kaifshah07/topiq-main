import { motion } from "framer-motion";

import {
  FaCrown,
  FaUser,
} from "react-icons/fa";



export default function UserAvatar({

  name="User",

  image,

  size="md",

  status=false,

  rank,

  badge=false,

  variant="light",

  onClick,

}) {



const sizes={

sm:"w-10 h-10 text-sm",

md:"w-16 h-16 text-xl",

lg:"w-24 h-24 text-3xl",

xl:"w-32 h-32 text-5xl"

};





const variants={


light:`

bg-white

border-gray-200

text-slate-900

`,


dark:`

bg-[#01295A]

border-blue-900

text-white

`,


glass:`

bg-white/10

backdrop-blur-xl

border-white/20

text-white

`

};







const initials = name

.split(" ")

.map(word=>word[0])

.join("")

.substring(0,2)

.toUpperCase();





return (


<motion.div


initial={{

opacity:0,

scale:.8

}}


animate={{

opacity:1,

scale:1

}}


whileHover={{

scale:1.08

}}


transition={{

duration:.3

}}



onClick={onClick}


className="

relative

inline-flex

cursor-pointer

"


>







{/* Avatar */}


{

image

?

(

<img

src={image}

alt={name}

className={`

rounded-full

object-cover

border-4

border-orange-500

${sizes[size]}

`}

/>

)


:

(

<div

className={`

rounded-full

border-4

border-orange-500

flex

items-center

justify-center

font-black


${sizes[size]}

${variants[variant]}

`}

>


{

initials || <FaUser />

}


</div>

)

}







{/* Online Status */}


{

status &&

(

<span

className="

absolute

bottom-1

right-1

w-4

h-4

rounded-full

bg-green-500

border-2

border-white

animate-pulse

"

/>

)

}








{/* Crown Badge */}



{

badge &&

(

<div

className="

absolute

-top-3

right-0

bg-orange-500

text-white

w-8

h-8

rounded-full

flex

items-center

justify-center

shadow-lg

"


>


<FaCrown />

</div>


)

}









{/* Rank */}



{

rank &&

(

<div

className="

absolute

-bottom-2

left-1/2

-translate-x-1/2

bg-blue-700

text-white

px-3

py-1

rounded-full

text-xs

font-bold

shadow-lg

"

>


#{rank}


</div>


)

}





</motion.div>



);

}