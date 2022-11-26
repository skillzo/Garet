import React from "react";
import { data } from "../../../Store/userData/Data.js";

function SalesRecord() {
  return (
    <div className="hero-div flex flex-col gap-3 text-[0.6em] md:text-sm ">
      <div className="flex w-full justify-between hero-filter  bg-[#D1E9FF] p-[1em]">
        <div className="flter ">Item Description</div>
        <div className="flter ">Price</div>
        <div className="flter ">Quantity</div>
        <div className="flter ">Date</div>
        <div className="flter ">Amount</div>
        <div className="flter ">Tax</div>
        <div className="flter ">Total</div>
      </div>
      <div>
        {data.map((user) => {
          return (
            <div className="user pb-3 flex justify-between items-center order-details text-slate-700 ">
              <div className="order-name w-[18%]">{user.name}</div>
              <div className="order-name w-[18%]">{user.description}</div>
              <div className="order-name w-[18%]">{user.Withdrawals}</div>
              <div className="order-name w-[18%]">{user.Deposit}</div>
              <div className="order-name w-[18%]">{user.Date}</div>
              <div className="order-action w-[18%]">{user.Balance}</div>
            </div>
          );
        })}
        <div className="flex justify-between items-center font-semibold mt-[1em] px-[1em] border-b pb-[0.5em]">
          <p>Total</p>
          <p>$25,250</p>
        </div>
      </div>
    </div>
  );
}

export default SalesRecord;
