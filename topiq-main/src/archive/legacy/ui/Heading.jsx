export default function Heading({

title,

subtitle,

align="center",

}) {


return (

<div

className={`
mb-10

max-w-3xl

${
align==="center"

?

"mx-auto text-center"

:

"text-left"

}

`}

>


<h2

className="

text-3xl

md:text-4xl

lg:text-[42px]

font-extrabold

tracking-tight

text-slate-900

leading-tight

"

>

{title}


</h2>



{
subtitle &&

<p

className="

mt-4

text-base

md:text-lg

leading-7

text-slate-600

"

>

{subtitle}

</p>

}



</div>


);


}