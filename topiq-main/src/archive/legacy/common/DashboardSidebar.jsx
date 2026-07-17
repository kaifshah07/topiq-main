import { useState } from "react";

import {
  motion
} from "framer-motion";


import {
  FaHome,
  FaBookOpen,
  FaChartLine,
  FaTrophy,
  FaMedal,
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaBars,
  FaTimes
} from "react-icons/fa";


import UserAvatar from "./UserAvatar";





export default function DashboardSidebar({

  user={

    name:"Rahul Sharma",

    email:"student@topiq.in",

  },


  menuItems,


  active="dashboard",


  onLogout,


}){



const [collapsed,setCollapsed]=useState(false);

const [mobileOpen,setMobileOpen]=useState(false);







const defaultMenu=[


{

id:"dashboard",

title:"Dashboard",

icon:<FaHome />,

path:"#dashboard"

},



{

id:"exams",

title:"My Exams",

icon:<FaBookOpen />,

path:"#exams"

},



{

id:"performance",

title:"Performance",

icon:<FaChartLine />,

path:"#performance"

},



{

id:"leaderboard",

title:"Leaderboard",

icon:<FaTrophy />,

path:"#leaderboard"

},



{

id:"rewards",

title:"Rewards",

icon:<FaMedal />,

path:"#rewards"

},



{

id:"profile",

title:"Profile",

icon:<FaUser />,

path:"#profile"

},



{

id:"settings",

title:"Settings",

icon:<FaCog />,

path:"#settings"

}



];





const items = menuItems || defaultMenu;






return (


<>



{/* Mobile Button */}


<button


onClick={()=>setMobileOpen(!mobileOpen)}


className="

lg:hidden

fixed

top-5

left-5

z-50

bg-blue-900

text-white

p-3

rounded-xl

shadow-xl

"


>

{

mobileOpen

?

<FaTimes />

:

<FaBars />

}


</button>









<motion.aside


animate={{

width:

collapsed

?

"90px"

:

"280px"


}}



className={`

fixed

left-0

top-0

h-screen

bg-[#01295A]

text-white

shadow-2xl

z-40

transition-all


${

mobileOpen

?

"translate-x-0"

:

"-translate-x-full lg:translate-x-0"

}


`}



>



<div

className="

h-full

flex

flex-col

"

>







{/* Logo */}



<div

className="

p-6

flex

items-center

justify-between

"


>


<h1

className={`

font-black

text-3xl

${

collapsed

?

"hidden"

:

"block"

}

`}

>


TOP<span className="text-orange-500">

IQ

</span>


</h1>





<button


onClick={()=>setCollapsed(!collapsed)}


className="

hidden

lg:block

text-white

"


>

<FaBars />

</button>


</div>










{/* User */}



<div

className="

px-5

pb-6

border-b

border-white/20

"


>


<UserAvatar


name={user.name}


size="md"


status={true}


/>


{

!collapsed &&


(

<div

className="mt-4"

>


<h3

className="

font-bold

"

>

{user.name}

</h3>


<p

className="

text-sm

opacity-70

"

>

{user.email}

</p>


</div>


)


}


</div>









{/* Menu */}



<nav

className="

flex-1

p-5

space-y-3

overflow-y-auto

"

>


{


items.map((item)=>(



<a


href={item.path}


key={item.id}



className={`

flex

items-center

gap-4

px-4

py-3

rounded-xl

transition

${

active===item.id

?

"bg-orange-500 text-white"

:

"hover:bg-white/10"

}


`}



>



<span

className="text-xl"

>

{item.icon}

</span>




{

!collapsed &&

(

<span

className="font-semibold"

>

{item.title}

</span>

)

}



</a>



))


}



</nav>









{/* Logout */}



<div

className="

p-5

border-t

border-white/20

"


>


<button


onClick={onLogout}


className="

w-full

flex

items-center

gap-4

px-4

py-3

rounded-xl

bg-red-500/20

hover:bg-red-500

transition

"


>


<FaSignOutAlt />


{

!collapsed &&

<span>

Logout

</span>

}



</button>



</div>







</div>



</motion.aside>



</>

);

}