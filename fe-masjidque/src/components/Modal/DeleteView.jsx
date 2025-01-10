
/* eslint-disable react/prop-types */
import Modal from "./Modal";

function DeleteView({ open, onClose, activityName, onSubmit }) {
  return (
    <Modal open={open} onClose={onClose} title="Hapus Data" onSubmit={onSubmit}>
      <div className="space-y-4">
        <p>
          Apakah Anda yakin ingin menghapus data{" "}
          <strong>{activityName || "ini"}</strong>?
        </p>
      </div>
    </Modal>
  );
}

export default DeleteView;
