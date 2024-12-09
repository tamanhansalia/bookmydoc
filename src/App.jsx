import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import About from "./pages/About";
import Doctors from "./pages/Doctors";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Myprofile from "./pages/Myprofile";
import Myappointment from "./pages/Myappointment";
import Errorpage from "./pages/Errorpage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Appointment from "./pages/Appointment";

const App = () => {
  return (
    <div className='bg-slate-950' >
      <div className=" bg-slate-950">
        <Navbar />
        <div className="mx-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/About" element={<About />} />
            <Route path="/Doctors" element={<Doctors />} />
            <Route path="/Doctors/:speciality" element={<Doctors />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Myprofile" element={<Myprofile />} />
            <Route path="/Myappointment" element={<Myappointment />} />
            <Route path="/appointment/:docId" element={<Appointment />} />
            <Route path="*" element={<Errorpage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div >
  );
};
export default App;
