import React from "react";
import Chartcomponent from "../components/chart";
import Tab from "../components/tab";

import "./main.css";
function Main() {
  return (
    <div className="main-root">
      <div className="tab">
        <Tab details={{ title: "daily transaction volume", value: "2400" }} />
        <Tab
          details={{ title: "daily transaction value", value: "₦4,000,000" }}
        />
        <Tab
          details={{ title: "Total transaction volume", value: "452,000" }}
        />
        <Tab
          details={{ title: "Total transaction volume", value: "₦4,000,000" }}
        />
      </div>
      <div className="chart-div">
        <div>
          <div className="chart-nav">
            <div className="date">Today, 5th Aug 2018</div>
            <div className="date-filter">
              <div>1 Jan - 1 Jun</div>
              <div>
                <div>&#60;</div>
                <div>&#62;</div>
              </div>
            </div>
          </div>
          <Chartcomponent />
        </div>
        <div className="chart-texts">
          <div>
            <div>Orders</div>
            <div>
              <div></div>
              <div></div>
            </div>
            <div>
              <div>
                Pending Orders: <p className="reconciled"> 20</p>
              </div>
              <div>
                Reconciled Orders: <p className="unreconciled"> 80</p>
              </div>
              <div>
                Total Orders: <p className="total"> 100</p>
              </div>
            </div>
          </div>
          <div>
            <div>Payments</div>
            <div>
              <div></div>
              <div></div>
            </div>
            <div>
              <div>
                Unreconciled Payments: <p className="reconciled"> 20</p>
              </div>
              <div>
                Reconciled Payments: <p className="unreconciled"> 80</p>
              </div>
              <div>
                Total Payments: <p className="total"> 100</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="payments">
        <div>Payments</div>
        <div className="payments-tab">
          <div>
            Showing <p>20</p> out of 500 payments
          </div>
          <div>
            <input id="search" placeholder="search payments" />
          </div>
          <div>
            <div>Show</div> <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
