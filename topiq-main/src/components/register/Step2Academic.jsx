import { GraduationCap, School, Hash } from "lucide-react";

export default function Step2Academic({ formData, setFormData }) {

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

    };

    return (

        <div className="registration-card bg-white rounded-3xl shadow-xl p-8">

            <div className="registration-title flex items-center gap-3 mb-2">

                <GraduationCap className="text-blue-900" size={34} />

                <h2 className="text-3xl font-bold text-blue-900">
                    Academic Information
                </h2>

            </div>

            <p className="text-slate-500 mb-8">
                Enter the student's educational details.
            </p>

            <div className="grid md:grid-cols-2 gap-6">

                {/* School */}

                <div>

                    <label className="font-semibold">
                        School Name *
                    </label>

                    <div className="relative mt-2">

                        <School
                            size={20}
                            className="absolute left-3 top-3 text-slate-400"
                        />

                        <input
                            type="text"
                            name="schoolName"
                            value={formData.schoolName}
                            onChange={handleChange}
                            placeholder="Enter School Name"
                            className="w-full border rounded-xl p-3 pl-10"
                        />

                    </div>

                </div>

                {/* Board */}

                <div>

                    <label className="font-semibold">
                        School Board *
                    </label>

                    <select
                        name="board"
                        value={formData.board}
                        onChange={handleChange}
                        className="w-full border rounded-xl p-3 mt-2"
                    >

                        <option value="">Select Board</option>

                        <option>State Board</option>

                        <option>CBSE</option>

                        <option>ICSE</option>

                        <option>IB</option>

                        <option>IGCSE</option>

                    </select>

                </div>

                {/* Medium */}

                <div>

                    <label className="font-semibold">
                        Medium *
                    </label>

                    <select
                        name="medium"
                        value={formData.medium}
                        onChange={handleChange}
                        className="w-full border rounded-xl p-3 mt-2"
                    >

                        <option value="">Select Medium</option>

                        <option>English</option>

                        <option>Marathi</option>

                        <option>Hindi</option>

                        <option>Semi English</option>

                    </select>

                </div>

                {/* Class */}

                <div>

                    <label className="font-semibold">
                        Class *
                    </label>

                    <select
                        name="studentClass"
                        value={formData.studentClass}
                        onChange={handleChange}
                        className="w-full border rounded-xl p-3 mt-2"
                    >

                        <option value="">Select Class</option>

                        <option>Class 3</option>
                        <option>Class 4</option>
                        <option>Class 5</option>
                        <option>Class 6</option>
                        <option>Class 7</option>
                        <option>Class 8</option>
                        <option>Class 9</option>
                        <option>Class 10</option>
                        <option>Class 11</option>
                        <option>Class 12</option>

                    </select>

                </div>

                {/* Division */}

                <div>

                    <label className="font-semibold">
                        Division
                    </label>

                    <input
                        type="text"
                        name="division"
                        value={formData.division}
                        onChange={handleChange}
                        placeholder="A"
                        className="w-full border rounded-xl p-3 mt-2"
                    />

                </div>

                {/* Roll Number */}

                <div>

                    <label className="font-semibold">
                        Roll Number
                    </label>

                    <div className="relative mt-2">

                        <Hash
                            size={20}
                            className="absolute left-3 top-3 text-slate-400"
                        />

                        <input
                            type="text"
                            name="rollNumber"
                            value={formData.rollNumber}
                            onChange={handleChange}
                            placeholder="Enter Roll Number"
                            className="w-full border rounded-xl p-3 pl-10"
                        />

                    </div>

                </div>

            </div>

        </div>

    );

}
