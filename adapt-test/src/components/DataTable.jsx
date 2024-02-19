import React from "react";
import { FaSort, FaSearch } from "react-icons/fa";
import { AiFillFilter } from "react-icons/ai";
import { GoPlus } from "react-icons/go";
import "../Styles/datatable.css";

const shopifyLogoUrl =
  "https://res.cloudinary.com/diuvnny8c/image/upload/v1708272635/pngegg_vssubi.png";

const orderData = [
  {
    channelLogo: shopifyLogoUrl,
    orderNo: "#TKN20203754",
    orderDate: "2022-05-04",
    city: "Lucknow",
    customerName: "Abhishek Dixit",
    orderValue: 0,
    status: "Pending",
    operations: "Actions",
  },
  {
    channelLogo: shopifyLogoUrl,
    orderNo: "#TKN20203753",
    orderDate: "2022-05-04",
    city: "Lucknow",
    customerName: "Abhishek Dixit",
    orderValue: 0,
    status: "Pending",
    operations: "Actions",
  },
  {
    channelLogo: shopifyLogoUrl,
    orderNo: "#TKN20203752",
    orderDate: "2022-05-04",
    city: "Lucknow",
    customerName: "Abhishek Dixit",
    orderValue: 0,
    status: "Pending",
    operations: "Actions",
  },
];

const DataTable = () => {
  return (
    <table className="table-data">
      <thead>
        <tr className="custom-row table-row">
          <th className="table-head-name non-border" width="100">
            {" "}
          </th>
          <th className="table-head-name non-border">
            <input type="checkbox" />
          </th>
          <th className="table-head-name" width="100">
            Channel
            <div className="custom-row">
              <FaSort className="table-icon" />
              <AiFillFilter className="table-icon" />
            </div>
          </th>
          <th className="table-head-name" width="150">
            Order No
            <div className="custom-row">
              <FaSort className="table-icon" />
              <FaSearch className="table-icon" />
            </div>
          </th>
          <th className="table-head-name" width="120">
            Order Date
            <div className="custom-row">
              <FaSort className="table-icon" />
              <FaSearch className="table-icon" />
            </div>
          </th>
          <th className="table-head-name" width="120">
            City <FaSort className="table-icon" />
          </th>
          <th className="table-head-name" width="150">
            Customer Name <FaSearch className="table-icon" />
          </th>
          <th className="table-head-name" width="80">
            Order Value <FaSort className="table-icon" />
          </th>
          <th className="table-head-name" width="150">
            Status <FaSort className="table-icon" />
          </th>
          <th className="table-head-name">Operation</th>
        </tr>
      </thead>
      <tbody className="table-body">
        {orderData.map((eachData) => (
          <tr className="custom-row table-value" key={eachData.orderNo}>
            <td width="100">
              <button className="custom-btn">
                <GoPlus />
              </button>
            </td>
            <td>
              <input type="checkbox" />
            </td>
            <td width="100">
              <img
                src={eachData.channelLogo}
                className="channel-logo"
                alt="channel-logo"
              />
            </td>
            <td width="150" className="order-no">
              {eachData.orderNo}
            </td>
            <td width="120">{eachData.orderDate}</td>
            <td width="120">{eachData.city}</td>
            <td width="150">{eachData.customerName}</td>
            <td width="80">{eachData.orderValue.toFixed(2)}</td>
            <td width="150">
              <span className="data-status">{eachData.status}</span>
            </td>
            <td>
              <select
                className="select-operations"
                defaultValue={eachData.operations}
              >
                <option value={eachData.operations}>
                  {eachData.operations}
                </option>
              </select>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
