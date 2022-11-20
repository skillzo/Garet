import React from "react";
import GridOnIcon from "@mui/icons-material/GridOn";
import AddIcon from "@mui/icons-material/Add";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import "./sidebar.css";
import { useAuth } from "../../Store/Context";
import { IconButton } from "@mui/material";
function Sidebar() {
  const { isClicked } = useAuth();

  return (
    <>
      {/* desktop */}

      {!isClicked ? (
        <div className="hidden fixed top-[4em] z-10 md:flex  justify-between items-center flex-col side-bar  w-[5%] md:w-[7%] lg:w-[5%] h-[100vh]  py-[4em] px-[1em]  bg-[#1849A9] text-white transition-all  ease-in-out delay-100 ">
          <div className="flex flex-col gap-5">
            <IconButton>
              <GridOnIcon sx={{ fontSize: 20, color: "white" }} />
            </IconButton>

            <IconButton>
              <AddIcon sx={{ fontSize: 20, color: "white" }} />
            </IconButton>
            <IconButton>
              <StarBorderIcon sx={{ fontSize: 20, color: "white" }} />
            </IconButton>
            <IconButton>
              <SettingsIcon sx={{ fontSize: 20, color: "white" }} />
            </IconButton>
          </div>
          <div className="flex flex-col gap-4">
            <PersonIcon sx={{ fontSize: 20 }} />
            <LightbulbOutlinedIcon sx={{ fontSize: 20 }} />
          </div>
        </div>
      ) : (
        <div className="hidden fixed top-[4.4em] z-10  md:flex justify-between flex-col side-bar w-[15%] md:w-[15%] h-[95vh] py-[3.5em] px-[1em] lg:pl-[2em] bg-[#1849A9] text-white ">
          <div className="flex flex-col text-[0.6] md:text-[0.8em] lg:text-[1em]  md:gap-6 lg:gap-10">
            <div className="flex sidenav-nav ">
              <GridOnIcon sx={{ fontSize: 20 }} /> Dashboard
            </div>
            <div className="flex sidenav-nav ">
              <AddIcon sx={{ fontSize: 20 }} />
              Import Data
            </div>
            <div className="flex sidenav-nav">
              <StarBorderIcon sx={{ fontSize: 20 }} />
              History
            </div>
            <div className="flex sidenav-nav">
              <SettingsIcon sx={{ fontSize: 20 }} />
              Settings
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex sidenav-nav">
              <PersonIcon sx={{ fontSize: 20 }} />
              Privacy
            </div>
            <div className="flex sidenav-nav">
              <LightbulbOutlinedIcon sx={{ fontSize: 20 }} />
              Help
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Sidebar;
