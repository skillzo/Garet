import React from "react";
import Navbar from "./Components/Navbar/Navbar";

import "./App.css";
import Sidebar from "./Components/Navbar/Sidebar";
import Hero from "./Components/Sections/Hero/Hero";
import { UserProvider } from "./Store/Context";
import Footer from "./Components/Footer/Footer";
import { Upload, UploadReady } from "./Components/Sections/Upload/Upload";
import UploadMain from "./Components/Sections/Upload/UploadMain";
import AccountReport from "./AccountReport/AccountReport";
import FileUploadtest from "./FileUploadtest";

function Home() {
  return (
    <>
      <div className="w-full bg-[#F9FAFB]">
        <Navbar />
        <div className="flex">
          <Sidebar />
          <div className="space-y-[2em] relative top-[6em] md:top-[8em] md:left-[4em] lg:left-[5em] px-[1em] w-full md:w-[80%] lg:w-[85%] mx-auto">
            <FileUploadtest />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
