import React from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

interface ExpenseStatisticsProps {
  labels: string[];
  percentages: number[];
}

const ExpenseStatistics: React.FC<ExpenseStatisticsProps> = ({
  labels,
  percentages,
}) => {
  const options: ApexOptions = {
    chart: {
      type: "pie",
      height: 350,
      fontFamily: "Inter, sans-serif",
    },
    labels: labels,
    series: percentages,
    colors: ["#FC7900", "#232323", "#396AFF", "#343C6A"],
    plotOptions: {
      pie: {
        expandOnClick: true,
        offsetX: 0,
        offsetY: 0,
        dataLabels: {
          offset: -15, // Move labels inward
          minAngleToShowLabel: 10 // Only show labels for slices larger than 10 degrees
        }
      }
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: "14px",
        fontFamily: "Inter, sans-serif",
        fontWeight: "600",
        colors: ["#fff"]
      },
      dropShadow: {
        enabled: false
      },
      formatter: function(val, opts) {
        const label = opts.w.config.labels[opts.seriesIndex];
        // Break long labels into multiple lines if needed
        // const wrappedLabel = label.length > 10 ? 
        //   label.match(/.{1,10}/g)?.join('\n') : 
        //   label;
        const wrappedLabel = label;
        return [
          `${val}%`,
          wrappedLabel
        ]
      },
      textAnchor: 'middle',
      distributed: true,
    },
    legend: {
      show: false
    },
    stroke: {
      width: 2,
      colors: ['#fff'],
    },
    tooltip: {
      enabled: true
    },
  };

  return (
    <div>
      <p className="text-base md:text-[1.375rem] leading-[1.625rem] text-custom-primary-1 font-semibold mb-4">Expense Statistics</p>
      <div className="w-full bg-white rounded-[1.5625rem] p-4 sm:p-8">
        <div className="h-[300px]">
          <ReactApexChart
            options={options}
            series={percentages} // Pass the dynamic percentages
            type="pie"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default ExpenseStatistics;
