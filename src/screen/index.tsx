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
      </div>
    </div>
  );
}

export default Main;
