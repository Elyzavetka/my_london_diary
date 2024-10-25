import React from "react";
import "./PhotoPost.css";

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
    <div className="post" onMouseEnter={onHover}>
      <div className="image-container">
        {img.endsWith("jpg") ? (
          <img className="image" src={img} alt="" />
        ) : (
          <video className="video" controls width="100%" title={title}>
            <source src={img} />
          </video>
        )}
        <div className="text-overlay">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoPost;
