// src/components/sections/leaderboard/LeaderboardPodium.jsx


import leaderboardData from "./leaderboardData";


export default function LeaderboardPodium(){


return (

<div
className="
grid
gap-8
md:grid-cols-3
"
>

{

leaderboardData.topStudents.map((student)=>(

<div
key={student.id}
className="
flex
flex-col
items-center
rounded-3xl
bg-slate-50
p-8
"
>

<div
className={`
flex
h-20
w-20
items-center
justify-center
rounded-full
bg-gradient-to-br
${student.accent}
text-white
`}
>

<student.icon size={38}/>

</div>


<h3 className="mt-5 text-xl font-bold">
{student.name}
</h3>


<p className="text-slate-500">
{student.score}
</p>


<p className="mt-3 font-semibold text-blue-600">
{student.achievement}
</p>


</div>

))

}

</div>

)

}