import React from "react";
import UserOrder from "./User/UserOrder";
import { data } from "../../../Store/userData/Data.js";

function Transactions() {
  return (
    <div className="hero-div flex flex-col gap-3 text-[0.6em] md:text-sm ">
      <div className="flex w-full justify-between hero-filter  bg-[#D1E9FF] p-[1em]">
        <div className="flter">Name</div>
        <div className="flter ">Description</div>
        <div className="flter ">Withdrawals</div>
        <div className="flter ">Deposit</div>
        <div className="flter ">Date</div>
        <div className="flter ">Balance</div>
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
