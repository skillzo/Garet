import React from "react";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import BedtimeOutlinedIcon from "@mui/icons-material/BedtimeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Badge, IconButton } from "@mui/material";
import "./navbar.css";
import logo from "../../Components/Assest/Img/Logo White.png";
import { useAuth } from "../../Store/Context.js";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import AutoAwesomeMosaicOutlinedIcon from "@mui/icons-material/AutoAwesomeMosaicOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SearchIcon from "@mui/icons-material/Search";

function Navbar() {
  const { clickHandler } = useAuth();
  return (
    <>
      <div className="navbar hidden w-full fixed  top-0 z-10 md:flex justify-between items-center h-[7vh] bg-[#1849A9] text-white px-[0.5em] lg:px-[2em] ">
        {/* ///////////////////////// */}
        {/* section1 */}
        <div className="flex justify-between items-center md:w-[45%] lg:w-[30%]">
          <div className="ham">
            <IconButton onClick={clickHandler}>
              <MenuOutlinedIcon sx={{ color: "#fff" }} />
            </IconButton>
          </div>
          <div className="flex justify-center items-center">
            <div className="navbar-logo flex justify-between items-center mr-[1em]">
              <img src={logo} alt="Account Pal Logo" />
              <p className="font-bold md:text-sm ">Act Pal</p>
            </div>
            <div className="navbar-search md:w-[60%] ">
              <input type="seacrh" placeholder="Search" />
            </div>
          </div>
        </div>
        {/* section1 ends  */}

        {/* /////////////////////////////////// */}
        {/* navbar icons */}
        <div className="navbar-icons flex items-center space-x-2 ">
          <div className="icons">
            <IconButton>
              <Badge badgeContent={4} color="error">
                <NotificationsOutlinedIcon
                  sx={{ color: "#1570EF", fontSize: 16 }}
                />
              </Badge>
            </IconButton>
          </div>
          <div className="icons">
            <IconButton>
              <BedtimeOutlinedIcon sx={{ color: "#1570EF", fontSize: 16 }} />
            </IconButton>
          </div>
          <div className="icons">
            <IconButton>
              <GridViewOutlinedIcon sx={{ color: "#1570EF", fontSize: 16 }} />
            </IconButton>
          </div>
        </div>
        {/* navbar icons */}
      </div>

      {/* nav for mobile */}
      <div className="navbar-mobile fixed w-full top-0 left-0 flex justify-between items-center h-[7vh] bg-[#1849A9] text-white  px-[1em] ">
        <div className="navbar-logo flex justify-between items-center mr-[1em]">
          <p className="font-light md:text-sm ">Account Pal</p>
        </div>
        {/* navbar icons */}
        <div className="navbar-mobile-icons flex items-center space-x-2 ">
          <div className="icons">
            <IconButton>
              <NotificationsOutlinedIcon
                sx={{ color: "#1570EF", fontSize: 16 }}
              />
            </IconButton>
          </div>
          <div className="icons">
            <IconButton>
              <BedtimeOutlinedIcon sx={{ color: "#1570EF", fontSize: 16 }} />
            </IconButton>
          </div>

          <div className=" md:hidden icons">
            <IconButton>
              <SearchIcon sx={{ color: "#1570EF", fontSize: 16 }} />
            </IconButton>
          </div>
        </div>
        {/* navbar icons */}
      </div>
    </>
  );
}

export default Navbar;

export const Footer = () => {
  return (
    <div className=" md:hidden marker:footer flex items-center justify-between mt-[2em] w-[80%] mx-auto">
      <div className="footer-item text-center">
        <InsertDriveFileOutlinedIcon />
        <p>Import Data</p>
      </div>
      <div className="footer-item text-center">
        <AutoAwesomeMosaicOutlinedIcon />
        <p>Dashboard</p>
      </div>
      <div className="footer-item text-center">
        <SettingsOutlinedIcon />
        <p>Settings</p>
      </div>
    </div>
  );
};
