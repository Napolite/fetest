import React from "react";

import "./tab.css";
import { graph } from "../../assets";
function Tab({ details }: any) {
  return (
    <div className="tab-root">
      <div>
        <div>{details.title}</div>
        <div>{details.value}</div>
      </div>
      <div>
        <img src={graph} />
      </div>
    </div>
  );
}

export default Tab;
