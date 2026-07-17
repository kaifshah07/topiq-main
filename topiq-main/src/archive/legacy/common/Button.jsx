export default function Button({

children,

className="",

...props

}){

return(

<button

{...props}

className={`

px-8

py-4

rounded-full

bg-blue-900

text-white

font-semibold

transition-all

duration-300

hover:bg-blue-800

hover:-translate-y-1

shadow-lg

${className}

`}

>

{children}

</button>

);

}