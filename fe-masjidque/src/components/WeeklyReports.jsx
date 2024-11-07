
const WeeklyReports = () => {
  const reports = [
    { title: 'Total Patients', value: 580 },
    { title: 'Patient Care', value: 356 },
    { title: 'Appointments', value: 288 },
    { title: 'Canceled', value: 5 },
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {reports.map((report, index) => (
        <div
          key={index}
          className="p-6 transition-shadow duration-200 bg-white shadow-md rounded-xl hover:shadow-lg"
        >
          <h3 className="mb-2 text-lg font-bold text-gray-700">{report.title}</h3>
          <p className="text-2xl font-semibold text-purple-600">{report.value}</p>
        </div>
      ))}
    </div>
  );
};

export default WeeklyReports;
