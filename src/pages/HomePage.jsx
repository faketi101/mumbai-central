import React, { useState } from "react";
import { Phone, Clock, MapPin, ArrowRight } from "lucide-react";
import SignUpModal from "../components/SignUpModal";

const HomePage = () => {
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  return (
    <section className="w-full mx-auto">
      {/* Hero Section */}
      <div
        id="hero"
        className="hero w-full flex flex-col gap-2 items-center px-4"
      >
        <div className="info w-full flex flex-col gap-2 items-center mt-8 md:mt-12 text-center">
          <h1 className="text-xl md:text-4xl font-bold">01702 292 200</h1>
          <h1 className="text-xl md:text-4xl font-bold">
            7 days a week 4:30pm - 10pm
          </h1>
          <div className="buttons flex flex-col sm:flex-row gap-2 mt-2">
            <a href="#" className="btn">
              ORDER ONLINE
            </a>
            <a href="#" className="btn">
              ALLERGENS
            </a>
            <a
              href="https://tillin.netlify.app/assets/images/marge.pdf"
              target="_blank"
              className="btn"
            >
              {" "}
              View Menu
            </a>
          </div>
        </div>
        <img
          src="/MC homepage Image png.png"
          alt="hero-image"
          className="w-full"
        />
      </div>

      {/* About Section */}
      <div
        id="about"
        className="w-screen flex flex-col md:flex-row items-center justify-center text-white py-12 px-6 md:px-12 bg-[var(--color-bg)]"
      >
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
        <div className="relative w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img
            src="/about MC.jpg"
            alt="about-image"
            className="rounded-lg object-cover w-full max-w-md h-auto"
          />
        </div>
      </div>

      {/* CTA section */}
      <div
        id="reward"
        className="cta w-screen flex flex-col items-center justify-center gap-4 bg-[var(--color-primary)] py-12 px-4 mt-4"
      >
        <h1 className="text-3xl md:text-4xl text-white uppercase font-bold text-center">
          Join our rewards program
        </h1>
        <p className="text-white text-center max-w-xl">
          Register to receive exclusive offers and promotions. Collect
          redeemable loyalty points with every order
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <button
            onClick={() => setIsSignUpModalOpen(true)}
            className="uppercase text-primary bg-white rounded px-6 py-3 sm:px-8 sm:py-4 text-center cursor-pointer"
          >
            Sign up
          </button>
          <a
            href="https://tillin.netlify.app/assets/images/marge.pdf"
            target="_blank"
            className="uppercase text-white bg-transparent border border-white rounded px-6 py-3 sm:px-8 sm:py-4"
          >
            View Menu
          </a>
        </div>
      </div>

      {/* Contact Section */}
      <div
        id="contact"
        className="flex flex-col md:flex-row items-center justify-center text-white py-12 px-6 md:px-12"
      >
        {/* Left Image Section */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          <img
            src="/contact us MC.jpg"
            alt="People eating at a restaurant"
            className="rounded-lg object-cover w-full max-w-2xl h-auto md:max-h-[400px]"
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

            <a
              href="https://tillin.netlify.app/assets/images/marge.pdf"
              target="_blank"
              className="border border-yellow-600 hover:bg-yellow-600 hover:text-white text-yellow-500 font-semibold py-3 px-6 md:px-8 rounded-lg transition"
            >
              VIEW MENU
            </a>
          </div>
        </div>
      </div>

      {/* Sign Up Modal */}
      <SignUpModal
        isOpen={isSignUpModalOpen}
        onClose={() => setIsSignUpModalOpen(false)}
      />
    </section>
  );
};

export default HomePage;
