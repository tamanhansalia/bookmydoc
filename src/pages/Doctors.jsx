import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Appcontext } from "../context/Appcontext";
import { specialityData } from "../assets/assets";

const Doctors = () => {
  const { speciality } = useParams();
  const [filterDoctor, setFilterDoctor] = useState([]);
  const { doctors } = useContext(Appcontext);
  const navigate = useNavigate();
  const applyFilter = () => {
    if (speciality) {
      setFilterDoctor(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoctor(doctors);
    }
  };
  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  console.log(speciality);

  return (
    <div className="py-10">
      <p className="text-white">Browse through the doctors</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <div className="flex flex-col gap-4 text-white">
          <p
            onClick={() =>
              speciality === "General physician"
                ? navigate("/doctors")
                : navigate("/doctors/General physician")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-violet-400 rounded transition-all cursor-pointer ${
              speciality === "General physician"
                ? "bg-violet-400 text-white"
                : ""
            }`}
          >
            General physician
          </p>
          <p
            onClick={() =>
              speciality === "Gynecologist"
                ? navigate("/doctors")
                : navigate("/doctors/Gynecologist")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-violet-400 rounded transition-all cursor-pointer ${
              speciality === "Gynecologist" ? "bg-violet-400 text-white" : ""
            }`}
          >
            Gynecologist
          </p>
          <p
            onClick={() =>
              speciality === "Dermatologist"
                ? navigate("/doctors")
                : navigate("/doctors/Dermatologist")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-violet-400 rounded transition-all cursor-pointer ${
              speciality === "Dermatologist" ? "bg-violet-400 text-white" : ""
            }`}
          >
            Dermatologist
          </p>
          <p
            onClick={() =>
              speciality === "Pediatricians"
                ? navigate("/doctors")
                : navigate("/doctors/Pediatricians")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-violet-400 rounded transition-all cursor-pointer  ${
              speciality === "Pediatricians" ? "bg-violet-400 text-white" : ""
            }`}
          >
            Pediatricians
          </p>
          <p
            onClick={() =>
              speciality === "Neurologist"
                ? navigate("/doctors")
                : navigate("/doctors/Neurologist")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-violet-400 rounded transition-all cursor-pointer ${
              speciality === "Neurologist" ? "bg-violet-400 text-white" : ""
            }`}
          >
            Neurologist
          </p>
          <p
            onClick={() =>
              speciality === "Gastroenterologist"
                ? navigate("/doctors")
                : navigate("/doctors/Gastroenterologist")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-violet-400 rounded transition-all cursor-pointer ${
              speciality === "Gastroenterologist" ? "bg-violet-400 text-white" : ""
            }`}
          >
            Gastroenterologist
          </p>
        </div>
        <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
          {filterDoctor.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(`/appointment/${item._id}`)}
              className="border border-violet-400 rounded-lg overflow-hidden cursor-pointer hover:translate-y-[-10px] hover:border-2 hover:bg-violet-700 transition-all duration-300  "
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
      </div>
    </div>
  );
};

export default Doctors;
