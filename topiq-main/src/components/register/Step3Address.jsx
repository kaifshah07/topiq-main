import { useState } from "react";
import { MapPin, Building2, Landmark } from "lucide-react";

export default function Step3Address({ formData, setFormData }) {

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

  };

  const handlePincode = async (e) => {

    const pin = e.target.value;

    setFormData({
      ...formData,
      pincode: pin,
    });

    if (pin.length !== 6) return;

    try {

      setLoading(true);

      const res = await fetch(
        `https://api.postalpincode.in/pincode/${pin}`
      );

      const data = await res.json();

      if (
        data[0].Status === "Success" &&
        data[0].PostOffice.length > 0
      ) {

        const office = data[0].PostOffice[0];

        setFormData((prev) => ({
          ...prev,
          pincode: pin,
          state: office.State,
          district: office.District,
          taluka: office.Block || "",
        }));

      }

    } catch (err) {

      console.log(err);

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="registration-card bg-white rounded-3xl shadow-xl p-8">

      <h2 className="text-3xl font-bold text-blue-900">
        Address Information
      </h2>

      <p className="text-slate-500 mt-2 mb-8">
        Enter your residential address.
      </p>

      <div className="grid md:grid-cols-2 gap-6">

        {/* Pincode */}

        <div>

          <label className="font-semibold">
            Pincode *
          </label>

          <div className="relative mt-2">

            <MapPin
              size={20}
              className="absolute left-3 top-3 text-slate-400"
            />

            <input
              type="text"
              maxLength="6"
              name="pincode"
              value={formData.pincode}
              onChange={handlePincode}
              placeholder="431001"
              className="w-full border rounded-xl p-3 pl-10"
            />

          </div>

          {loading && (
            <p className="text-blue-600 text-sm mt-2">
              Fetching address...
            </p>
          )}

        </div>

        {/* State */}

        <div>

          <label className="font-semibold">
            State
          </label>

          <input
            type="text"
            name="state"
            value={formData.state}
            readOnly
            className="w-full mt-2 border rounded-xl p-3 bg-slate-100"
          />

        </div>

        {/* District */}

        <div>

          <label className="font-semibold">
            District
          </label>

          <div className="relative mt-2">

            <Building2
              size={20}
              className="absolute left-3 top-3 text-slate-400"
            />

            <input
              type="text"
              name="district"
              value={formData.district}
              readOnly
              className="w-full border rounded-xl p-3 pl-10 bg-slate-100"
            />

          </div>

        </div>

        {/* Taluka */}

        <div>

          <label className="font-semibold">
            Taluka
          </label>

          <input
            type="text"
            name="taluka"
            value={formData.taluka}
            onChange={handleChange}
            className="w-full mt-2 border rounded-xl p-3"
          />

        </div>

        {/* Village / City */}

        <div className="md:col-span-2">

          <label className="font-semibold">
            Village / City *
          </label>

          <div className="relative mt-2">

            <Landmark
              size={20}
              className="absolute left-3 top-3 text-slate-400"
            />

            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Enter Village or City"
              className="w-full border rounded-xl p-3 pl-10"
            />

          </div>

        </div>

      </div>

    </div>

  );

}
