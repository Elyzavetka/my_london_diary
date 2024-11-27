import React from "react";
import { useContext, useState } from "react";
import styles from "./Modal.module.css";
import { AddressContext } from "../LocalTips/LocalTips";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNewRecommendation: () => Promise<void>;
  address: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onNewRecommendation,
}) => {
  const navigate = useNavigate();
  const address = useContext(AddressContext);
  const [isLoading, setIsLoading] = useState(false);
  const [tip, setTip] = useState("");
  const { username } = useAuth();

  if (typeof onNewRecommendation !== "function") {
    console.error("onNewRecommendation is not a function");
    return null;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.target as HTMLFormElement);

    await fetch("http://localhost:3001/localtip/new", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: username,
        geolocation: address,
        description: formData.get("description"),
      }),
    });
    setIsLoading(false);

    await onNewRecommendation();
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
