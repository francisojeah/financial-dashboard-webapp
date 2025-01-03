import { useEffect, useState } from "react";
import { ApexOptions } from "apexcharts";
import { lazy } from "react";

const ReactApexChart = lazy(() => import("react-apexcharts"));

interface WeeklyActivityChartProps {
  seriesData: {
    deposit: number[];
    withdraw: number[];
  };
}

const WeeklyActivityChart = ({ seriesData }: WeeklyActivityChartProps) => {
  const [chartData, setChartData] = useState({
    categories: [] as string[],
    deposit: [] as number[],
    withdraw: [] as number[],
  });

  useEffect(() => {
    const categories: string[] = [
      "Sat",
      "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
    ];

    setChartData({
      categories,
      deposit: seriesData.deposit,
      withdraw: seriesData.withdraw,
    });
  }, [seriesData]);

  const series = [
    {
      name: "Withdraw",
      data: seriesData.withdraw,
    },
    {
      name: "Deposit",
      data: seriesData.deposit,
    },
  ];

  const maxDataValue = Math.max(...series[0].data, ...series[1].data);

  const yAxisMax = maxDataValue;
  const roundedYAxisMax = Math.ceil(yAxisMax / 100) * 100;

  const options: ApexOptions = {
    chart: {
      type: "bar" as const,

      height: 100,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      fontFamily: "Inter, sans-serif",
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "25px",
        borderRadius: 7,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 10,
      colors: ["transparent"],
    },
    grid: {
      show: true,
      borderColor: "#F3F3F5",
      position: "back",
    },
    xaxis: {
      categories: chartData.categories,
      labels: {
        style: {
          colors: "#718EBF",
          fontSize: "13px",
          fontFamily: "Inter, sans-serif",
          fontWeight: 400,
        },
      },
    },
    yaxis: {
      max: roundedYAxisMax,
      labels: {
        style: {
          colors: "#718EBF",
          fontSize: "13px",
          fontFamily: "Inter, sans-serif",
          fontWeight: 400,
        },
        formatter: (value: number) => value.toString(),
      },
    },
    colors: ["#000000", "#396AFF"],
    legend: {
      show: true,
      position: "top" as const,
      horizontalAlign: "right" as const,
      fontSize: "13px",
      fontFamily: "Inter, sans-serif",
      fontWeight: 400,
      markers: {
        shape: "circle",
        size: 7,
        strokeWidth: 0,
      },
    },
    tooltip: {
      y: {
        formatter: function (val: number) {
          return val.toString();
        },
      },
    },
  };

  return (
    <div>
      <p className="text-base md:text-[1.375rem] leading-[1.625rem] text-custom-primary-1 font-semibold mb-4">Weekly Activity</p>
      <div className="w-full bg-white rounded-[1.5625rem] p-4 sm:p-8">
        <div className="h-[300px]">
          <ReactApexChart
            options={options}
            series={series}
            type="bar"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default WeeklyActivityChart;
