import React from "react";
import "./user.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function UserOrder({ name, description, withdrawals, deposit, date, balance }) {
  return (
    <div className="user pb-3 flex justify-between order-details ">
      <div className="order-name">{name}</div>
      <div className="order-name">{description}</div>
      <div className="order-name text-[#F04438]">{withdrawals}</div>
      <div className="order-name text-[#12B76A]">{deposit}</div>
      <div className="order-name">{date}</div>
      <div className="order-action flex justify-between items-center">
        <div className=" rounded-md w-[90%] p-1 bg-[#D1E9FF] hover:bg-[#175CD3]">
          {balance}
        </div>
        <div className="w-[10%]">
          <MoreVertIcon />
        </div>
      </div>
    </div>
  );
}

export default UserOrder;
