// src/components/sections/talentTest/talentTestData.js

import {
  ClipboardCheck,
  Brain,
  Trophy,
  Award,
  BarChart3,
  ShieldCheck,
} from "lucide-react";


const talentTestData = {

  badge: "TOPIQ Talent Test",

  title:
    "Discover Your Potential",

  highlight:
    "Compete, Perform & Get Recognized",

  description:
    "TOPIQ Talent Test is a nationwide online examination designed for students from Class 1 to Class 12. Evaluate your knowledge, compare your performance, win scholarships and earn recognition.",


  timeline: [

    {
      id:1,
      title:"Register Online",
      description:
      "Create your TOPIQ account and register for the Talent Test.",
      icon: ClipboardCheck,
    },


    {
      id:2,
      title:"Attempt Online Exam",
      description:
      "Appear for a secure AI-powered examination from anywhere.",
      icon: Brain,
    },


    {
      id:3,
      title:"Get Performance Report",
      description:
      "Receive detailed analysis of strengths, weaknesses and ranking.",
      icon: BarChart3,
    },


    {
      id:4,
      title:"Win Awards & Scholarships",
      description:
      "Top performers receive scholarships, certificates and recognition.",
      icon: Trophy,
    },

  ],



  benefits:[

    {
      id:1,
      title:"AI Based Evaluation",
      description:
      "Smart analysis with accurate performance insights.",
      icon: Brain,
    },


    {
      id:2,
      title:"National Ranking",
      description:
      "Compare your performance with students across regions.",
      icon: Award,
    },


    {
      id:3,
      title:"Secure Examination",
      description:
      "Safe and transparent online exam experience.",
      icon: ShieldCheck,
    },


  ],



  statistics:[

    {
      value:"1 Lakh+",
      label:"Expected Participants",
    },

    {
      value:"1000+",
      label:"Scholarships",
    },

    {
      value:"500+",
      label:"Awards",
    },

    {
      value:"100%",
      label:"Digital Certificates",
    },

  ],



  accent:
  "from-blue-600 via-indigo-600 to-cyan-500"

};


export default talentTestData;