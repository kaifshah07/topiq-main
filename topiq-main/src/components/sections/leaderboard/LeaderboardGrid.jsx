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
leaderboard-features-mobile-row
"
>


{

leaderboardData.features.map((item,index)=>(


<LeaderboardCard

key={index}

icon={item.icon}

title={item.title}

description={item.description}

accent="from-blue-500 to-indigo-600"

/>


))

}


</div>


</div>

)

}
