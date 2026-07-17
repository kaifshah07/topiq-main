import { useState } from "react";
import { motion } from "framer-motion";

import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaGraduationCap,
  FaPaperPlane,
  FaCheckCircle,
} from "react-icons/fa";



export default function ContactForm({

  title="Get In Touch",

  description=
  "Have questions about TOPIQ? Our team will help you get started.",

  buttonText="Submit Request",

  onSubmit,

}) {


const [formData,setFormData] = useState({

name:"",

email:"",

phone:"",

type:"Student",

message:""

});


const [submitted,setSubmitted] = useState(false);





const handleChange=(e)=>{


setFormData({

...formData,

[e.target.name]:e.target.value

});


};





const handleSubmit=(e)=>{


e.preventDefault();


if(onSubmit){

onSubmit(formData);

}


setSubmitted(true);


};





if(submitted){


return (

<motion.div

initial={{

opacity:0,

scale:.8

}}

animate={{

opacity:1,

scale:1

}}

className="

bg-white

rounded-[35px]

shadow-2xl

p-10

text-center

"


>


<FaCheckCircle

className="

text-green-500

text-6xl

mx-auto

"

/>


<h3 className="

text-3xl

font-black

mt-6

text-slate-900

">

Thank You!

</h3>


<p className="

mt-4

text-gray-600

">

Your request has been submitted.
Our team will contact you soon.

</p>


</motion.div>

);


}





return (

<motion.div


initial={{

opacity:0,

y:50

}}


whileInView={{

opacity:1,

y:0

}}


viewport={{

once:true

}}


transition={{

duration:.7

}}



className="

bg-white

rounded-[40px]

shadow-2xl

p-8

lg:p-12

"


>



<h2 className="

text-3xl

font-black

text-slate-900

">

{title}

</h2>



<p className="

mt-4

text-gray-600

leading-7

">

{description}

</p>







<form

onSubmit={handleSubmit}

className="

mt-8

space-y-5

"


>





{/* Name */}


<div className="relative">


<FaUser

className="

absolute

left-4

top-4

text-gray-400

"

/>


<input


required


name="name"


value={formData.name}


onChange={handleChange}


placeholder="Your Name"


className="

w-full

pl-12

pr-4

py-4

rounded-xl

border

border-gray-200

focus:border-orange-500

transition

"


/>


</div>









{/* Email */}


<div className="relative">


<FaEnvelope

className="

absolute

left-4

top-4

text-gray-400

"

/>


<input


required


type="email"


name="email"


value={formData.email}


onChange={handleChange}


placeholder="Email Address"


className="

w-full

pl-12

pr-4

py-4

rounded-xl

border

border-gray-200

focus:border-orange-500

transition

"


/>


</div>









{/* Phone */}


<div className="relative">


<FaPhone

className="

absolute

left-4

top-4

text-gray-400

"

/>


<input


required


type="tel"


name="phone"


value={formData.phone}


onChange={handleChange}


placeholder="Mobile Number"


className="

w-full

pl-12

pr-4

py-4

rounded-xl

border

border-gray-200

focus:border-orange-500

transition

"


/>


</div>









{/* User Type */}



<div className="relative">


<FaGraduationCap

className="

absolute

left-4

top-4

text-gray-400

"

/>


<select


name="type"


value={formData.type}


onChange={handleChange}


className="

w-full

pl-12

pr-4

py-4

rounded-xl

border

border-gray-200

focus:border-orange-500

transition

"


>


<option>

Student

</option>


<option>

Parent

</option>


<option>

School

</option>


<option>

Coaching Institute

</option>


</select>


</div>









{/* Message */}


<textarea


name="message"


value={formData.message}


onChange={handleChange}


placeholder="Your Message"


rows="4"


className="

w-full

px-5

py-4

rounded-xl

border

border-gray-200

focus:border-orange-500

transition

"


/>









{/* Submit */}



<button


type="submit"


className="

w-full

bg-orange-500

hover:bg-orange-600

text-white

font-bold

py-4

rounded-xl

flex

items-center

justify-center

gap-3

transition

shadow-xl

"


>


{buttonText}


<FaPaperPlane />


</button>





</form>



</motion.div>

);

}