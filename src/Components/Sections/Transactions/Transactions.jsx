import React from "react";

import UserOrder from "./User/UserOrder";

function Transactions() {
  return (
    <div className="hero-div flex flex-col gap-2 text-[0.6em] md:text-sm bg-[#EFF8FF] p-7 ">
      <h2>Recent Customers</h2>

      <div className="flex w-full justify-between hero-filter  text-blue-600">
        <div className="flter">Name</div>
        <div className="flter ">Description</div>
        <div className="flter ">Type</div>
        <div className="flter ">Value</div>
        <div className="flter ">Date</div>
        <div className="flter ">Actions</div>
      </div>
      <UserOrder />
      <UserOrder />
      <UserOrder />
      <UserOrder />
      <UserOrder />
      <UserOrder />
      <UserOrder />
    </div>
  );
}

export default Transactions;
