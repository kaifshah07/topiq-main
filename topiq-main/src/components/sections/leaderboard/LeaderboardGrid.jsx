// src/components/sections/leaderboard/LeaderboardGrid.jsx


import leaderboardData from "./leaderboardData";

import LeaderboardCard from "./LeaderboardCard";


export default function LeaderboardGrid(){


return (

<div>


<h2
className="
mb-10
text-center
text-4xl
font-extrabold
"
>

Why TOPIQ Leaderboard?

</h2>



<div
className="
grid
gap-8
md:grid-cols-3
"
>


{

leaderboardData.features.map((item,index)=>(


<LeaderboardCard

key={index}

icon={item.icon}

title={item.title}

description={item.description}

/>


))

}


</div>


</div>

)

}