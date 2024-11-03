import React from "react";
const Modal = ({ isOpen, onClose, address }) => {
  if (!isOpen) return null;

  return (
    <div className="tips-modal">
      <div className="tips-modal-form">
        <button onClick={onClose}>X</button>
        <form>
          <p>📍{address}</p>
          <textarea />
          <button type="submit">submit</button>
          <div>
            <input type="file" id="img" name="img" accept="image/*" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
