import React, { useContext } from "react";
// import { assets, doctors } from "../assets/assets";
import Primarybutton from "./Primarybutton";
import { useNavigate } from "react-router-dom";
import { Appcontext } from "../context/Appcontext";

const Topdoctors = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(Appcontext);
  return (
    <div className="flex flex-col items-center gap-4 my-16 md:mx-10 bg-slate-950 py-10">
      <h1 className="text-white">Recommended Doctors </h1>
      <p className="text-violet-100">
        Discover our featured physicians who are recognized for their
        exceptional care and expertise in various medical fields.
      </p>
      <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0 ">
        {doctors.slice(0, 10).map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(`/appointment/${item._id}`)}
            className="border border-violet-400 rounded-lg overflow-hidden cursor-pointer hover:translate-y-[-10px] hover:border-2 transition-all duration-300  "
          >
            <img className="bg-slate-900" src={item.image} alt="" />
            <div className="p-4">
              <div className="flex items-center gap-2 text-center text-green-500">
                <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                <p>Available</p>
              </div>
              <h4 className="text-white">{item.name}</h4>
              <p className="text-slate-300 font-light">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <Primarybutton
        onClick={() => {
          navigate("/doctors");
          scrollTo(0, 0);
        }}
      >
        More
      </Primarybutton>
    </div>
  );
};

export default Topdoctors;
