import React, { useState } from "react";
import "../Styles/sidebar.css";
import { AiOutlineDashboard, AiOutlineTag } from "react-icons/ai";
import { FaRegListAlt } from "react-icons/fa";
import { MdOutlineLocalShipping } from "react-icons/md";
import { PiShareNetworkBold } from "react-icons/pi";

const Sidebar = () => {
  const [selectedMenu, setSelectedMenu] = useState("Orders");
  return (
    <div className="custom-col side-bar-container">
      <button
        className={`custom-btn sidebar-btn custom-row ${
          selectedMenu === "Dashboard" && "selected-menu"
        }`}
        onClick={() => setSelectedMenu("Dashboard")}
      >
        <AiOutlineDashboard color="black" />
        <span className="sidebar-btn-name">Dashboard</span>
      </button>
      <button
        className={`custom-btn sidebar-btn custom-row ${
          selectedMenu === "Inventory" && "selected-menu"
        }`}
        onClick={() => setSelectedMenu("Inventory")}
      >
        <AiOutlineTag color="black" />
        <span className="sidebar-btn-name">Inventory</span>
      </button>
      <button
        className={`custom-btn sidebar-btn custom-row ${
          selectedMenu === "Orders" && "selected-menu"
        }`}
        onClick={() => setSelectedMenu("Orders")}
      >
        <FaRegListAlt color="black" />
        <span className="sidebar-btn-name">Orders</span>
      </button>
      <button
        className={`custom-btn sidebar-btn custom-row ${
          selectedMenu === "Shipping" && "selected-menu"
        }`}
        onClick={() => setSelectedMenu("Shipping")}
      >
        <MdOutlineLocalShipping color="black" />
        <span className="sidebar-btn-name">Shipping</span>
      </button>
      <button
        className={`custom-btn sidebar-btn custom-row ${
          selectedMenu === "Channel" && "selected-menu"
        }`}
        onClick={() => setSelectedMenu("Channel")}
      >
        <PiShareNetworkBold color="black" />
        <span className="sidebar-btn-name">Channel</span>
      </button>
    </div>
  );
};

export default Sidebar;
