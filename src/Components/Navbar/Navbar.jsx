import React from "react";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import BedtimeOutlinedIcon from "@mui/icons-material/BedtimeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Badge, IconButton } from "@mui/material";
import "./navbar.css";
import logo from "../../Components/Assest/Img/Logo White.png";
import { useAuth } from "../../Store/Context.js";

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
              <p className="font-bold md:text-sm ">Account Pal</p>
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
              <Badge badgeContent={4} color="secondary">
                <GridViewOutlinedIcon sx={{ color: "#1570EF", fontSize: 16 }} />
              </Badge>
            </IconButton>
          </div>
        </div>
        {/* navbar icons */}
      </div>

      {/* nav for mobile */}
      <div className="navbar-mobile flex justify-between items-center h-[7vh] bg-[#1849A9] text-white  px-[1em] ">
        <div className="ham">
          <IconButton onClick={clickHandler}>
            <MenuOutlinedIcon sx={{ color: "#fff" }} />
          </IconButton>
        </div>
        <div className="navbar-logo flex justify-between items-center mr-[1em]">
          <img src={logo} alt="Account Pal Logo" />
          <p className="font-bold md:text-sm ">Account Pal</p>
        </div>
        {/* navbar icons */}
        <div className="navbar-mobile-icons flex items-center space-x-2 ">
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
              <Badge badgeContent={4} color="error">
                <GridViewOutlinedIcon sx={{ color: "#1570EF", fontSize: 16 }} />
              </Badge>
            </IconButton>
          </div>
        </div>
        {/* navbar icons */}
      </div>
    </>
  );
}

export default Navbar;
