import { useState } from "react";
import Sidebar from "../../../components/Sidebar";
import AddView from "../../../components/Modal/AddView";
import EditView from "../../../components/Modal/EditView";
import DeleteView from "../../../components/Modal/DeleteView";
import DetailView from "../../../components/Modal/DetailView";

function PemasukanManagement() {
  const fields = ["sumber", "nominal", "tanggal"]; // Ambil dari header tabel

  const [open, setOpen] = useState({ add: false, edit: false, delete: false, view: false });
  const [activities, setActivities] = useState([
    {
      id: 1,
      sumber: "Hamba Allah",
      nominal: "Rp. 100.000.000,00",
      tanggal: "20/10/24",
    },
  ]);
  const [currentActivity, setCurrentActivity] = useState(null);

  const handleAdd = (newActivity) => {
    setActivities([
      ...activities,
      { ...newActivity, id: activities.length + 1 },
    ]);
    setOpen({ ...open, add: false });
  };

  const handleEdit = (updatedActivity) => {
    setActivities(
      activities.map((activity) =>
        activity.id === updatedActivity.id ? updatedActivity : activity
      )
    );
    setOpen({ ...open, edit: false });
  };

  const handleDelete = (id) => {
    setActivities(activities.filter((activity) => activity.id !== id));
    setOpen({ ...open, delete: false });
  };

  return (
    <div className="flex h-screen bg-white plus-jakarta-sans-bold">
      <Sidebar />
      <div className="relative flex-1 p-6">
        <h1 className="text-2xl font-bold">Kegiatan</h1>

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
                    {activity[field]}
                  </td>
                ))}
                <td className="flex p-4 space-x-2">
                  <button
                    className="px-2 py-1 text-white bg-blue-500 rounded hover:bg-blue-600"
                    onClick={() => {
                      setCurrentActivity(activity);
                      setOpen({ ...open, edit: true });
                    }}
                  >
                    Edit
                  </button>

                  <button
                    className="px-2 py-1 text-white bg-red-500 rounded hover:bg-red-600"
                    onClick={() => {
                      setCurrentActivity(activity);
                      setOpen({ ...open, delete: true });
                    }}
                  >
                    Delete
                  </button>
                  <button
                    className="px-2 py-1 text-white bg-green-500 rounded hover:bg-green-600"
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

        <button
          className="fixed p-4 text-white bg-green-600 rounded-full shadow-lg bottom-6 right-6 hover:bg-green-700"
          onClick={() => setOpen({ ...open, add: true })}
        >
          +
        </button>

        <AddView
          open={open.add}
          onClose={() => setOpen({ ...open, add: false })}
          onSubmit={handleAdd}
          fields={fields}
        />
        <EditView
          open={open.edit}
          onClose={() => setOpen({ ...open, edit: false })}
          onSubmit={handleEdit}
          fields={fields}
          activity={currentActivity}
        />
        <DeleteView
          open={open.delete}
          onClose={() => setOpen({ ...open, delete: false })}
          onSubmit={() => handleDelete(currentActivity.id)}
          activity={currentActivity}
        />
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

export default PemasukanManagement;
