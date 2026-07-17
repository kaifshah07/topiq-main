export default function SectionTitle({

title,

subtitle

}){

return(

<div className="text-center mb-16">

<h2

className="

text-5xl

font-black

text-slate-900

"

>

{title}

</h2>

<p

className="

mt-4

text-lg

text-slate-500

max-w-3xl

mx-auto

"

>

{subtitle}

</p>

</div>

);

}