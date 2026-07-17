import { useState } from "react";

import { motion } from "framer-motion";

import {
  FaSearch,
  FaChevronLeft,
  FaChevronRight,
  FaEdit,
  FaTrash,
  FaEye
} from "react-icons/fa";





export default function DataTable({

  columns=[],

  data=[],

  title="Data Table",

  searchable=true,

  pagination=true,

  rowsPerPage=10,

  loading=false,

  actions=true,

  onView,

  onEdit,

  onDelete,

}) {



const [search,setSearch]=useState("");

const [page,setPage]=useState(1);





// Search Filter


const filteredData=data.filter(row=>

Object.values(row)

.join(" ")

.toLowerCase()

.includes(search.toLowerCase())

);





// Pagination


const totalPages=Math.ceil(

filteredData.length / rowsPerPage

);



const start=(page-1)*rowsPerPage;


const currentRows=

filteredData.slice(

start,

start+rowsPerPage

);







return (

<motion.div


initial={{

opacity:0,

y:30

}}


whileInView={{

opacity:1,

y:0

}}


viewport={{

once:true

}}



className="

bg-white

rounded-3xl

shadow-xl

overflow-hidden

"


>






{/* Header */}


<div

className="

p-6

flex

flex-col

md:flex-row

justify-between

gap-4

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







{

searchable &&

(

<div

className="

relative

"


>


<FaSearch

className="

absolute

left-4

top-3.5

text-gray-400

"

/>


<input


value={search}


onChange={(e)=>{


setSearch(e.target.value);

setPage(1);


}}



placeholder="Search..."


className="

pl-11

pr-5

py-3

rounded-xl

border

border-gray-200

outline-none

focus:border-orange-500

"


/>


</div>

)

}



</div>









{/* Loading */}



{

loading &&

(

<div

className="

p-10

text-center

text-gray-500

"

>

Loading data...

</div>

)

}









{/* Empty */}



{

!loading && currentRows.length===0 &&

(

<div

className="

p-10

text-center

text-gray-500

"

>

No records found

</div>

)

}









{/* Table */}



{

!loading && currentRows.length>0 &&

(

<div

className="

overflow-x-auto

"

>


<table

className="

w-full

text-left

"


>


<thead

className="

bg-slate-50

"

>


<tr>


{

columns.map((col,index)=>(


<th

key={index}

className="

px-6

py-4

font-bold

text-gray-600

text-sm

"


>

{col.label}


</th>


))


}



{

actions &&

(

<th

className="

px-6

py-4

text-gray-600

font-bold

"

>

Actions

</th>

)

}



</tr>

</thead>









<tbody>



{

currentRows.map((row,index)=>(


<motion.tr


key={index}


initial={{

opacity:0

}}


animate={{

opacity:1

}}


transition={{

delay:index*.05

}}


className="

border-b

hover:bg-orange-50

transition

"


>



{

columns.map((col,i)=>(


<td

key={i}

className="

px-6

py-4

text-sm

"


>


{

row[col.key]

}


</td>


))


}







{

actions &&

(

<td

className="

px-6

py-4

flex

gap-3

"


>


<button


onClick={()=>onView?.(row)}


className="

text-blue-500

hover:scale-110

"


>


<FaEye />

</button>





<button


onClick={()=>onEdit?.(row)}


className="

text-green-500

hover:scale-110

"


>


<FaEdit />

</button>





<button


onClick={()=>onDelete?.(row)}


className="

text-red-500

hover:scale-110

"


>


<FaTrash />

</button>



</td>

)

}



</motion.tr>


))


}



</tbody>



</table>


</div>

)

}









{/* Pagination */}



{

pagination && totalPages>1 &&

(

<div

className="

flex

justify-between

items-center

p-6

border-t

"

>


<button


disabled={page===1}


onClick={()=>setPage(page-1)}


className="

flex

items-center

gap-2

px-4

py-2

rounded-xl

bg-slate-100

disabled:opacity-40

"


>

<FaChevronLeft />

Previous

</button>





<p

className="

font-semibold

"

>

Page {page} of {totalPages}

</p>





<button


disabled={page===totalPages}


onClick={()=>setPage(page+1)}


className="

flex

items-center

gap-2

px-4

py-2

rounded-xl

bg-slate-100

disabled:opacity-40

"


>

Next

<FaChevronRight />

</button>




</div>

)

}



</motion.div>

);

}