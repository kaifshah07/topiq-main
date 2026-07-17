// src/components/sections/performanceDashboard/dashboard.js


const dashboardData = {


  stats: [

    {
      id:1,

      icon:"accuracy",

      value:"92%",

      title:"Accuracy",

      description:
        "Improved answer precision",

      accent:
        "from-blue-500 to-cyan-500",

    },


    {
      id:2,

      icon:"tests",

      value:"850+",

      title:"Mock Tests",

      description:
        "Completed practice sessions",

      accent:
        "from-purple-500 to-indigo-500",

    },


    {
      id:3,

      icon:"time",

      value:"120 Hrs",

      title:"Study Time",

      description:
        "Focused learning hours",

      accent:
        "from-emerald-500 to-teal-500",

    },


    {
      id:4,

      icon:"rank",

      value:"#12",

      title:"Current Rank",

      description:
        "Leaderboard position",

      accent:
        "from-orange-500 to-red-500",

    },

  ],







  chart: [

    {
      month:"Jan",

      score:55,

    },


    {
      month:"Feb",

      score:62,

    },


    {
      month:"Mar",

      score:68,

    },


    {
      month:"Apr",

      score:76,

    },


    {
      month:"May",

      score:84,

    },


    {
      month:"Jun",

      score:92,

    },

  ],







  progress: [

    {
      subject:"Quantitative Aptitude",

      progress:92,

    },


    {
      subject:"Logical Reasoning",

      progress:85,

    },


    {
      subject:"English Language",

      progress:78,

    },


    {
      subject:"General Knowledge",

      progress:70,

    },

  ],







  leaderboard: [

    {
      id:1,

      rank:1,

      name:"Aarav Sharma",

      score:985,

      avatar:"AS",

      badge:"Gold",

    },


    {
      id:2,

      rank:2,

      name:"Priya Patil",

      score:962,

      avatar:"PP",

      badge:"Silver",

    },


    {
      id:3,

      rank:3,

      name:"Rahul Verma",

      score:948,

      avatar:"RV",

      badge:"Bronze",

    },


    {
      id:4,

      rank:4,

      name:"You",

      score:932,

      avatar:"YO",

      badge:"Current Rank",

    },

  ],







  insights: [

    "Your accuracy improved by 15% this month",

    "Quantitative Aptitude is your strongest subject",

    "Complete 5 more mock tests to improve ranking",

  ],



};



export default dashboardData;