import { useState } from "react";
import Sidebar from "../../../components/SuperSidebar";
import DetailView from "../../../components/Modal/DetailView";

function RegistrationManagement() {
  const fields = ["nama", "nomorHp", "email", "password"];

  const [open, setOpen] = useState({ add: false, view: false });
  const [activities, setActivities] = useState([
    {
      id: 1,
      nama: "Agus",
      password: "supersecret",
      nomorHp: "089982139512",
      email: "agus@gmail.com",
    },
  ]);
  const [currentActivity, setCurrentActivity] = useState(null);

  const handleApprove = (id) => {
    alert(`Activity with ID ${id} has been approved.`);
  };

  const handleReject = (id) => {
    setActivities(activities.filter((activity) => activity.id !== id));
    alert(`Activity with ID ${id} has been rejected.`);
  };

  return (
    <div className="flex h-screen bg-white plus-jakarta-sans-bold">
      <Sidebar />
      <div className="relative flex-1 p-6">
        <h1 className="text-2xl font-bold">Account</h1>

        <table className="min-w-full mt-4 bg-white rounded shadow">
          <thead>
            <tr className="text-left bg-gray-200">
              <th className="p-4 rounded-tl-lg">Id</th>
              {fields.map((field) => (
                <th key={field} className="p-4">
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </th>
              ))}
              <th className="p-4 rounded-tr-lg">Action</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity) => (
              <tr key={activity.id} className="border-b">
                <td className="p-4">{activity.id}</td>
                {fields.map((field) => (
                  <td key={field} className="p-4">
                    {field === "password" ? "***" : activity[field]}
                  </td>
                ))}
                <td className="flex p-4 space-x-2">
                  <button
                    className="px-2 py-1 text-white bg-green-500 rounded hover:bg-green-600"
                    onClick={() => handleApprove(activity.id)}
                  >
                    Setujui
                  </button>
                  <button
                    className="px-2 py-1 text-white bg-red-500 rounded hover:bg-red-600"
                    onClick={() => handleReject(activity.id)}
                  >
                    Tolak
                  </button>
                  <button
                    className="px-2 py-1 text-white bg-blue-500 rounded hover:bg-blue-600"
                    onClick={() => {
                      setCurrentActivity(activity);
                      setOpen({ ...open, view: true });
                    }}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <DetailView
          open={open.view}
          onClose={() => setOpen({ ...open, view: false })}
          fields={fields}
          data={currentActivity}
        />
      </div>
    </div>
  );
}

export default RegistrationManagement;
