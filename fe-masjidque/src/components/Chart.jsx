import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Number of Patients',
      data: [12, 19, 3, 5, 2, 3, 9],
      backgroundColor: 'rgba(75, 85, 99, 0.8)',
      borderRadius: 5,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: { display: false },
  },
  scales: {
    x: { grid: { display: false } },
    y: { grid: { color: '#e5e7eb' } }
  }
};

const ChartComponent = () => {
  return (
    <div className="p-6 bg-white shadow-md rounded-xl">
      <Bar data={data} options={options} />
    </div>
  );
};

export default ChartComponent;
