import React from "react";
import { assets } from "../assets/assets"; // Import assets if available

const Banner = () => {
  return (
    <div className="flex bg-slate-900 bg-opacity-70 rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10 items-center border border-violet-400">
      {/* Left Section */}
      <div className="flex-1 py-8 sm:py-10 md:py-16 lg:py-24">
        <div className="font-semibold text-white">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-5xl">
            Book Appointment
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-5xl">
            With 100+
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-5xl">
            Trusted Doctors
          </p>
        </div>
        <button className="bg-white text-sm sm:text-base text-[#595959] px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all">
          Create account
        </button>
      </div>

      {/* Right Section */}
      <div className="hidden md:block md:w-1/2 lg:w-[370px] relative">
        <img
          className="w-full max-w-sm"
          src={assets.appointment_img} // Replace with your image path
          alt="Doctor"
        />
      </div>
    </div>
  );
};

export default Banner;
