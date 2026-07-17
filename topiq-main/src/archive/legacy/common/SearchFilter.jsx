import {
  FaSearch,
  FaFilter,
  FaTimes
} from "react-icons/fa";


import SelectDropdown from "./SelectDropdown";





export default function SearchFilter({

  search="",

  setSearch,

  filters=[],

  values={},

  setValues,

  onReset,

  placeholder="Search..."

}) {





const handleFilterChange=(key,value)=>{


setValues({

...values,

[key]:value

});


};









return (

<div

className="

bg-white

rounded-3xl

shadow-sm

border

border-gray-100

p-5

space-y-5

"

>







{/* Top Search */}



<div

className="

flex

flex-col

lg:flex-row

gap-4

"

>








<div

className="

relative

flex-1

"

>



<FaSearch

className="

absolute

left-4

top-4

text-gray-400

"

/>





<input


type="text"


value={search}


onChange={(e)=>setSearch(e.target.value)}


placeholder={placeholder}


className="

w-full

h-12

pl-12

pr-4

rounded-xl

border

border-gray-200

focus:border-orange-500

outline-none

transition

"


/>



</div>







{

onReset &&

(

<button


onClick={onReset}


className="

h-12

px-5

rounded-xl

bg-gray-100

hover:bg-gray-200

font-semibold

text-gray-600

flex

items-center

justify-center

gap-2

"

>

<FaTimes />

Reset

</button>

)

}



</div>









{/* Filters */}



{

filters.length>0 &&

(

<div

className="

grid

md:grid-cols-2

lg:grid-cols-4

gap-4

"

>





{

filters.map((filter,index)=>(


<SelectDropdown


key={index}


label={filter.label}


options={filter.options}


value={values[filter.key]}


onChange={(value)=>

handleFilterChange(

filter.key,

value

)

}


/>


))


}



</div>

)

}







</div>

);

}