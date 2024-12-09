import React, { useContext, useEffect, useState } from "react";
import { Appcontext } from "../context/Appcontext";
import Primarybutton from "./Primarybutton";
import { useNavigate } from "react-router-dom";

const RelatedDoctors = ({ speciality, docId }) => {
  const { doctors } = useContext(Appcontext);
  const navigate = useNavigate();
  const [relatedDoc, SetRelatedDoc] = useState([]);

  useEffect(() => {
    if (doctors.length > 0 && speciality) {
      const doctorsData = doctors.filter(
        (doc) => doc.speciality === speciality && doc._id !== docId
      );
      SetRelatedDoc(doctorsData);
    }
  }, [doctors, docId, speciality]);

  return (
    <div className="flex flex-col items-center gap-4 my-16 md:mx-10 bg-slate-950 py-10">
      <h1 className="text-white">Recommended Doctors </h1>
      <p className="text-violet-100">
        Discover our featured physicians who are recognized for their
        exceptional care and expertise in various medical fields.
      </p>
      <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0 ">
        {relatedDoc.slice(0, 5).map((item, index) => (
          <div
            key={index}
            onClick={() => {
              navigate(`/appointment/${item._id}`);
              scrollTo(0,0);
            }}
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

export default RelatedDoctors;
