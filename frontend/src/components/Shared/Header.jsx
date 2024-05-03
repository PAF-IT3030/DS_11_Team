import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";

import { images, names } from "../../constants/data";

const Header = () => {
  return (
    <div className="sticky z-50 top-0 flex justify-between items-center p-4 px-10 bg-white border-b border-gray-300">
      <div className="flex items-center space-x-4 w-1/2 justify-between">
        <div className="flex flex-row items-center gap-x-5">
          <div to="/" className="text-black no-underline">
            <span className="font-bold text-xl">FitHub</span>
          </div>
          <HomeOutlinedIcon />
          <GridViewOutlinedIcon />
        </div>
        <div className="flex items-center space-x-2 border border-gray-200 rounded-md p-1 w-1/2">
          <SearchOutlinedIcon />
          <input
            type="text"
            placeholder="Search..."
            className="border-none bg-transparent"
          />
        </div>
      </div>
      <div className="flex items-center space-x-4 w-1/2 justify-end">
        <PersonOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />
        <div className="flex items-center space-x-2">
          <img
            src={images.user}
            alt=""
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="font-medium">{names.user}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
