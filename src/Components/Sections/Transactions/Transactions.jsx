import React from "react";
import { data } from "../../../Store/userData/Data.js";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import UserOrder from "./User/UserOrder";

function Transactions() {
  return (
    <div className="hero-div flex flex-col gap-2 text-[0.6em] md:text-sm bg-[#EFF8FF] p-7 ">
      <div className="flex justify-between items-center ">
        <h2 className="font-bold text-[1.2em] ">Recent Customers</h2>
        <div className="flex border border-black items-center px-[0.8em] py-[0.4em] rounded-lg  bg-white text-xs ">
          <p className="font-bold">Sort by</p>
          <ArrowDropDownIcon />
        </div>
      </div>

      <div className="flex w-full justify-between hero-filter  text-blue-600">
        <div className="flter">Name</div>
        <div className="flter ">Description</div>
        <div className="flter ">Type</div>
        <div className="flter ">Value</div>
        <div className="flter ">Date</div>
        <div className="flter ">Actions</div>
      </div>
      {data.map((user) => {
        return (
          <UserOrder
            key={Math.random() * Math.random()}
            id={Math.random() * Math.random()}
            name={user.name}
            description={user.description}
            withdrawals={user.Withdrawals}
            deposit={user.Deposit}
            date={user.Date}
            balance={user.Balance}
          />
        );
      })}
    </div>
  );
}

export default Transactions;
