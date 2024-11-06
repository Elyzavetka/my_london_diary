import { useContext, useState } from "react";
import styles from "./Modal.module.css";
import { AddressContext } from "../LocalTips/LocalTips";
import { useNavigate } from "react-router-dom";

const Modal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const address = useContext(AddressContext);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.target);

    await fetch("http://localhost:3001/localtip/new", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // name: formData.get("name"),
        geolocation: address,
        description: formData.get("description"),
      }),
    });
    setIsLoading(false);
    navigate("/");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={`${styles.formContainer} ${styles.tipsModalForm}`}>
        <button className={styles.closeButton} onClick={onClose}>
          X
        </button>
        <form className={styles.formContent} onSubmit={handleSubmit}>
          <p>📍{address}</p>
          <textarea className={styles.formTextArea} name="description" />
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
