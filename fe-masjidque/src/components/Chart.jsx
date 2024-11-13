import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({
  title,
  dataLabel,
  dataValues,
  backgroundColor,
  borderColor,
}) => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: dataLabel,
        data: dataValues,
        backgroundColor: backgroundColor || "#36A2EB80", // Converted to HEX with opacity
        borderColor: borderColor || "#36A2EB", // Converted to HEX
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allow the chart's height to adjust based on container size
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: title,
      },
    },
    layout: {
      padding: 5, // Optional: Add padding around the chart
    },
  };

  return (
    <div className="w-full h-64 sm:h-56 md:h-64 lg:h-72 xl:h-80 poppins-bold">
      {" "}
      {/* Responsive container height */}
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
