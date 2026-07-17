import { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ChevronDown,
  GraduationCap,
  LoaderCircle,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  User,
  Users,
} from "lucide-react";
import studentEnquiryData from "./studentEnquiryData";
// import { submitStudentEnquiry } from "../../services/studentService";
// import { submitStudentEnquiry } from "../../../services/studentService";
import { submitStudentEnquiry } from "../../../services/studentService";


const initialForm = {
  studentName: "",
  parentName: "",
  mobile: "",
  email: "",
  class: "",
  exam: "",
  medium: "",
  learningMode: "",
  city: "",
  message: "",
};

function Field({ icon: Icon, label, children, required = false, className = "" }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block text-sm font-semibold text-slate-700">
        {label}{required && <span className="ml-1 text-rose-500">*</span>}
      </span>
      <span className={`enquiry-field relative block ${Icon ? "" : ""}`}>
        {Icon && <Icon size={18} className="absolute left-4 top-1/2 z-10 -translate-y-1/2 text-slate-400" />}
        {children}
      </span>
    </label>
  );
}

export default function StudentEnquiryForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const submitForm = async (event) => {
  event.preventDefault();

  setStatus({
    type: "",
    message: "",
  });

  setIsSubmitting(true);

  try {
    await submitStudentEnquiry(form);

    setForm(initialForm);

    setStatus({
      type: "success",
      message: studentEnquiryData.successMessage,
    });
  } catch (error) {
    setStatus({
      type: "error",
      message:
        error.response?.data?.message ||
        error.message ||
        "Something went wrong.",
    });
  } finally {
    setIsSubmitting(false);
  }
};

  const selectClass = "w-full appearance-none rounded-xl border border-slate-200 bg-white py-3.5 pr-10 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100";
  const inputClass = "w-full rounded-xl border border-slate-200 bg-white py-3.5 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100";

  return (
    <section id="student-enquiry-form" className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-blue-900/5 sm:p-8">
      <div className="mb-7 flex items-start gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600"><GraduationCap size={24} /></span>
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Student Enquiry Form</h2>
          <p className="mt-1 text-sm leading-6 text-slate-600">Tell us about your learning goals. Our counsellor will get in touch soon.</p>
        </div>
      </div>

      {status.message && (
        <div role="status" className={`mb-6 flex gap-3 rounded-xl px-4 py-3 text-sm ${status.type === "success" ? "bg-emerald-50 text-emerald-800" : "bg-rose-50 text-rose-700"}`}>
          <CheckCircle2 size={19} className="mt-0.5 shrink-0" />
          <span>{status.message}</span>
        </div>
      )}

      <form className="space-y-5" onSubmit={submitForm}>
        <div className="grid gap-5 md:grid-cols-2">
          <Field icon={User} label="Student name" required><input className={`${inputClass} pl-11 pr-4`} name="studentName" value={form.studentName} onChange={updateField} placeholder="Enter student name" minLength="2" required /></Field>
          <Field icon={Users} label="Parent name"><input className={`${inputClass} pl-11 pr-4`} name="parentName" value={form.parentName} onChange={updateField} placeholder="Enter parent name" /></Field>
          <Field icon={Phone} label="Mobile number" required><input className={`${inputClass} pl-11 pr-4`} name="mobile" value={form.mobile} onChange={updateField} placeholder="10-digit mobile number" inputMode="numeric" pattern="[0-9]{10}" maxLength="10" required /></Field>
          <Field icon={Mail} label="Email address"><input className={`${inputClass} pl-11 pr-4`} name="email" value={form.email} onChange={updateField} placeholder="you@example.com" type="email" /></Field>
          <Field label="Class" required><select className={`${selectClass} px-4`} name="class" value={form.class} onChange={updateField} required><option value="">Select class</option>{studentEnquiryData.classes.map((item) => <option key={item} value={item}>{item}</option>)}</select><ChevronDown size={18} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" /></Field>
          <Field label="Exam interested in"><select className={`${selectClass} px-4`} name="exam" value={form.exam} onChange={updateField}><option value="">Select exam</option>{studentEnquiryData.exams.map((item) => <option key={item} value={item}>{item}</option>)}</select><ChevronDown size={18} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" /></Field>
          <Field label="Preferred medium"><select className={`${selectClass} px-4`} name="medium" value={form.medium} onChange={updateField}><option value="">Select medium</option>{studentEnquiryData.mediums.map((item) => <option key={item} value={item}>{item}</option>)}</select><ChevronDown size={18} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" /></Field>
          <Field label="Learning mode"><select className={`${selectClass} px-4`} name="learningMode" value={form.learningMode} onChange={updateField}><option value="">Select learning mode</option>{studentEnquiryData.learningModes.map((item) => <option key={item} value={item}>{item}</option>)}</select><ChevronDown size={18} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" /></Field>
        </div>

        <Field icon={MapPin} label="City"><input className={`${inputClass} pl-11 pr-4`} name="city" value={form.city} onChange={updateField} placeholder="Enter your city" /></Field>
        <Field icon={MessageSquare} label="Message" className="enquiry-message"><textarea className={`${inputClass} min-h-28 resize-y px-4 pl-11 pt-3.5`} name="message" value={form.message} onChange={updateField} placeholder="Share anything else you would like us to know" /></Field>

        <motion.button type="submit" disabled={isSubmitting} whileHover={!isSubmitting ? { y: -2 } : {}} whileTap={!isSubmitting ? { scale: 0.98 } : {}} className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 px-5 py-4 font-semibold text-white shadow-lg shadow-blue-200 transition disabled:cursor-not-allowed disabled:opacity-70">
          {isSubmitting ? <LoaderCircle size={19} className="animate-spin" /> : <Send size={18} />}
          {isSubmitting ? "Submitting..." : "Submit Enquiry"}
        </motion.button>
      </form>
    </section>
  );
}
