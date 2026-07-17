// src/components/sections/studentEnquiry/studentEnquiryData.js


/**
 * ==========================================================
 * Student Enquiry Data
 * ==========================================================
 *
 * Centralized configuration for Student Enquiry section.
 *
 * Features:
 * ----------
 * ✅ API ready structure
 * ✅ Easy CMS migration
 * ✅ Form options management
 * ✅ Conversion content management
 *
 */


const studentEnquiryData = {


/*
|--------------------------------------------------------------------------
| Hero Content
|--------------------------------------------------------------------------
*/

hero:{

badge:"Start Your Learning Journey",

title:"Join TOPIQ Today",

highlight:
"Get Expert Guidance For Your Exams",

description:
"Fill the enquiry form and connect with TOPIQ academic experts. Get personalized guidance, scholarship details, exam preparation strategies, and the right learning path for your success.",

cta:
"Submit Enquiry",

},




/*
|--------------------------------------------------------------------------
| Benefits
|--------------------------------------------------------------------------
*/

benefits:[

{
id:1,

title:"AI Powered Learning",

description:
"Personalized study plans, smart recommendations, and performance insights powered by AI.",

},

{
id:2,

title:"Scholarship Opportunities",

description:
"Participate in TOPIQ Talent Test and win scholarships, awards, and recognition.",

},

{
id:3,

title:"Exam Focused Preparation",

description:
"Practice with mock tests, quizzes, and exam-oriented learning resources.",

},

{
id:4,

title:"Expert Counselling",

description:
"Get guidance from academic experts to choose the right preparation path.",

},

],




/*
|--------------------------------------------------------------------------
| Trust Statistics
|--------------------------------------------------------------------------
*/

stats:[

{
value:"25K+",

label:"Students Connected",

},

{
value:"1000+",

label:"Mock Tests",

},

{
value:"500+",

label:"Scholarship Winners",

},

{
value:"36+",

label:"Districts Covered",

},

],





/*
|--------------------------------------------------------------------------
| Class Options
|--------------------------------------------------------------------------
*/


classes:[

"Class 1-5",

"Class 6-8",

"Class 9-10",

"Class 11-12",

"College Student",

],






/*
|--------------------------------------------------------------------------
| Exam Options
|--------------------------------------------------------------------------
*/


exams:[

"TOPIQ Talent Test",

"JEE",

"NEET",

"MPSC",

"UPSC",

"SSC",

"Banking",

"Railway",

"Police Recruitment",

],






/*
|--------------------------------------------------------------------------
| Medium Options
|--------------------------------------------------------------------------
*/


mediums:[

"English",

"Marathi",

"Hindi",

],






/*
|--------------------------------------------------------------------------
| Learning Modes
|--------------------------------------------------------------------------
*/


learningModes:[

"Online Learning",

"Offline Classroom",

"Hybrid Learning",

],






/*
|--------------------------------------------------------------------------
| Form Success Message
|--------------------------------------------------------------------------
*/


successMessage:

"Thank you for your enquiry. Our TOPIQ academic counsellor will contact you shortly.",





/*
|--------------------------------------------------------------------------
| Contact Information
|--------------------------------------------------------------------------
*/


contact:{

phone:"+91 XXXXX XXXXX",

email:"support@topiq.in",

whatsapp:"Available",

},




/*
|--------------------------------------------------------------------------
| API Configuration
|--------------------------------------------------------------------------
*/


api:{

endpoint:"/api/student-enquiry",

method:"POST",

},




};




export default studentEnquiryData;