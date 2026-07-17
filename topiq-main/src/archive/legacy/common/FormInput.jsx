import {
  useState
} from "react";


import {
  FaEye,
  FaEyeSlash
} from "react-icons/fa";





export default function FormInput({

  label,

  name,

  type="text",

  placeholder,

  value,

  onChange,

  icon,

  error,

  helperText,

  required=false,

  disabled=false,

  className="",

}) {



const [showPassword,setShowPassword]=useState(false);



const inputType =

type==="password"

?

(

showPassword

?

"text"

:

"password"

)

:

type;







return (

<div

className={`w-full ${className}`}

>





{/* Label */}



{

label &&

(

<label

className="

block

mb-2

text-sm

font-bold

text-slate-700

"


>

{label}


{

required &&

<span className="text-red-500">

*

</span>

}


</label>

)

}








{/* Input Wrapper */}



<div

className={`

relative

flex

items-center

rounded-xl

border

transition

${

error

?

"border-red-500"

:

"border-gray-200 focus-within:border-orange-500"

}


${

disabled

?

"bg-gray-100"

:

"bg-white"

}


`}


>






{/* Left Icon */}



{

icon &&

(

<div

className="

absolute

left-4

text-gray-400

"

>

{icon}

</div>

)

}







<input


name={name}


type={inputType}


value={value}


onChange={onChange}


placeholder={placeholder}


disabled={disabled}



className={`

w-full

py-3.5

outline-none

bg-transparent

text-slate-900

placeholder:text-gray-400

${

icon

?

"pl-12"

:

"px-4"

}

${

type==="password"

?

"pr-12"

:

""

}

`}



/>







{/* Password Toggle */}



{

type==="password" &&

(

<button


type="button"


onClick={()=>setShowPassword(!showPassword)}


className="

absolute

right-4

text-gray-400

hover:text-orange-500

"


>


{

showPassword

?

<FaEyeSlash />

:

<FaEye />

}


</button>

)

}



</div>









{/* Error */}



{

error &&

(

<p

className="

mt-2

text-sm

text-red-500

font-medium

"

>

{error}

</p>

)

}









{/* Helper */}



{

helperText && !error &&

(

<p

className="

mt-2

text-xs

text-gray-500

"

>

{helperText}

</p>

)

}





</div>

);

}