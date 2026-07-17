import Select from "react-select";



export default function SelectDropdown({

  label,

  name,

  options=[],

  value,

  onChange,

  placeholder="Select option",

  error,

  helperText,

  required=false,

  disabled=false,

  isSearchable=true,

  icon,

}) {





const customStyles={


control:(base,state)=>({

...base,


minHeight:"52px",


borderRadius:"14px",


borderColor:

state.isFocused

?

"#f97316"

:

"#e5e7eb",



boxShadow:"none",



"&:hover":{

borderColor:"#f97316"

}



}),





menu:(base)=>({

...base,

borderRadius:"14px",

overflow:"hidden",

marginTop:"8px",

boxShadow:"0 20px 40px rgba(0,0,0,0.12)"

}),





option:(base,state)=>({

...base,

padding:"12px 16px",

cursor:"pointer",

backgroundColor:

state.isSelected

?

"#f97316"

:

state.isFocused

?

"#fff7ed"

:

"white",



color:

state.isSelected

?

"white"

:

"#0f172a"





}),





placeholder:(base)=>({

...base,

color:"#9ca3af"

})



};









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









<div className="relative">



{

icon &&

(

<div

className="

absolute

left-4

top-4

z-10

text-gray-400

"

>

{icon}

</div>

)

}





<div

className={

icon

?

"pl-10"

:

""

}

>



<Select


name={name}


options={options}


value={value}


onChange={onChange}


placeholder={placeholder}


isSearchable={isSearchable}


isDisabled={disabled}


styles={customStyles}



/>


</div>



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