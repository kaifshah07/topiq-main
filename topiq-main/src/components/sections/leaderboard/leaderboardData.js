// src/components/sections/leaderboard/leaderboardData.js


import {
  Trophy,
  Medal,
  Crown,
  Star
} from "lucide-react";


const leaderboardData = {


badge:
"TOPIQ Student Leaderboard",


title:
"Celebrate",

highlight:
"Top Performers",


description:
"TOPIQ leaderboard showcases outstanding students based on Talent Test performance, mock exams, accuracy, consistency and overall improvement.",



topStudents:[

{
id:1,

rank:1,

name:"Aarav Sharma",

class:"Class 10",

city:"Pune",

score:"98.7%",

achievement:"National Rank 1",

icon:Crown,

accent:
"from-yellow-400 to-orange-500"

},


{
id:2,

rank:2,

name:"Priya Verma",

class:"Class 9",

city:"Nagpur",

score:"97.9%",

achievement:"National Rank 2",

icon:Medal,

accent:
"from-slate-300 to-slate-500"

},


{
id:3,

rank:3,

name:"Rahul Patil",

class:"Class 12",

city:"Nashik",

score:"97.2%",

achievement:"National Rank 3",

icon:Trophy,

accent:
"from-orange-400 to-red-500"

}

],



features:[

{
title:"Live Rankings",

description:
"Track your position with real-time performance updates.",
icon:Trophy
},

{
title:"Performance Based",

description:
"Rankings calculated using accuracy, marks and consistency.",
icon:Star
},

{
title:"Healthy Competition",

description:
"Motivate yourself by competing with talented students.",
icon:Crown
}

],



statistics:[

{
value:"1L+",
label:"Students"
},

{
value:"5000+",
label:"Daily Tests"
},

{
value:"95%",
label:"Accuracy Tracking"
},

{
value:"24×7",
label:"Live Updates"
}

],


accent:
"from-blue-600 via-indigo-600 to-cyan-500"

};


export default leaderboardData;