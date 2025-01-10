/* eslint-disable react/prop-types */
import Modal from "./Modal";

function DeleteView({ open, onClose, activityName, onSubmit }) {
  return (
    <Modal open={open} onClose={onClose} title="Hapus Data">
      <div className="space-y-4">
        <p>
          Apakah Anda yakin ingin menghapus data{" "}
          <strong>{activityName || "ini"}</strong>?
        </p>
        {/* Footer */}
        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm text-gray-700 bg-gray-200 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={onSubmit}
            className="px-4 py-2 text-sm text-white bg-red-600 rounded hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default DeleteView;
