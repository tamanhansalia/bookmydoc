import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import Primarybutton from "./Primarybutton";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);
  return (
    <div className="bg-slate-900 text-white flex items-center border-b border-b-violet-400 justify-between py-4 mb-5 px-10  ">
      <h1 className="text-violet-400">Bookmydoc</h1>
      <ul className="hidden md:flex items-start gap-5">
        <NavLink to="/">
          <li>Home</li>
          <hr className="border-none outline-none h-0.5 m-auto hidden bg-violet-400" />
        </NavLink>
        <NavLink to="/doctors">
          <li>Doctors</li>
          <hr className="border-none outline-none h-0.5 m-auto hidden bg-violet-400" />
        </NavLink>
        <NavLink to="about">
          <li>About us</li>
          <hr className="border-none outline-none h-0.5 m-auto hidden bg-violet-400" />
        </NavLink>
        <NavLink to="/contact">
          <li>Contact us</li>
          <hr className="border-none outline-none h-0.5 m-auto hidden bg-violet-400" />
        </NavLink>
      </ul>
      <div className="flex items-center">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img
              src="https://via.placeholder.com/150"
              alt="User Profile"
              className="w-9 h-9 rounded-full object-cover"
            />
            <FaAngleDown />
            <div className="absolute top-0 right-0 pt-14 hidden group-hover:block text-white">
              <div className="min-w-48 bg-slate-800 rounded-lg flex flex-col gap-4 p-4 ">
                <p onClick={() => navigate('/myprofile')} className="hover:text-violet-300">My profile</p>
                <p onClick={() => navigate('/myappointment')} className="hover:text-violet-300">My appointment</p>
                <p onClick={() => setToken(false)} className="hover:text-violet-300">Logout</p>
              </div>
            </div>
          </div>
        ) : (
          <Primarybutton onClick={() => navigate("/login")}>
            Create an account
          </Primarybutton>
        )}
      </div>
    </div>
  );
};

export default Navbar;
