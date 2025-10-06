import React, { useState, useEffect } from "react";
import { Phone, Clock, MapPin, ArrowRight } from "lucide-react";
import Modal from "../components/Modal";
import JoinOurTeamForm from "../components/JoinOurTeamForm";

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 1000); // Open modal after 1 second

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="w-full mx-auto">
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <JoinOurTeamForm />
      </Modal>

      {/* Hero Section */}
      <div className="hero w-full flex flex-col gap-2 items-center px-4">
        <div className="info w-full flex flex-col gap-2 items-center mt-8 md:mt-12 text-center">
          <h1 className="text-xl md:text-2xl font-bold">01702 292 200</h1>
          <h1 className="text-xl md:text-2xl font-bold">
            7 days a week 4:30pm - 10pm
          </h1>
          <div className="buttons flex flex-col sm:flex-row gap-2 mt-2">
            <a href="#" className="btn">
              ORDER ONLINE
            </a>
            <a href="#" className="btn">
              ALLERGENS
            </a>
          </div>
        </div>
        <img
          src="/hero.png"
          alt="hero-image"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-h-[550px]"
        />
      </div>

      {/* About Section */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-center text-white py-12 px-6 md:px-12 md:max-w-[1200px] mx-auto">
        <div className="relative w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img
            src="/home-1.png"
            alt="about-image"
            className="rounded-lg object-cover w-full max-w-md h-auto"
          />
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12">
          <h1 className="text-3xl md:text-4xl font-bold text-primary uppercase text-center md:text-left">
            About Mumbai Central
          </h1>
          <p className="text-secondary text-sm mt-4 text-center md:text-left">
            At Mumbai Central, food is more than something we cook. It’s a love
            letter to home. Inspired by the bustling streets of Mumbai and
            beyond, the comfort of family kitchens, our takeaway was born from a
            desire to share those memories with the people of Shoeburyness and
            Southend-On-Sea. <br /> We believe every dish should feel like an
            embrace. From the gentle heat of our slow-cooked curries to the
            smoky charm of our tandoori favourites, each recipe carries a story
            of tradition, patience and care. Our dedicated vegan menu is crafted
            with the same passion, proving that compassion and flavour belong
            together. Though we’re delivery only, our food is designed to bring
            people closer, families gathered around the table, friends sharing
            stories, or quiet moments of comfort after a long day. With Mumbai
            Central, every order is more than a meal, it’s a warm connection,
            lovingly cooked and delivered to your door
          </p>
        </div>
      </div>

      {/* CTA section */}
      <div className="cta w-full flex flex-col items-center justify-center gap-4 bg-[#D19B22] py-12 px-4 mt-4">
        <h1 className="text-3xl md:text-4xl text-white uppercase font-bold text-center">
          Join our rewards program
        </h1>
        <p className="text-white text-center max-w-xl">
          Register to receive exclusive offers and promotions. Collect
          redeemable loyalty points with every order
        </p>

        <div className="div flex flex-col sm:flex-row gap-4 mt-4">
          <a
            href="#"
            className="uppercase text-primary bg-white rounded px-6 py-3 sm:px-8 sm:py-4 text-center"
          >
            Sign up
          </a>
          <a
            href="#"
            className="uppercase text-white bg-transparent border border-white rounded px-6 py-3 sm:px-8 sm:py-4"
          >
            View Menu{" "}
          </a>
        </div>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col md:flex-row items-center justify-center text-white py-12 px-6 md:px-12">
        {/* Left Image Section */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          <img
            src="/home-2.png"
            alt="People eating at a restaurant"
            className="rounded-lg object-cover w-full max-w-md h-auto"
          />
        </div>

        {/* Right Content Section */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12 ">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center md:text-left">
            CONTACT US
          </h2>

          <ul className="space-y-5 mb-10 text-center md:text-left">
            <li className="flex items-center space-x-3 text-gray-300 flex-col md:flex-row">
              <span className="bg-yellow-600 p-2 rounded-full">
                <Phone className="w-5 h-5 text-white" />
              </span>
              <div className="flex flex-col">
                <span className="text-gray-300 text-sm">Phone Number</span>
                <h3 className="text-secondary text-lg md:text-xl">
                  01702 292 200
                </h3>
              </div>
            </li>

            <li className="flex items-center space-x-3 text-gray-300 flex-col md:flex-row">
              <span className="bg-yellow-600 p-2 rounded-full">
                <Clock className="w-5 h-5 text-white" />
              </span>
              <div className="flex flex-col">
                <span className="text-gray-300 text-sm">Timing</span>
                <h3 className="text-secondary text-lg md:text-xl">
                  7 days a week 4:30pm -10pm
                </h3>
              </div>
            </li>

            <li className="flex items-center space-x-3 text-gray-300 flex-col md:flex-row">
              <span className="bg-yellow-600 p-2 rounded-full">
                <MapPin className="w-5 h-5 text-white" />
              </span>
              <div className="flex flex-col">
                <span className="text-gray-300 text-sm">Location</span>
                <h3 className="text-secondary text-lg md:text-xl">
                  Delivery in Shoeburyness and southend on sea
                </h3>
              </div>
            </li>
          </ul>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 px-6 md:px-8 rounded-lg flex items-center justify-center space-x-2 transition">
              <span>ORDER NOW</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button className="border border-yellow-600 hover:bg-yellow-600 hover:text-white text-yellow-500 font-semibold py-3 px-6 md:px-8 rounded-lg transition">
              VIEW MENU
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
