import React from "react";

const Footer = () => {
  return (
    <footer className="py-8 px-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo Section */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-violet-400">BookMyDoc</h2>
            <p className="text-sm mt-2 text-slate-300">
              Your trusted online healthcare service.
            </p>
          </div>

          {/* Links Section */}
          <div className="flex flex-col md:flex-row text-center md:text-left space-y-4 md:space-y-0 md:space-x-8">
            <div>
              <h3 className="font-semibold mb-2 text-white">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/about" className="hover:underline text-slate-300">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:underline text-slate-300">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/doctors" className="hover:underline text-slate-300">
                    Doctors
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2 text-white">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline text-slate-300">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline text-slate-300">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline text-slate-300">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2 text-white">Follow Us</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline text-slate-300">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline text-slate-300">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline text-slate-300">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center border-t border-gray-700 pt-4 mt-8">
          <p className="text-sm text-slate-300">
            &copy; {new Date().getFullYear()}{" "}
            <span className="font-bold text-white">BookMyDoc</span>. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
