import { 
  useState 
} from "react";


import {
  motion,
  AnimatePresence
} from "framer-motion";


import {
  FaUser,
  FaCog,
  FaChartLine,
  FaBookOpen,
  FaSignOutAlt,
  FaTrophy,
  FaChevronDown
} from "react-icons/fa";


import UserAvatar from "./UserAvatar";





export default function ProfileDropdown({

  user = {

    name:"Rahul Sharma",

    email:"rahul@example.com",

    avatar:null,

    rank:24

  },


  menuItems,


  onLogout,


}){


const [open,setOpen]=useState(false);





const defaultMenu=[


{

title:"My Profile",

icon:<FaUser />,

path:"#profile"

},


{

title:"My Exams",

icon:<FaBookOpen />,

path:"#exams"

},


{

title:"Performance",

icon:<FaChartLine />,

path:"#performance"

},


{

title:"Achievements",

icon:<FaTrophy />,

path:"#achievements"

},


{

title:"Settings",

icon:<FaCog />,

path:"#settings"

}



];



const items = menuItems || defaultMenu;







return (


<div

className="relative"

>





{/* Profile Button */}


<button


onClick={()=>setOpen(!open)}


className="

flex

items-center

gap-3

"


>


<UserAvatar

name={user.name}

image={user.avatar}

size="sm"

status={true}

/>


<div

className="hidden md:block text-left"

>


<h4

className="

font-bold

text-slate-900

text-sm

"

>

{user.name}

</h4>


<p

className="

text-xs

text-gray-500

"

>

Rank #{user.rank}

</p>


</div>





<FaChevronDown

className={`

text-gray-500

text-xs

transition

${

open

?

"rotate-180"

:

""

}

`}

/>



</button>









{/* Dropdown */}



<AnimatePresence>


{

open &&

(


<motion.div


initial={{

opacity:0,

y:15,

scale:.95

}}


animate={{

opacity:1,

y:0,

scale:1

}}


exit={{

opacity:0,

y:15,

scale:.95

}}



transition={{

duration:.25

}}



className="

absolute

right-0

mt-4

w-80

bg-white

rounded-3xl

shadow-2xl

border

border-gray-100

overflow-hidden

z-50

"

>


{/* User Header */}



<div

className="

p-6

bg-gradient-to-r

from-blue-900

to-blue-700

text-white

"


>


<div

className="

flex

items-center

gap-4

"


>


<UserAvatar


name={user.name}


image={user.avatar}


size="md"


badge={true}


/>


<div>


<h3

className="

font-black

text-lg

"

>

{user.name}

</h3>


<p

className="

text-sm

opacity-80

"

>

{user.email}

</p>



</div>


</div>



<div

className="

mt-5

flex

justify-between

"


>


<div>


<p

className="

text-xs

opacity-70

"

>

Current Rank

</p>


<p

className="

font-black

text-xl

"

>

#{user.rank}

</p>


</div>





<div>


<p

className="

text-xs

opacity-70

"

>

Score

</p>


<p

className="

font-black

text-xl

"

>

95%

</p>


</div>


</div>


</div>









{/* Menu */}



<div

className="

p-4

space-y-2

"


>


{

items.map((item,index)=>(


<a


key={index}


href={item.path}


className="

flex

items-center

gap-4

px-4

py-3

rounded-xl

hover:bg-orange-50

hover:text-orange-500

transition

"


>


<span

className="

text-lg

"

>

{item.icon}

</span>


<span

className="

font-semibold

"

>

{item.title}

</span>


</a>



))


}



</div>








{/* Logout */}



<div

className="

border-t

p-4

"


>


<button


onClick={onLogout}


className="

w-full

flex

items-center

justify-center

gap-3

py-3

rounded-xl

bg-red-50

text-red-500

font-bold

hover:bg-red-100

transition

"


>


<FaSignOutAlt />

Logout


</button>


</div>






</motion.div>



)

}



</AnimatePresence>





</div>


);

}