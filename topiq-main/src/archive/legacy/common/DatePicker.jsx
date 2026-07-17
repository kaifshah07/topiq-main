import React from "react";

import ReactDatePicker from "react-datepicker";

import {
  FaCalendarAlt
} from "react-icons/fa";





export default function DatePicker({

  label,

  selected,

  onChange,

  placeholder="Select date",

  error,

  helperText,

  required=false,

  disabled=false,

  minDate,

  maxDate,

  showTime=false,

  range=false,

  startDate,

  endDate,

}) {





return (

<div className="w-full">





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









<div

className={`

relative

flex

items-center

border

rounded-xl

transition

${

error

?

"border-red-500"

:

"border-gray-200 focus-within:border-orange-500"

}

`}

>





<FaCalendarAlt

className="

absolute

left-4

text-gray-400

z-10

"

/>





<ReactDatePicker


selected={selected}


onChange={onChange}


placeholderText={placeholder}


disabled={disabled}


minDate={minDate}


maxDate={maxDate}


showTimeSelect={showTime}


dateFormat={

showTime

?

"dd MMM yyyy h:mm aa"

:

"dd MMM yyyy"

}



/>


</div>








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