export default function GradientButton({title}){

return(

<button className="

px-8

py-4

rounded-full

font-bold

text-white

bg-gradient-to-r

from-orange-500

to-red-500

hover:scale-110

duration-300

shadow-xl

">

{title}

</button>

)

}