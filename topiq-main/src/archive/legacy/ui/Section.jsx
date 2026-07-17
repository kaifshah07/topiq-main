export default function Section({

children,

className = "",

id,

}) {


return (

<section

id={id}

className={`
relative

py-16

lg:py-20

overflow-hidden

${className}

`}

>


{children}


</section>

);


}