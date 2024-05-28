import { useState, useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import PhotoPost from "./PhotoPost";
import "./Gallery.css";

const Gallery = () => {
  const [entries, setEntries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/diary-entries").then((response) =>
      response.json().then((entries) => {
        setEntries(entries);
      })
    );
  }, []);

  // useEffect(() => {

  // fetch("https://jsonplaceholder.typicode.com/posts")
  //   .then((response) => response.json())
  //   .then((entries) => {
  //     setEntries(entries);
  //   })
  //   .catch((error) => console.log(error.message))
  //   .finally(() => setIsLoading(false));
  // }, []);

  // const images = importAll(
  //   require.context("../img", false, /\.(png|jpg|svg|MOV)$/)
  // );
  // console.log(images);

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
            // images.map((image, index) => (
            //   <PhotoPost
            //     onHover={handlePost}
            //     key={index}
            //     {...entries[index]}
            //     img={image}
            //   />
            // ))
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
