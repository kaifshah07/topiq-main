export default function Input({

label,

...props

}){

return(

<div className="space-y-2">

<label

className="

block

font-semibold

text-slate-700

"

>

{label}

</label>

<input

{...props}

className="

w-full

border

border-slate-300

rounded-xl

px-5

py-4

outline-none

focus:ring-2

focus:ring-blue-900

"

 />

</div>

);

}