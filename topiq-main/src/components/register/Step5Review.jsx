export default function Step5Review({ formData }) {
  return (
    <div className="registration-card registration-review bg-white rounded-3xl shadow-xl p-10">

      <h2 className="text-3xl font-bold text-blue-900 mb-8">
        Review Your Details
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        <div>
          <h3 className="text-xl font-bold mb-4">Personal Information</h3>

          <p><strong>Student:</strong> {formData.studentName}</p>
          <p><strong>Father:</strong> {formData.fatherName}</p>
          <p><strong>Mother:</strong> {formData.motherName}</p>
          <p><strong>DOB:</strong> {formData.dob}</p>
          <p><strong>Gender:</strong> {formData.gender}</p>
          <p><strong>Student Mobile:</strong> {formData.studentMobile}</p>
          <p><strong>Parent Mobile:</strong> {formData.parentMobile}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Aadhaar:</strong> {formData.aadhaar}</p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Academic Information</h3>

          <p><strong>School:</strong> {formData.schoolName}</p>
          <p><strong>Board:</strong> {formData.board}</p>
          <p><strong>Medium:</strong> {formData.medium}</p>
          <p><strong>Class:</strong> {formData.studentClass}</p>
          <p><strong>Division:</strong> {formData.division}</p>
          <p><strong>Roll No:</strong> {formData.rollNumber}</p>
        </div>

      </div>

      <hr className="my-8" />

      <div className="grid md:grid-cols-2 gap-8">

        <div>
          <h3 className="text-xl font-bold mb-4">Address</h3>

          <p><strong>Pincode:</strong> {formData.pincode}</p>
          <p><strong>State:</strong> {formData.state}</p>
          <p><strong>District:</strong> {formData.district}</p>
          <p><strong>Taluka:</strong> {formData.taluka}</p>
          <p><strong>City:</strong> {formData.city}</p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Exam</h3>

          <p><strong>Selected Group:</strong> {formData.examGroup}</p>
        </div>

      </div>

    </div>
  );
}
