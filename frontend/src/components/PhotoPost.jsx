import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import React from 'react';
import './PhotoPost.css';

const PhotoPost = ({ id, title, body, img }) => {
    // Using Node.js function require.context
    // to dynamically import images from the '../img' directory
    // const images = importAll(require.context('../img', false, /\.(png|jpg|svg)$/));
    return (
        <div className='post'>
                    <div className="image-container">
                        {(img.endsWith('jpg')) ? 
                            <img className="image" src={img}  alt=""  />
                            : 
                            <video className="video" controls="controls" width="100%" name="Video Name">
                                <source src={img}/>
                            </video>
                    

                        }
                            <div className="text-overlay">
                                <h2>{title}</h2>
                                <p>{body}</p>
                        </div>
                </div>
        </div>
    )
}

function importAll(r) {
    return r.keys().map(r);
}
export default PhotoPost;