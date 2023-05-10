import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export const PieChart = () => {
  const options = {
    series: [30, 30, 40],
    chart: {
      type: "donut",
    },
    labels: ["Realizadas", "Pendientes", "Rechazadas"],
    responsive: [
      {
        breakpoint: 200,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  return (
    <ApexChart
      options={options}
      series={options.series}
      type="donut"
      height={180}
    />
  );
};
export default PieChart;
