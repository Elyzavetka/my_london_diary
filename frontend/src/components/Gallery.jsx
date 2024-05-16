import { useState, useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import PhotoPost from "./PhotoPost";
import "./Gallery.css";

const Gallery = () => {
  const [texts, setTexts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((texts) => {
        setTexts(texts);
      })
      .catch((error) => console.log(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  const images = importAll(
    require.context("../img", false, /\.(png|jpg|svg|MOV)$/)
  );
  console.log(images);

  const handlePost = () => {
    setIsSelected(true);
  };
  return (
    <div className="gallery-wrapper">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 950: 3, 1000: 4 }}>
          <Masonry gutter="28px">
            {isLoading ? (
              <h1>Loading</h1>
            ) : (
              images.map((image, index) => (
                <PhotoPost
                  onHover={handlePost}
                  key={index}
                  {...texts[index]}
                  img={image}
                />
              ))
            )}
          </Masonry>
        </ResponsiveMasonry>
        <h1>Posts</h1>
        <hr />
    </div>
  );
  function importAll(r) {
    return r.keys().map(r);
  }
};

export default Gallery;
