import { motion } from "framer-motion";

import {
  FaTrophy,
  FaChartLine,
  FaUsers,
  FaMedal,
} from "react-icons/fa";



export default function HeroDashboard(){


return (

<div className="
relative
w-full
max-w-xl
h-[620px]
flex
items-center
justify-center
">



{/* Main Dashboard */}


<motion.div

animate={{

y:[0,-15,0]

}}

transition={{

duration:5,

repeat:Infinity

}}

className="

relative

z-10

w-[360px]

rounded-[35px]

bg-white

shadow-2xl

p-8

"


>


<div className="
flex
justify-between
items-center
">


<h3 className="
text-xl
font-black
text-slate-900
">

TOPIQ Dashboard

</h3>


<div className="
w-10
h-10
rounded-full
bg-orange-100
flex
items-center
justify-center
">

<FaMedal className="
text-orange-500
"/>

</div>


</div>





{/* Score */}


<div className="
mt-8
bg-slate-100
rounded-3xl
p-6
">


<p className="
text-gray-500
">

Today's Performance

</p>


<h2 className="
text-5xl
font-black
text-blue-900
mt-2
">

95%

</h2>


<div className="
mt-5
h-3
bg-gray-200
rounded-full
overflow-hidden
">


<motion.div

initial={{
width:0
}}

animate={{

width:"95%"

}}

transition={{

duration:2

}}

className="
h-full
bg-gradient-to-r
from-orange-500
to-orange-400
rounded-full
"

/>


</div>


</div>





{/* Stats */}


<div className="
grid
grid-cols-2
gap-4
mt-6
">



<div className="
bg-blue-50
rounded-2xl
p-5
">

<p className="
text-gray-500
text-sm
">

Rank

</p>


<h3 className="
text-3xl
font-black
text-blue-700
">

#24

</h3>


</div>





<div className="
bg-green-50
rounded-2xl
p-5
">

<p className="
text-gray-500
text-sm
">

Accuracy

</p>


<h3 className="
text-3xl
font-black
text-green-600
">

98%

</h3>


</div>



</div>




</motion.div>









{/* Rank Card */}


<motion.div


initial={{

opacity:0,

x:-80

}}


animate={{

opacity:1,

x:0

}}


transition={{

delay:.5

}}


whileHover={{

scale:1.05

}}



className="

absolute

left-0

top-24

z-20

bg-white

rounded-3xl

shadow-xl

p-6

w-64

"


>


<div className="
flex
gap-4
items-center
">


<div className="
w-14
h-14
rounded-full
bg-orange-100
flex
items-center
justify-center
">

<FaTrophy className="
text-orange-500
text-2xl
"/>

</div>


<div>

<p className="
text-gray-500
text-sm
">

Today's Rank

</p>


<h3 className="
text-4xl
font-black
text-orange-500
">

#24

</h3>


</div>


</div>


<p className="
mt-4
text-green-600
font-bold
">

▲ +12 Places

</p>


</motion.div>









{/* Performance Card */}


<motion.div


initial={{

opacity:0,

x:80

}}


animate={{

opacity:1,

x:0

}}


transition={{

delay:.7

}}


className="

absolute

right-0

bottom-24

z-20

bg-white

rounded-3xl

shadow-xl

p-6

w-72

"


>


<div className="
flex
gap-4
items-center
">


<div className="
w-14
h-14
rounded-full
bg-blue-100
flex
items-center
justify-center
">

<FaChartLine className="
text-blue-700
text-xl
"/>

</div>


<div>

<p className="
text-gray-500
">

Score

</p>


<h3 className="
text-3xl
font-black
text-blue-900
">

38/40

</h3>


</div>


</div>


</motion.div>









{/* Students Online */}



<motion.div

animate={{

y:[0,-10,0]

}}

transition={{

duration:4,

repeat:Infinity

}}

className="

absolute

left-10

bottom-10

z-30

bg-white

rounded-3xl

shadow-xl

p-5

w-60

"


>


<div className="
flex
items-center
gap-4
">


<FaUsers className="
text-green-600
text-3xl
"/>


<div>

<p className="
text-gray-500
text-sm
">

Students Online

</p>


<h3 className="
text-3xl
font-black
text-green-600
">

12,486

</h3>


</div>


</div>


</motion.div>









{/* AI Prediction */}



<motion.div


animate={{

y:[0,-12,0]

}}


transition={{

duration:5,

repeat:Infinity

}}


className="

absolute

right-10

top-10

z-30

bg-gradient-to-r

from-blue-700

to-blue-900

text-white

rounded-3xl

p-6

w-60

shadow-2xl

"


>


<p className="
text-sm
opacity-80
">

AI Prediction

</p>


<h2 className="
text-4xl
font-black
mt-2
">

98%

</h2>


<p className="
text-sm
mt-2
">

Score improvement probability

</p>


</motion.div>





</div>

);

}