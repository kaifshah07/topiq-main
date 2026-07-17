import { useState } from "react";

import Step1Personal from "../components/register/Step1Personal";
import Step2Academic from "../components/register/Step2Academic";
import Step3Address from "../components/register/Step3Address";
import Step4Exam from "../components/register/Step4Exam";
import Step5Review from "../components/register/Step5Review";

export default function Register() {

  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({

    // ==========================
    // Personal Information
    // ==========================

    studentName: "",
    fatherName: "",
    motherName: "",
    dob: "",
    gender: "",
    studentMobile: "",
    parentMobile: "",
    email: "",
    aadhaar: "",
    photo: null,

    // ==========================
    // Academic Information
    // ==========================

    schoolName: "",
    board: "",
    medium: "",
    studentClass: "",
    division: "",
    rollNumber: "",

    // ==========================
    // Address Information
    // ==========================

    pincode: "",
    state: "",
    district: "",
    taluka: "",
    city: "",

    // ==========================
    // Exam Information
    // ==========================

    examGroup: "",

  });

  const totalSteps = 5;

  const nextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = () => {

    console.log(formData);

    alert("Proceeding to Razorpay Payment...");

    // Later:
    // navigate("/payment");
    // or call backend API

  };

  return (

    <div className="registration-page min-h-screen bg-slate-100 pt-32 pb-20 px-4">

      <div className="registration-shell max-w-6xl mx-auto">

        {/* ================= Header ================= */}

        <div className="text-center mb-12">

          <h1 className="text-5xl font-black text-blue-900">

            Student Registration

          </h1>

          <p className="mt-3 text-lg text-slate-600">

            TOPIQ Talent Test (TTT)

          </p>

        </div>

        {/* ================= Progress Bar ================= */}

        <div className="registration-progress flex justify-between mb-14">

          {[1,2,3,4,5].map((item)=>(

            <div
              key={item}
              className="flex-1 flex flex-col items-center relative"
            >

              {item!==5 && (

                <div

                  className={`
                  registration-progress-line
                  absolute
                  top-6
                  left-1/2
                  w-full
                  h-1
                  ${
                    step>item
                    ? "bg-blue-900"
                    : "bg-slate-300"
                  }
                  `}

                />

              )}

              <div

                className={`
                registration-progress-circle
                relative
                z-10
                w-14
                h-14
                rounded-full
                flex
                items-center
                justify-center
                text-lg
                font-bold
                transition-all
                shadow-lg

                ${
                  step>=item
                  ? "bg-blue-900 text-white"
                  : "bg-slate-300 text-slate-700"
                }

                `}

              >

                {item}

              </div>

              <span className="registration-progress-label mt-3 text-sm font-semibold">

                {item===1 && "Personal"}

                {item===2 && "Academic"}

                {item===3 && "Address"}

                {item===4 && "Exam"}

                {item===5 && "Review"}

              </span>

            </div>

          ))}

        </div>

        {/* ================= STEP 1 ================= */}

        {step===1 && (

          <Step1Personal
            formData={formData}
            setFormData={setFormData}
          />

        )}

        {/* ================= STEP 2 ================= */}

        {step===2 && (

          <Step2Academic
            formData={formData}
            setFormData={setFormData}
          />

        )}

        {/* ================= STEP 3 ================= */}

        {step===3 && (

          <Step3Address
            formData={formData}
            setFormData={setFormData}
          />

        )}

        {/* ================= STEP 4 ================= */}

        {step===4 && (

          <Step4Exam
            formData={formData}
            setFormData={setFormData}
          />

        )}

        {/* ================= STEP 5 ================= */}

        {step===5 && (

          <Step5Review
            formData={formData}
          />

        )}

        {/* ================= Buttons ================= */}

        <div className="registration-actions flex justify-between mt-10">

          <button

            onClick={prevStep}

            disabled={step===1}

            className={`
            px-8
            py-3
            rounded-xl
            font-bold
            transition

            ${
              step===1
              ? "bg-slate-300 cursor-not-allowed"
              : "bg-slate-800 text-white hover:bg-slate-900"
            }
            `}

          >

            Previous

          </button>

          {

            step<5 ? (

              <button

                onClick={nextStep}

                className="
                px-8
                py-3
                rounded-xl
                font-bold
                bg-blue-900
                text-white
                hover:bg-blue-800
                transition
                "

              >

                Next

              </button>

            ) : (

              <button

                onClick={handleSubmit}

                className="
                px-10
                py-3
                rounded-xl
                font-bold
                bg-green-600
                text-white
                hover:bg-green-700
                transition
                shadow-lg
                "

              >

                Proceed to Payment

              </button>

            )

          }

        </div>

      </div>

    </div>

  );

}
