/* eslint-disable react/prop-types */
import Modal from "./Modal";

function DetailView({ open, onClose, fields, data }) {
  return (
    <Modal open={open} onClose={onClose} title="Detail Data">
      <div className="space-y-4">
        {fields.map((field, index) => (
          <div key={index} className="flex justify-between">
            <span className="font-bold">{field.charAt(0).toUpperCase() + field.slice(1)}:</span>
            <span>{data ? data[field] : "-"}</span>
          </div>
        ))}
      </div>
    </Modal>
  );
}

export default DetailView;
