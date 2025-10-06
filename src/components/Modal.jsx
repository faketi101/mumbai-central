import React from "react";
import { X } from "lucide-react";
import "./Modal.css";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className={`modal-overlay ${isOpen ? "open" : ""}`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>
          <X size={24} />
        </button>
        {children}
      </div>
    </div>
  );
};
// testing
export default Modal;
