import { useState, useEffect } from 'react';
import PhotoPost from "./PhotoPost";

const Gallery = () => {

    const [texts, setTexts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isSelected, setIsSelected] = useState(false);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((texts) => {
            setTexts(texts)
        })
        .catch((error) => console.log(error.message))
        .finally(() => setIsLoading(false))
    } ,[])

    const images = importAll(require.context('../img', false, /\.(png|jpg|svg)$/));
    console.log(images)

    const handlePost = () => {
        setIsSelected(true);
    }
    return (
        // <div>
        //     {images.map((image, index) => (
        //         <>
        //             {isLoading ? <h1>Loading</h1> : texts.map((text) => 
        //             <PhotoPost key={index}   {...text} img={image} />)}
        //         </>
        //     ))}
        //     <h1>Posts</h1>
        //     <hr />
        // </div>
        <div >
        {isLoading ? <h1>Loading</h1> : images.map((image, index) => (
            <>
                <div className="gallery">
                    {/* <img className="images" src={image}  alt=""  /> */}
                </div>
                <PhotoPost className="gallery" onHover={handlePost} key={index} {...texts[index]} img={image} />
            </>
        ))}
        <h1>Posts</h1>
        <hr />
    </div>
    )
    function importAll(r) {
        return r.keys().map(r);
    }
}

export default Gallery;