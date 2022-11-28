import React from "react";
import "./sidebar.css";

//assets
import {
  overview,
  allorders,
  allpayments,
  avatar,
  manual,
  pendingorders,
  profile,
  reconciled,
  reconciledOrder,
  unreconciled,
  graph,
} from "../../assets";
function SideBar() {
  return (
    <div className="sidebar-root">
      <div>
        <div className="invoice">Generate Invoice</div>
        <div className="main-menu">
          <div>
            <div>Main</div>
            <div>
              <img src={overview} />
              <div>Overview</div>
            </div>
          </div>
          <div>
            <div>Payments</div>
            <div>
              <img src={allpayments} />
              <div>All Payments</div>
            </div>
            <div>
              <img src={reconciled} />
              <div>Reconciled Payments</div>
            </div>
            <div>
              <img src={unreconciled} />
              <div>Un-Reconciled Payments</div>
            </div>
            <div>
              <img src={manual} />
              <div>Manuel Settlement</div>
            </div>
          </div>
          <div>
            <div>Orders</div>
            <div>
              <img src={allorders} />
              <div>All Orders</div>
            </div>
            <div>
              <img src={pendingorders} />
              <div>Pending Orders</div>
            </div>
            <div>
              <img src={reconciledOrder} />
              <div>Reconciled Orders</div>
            </div>
          </div>
          <div>
            <div>
              <img src={profile} />
              <div>Merchant Profile</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
