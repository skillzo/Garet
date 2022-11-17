import React from "react";
import CurrentNav from "../../Navbar/CurrentNav";
import Transactions from "../Transactions/Transactions";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import "./Hero.css";
import ProgressBar from "../../Progress bar/ProgressBar";
function Hero() {
  return (
    <div className="flex flex-col gap-3 body_main px-[1em] w-full md:w-[80%] mt-10  mx-auto">
      <CurrentNav />
      <h1 className="text-[#12B76A] text-[2em] font-bold">
        Uploaded Account Statement Ready!
      </h1>
      <Transactions />
      <div className="upload flex items-center justify-center h-400 md:h-[500] w-[80%] md:w-[50%] h-[20vh] mx-auto bg-[#EAECF0] my-[2em] ">
        <div className=" flex justify-center items-center bg-[#175CD3] p-[1em] rounded-full ">
          <AddOutlinedIcon sx={{ color: "white" }} />
        </div>
      </div>
      <button className="bg-[#1849A9] hover:bg-[#516ba0] text-white text-sm mx-auto py-2 px-2 active:color-#1849A9">
        Sync to Database
      </button>

      {/* modal here */}
      <div className="hidden underlay w-full">
        <div className="flex justify-center align-center text-center bg-[#D0D5DD] mt-20 md:mx-[20%] md:w-[60%]  p-[2em] px-[3em] h-[400px]">
          <div className="overlay bg-[#EAECF0] py-[1em] px-[3em] w-[70%] md:w-[60%] mx-auto ">
            <h1 className="my-[2em]">Uploading Sales Record</h1>
            <div>
              <ProgressBar />{" "}
            </div>
          </div>
        </div>
      </div>
      {/* modal ends here */}
    </div>
  );
}

export default Hero;
