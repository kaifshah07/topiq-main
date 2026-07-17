import { User, Phone, Mail, Calendar, Camera } from "lucide-react";

export default function Step1Personal({ formData, setFormData }) {
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  return (
    <div className="registration-card bg-white rounded-3xl shadow-xl p-8">

      <h2 className="text-3xl font-bold text-blue-900 mb-2">
        Personal Information
      </h2>

      <p className="text-slate-500 mb-8">
        Please enter the student's personal details.
      </p>

      <div className="grid md:grid-cols-2 gap-6">

        {/* Student Name */}
        <div>
          <label className="font-semibold">Student Name *</label>
          <div className="relative mt-2">
            <User className="absolute left-3 top-3 text-slate-400" size={20}/>
            <input
              type="text"
              name="studentName"
              value={formData.studentName}
              onChange={handleChange}
              placeholder="Enter Student Name"
              className="w-full pl-10 p-3 border rounded-xl"
            />
          </div>
        </div>

        {/* Father's Name */}
        <div>
          <label className="font-semibold">Father's Name *</label>
          <input
            type="text"
            name="fatherName"
            value={formData.fatherName}
            onChange={handleChange}
            placeholder="Enter Father's Name"
            className="w-full mt-2 p-3 border rounded-xl"
          />
        </div>

        {/* Mother's Name */}
        <div>
          <label className="font-semibold">Mother's Name *</label>
          <input
            type="text"
            name="motherName"
            value={formData.motherName}
            onChange={handleChange}
            placeholder="Enter Mother's Name"
            className="w-full mt-2 p-3 border rounded-xl"
          />
        </div>

        {/* Date of Birth */}
        <div>
          <label className="font-semibold">Date of Birth *</label>
          <div className="relative mt-2">
            <Calendar className="absolute left-3 top-3 text-slate-400" size={20}/>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full pl-10 p-3 border rounded-xl"
            />
          </div>
        </div>

        {/* Gender */}
        <div>
          <label className="font-semibold">Gender *</label>

          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full mt-2 p-3 border rounded-xl"
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        {/* Student Mobile */}
        <div>
          <label className="font-semibold">Student Mobile *</label>

          <div className="relative mt-2">
            <Phone className="absolute left-3 top-3 text-slate-400" size={20}/>
            <input
              type="tel"
              name="studentMobile"
              value={formData.studentMobile}
              onChange={handleChange}
              placeholder="9876543210"
              className="w-full pl-10 p-3 border rounded-xl"
            />
          </div>
        </div>

        {/* Parent Mobile */}
        <div>
          <label className="font-semibold">Parent Mobile *</label>

          <div className="relative mt-2">
            <Phone className="absolute left-3 top-3 text-slate-400" size={20}/>
            <input
              type="tel"
              name="parentMobile"
              value={formData.parentMobile}
              onChange={handleChange}
              placeholder="9876543210"
              className="w-full pl-10 p-3 border rounded-xl"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="font-semibold">Email</label>

          <div className="relative mt-2">
            <Mail className="absolute left-3 top-3 text-slate-400" size={20}/>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@email.com"
              className="w-full pl-10 p-3 border rounded-xl"
            />
          </div>
        </div>

        {/* Aadhaar */}
        <div>
          <label className="font-semibold">Aadhaar Number</label>

          <input
            type="text"
            maxLength="12"
            name="aadhaar"
            value={formData.aadhaar}
            onChange={handleChange}
            placeholder="123412341234"
            className="w-full mt-2 p-3 border rounded-xl"
          />
        </div>

      </div>

      {/* Photo Upload */}

      <div className="mt-8">

        <label className="font-semibold flex items-center gap-2">
          <Camera size={20}/>
          Passport Size Photo
        </label>

        <input
          type="file"
          accept="image/*"
          name="photo"
          onChange={handleChange}
          className="mt-3"
        />

      </div>

    </div>
  );
}
