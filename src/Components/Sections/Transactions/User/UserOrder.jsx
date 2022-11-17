import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
function UserOrder() {
  return (
    <div className="flex justify-between order-details text-">
      <div className="order-name">James Kirk</div>
      <div className="order-name">Ordered 12 Mac Book</div>
      <div className="order-name">Debit</div>
      <div className="order-name">$12,000</div>
      <div className="order-name">3/22/22</div>
      <div className="flex ">
        <div className="order-action">View more</div>
        <div>
          <MoreVertIcon />
        </div>
      </div>
    </div>
  );
}

export default UserOrder;
