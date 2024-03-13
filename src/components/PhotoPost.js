import React from 'react';
import './PhotoPost.css'

const PhotoPost = ({ id, title, userId, body, img }) => {
    // Using Node.js function require.context
    // to dynamically import images from the '../img' directory
    // const images = importAll(require.context('../img', false, /\.(png|jpg|svg)$/));
    return (
        <div className='post'>
            <small>{id}</small>
                <>
                    <img className="images" src={img}  alt=""  />
                    <h2>{title}</h2>
                    <p>{body}</p>
                    <h3>User ID: {userId}</h3>
                </>
        </div>
    )
}

function importAll(r) {
    return r.keys().map(r);
}
export default PhotoPost;