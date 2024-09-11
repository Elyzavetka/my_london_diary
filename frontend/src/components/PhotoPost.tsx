import React from "react";
import "./PhotoPost.css";

type PhotoPostProps = {
  id: string;
  title: string;
  description: string;
  img: string;
};

const PhotoPost = ({ id, title, description, img }: PhotoPostProps) => {
  return (
    <div className="post">
      <div className="image-container">
        {img.endsWith("jpg") ? (
          <img className="image" src={img} alt="" />
        ) : (
          <video
            className="video"
            controls="controls"
            width="100%"
            name="Video Name"
          >
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
