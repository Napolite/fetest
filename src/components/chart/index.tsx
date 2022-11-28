import React, { useState } from "react";
import Chart from "react-apexcharts";

function Chartcomponent() {
  const [data, setData] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: ["Jan", "Feb", "March", "April", "May", "Jun"],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60],
      },
    ],
  });
  return (
    <div>
      <Chart
        options={data.options}
        series={data.series}
        type="area"
        width="670"
      />
    </div>
  );
}

export default Chartcomponent;
