import React, { useState } from "react";
import {
  User,
  Mail,
  Phone,
  MessageSquare,
  Upload,
  ChevronDown,
  HelpCircle,
} from "lucide-react";

const JoinOurTeamForm = () => {
  const [selectedPosition, setSelectedPosition] = useState("");
  const [accepted, setAccepted] = useState(false);

  const positions = [
    "Front of House Staff",
    "Delivery Driver",
    "Chef / Cook",
    "Kitchen Assistant",
  ];

  return (
    <section className="bg-[#FFFBEF] min-h-screen flex flex-col items-center justify-center py-16 px-6">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-600">
          JOIN OUR TEAM
        </h2>
        <p className="text-gray-700 mt-2">
          Please complete and submit this application form.
        </p>
      </div>

      {/* Form Card */}
      <form className="bg-white rounded-3xl border border-yellow-600 shadow-[0_6px_0_#E0A100] w-full max-w-2xl p-8 space-y-6 text-secondary font-nato">
        {/* Position */}
        <div>
          <label className="flex items-center text-gray-700 mb-2">
            <HelpCircle className="text-yellow-600 mr-2" size={18} />
            Position Applying For
          </label>
          <div className="relative">
            <select
              className="w-full border-b border-gray-300 focus:border-yellow-600 outline-none py-2 appearance-none bg-transparent text-gray-800"
              value={selectedPosition}
              onChange={(e) => setSelectedPosition(e.target.value)}
            >
              <option value="">Select a position</option>
              {positions.map((pos, idx) => (
                <option key={idx} value={pos}>
                  {pos}
                </option>
              ))}
            </select>
            <ChevronDown
              size={18}
              className="absolute right-2 top-3 text-gray-500 pointer-events-none"
            />
          </div>
        </div>

        {/* Full Name + Email */}
        <div className="grid md:grid-cols-2 gap-6">
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
            Contact Number
          </label>
          <input
            type="tel"
            className="w-full border-b border-gray-300 focus:border-yellow-600 outline-none py-2 bg-transparent"
            placeholder="Enter your phone number"
          />
        </div>

        {/* Experience */}
        <div>
          <label className="flex items-center text-gray-700 mb-2">
            <MessageSquare className="text-yellow-600 mr-2" size={18} />
            Tell us about your previous roles and experiences
          </label>
          <textarea
            rows="3"
            className="w-full border-b border-gray-300 focus:border-yellow-600 outline-none py-2 bg-transparent"
            placeholder="Share your experience..."
          ></textarea>
        </div>

        {/* Upload Resume */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl p-4">
          <label className="flex items-center gap-2 text-yellow-600 font-semibold cursor-pointer">
            <Upload size={18} />
            Upload Resume
            <input type="file" className="hidden" />
          </label>
          <p className="text-sm text-gray-600">
            Upload your CV if you have one — if not, don’t worry.
          </p>
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
          SUBMIT APPLICATION
        </button>
      </form>
    </section>
  );
};

export default JoinOurTeamForm;
