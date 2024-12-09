import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Appcontext } from "../context/Appcontext";
import Primarybutton from "../components/Primarybutton";
import RelatedDoctors from "../components/RelatedDoctors";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors } = useContext(Appcontext);

  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
  };

  const getAvailableSlots = async () => {
    setDocSlots([]); // Resetting the slots

    let today = new Date();

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      let endTime = new Date(today);
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(
          currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
        );
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];

      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });

        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      setDocSlots((prev) => [...prev, timeSlots]);
    }
  };

  useEffect(() => {
    if (docInfo) {
      getAvailableSlots();
    }
  }, [docInfo]);

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  return (
    docInfo && (
      <div className="flex flex-col text-white p-4 md:p-6 lg:p-8 rounded-lg shadow-lg max-w-6xl mx-auto space-y-6 ">
        {/* Image Section */}
        <div className="w-full flex flex-col  lg:flex-row space-y-6 lg:space-y-0 lg:space-x-8 border border-violet-400 p-5 rounded-xl">
          <div className="w-full lg:w-1/3">
            <img
              src={docInfo.image}
              alt={docInfo.name}
              className="w-full h-auto rounded-lg bg-slate-900 cursor-pointer transition-all duration-500"
            />
          </div>

          <div className="w-full lg:w-2/3 text-left space-y-4">
            <h2 className="text-2xl lg:text-3xl font-bold text-violet-400">
              {docInfo.name}
            </h2>
            <p className="text-lg lg:text-xl font-semibold">
              {docInfo.speciality}
            </p>
            <p className="text-sm lg:text-base text-slate-300">
              {docInfo.about}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
              <div>
                <h4 className="text-lg font-bold text-violet-300">Fees</h4>
                <p className="text-lg font-bold">${docInfo.fees}</p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-violet-300">Degree</h4>
                <p>{docInfo.degree}</p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-violet-300">
                  Experience
                </h4>
                <p>{docInfo.experience}+</p>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold text-violet-300">Address</h3>
              <p className="text-slate-300">
                {docInfo.address.line1} {docInfo.address.line2}
              </p>
            </div>

          </div>
        </div>
            <div>
              <h1 className="text-violet-300 mb-2">
                Booking Slots
              </h1>
              {/* Day Selection */}
              <h2 className="mb-5 text-violet-100">Date Slots:</h2>
              <div className="flex overflow-x-auto space-x-4 mb-2">
                {docSlots.length &&
                  docSlots.map((slots, index) => (
                    <div
                      key={index}
                      className={`text-center py-5 mb-3 px-2 min-w-[60px] rounded-full cursor-pointer transition-all duration-300 ${
                        slotIndex === index
                          ? "bg-violet-600 text-white border"
                          : "border"
                      }`}
                      onClick={() => setSlotIndex(index)}
                    >
                      <p className="text-lg font-semibold">
                        {daysOfWeek[slots[0]?.datetime.getDay()]}
                      </p>
                      <p className="text-base">
                        {slots[0]?.datetime.getDate()}
                      </p>
                    </div>
                  ))}
              </div>
              {/* Time Slots */}
              <h3 className="text-violet-100 mb-2">
                Time Slots:
              </h3>
              <div className="flex flex-wrap items-center gap-4 mt-4 pb-2">
                {docSlots.length &&
                  docSlots[slotIndex].map((item, index) => (
                    <p
                      className={`flex-shrink-0 px-5 py-2 rounded-full cursor-pointer transition-all duration-300 ${
                        item.time === slotTime
                          ? "bg-violet-600 text-white border"
                          : "border"
                      }`}
                      key={index}
                      onClick={() => setSlotTime(item.time)}
                    >
                      {item.time}
                    </p>
                  ))}
              </div>
              <Primarybutton className="w-full md:w-auto mt-5 bg-violet-600 hover:bg-violet-700 transition-all duration-300">
                Book an appointment
              </Primarybutton>
            </div>

        {/* Related Doctors */}
        <div className="w-full mt-10">
          <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
        </div>
      </div>
    )
  );
};

export default Appointment;
