import Sidebar from './Sidebar';
import WeeklyReports from './WeeklyReports';
import CalendarComponent from './CalendarCompo';
import ChartComponent from './Chart';

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-8">
        <h1 className="mb-6 text-2xl font-semibold text-gray-800">Good Morning, Dr. Smith</h1>
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2">
            <WeeklyReports />
          </div>
          <CalendarComponent />
        </div>
        <div className="mt-6">
          <ChartComponent />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
