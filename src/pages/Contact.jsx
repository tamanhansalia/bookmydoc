import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center px-4 py-2">
        <div className="text-center text-3xl text-violet-400 mb-5">
          <h1>Contact Us</h1>
        </div>

        <div className="my-10 flex flex-col md:flex-row gap-12 max-w-screen-lg">
          {/* Left side - contact details */}
          <div className="flex flex-col justify-start gap-6 text-sm text-slate-100 md:w-1/2">
            <h2 className="text-2xl text-violet-400 font-semibold">
              Get in Touch
            </h2>
            <p>
              We’re here to assist you. If you have any questions or need help,
              feel free to reach out!
            </p>

            <div className="flex flex-col gap-1">
              <b className="text-lg text-slate-100">Office Address:</b>
              <p className="text-slate-400">
                1234 Medical Lane,
                <br /> Suite 567, Healthcare City,
                <br />
                New York, NY 12345
              </p>
            </div>

            <div className="flex flex-col gap-1 gap">
              <b className="text-lg text-slate-100">Phone:</b>
              <p className="text-slate-400">+1 (555) 123-4567</p>
            </div>

            <div className="flex flex-col gap-1">
              <b className="text-lg text-slate-100">Email:</b>
              <p className="text-slate-400">support@bookmydoc.com</p>
            </div>

            <div className="flex flex-col gap-1">
              <b className="text-lg text-slate-100">Office Hours:</b>
              <p className="text-slate-400">Mon - Fri: 9:00 AM - 5:00 PM</p>
              <p className="text-slate-400">Sat - Sun: Closed</p>
            </div>
          </div>

          {/* Right side - image/map */}
          <div className="md:w-1/2 flex justify-center items-center">
            <img
              className="rounded-lg w-full h-auto max-w-[400px] shadow-lg"
              src={assets.contact_image}
              alt="Office Location Map"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
