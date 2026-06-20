import React from "react";
import Chart from "react-apexcharts";

const TransactionChart: React.FC = () => {
  const options: ApexCharts.ApexOptions = {
    chart: {
      height: 290,
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "40%", // spacing managed here
        borderRadius: 0,
      },
    },
    colors: ["#5FA35B", "#D2675C"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      labels: {
        style: {
          colors: "#6B7280",
          fontSize: "14px",
        },
      },
    },
    yaxis: {
      max: 120,
      labels: {
        offsetX: -15,
        style: {
          colors: "#6B7280",
          fontSize: "14px",
        },
      },
    },
    legend: {
      show: true,
    },
    grid: {
      borderColor: "#E5E7EB",
      strokeDashArray: 5,
      padding: {
        left: -8,
        right: -15,
        bottom: -10,
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: (val: number) => `${val}`, // MUST return string
      },
    },
  };

  const series = [
    {
      name: "Inprogress",
      data: [60, 50, 25, 20, 60, 55, 10, 120, 30, 10, 50, 60],
    },
    {
      name: "Completed",
      data: [35, 30, 10, 5, 40, 5, 5, 25, 15, 5, 30, 35],
    },
  ];

  return <Chart options={options} series={series} type="bar" height={290} />;
};

export default TransactionChart;
