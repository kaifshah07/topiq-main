import Tooltip from "./Tooltip";





export default function AvatarGroup({

  users=[],

  max=5,

  size="md",

  showCount=true,

}) {



const sizes={

sm:"w-8 h-8 text-xs",

md:"w-11 h-11 text-sm",

lg:"w-14 h-14 text-base",

xl:"w-20 h-20 text-lg"

};





const visibleUsers = users.slice(0,max);

const remaining = users.length - max;









return (

<div

className="

flex

items-center

"

>





{

visibleUsers.map((user,index)=>(



<Tooltip

key={index}

content={user.name || "User"}

>


<div


className={`

${sizes[size]}

rounded-full

border-2

border-white

overflow-hidden

bg-orange-100

text-orange-600

font-bold

flex

items-center

justify-center

-ml-3

first:ml-0

shadow-sm

hover:scale-110

transition

cursor-pointer

`}


>





{

user.image

?

<img


src={user.image}


alt={user.name}


className="

w-full

h-full

object-cover

"

/>


:

(

user.name

?

user.name

.split(" ")

.map(word=>word[0])

.join("")

.substring(0,2)

.toUpperCase()

:

"U"

)

}





</div>



</Tooltip>


))

}







{

showCount && remaining>0 &&

(

<div

className={`

${sizes[size]}

rounded-full

border-2

border-white

bg-slate-900

text-white

font-bold

flex

items-center

justify-center

-ml-3

shadow-sm

`

}

>

+{remaining}

</div>

)

}



</div>

);

}