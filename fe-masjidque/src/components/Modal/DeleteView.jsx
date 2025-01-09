/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import Modal from "./Modal";

function DeleteView({ open, onClose, onSubmit, activity }) {
  return (
    <Modal open={open} onClose={onClose} title="Hapus Kegiatan" onSubmit={onSubmit}>
      <p>
        Apakah Anda yakin ingin menghapus kegiatan "{activity?.namaKegiatan}"?
      </p>
    </Modal>
  );
}

export default DeleteView;