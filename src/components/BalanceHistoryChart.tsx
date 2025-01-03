import { useEffect, useState } from "react";
import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";

const BalanceHistoryChart = () => {
  const [chartData, setChartData] = useState({
    categories: [] as string[],
    series: [] as number[],
  });

  useEffect(() => {
    // Sample Data (replace with real data as needed)
    const categories = [
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
      "Jan",
    ];
    const series = [100, 300, 780, 430, 550, 760, 600];

    setChartData({ categories, series });
  }, []);

  const options: ApexOptions = {
    chart: {
      type: "area",
      height: 300,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      fontFamily: "Inter, sans-serif",
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 3,
      colors: ["#1814F3"]
    },
    grid: {
      strokeDashArray: 2,
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
      borderColor: "#E5E7EB",
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.1,
        opacityTo: 0.8,
        type: "vertical",
      },
    },
    xaxis: {
      categories: chartData.categories,
      labels: {
        style: {
          colors: "#9CA3AF",
          fontSize: "13px",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#9CA3AF",
          fontSize: "13px",
        },
        formatter: (value) =>
          value >= 1000 ? `${value / 1000}k` : value.toString(),
      },
    },
    tooltip: {
      x: {
        format: "MMM",
      },
      y: {
        formatter: (value) => `${value}`,
      },
    },
    colors: ["#2563EB"],
  };
  

  const series = [
    {
      name: "Balance",
      data: chartData.series,
    },
  ];

  return (
    <div>
      <p className="text-base md:text-[1.375rem] leading-[1.625rem] text-custom-primary-1 font-semibold mb-4">Balance History</p>
      <div className="w-full bg-white rounded-[1.5625rem] sm:p-8">
        <div className="h-[300px]">
          <ReactApexChart
            options={options}
            series={series}
            type="area"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default BalanceHistoryChart;
