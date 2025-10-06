import React, { useState } from "react";
import { FileText, Users, ClipboardCheck, Handshake } from "lucide-react";
import { ChevronDown, ChevronUp, Briefcase } from "lucide-react";
import JoinOurTeamForm from "../components/JoinOurTeamForm";

const steps = [
  {
    id: "01",
    title: "SUBMIT APPLICATION",
    desc: "Submit your CV and a short cover letter detailing your experience and passion for food and hospitality.",
    icon: <FileText className="w-6 h-6 text-white" />,
  },
  {
    id: "02",
    title: "INTERVIEW",
    desc: "If shortlisted, you’ll be invited for an interview to discuss your skills and what you can bring to The Royal Rasoi team.",
    icon: <Users className="w-6 h-6 text-white" />,
  },
  {
    id: "03",
    title: "TRIAL SHIFT",
    desc: "Depending on the role, we may invite you for a short trial shift to see how you work in our fast-paced environment.",
    icon: <ClipboardCheck className="w-6 h-6 text-white" />,
  },
  {
    id: "04",
    title: "ONBOARDING & TRAINING",
    desc: "Once selected, you’ll receive full training to ensure you thrive in your new role.",
    icon: <Handshake className="w-6 h-6 text-white" />,
  },
];

const positions = [
  {
    key: "front",
    title: "Front of House Staff",
    description:
      "Greeting customers, handling orders, and ensuring excellent service.",
  },
  {
    key: "drivers",
    title: "Delivery Drivers",
    description:
      "Delivering orders promptly and maintaining customer satisfaction.",
  },
  {
    key: "chefs",
    title: "Chefs & Cooks",
    description:
      "Preparing delicious meals and maintaining kitchen quality standards.",
  },
  {
    key: "assistants",
    title: "Kitchen Assistants",
    description:
      "Supporting chefs, managing ingredients, and ensuring cleanliness.",
  },
];
const CareerPage = () => {
  const [open, setOpen] = useState("front");
  const [showJoinForm, setShowJoinForm] = useState(false);

  const toggle = (key) => {
    setOpen(open === key ? null : key);
  };

  return (
    <>
      <section>
        <h1 className="text-4xl text-primary uppercase text-center pt-4">
          Careers at Mumbai Central
        </h1>
        <p className="text-center max-w-[700px] mx-auto mt-4">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
        {/* What's it like at Mumbai Central section */}
        <div className="flex flex-col md:flex-row items-center justify-center text-white py-12 px-6 md:px-12">
          <div className="relative w-full md:w-1/2 flex justify-center">
            <img
              src="/career-1.5.png"
              alt="about-image"
              className="rounded-lg object-cover max-w-full h-auto"
            />
          </div>
          <div
            className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12
        "
          >
            <h1 className="text-4xl text-primary uppercase">
              What’s it like at Mumbai Central
            </h1>
            <p className="text-secondary text-sm mt-4 py-2">
              Working at MUMBAI CENTRAL means being part of a close knit team
              that values quality, efficiency, and great customer service.
              <br /> <br />
              We create a welcoming atmosphere where everyone has the
              opportunity to grow, learn new skills, and take pride in serving
              authentic Indian cuisine.
              <br /> <br />
              Whether you’re in the kitchen or front of house, every role is
              essential to delivering an exceptional experience for our
              customers.
            </p>
          </div>
        </div>

        {/* How we recruit section */}

        <div className="bg-transparent py-16 px-6 md:px-12">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-primary mb-4">
            HOW WE RECRUIT
          </h2>
          <p className="text-center max-w-[700px] mx-auto mt-2">
            At MUMBAI CENTRAL, we believe in hiring passionate individuals who
            take pride in delivering exceptional food and service. Our
            recruitment process is simple yet thorough, ensuring we bring the
            right people into our team
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {steps.map((step) => (
              <div
                key={step.id}
                className="bg-white text-black rounded-2xl shadow-md p-6 flex flex-col justify-between hover:-translate-y-1 transition"
              >
                <div className="flex justify-between items-start mb-4">
                  <h1 className="font-bold text-2xl">{step.id}</h1>
                  <div className="bg-[#D19B22] p-3 rounded-full flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* Positions we hire for section  */}
        <div className="w-full bg-transparent text-white py-16 flex flex-col md:flex-row items-center justify-center px-6 md:px-16 gap-10">
      {/* Left Section */}
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center md:text-left">
          POSITIONS WE HIRE FOR
        </h2>

        <div className="flex flex-col gap-4">
          {positions.map((pos) => (
            <div
              key={pos.key}
              className={`rounded-2xl overflow-hidden cursor-pointer transition-all ${
                open === pos.key ? "bg-yellow-600 text-white" : "bg-white text-black"
              }`}
              onClick={() => toggle(pos.key)}
            >
              <div className="flex justify-between items-center px-6 py-4 font-bold text-lg">
                <div className="flex items-center gap-3">
                  <Briefcase
                    className={`${
                      open === pos.key ? "text-white" : "text-yellow-600"
                    }`}
                    size={22}
                  />
                  <span>{pos.title}</span>
                </div>
                {open === pos.key ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </div>
              {open === pos.key && (
                <div className="px-6 pb-5 text-sm leading-relaxed">
                  {pos.description}
                </div>
              )}
            </div>
          ))}

          <button 
            onClick={() => setShowJoinForm(true)}
            className="mt-6 bg-yellow-600 text-white font-semibold py-3 px-8 rounded-xl hover:bg-yellow-700 transition w-fit self-center md:self-start"
          >
            APPLY NOW
          </button>
          
          {showJoinForm && (
            <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setShowJoinForm(false)}>
              <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
                <JoinOurTeamForm onClose={() => setShowJoinForm(false)} />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="/career-2.png"
          alt="Hiring illustration"
          className="rounded-2xl max-w-full md:max-w-md"
        />
      </div>
    </div>
      </section>
    </>
  );
};

export default CareerPage;
