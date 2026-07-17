import { 
  useState,
  useEffect,
  useRef
} from "react";

import { motion } from "framer-motion";

import {
  FaSearch,
  FaTimes
} from "react-icons/fa";



export default function SearchBar({

  placeholder="Search exams, courses, resources...",

  onSearch,

  variant="light",

  className=""

}) {



const [value,setValue]=useState("");

const inputRef = useRef(null);





/* Keyboard Shortcut */

useEffect(()=>{


const handleShortcut=(e)=>{


if(

(e.ctrlKey || e.metaKey)

&&

e.key==="k"

){


e.preventDefault();


inputRef.current?.focus();


}


};



window.addEventListener(

"keydown",

handleShortcut

);



return ()=>{


window.removeEventListener(

"keydown",

handleShortcut

);


};


},[]);







const handleChange=(e)=>{


const text=e.target.value;


setValue(text);


if(onSearch){

onSearch(text);

}


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






return (


<motion.div


initial={{

opacity:0,

y:-10

}}


animate={{

opacity:1,

y:0

}}


transition={{

duration:.4

}}



className={`

relative

flex

items-center

rounded-2xl

border

px-5

py-3

shadow-lg

transition

focus-within:ring-2

focus-within:ring-orange-500

${variants[variant]}

${className}

`}


>






{/* Search Icon */}


<FaSearch

className="

text-gray-400

mr-3

"

/>







<input


ref={inputRef}


value={value}


onChange={handleChange}


placeholder={placeholder}


className="

bg-transparent

outline-none

w-full

text-sm

"


/>









{/* Shortcut */}


{

!value &&

(

<span

className="

hidden

md:flex

items-center

gap-1

text-xs

opacity-60

border

px-2

py-1

rounded-lg

"

>


CTRL


+

K


</span>

)

}










{/* Clear Button */}


{

value &&

(

<button


onClick={()=>{


setValue("");


if(onSearch){

onSearch("");

}


}}


className="

ml-3

text-gray-400

hover:text-orange-500

transition

"


>


<FaTimes />


</button>


)

}



</motion.div>



);

}