// src/components/sections/leaderboard/Leaderboard.jsx


import AnimatedSection from "../../../animations/AnimatedSection";


import LeaderboardContent from "./LeaderboardContent";
import LeaderboardPodium from "./LeaderboardPodium";
import LeaderboardGrid from "./LeaderboardGrid";


export default function Leaderboard(){


return (

<section

id="leaderboard"

className="
relative
overflow-hidden
bg-white
py-20
lg:py-28
"

>


<div
className="
absolute
-left-40
top-20
h-96
w-96
rounded-full
bg-blue-100/40
blur-3xl
"
/>


<div
className="
absolute
-right-40
bottom-20
h-96
w-96
rounded-full
bg-indigo-100/40
blur-3xl
"
/>



<div
className="
container
relative
z-10
mx-auto
max-w-7xl
px-6
lg:px-8
"
>


<AnimatedSection animation="fadeUp">


<LeaderboardContent/>


<div className="mt-16">

<LeaderboardPodium/>

</div>



<div className="leaderboard-reasons-block">

<LeaderboardGrid/>

</div>


</AnimatedSection>


</div>


</section>

)

}
