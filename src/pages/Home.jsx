import React from "react";
import Primarybutton from "../components/Primarybutton";
import { useNavigate } from "react-router-dom";
import Topdoctors from "../components/Topdoctors";
import Banner from "../components/Banner";
import SpecialityMenu from "../components/SpecialityMenu";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <div>
        <SpecialityMenu />
      </div>
      <div>
        <Topdoctors />
      </div>
      <div>
        <Banner />
      </div>
    </div>
  );
};

export default Home;
