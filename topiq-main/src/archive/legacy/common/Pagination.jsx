import { motion } from "framer-motion";

import {
  FaChevronLeft,
  FaChevronRight
} from "react-icons/fa";





export default function Pagination({

  currentPage=1,

  totalPages=1,

  onPageChange,

}) {





const getPages=()=>{


const pages=[];


if(totalPages<=5){

for(let i=1;i<=totalPages;i++){

pages.push(i);

}

}

else{


if(currentPage<=3){

pages.push(

1,

2,

3,

4,

"...",

totalPages

);

}


else if(currentPage>=totalPages-2){

pages.push(

1,

"...",

totalPages-3,

totalPages-2,

totalPages-1,

totalPages

);

}


else{


pages.push(

1,

"...",

currentPage-1,

currentPage,

currentPage+1,

"...",

totalPages

);


}


}


return pages;


};









return (

<div

className="

flex

items-center

justify-center

gap-2

mt-8

"

>









{/* Previous */}



<button


disabled={currentPage===1}


onClick={()=>onPageChange(currentPage-1)}


className={`

w-10

h-10

rounded-xl

flex

items-center

justify-center

transition

${

currentPage===1

?

"bg-gray-100 text-gray-400 cursor-not-allowed"

:

"bg-white border hover:bg-orange-50 hover:text-orange-500"

}

`}


>

<FaChevronLeft />

</button>









{/* Pages */}



{

getPages().map((page,index)=>(


page==="..." ?


<span

key={index}

className="px-2 text-gray-400"

>

...

</span>


:

<motion.button


key={index}


whileTap={{

scale:.9

}}



onClick={()=>onPageChange(page)}



className={`

w-10

h-10

rounded-xl

font-bold

transition

${

currentPage===page

?

"bg-orange-500 text-white shadow-lg"

:

"bg-white border text-gray-600 hover:bg-orange-50"

}

`}


>

{page}

</motion.button>



))


}









{/* Next */}



<button


disabled={currentPage===totalPages}


onClick={()=>onPageChange(currentPage+1)}


className={`

w-10

h-10

rounded-xl

flex

items-center

justify-center

transition

${

currentPage===totalPages

?

"bg-gray-100 text-gray-400 cursor-not-allowed"

:

"bg-white border hover:bg-orange-50 hover:text-orange-500"

}

`}



>

<FaChevronRight />

</button>








</div>

);

}