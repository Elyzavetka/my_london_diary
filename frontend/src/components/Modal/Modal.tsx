import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ isOpen, onClose, address }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={`${styles.formContainer} ${styles.tipsModalForm}`}>
        <button className={styles.closeButton} onClick={onClose}>
          X
        </button>
        <form className={styles.formContent}>
          <p>📍{address}</p>
          <textarea className={styles.formTextArea} />
          <div className={styles.formField}>
            <input
              type="file"
              id="img"
              name="img"
              accept="image/*"
              className={styles.fileUpload}
            />
          </div>
          <button type="submit" className={styles.formButton}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
