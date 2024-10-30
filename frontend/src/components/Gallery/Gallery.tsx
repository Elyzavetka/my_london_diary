import React, { useState, useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import PhotoPost from "../PhotoPost/PhotoPost";
import styles from "./Gallery.module.css";

interface Entry {
  id: string;
  title: string;
  description: string;
  img: string;
}

const Gallery = () => {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [isSelected, setIsSelected] = useState<boolean>(false);

  useEffect(() => {
    fetch("http://localhost:3001/diary-entries").then((response) =>
      response.json().then((entries) => {
        setEntries(entries);
      })
    );
  }, []);

  const handlePost = () => {
    setIsSelected(true);
  };
  return (
    <div className={styles.galleryWrapper}>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 1, 950: 2, 1000: 3 }}
      >
        <Masonry gutter="28px">
          {!entries.length ? (
            <h1>Loading</h1>
          ) : (
            entries.map(({ id, title, description, img }, index) => {
              return (
                img && (
                  <PhotoPost
                    onHover={handlePost}
                    key={index}
                    id={id}
                    title={title}
                    description={description}
                    img={img}
                  />
                )
              );
            })
          )}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default Gallery;
