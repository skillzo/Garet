import React, { useState } from "react";
import CurrentNav from "../../Navbar/CurrentNav";
import Transactions from "../Transactions/Transactions";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Hero.css";
import FilterListIcon from "@mui/icons-material/FilterList";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import FileCopyOutlinedIcon from "@mui/icons-material/FileCopyOutlined";

function Hero() {
  const [showDisplay, setShowDisplay] = useState(false);
  const [showSort, setShowSortDisplay] = useState(false);
  const clickShowDisplayHandler = () => {
    showDisplay === false ? setShowDisplay(true) : setShowDisplay(false);
  };
  const clickShowSortHandler = () => {
    showSort === false ? setShowSortDisplay(true) : setShowSortDisplay(false);
  };
  return (
    <div className="body_main space-y-[2em] px-[1em] w-full md:w-[80%] mt-10  mx-auto">
      <div className="space-y-[1em]">
        <div className="hidden md:flex">
          <CurrentNav />
        </div>

        <h1 className="text-[1.1em] font-bold">
          Uploaded Account Statement Ready!
        </h1>

        <div className="flex justify-between items-center ">
          <div
            onClick={clickShowDisplayHandler}
            className="flex  justify-between items-center px-[0.8em] py-[0.4em] rounded-lg text-xs md:bg-white bg-[#D1E9FF] text-[#1570EF] "
          >
            <p className="font-bold">Display</p>
            <ExpandMoreIcon />
          </div>

          <div
            onClick={clickShowSortHandler}
            className="flex  justify-between items-center px-[0.8em] py-[0.4em] rounded-lg text-xs md:bg-white bg-[#D1E9FF] text-[#1570EF] "
          >
            <p className="font-bold">Sort by</p>
            <FilterListIcon />
          </div>
        </div>
        <div>
          <h1 className="text-sm font-semibold">Recent Transactions</h1>
        </div>
      </div>
      {showDisplay && (
        <div className="border absolute bg-white z-1 w-[50%] left-[1em] top-[11em] rounded-lg p-4">
          <div className="flex justify-between ">
            <p>Value</p>
            <input type="checkbox" />
          </div>
          <div className="flex justify-between ">
            <p>Date</p>
            <input type="checkbox" />
          </div>
          <div className="flex justify-between ">
            <p>Name</p>
            <input type="checkbox" />
          </div>
          <div className="flex justify-between ">
            <p>Desciption</p>
            <input type="checkbox" />
          </div>
        </div>
      )}
      {showSort && (
        <div className="border w-[30%] absolute z-1 right-[1em] top-[11em] bg-white rounded-lg p-4">
          <div className="flex justify-between ">
            <p>Credit</p>
            <input type="checkbox" />
          </div>
          <div className="flex justify-between ">
            <p>Debit</p>
            <input type="checkbox" />
          </div>
        </div>
      )}

      <Transactions />

      {/* modal here */}
      <div className="space-y-[1em] w-full">
        <h1 className="text-[1.5em] font-bold">Next, upload Sales Record</h1>
        <div className=" text-center flex flex-col justify-center items-center mx-auto bg-[#F2F4F7] py-[4em] px-[1em] w-full md:w-[60%] space-y-3 border border-black border-dashed ">
          <CloudUploadIcon sx={{ fontSize: "5em", color: "#2E90FA" }} />
          <p>Drag and drop your file in this gray area</p>
          <p>OR</p>
          <div>
            <button className=" flex bg-white p-[1em] rounded-lg ">
              Browse File <FileCopyOutlinedIcon />
            </button>
          </div>
        </div>
      </div>
      {/* modal ends here */}
      <div className="flex justify-center ">
        <button className="bg-[#1849A9] hover:bg-[#516ba0] text-white text-sm py-2 px-2   md:w-[20%] active:color-#1849A9">
          Sync to Database
        </button>
      </div>
    </div>
  );
}

export default Hero;
