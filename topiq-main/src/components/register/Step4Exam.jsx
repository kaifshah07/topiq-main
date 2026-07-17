import { CheckCircle } from "lucide-react";

const examGroups = [
  {
    id: "Class 3",
    title: "Class 3",
    subtitle: "Foundation Stage",
  },
  {
    id: "Class 4",
    title: "Class 4",
    subtitle: "Foundation Stage",
  },
  {
    id: "Class 5",
    title: "Class 5",
    subtitle: "Foundation Stage",
  },
  {
    id: "Class 6",
    title: "Class 6",
    subtitle: "Foundation Plus",
  },
  {
    id: "Class 7",
    title: "Class 7",
    subtitle: "Foundation Plus",
  },
  {
    id: "Class 8",
    title: "Class 8",
    subtitle: "Foundation Plus",
  },
  {
    id: "Class 9",
    title: "Class 9",
    subtitle: "Competitive Foundation",
  },
  {
    id: "Class 10",
    title: "Class 10",
    subtitle: "Competitive Foundation",
  },
  {
    id: "Class 11",
    title: "Class 11",
    subtitle: "Career Preparation",
  },
  {
    id: "Class 12",
    title: "Class 12",
    subtitle: "Career Preparation",
  },
  {
    id: "Competitive",
    title: "Competitive",
    subtitle: "12th & Above",
  },
];

export default function Step4Exam({ formData, setFormData }) {
  return (
    <div className="registration-card registration-exam bg-white rounded-3xl shadow-xl p-8">

      <h2 className="text-3xl font-bold text-blue-900 mb-2">
        Exam Selection
      </h2>

      <p className="text-slate-500 mb-8">
        Select your examination category.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

        {examGroups.map((group) => {

          const selected = formData.examGroup === group.id;

          return (

            <button
              key={group.id}
              type="button"
              onClick={() =>
                setFormData({
                  ...formData,
                  examGroup: group.id,
                })
              }
              className={`
                relative
                rounded-2xl
                border-2
                p-6
                text-left
                transition-all
                duration-300

                ${
                  selected
                    ? "border-blue-900 bg-blue-900 text-white shadow-xl scale-105"
                    : "border-slate-200 bg-white hover:border-blue-900 hover:shadow-lg"
                }
              `}
            >

              {selected && (
                <CheckCircle
                  className="absolute top-4 right-4"
                  size={24}
                />
              )}

              <h3 className="text-xl font-bold">
                {group.title}
              </h3>

              <p
                className={`mt-2 ${
                  selected ? "text-white/90" : "text-slate-500"
                }`}
              >
                {group.subtitle}
              </p>

            </button>

          );
        })}

      </div>

      {formData.examGroup && (

        <div className="mt-8 rounded-2xl bg-blue-50 border border-blue-200 p-6">

          <h3 className="font-bold text-blue-900 text-lg">
            Selected Examination
          </h3>

          <p className="text-2xl font-bold mt-2 text-slate-800">
            {formData.examGroup}
          </p>

        </div>

      )}

    </div>
  );
}
