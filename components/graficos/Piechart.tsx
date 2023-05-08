import React, { useEffect } from "react";
import dynamic from "next/dynamic";
const Piechart = dynamic(() => import("react-apexcharts"), { ssr: false });

const PieChart = () => {
  useEffect(() => {
    const options = {
      series: [44, 55, 13, 43, 22],
      chart: {
        type: "pie",
        height: 180,
        width: "100%",
      },
      labels: ["Apple", "Mango", "Banana", "Orange", "Grapes"],
    };

    const chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, []);

  return <div id="chart" />;
};

export default PieChart;
