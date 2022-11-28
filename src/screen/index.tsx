import React from "react";
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
    </div>
  );
}

export default Main;
