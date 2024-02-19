import React from "react";
import "../Styles/nav.css";
import { MdOutlineDarkMode, MdTranslate } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { AiOutlineMenuFold } from "react-icons/ai";

const profileUrl =
  "https://res.cloudinary.com/diuvnny8c/image/upload/v1708271782/User-Profile-PNG-Image_eyvnnm.png";

const logoUrl =
  "https://res.cloudinary.com/diuvnny8c/image/upload/v1708272584/pngwing.com_grklxc.png";

const Navbar = () => {
  return (
    <nav className="main-navbar custom-row">
      <div className="custom-row app-logo-container">
        <img className="app-logo" alt="e-commerce" src={logoUrl} />
        <button className="custom-btn sidebar-toggle">
          <AiOutlineMenuFold />
        </button>
      </div>
      <div className="custom-row action-container">
        <button className="custom-btn action-btn">
          <MdOutlineDarkMode />
        </button>
        <button className="custom-btn action-btn">
          <IoIosNotificationsOutline />
        </button>
        <button className="custom-btn action-btn">
          <MdTranslate />
        </button>
        <img className="profile-img" alt="avator" src={profileUrl} />
      </div>
    </nav>
  );
};

export default Navbar;
