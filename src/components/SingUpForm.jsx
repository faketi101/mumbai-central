import React, { useState } from "react";
import { User, Mail, Phone } from "lucide-react";

const SignUpForm = () => {
  const [accepted, setAccepted] = useState(false);

  const positions = [
    "Front of House Staff",
    "Delivery Driver",
    "Chef / Cook",
    "Kitchen Assistant",
  ];

  return (
    <div className="p-4 sm:p-6 md:p-8">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-600">
          SignUp
        </h2>
        <p className="text-gray-700 mt-2 text-sm sm:text-base">
          Please complete and submit this application form.
        </p>
      </div>

      {/* Form Content */}
      <form className="w-full space-y-6 text-secondary font-nato">
        {/* Full Name + Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="flex items-center text-gray-700 mb-2">
              <User className="text-yellow-600 mr-2" size={18} />
              Full Name
            </label>
            <input
              type="text"
              className="w-full border-b border-gray-300 focus:border-yellow-600 outline-none py-2 bg-transparent"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="flex items-center text-gray-700 mb-2">
              <Mail className="text-yellow-600 mr-2" size={18} />
              Email
            </label>
            <input
              type="email"
              className="w-full border-b border-gray-300 focus:border-yellow-600 outline-none py-2 bg-transparent"
              placeholder="Enter your email"
            />
          </div>
        </div>

        {/* Contact Number */}
        <div>
          <label className="flex items-center text-gray-700 mb-2">
            <Phone className="text-yellow-600 mr-2" size={18} />
            Phone Number
          </label>
          <input
            type="tel"
            className="w-full border-b border-gray-300 focus:border-yellow-600 outline-none py-2 bg-transparent"
            placeholder="Enter your phone number"
          />
        </div>

        {/* Terms & Conditions */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={accepted}
            onChange={() => setAccepted(!accepted)}
            className="w-4 h-4 accent-yellow-600"
          />
          <label className="text-sm text-gray-700">
            I accept all the{" "}
            <span className="text-yellow-600 cursor-pointer hover:underline">
              terms and conditions
            </span>
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#D19B22] text-white font-bold py-3 rounded-xl hover:bg-yellow-700 transition"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
