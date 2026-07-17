import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  User,
  Phone,
  Mail,
  MapPin,
  Building2,
  IndianRupee,
  MessageSquare,
} from "lucide-react";

import FadeUp from "../../../animations/FadeUp";
import ScaleIn from "../../../animations/ScaleIn";
import { submitFranchiseEnquiry } from "../../../services/franchiseService";

import {
  buttonHover,
} from "../../../utils/animationVariants";



/**
 * ==========================================================
 * FranchiseForm
 * ==========================================================
 *
 * Premium Franchise Enquiry Form
 *
 * Features
 * ----------
 * ✅ Lead generation ready
 * ✅ Controlled inputs
 * ✅ API integration ready
 * ✅ Responsive UI
 * ✅ Premium design
 *
 */


export default function FranchiseForm() {


  const [formData,setFormData] = useState({
    name:"",
    mobile:"",
    email:"",
    city:"",
    district:"",
    state:"",
    business:"",
    investment:"",
    location:"",
    message:""

  });
  const [isSubmitting, setIsSubmitting] = useState(false);

const [status, setStatus] = useState({
  type: "",
  message: "",
});


  const handleChange = (e)=>{

    setFormData({

      ...formData,

      [e.target.name]:e.target.value

    });

  };



 const handleSubmit = async (e) => {

  e.preventDefault();

  setStatus({
    type: "",
    message: "",
  });

  setIsSubmitting(true);

  try {

    await submitFranchiseEnquiry(formData);

    setStatus({
      type: "success",
      message: "Your franchise enquiry has been submitted successfully.",
    });

    setFormData({
      name:"",
      mobile:"",
      email:"",
      city:"",
      district:"",
      state:"",
      business:"",
      investment:"",
      location:"",
      message:""
    });

  } catch (error) {

    setStatus({
      type: "error",
      message:
        error.response?.data?.message ||
        error.message ||
        "Failed to submit enquiry.",
    });

  } finally {

    setIsSubmitting(false);

  }

};



  const fields=[


    {
      name:"name",
      placeholder:"Full Name",
      icon:User,
      type:"text"
    },


    {
      name:"mobile",
      placeholder:"Mobile Number",
      icon:Phone,
      type:"tel"
    },


    {
      name:"email",
      placeholder:"Email Address",
      icon:Mail,
      type:"email"
    },


    {
      name:"city",
      placeholder:"City",
      icon:MapPin,
      type:"text"
    },


    {
      name:"district",
      placeholder:"District",
      icon:MapPin,
      type:"text"
    },


    {
      name:"state",
      placeholder:"State",
      icon:MapPin,
      type:"text"
    },


    {
      name:"business",
      placeholder:"Current Business",
      icon:Building2,
      type:"text"
    },


    {
      name:"investment",
      placeholder:"Investment Capacity",
      icon:IndianRupee,
      type:"text"
    },


    {
      name:"location",
      placeholder:"Preferred Location",
      icon:MapPin,
      type:"text"
    },


  ];



  return (

    <ScaleIn>


      <div
        id="franchise-form"
        className="
          rounded-3xl
          border
          border-slate-200
          bg-white
          p-8
          shadow-xl
          lg:p-10
        "
      >


        {/* Header */}


        <FadeUp>


          <div
            className="
              mb-8
            "
          >

            <h3
              className="
                text-3xl
                font-extrabold
                text-slate-900
              "
            >

              Apply For Franchise

            </h3>


            <p
              className="
                mt-3
                leading-7
                text-slate-600
              "
            >

              Fill the form and our TOPIQ
              partnership team will contact you.

            </p>


          </div>


        </FadeUp>



      {status.message && (

  <div
    className={`mb-6 rounded-xl px-4 py-3 text-sm ${
      status.type === "success"
        ? "bg-emerald-50 text-emerald-700"
        : "bg-red-50 text-red-700"
    }`}
  >
    {status.message}
  </div>

)}

        <form
          onSubmit={handleSubmit}
          className="
            space-y-5
          "
        >



          <div
            className="
              grid
              gap-5
              md:grid-cols-2
            "
          >


            {fields.map((field)=>(


              <div
                key={field.name}
                className="
                  franchise-field
                  relative
                "
              >


                <field.icon
                  size={18}
                  className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-slate-400
                  "
                />


                <input

                  type={field.type}

                  name={field.name}

                  value={
                    formData[field.name]
                  }

                  onChange={handleChange}

                  placeholder={
                    field.placeholder
                  }

                  className="
                    w-full
                    rounded-2xl
                    border
                    border-slate-200
                    bg-slate-50
                    py-4
                    pl-12
                    pr-4
                    text-sm
                    outline-none
                    transition-all
                    focus:border-blue-500
                    focus:bg-white
                    focus:ring-4
                    focus:ring-blue-100
                  "

                />


              </div>


            ))}


          </div>





          {/* Message */}


          <div
            className="
              franchise-field franchise-message
              relative
            "
          >

            <MessageSquare
              size={18}
              className="
                absolute
                left-4
                top-5
                text-slate-400
              "
            />


            <textarea

              name="message"

              value={
                formData.message
              }

              onChange={handleChange}

              rows="4"

              placeholder="Tell us about your requirements"

              className="
                w-full
                rounded-2xl
                border
                border-slate-200
                bg-slate-50
                py-4
                pl-12
                pr-4
                text-sm
                outline-none
                transition-all
                focus:border-blue-500
                focus:bg-white
                focus:ring-4
                focus:ring-blue-100
              "

            />


          </div>






          {/* Submit Button */}


          <motion.button

  {...buttonHover}

  type="submit"

  disabled={isSubmitting}

  className="
    flex
    w-full
    items-center
    justify-center
    gap-3
    rounded-2xl
    bg-gradient-to-r
    from-blue-600
    via-indigo-600
    to-cyan-500
    px-8
    py-4
    font-semibold
    text-white
    shadow-lg
    shadow-blue-200
    disabled:opacity-70
    disabled:cursor-not-allowed
  "
>

            {isSubmitting ? "Submitting..." : "Submit Franchise Application"}

            <Send size={20}/>


          </motion.button>



        </form>


      </div>


    </ScaleIn>

  );

}
