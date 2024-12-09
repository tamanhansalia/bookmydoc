import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="flex flex-col items-center px-4">
      <div className="text-center text-2xl pt-10 text-white">
        <h1 className="text-violet-400">About us</h1>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12 max-w-screen-lg">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.about_image}
          alt="About Us"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-slate-100">
          <p>
            Welcome to bookmydoc, your trusted partner in managing your
            healthcare needs conveniently and efficiently. At bookmydoc, we
            understand the challenges individuals face when it comes to
            scheduling doctor appointments and managing their health records.
          </p>
          <p>
            bookmydoc is committed to excellence in healthcare technology. We
            continuously strive to enhance our platform, integrating the latest
            advancements to improve user experience and deliver superior
            service. Whether you're booking your first appointment or managing
            ongoing care, bookmydoc is here to support you every step of the
            way.
          </p>
          <h3 className="text-violet-400">Our Vision</h3>
          <p>
            Our vision at bookmydoc is to create a seamless healthcare
            experience for every user. We aim to bridge the gap between patients
            and healthcare providers, making it easier for you to access the
            care you need, when you need it.
          </p>
        </div>
      </div>

      <div className="text-xl my-4 text-center">
        <h3 className="text-violet-400 font-semibold">
          WHY <span>CHOOSE US</span>
        </h3>
      </div>

      <div class="flex flex-col md:flex-row mb-20">
        <div class=" w-96 border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-violet-900 hover:text-violet-200 transition-all duration-300  cursor-pointer">
          <b className="text-white">EFFICIENCY:</b>
          <p className="text-slate-300">
            Streamlined appointment scheduling that fits into your busy
            lifestyle.
          </p>
        </div>
        <div class="w-96 border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-violet-900 hover:text-violet-200 transition-all duration-300  cursor-pointer">
          <b className="text-white">CONVENIENCE:</b>
          <p className="text-slate-300">
            Access to a network of trusted healthcare professionals in your
            area.
          </p>
        </div>
        <div class=" w-96 border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-violet-900 hover:text-violet-200 transition-all duration-300  cursor-pointer">
          <b className="text-white">PERSONALIZATION:</b>
          <p className="text-slate-300">
            Tailored recommendations and reminders to help you stay on top of
            your health.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
