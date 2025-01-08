import { useState } from "react";
import Sidebar from "../../../components/Sidebar";
import AddView from "../../../components/Modal/AddView";
import EditView from "../../../components/Modal/EditView";
import DeleteView from "../../../components/Modal/DeleteView";

function ActivityManagement() {
  const [open, setOpen] = useState({ add: false, edit: false, delete: false });
  const [activities, setActivities] = useState([
    {
      id: 1,
      tanggal: "20/10/2024",
      namaKegiatan: "Pengajian",
      foto: "Img1",
      deskripsi: "Kegiatan 1",
      lokal: "Masjid Al Huda",
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
              <th className="p-4">Tanggal</th>
              <th className="p-4">Nama Kegiatan</th>
              <th className="p-4">Foto</th>
              <th className="p-4">Deskripsi</th>
              <th className="p-4">Lokal</th>
              <th className="p-4 rounded-tr-lg">Action</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity) => (
              <tr key={activity.id} className="border-b">
                <td className="p-4">{activity.id}</td>
                <td className="p-4">{activity.tanggal}</td>
                <td className="p-4">{activity.namaKegiatan}</td>
                <td className="p-4">{activity.foto}</td>
                <td className="p-4">{activity.deskripsi}</td>
                <td className="p-4">{activity.lokal}</td>
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
        />
        <EditView
          open={open.edit}
          onClose={() => setOpen({ ...open, edit: false })}
          onSubmit={handleEdit}
          activity={currentActivity}
        />
        <DeleteView
          open={open.delete}
          onClose={() => setOpen({ ...open, delete: false })}
          onSubmit={() => handleDelete(currentActivity.id)}
          activity={currentActivity}
        />
      </div>
    </div>
  );
}

export default ActivityManagement;
