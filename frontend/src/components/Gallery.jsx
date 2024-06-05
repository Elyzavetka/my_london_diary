import { useState, useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import PhotoPost from "./PhotoPost";
import "./Gallery.css";

const Gallery = () => {
  const [entries, setEntries] = useState([]);
  const [isSelected, setIsSelected] = useState(false);

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
    <div className="gallery-wrapper">
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 950: 3, 1000: 4 }}
      >
        <Masonry gutter="28px">
          {!entries.length ? (
            <h1>Loading</h1>
          ) : (
            entries.map(({ title, description, img }, index) => {
              return (
                <PhotoPost
                  onHover={handlePost}
                  key={index}
                  title={title}
                  description={description}
                  img={img}
                />
              );
            })
          )}
        </Masonry>
      </ResponsiveMasonry>
      <h1>Posts</h1>
      <hr />
    </div>
  );
};

export default Gallery;
