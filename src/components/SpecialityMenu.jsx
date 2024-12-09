import React from "react";
import { specialityData } from "../assets/assets";
import { Link } from "react-router-dom";
const SpecialityMenu = () => {
  return (
    <div className="flex flex-col items-center gap-4 my-10 md:mx-10 bg-slate-950 py-8 ">
      <h1 className="text-white">Search for Specialized Care</h1>
      <p className="text-violet-100">
        Search for specialists who can provide the personalized care you
        deserve.
      </p>
      <div className="flex flex-col flex-1 sm:justify-center md:flex-row pt-5 w-full gap-5 mx-">
        {specialityData.map((item, index) => (
          <Link
            onClick={() => scrollTo(0, 0)}
            className="flex flex-col items-center text-sm cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500 "
            key={index}
            to={`/doctors/${item.speciality}`}
          >
            <img className="w-16 sm:w-24 mb-2" src={item.image} alt="" />
            <p className="text-violet-100">{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;
