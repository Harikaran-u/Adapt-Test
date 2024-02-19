import React, { useState } from "react";
import Sidebar from "./Sidebar";
import DataTable from "./DataTable";
import { CiSettings } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { LiaFileImportSolid } from "react-icons/lia";
import { LuSendHorizonal, LuRefreshCw } from "react-icons/lu";
import { MdOutlineLocalPrintshop } from "react-icons/md";
import { FaAngleDown, FaAngleLeft, FaAngleRight } from "react-icons/fa";

import "../Styles/home.css";

const statusList = [
  "Pending",
  "Accepted",
  "AWB Created",
  "Ready to ship",
  "Shipped",
  "Completed",
  "Cancelled",
];

const Home = () => {
  const [selectedStatus, setSelectedStatus] = useState("Pending");

  return (
    <div className="custom-row home-main-container">
      <Sidebar />
      <div className="custom-col display-data-container">
        <div className="custom-row selected-pages-container">
          <div className="custom-row pages-nav-container">
            <p className="custom-row page-btn-title">
              Orders
              <button className="close-btn">
                <IoMdClose />
              </button>
            </p>
          </div>
          <button className="custom-btn settings-btn">
            <CiSettings />
          </button>
        </div>
        <div className="display-data-table-container">
          <ul className="custom-row status-nav-container">
            {statusList.map((eachStatus) => (
              <li
                className={`status ${
                  eachStatus === selectedStatus && "selected-status"
                }`}
                key={eachStatus}
                onClick={() => setSelectedStatus(eachStatus)}
              >
                {eachStatus}
              </li>
            ))}
          </ul>
          <div className="table-container">
            <div className="custom-row table-data-action-container">
              <div className="custom-row">
                <button className="custom-row custom-btn table-action-btn">
                  <LiaFileImportSolid /> Import Orders
                </button>
                <button
                  className="custom-row custom-btn table-action-btn"
                  disabled
                >
                  <LuSendHorizonal /> Accept
                </button>
                <button
                  className="custom-row custom-btn table-action-btn"
                  disabled
                >
                  <MdOutlineLocalPrintshop /> Print <FaAngleDown />
                </button>
              </div>
              <button className="custom-row custom-btn refresh-btn">
                <LuRefreshCw />
                Refresh
              </button>
            </div>
            <DataTable />
            <div className="custom-row pagination-container">
              <div className="custom-row">
                <button className="custom-btn page-access-btn">
                  <FaAngleLeft />
                </button>
                <button className="custom-btn page-access-btn btn-num">
                  1
                </button>
                <button className="custom-btn page-access-btn">
                  <FaAngleRight />
                </button>
              </div>
              <select className="page-selection-container" defaultValue={20}>
                <option className="custom-btn page-num-btn" value={10}>
                  10/Page
                </option>
                <option className="custom-btn page-num-btn" value={20}>
                  20/Page
                </option>
                <option className="custom-btn page-num-btn" value={30}>
                  30/Page
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
