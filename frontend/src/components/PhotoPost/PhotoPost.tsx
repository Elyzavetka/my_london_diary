import React from "react";
import styles from "./PhotoPost.module.css";

type PhotoPostProps = {
  id: string;
  title: string;
  description: string;
  img: string;
  onHover: () => void;
};

const PhotoPost = ({
  id,
  title,
  description,
  img,
  onHover,
}: PhotoPostProps) => {
  return (
    <div className={styles.post} onMouseEnter={onHover}>
      <div className={styles.imageContainer}>
        {img.endsWith("jpg") ? (
          <img className={styles.image} src={img} alt="" />
        ) : (
          <video className={styles.video} controls width="100%" title={title}>
            <source src={img} />
          </video>
        )}
        <div className={styles.textOverlay}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoPost;
