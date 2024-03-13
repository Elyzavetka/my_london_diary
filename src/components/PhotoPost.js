import React from 'react';
// import './PhotoPost.css'

const PhotoPost = ({ id, title, userId, body }) => {
    const images = importAll(require.context('../img', false, /\.(png|jpg|svg)$/));
    return (
        <div className='post'>
            <small>{id}</small>
            {images.map((image, index) => (
                <img key={index} src={image} alt={`Фото ${index + 1}`} />
            ))}
            <h2>{title}</h2>
            <p>{body}</p>
            <h3>User ID: {userId}</h3>
        </div>
    )
}

function importAll(r) {
    return r.keys().map(r);
}
export default PhotoPost;

// const PhotoPost = ({ photo, text, comments }) => {
//     return (
//         <div className="photo-post">
//             <img src={photo} alt="Post" />
//             <p>{text}</p>
//             <div className="comments">
//             <h3>Comments</h3>
//             <ul>
//                 {comments.map((comment, index) => (
//                 <li key={index}>{comment}</li>
//                 ))}
//             </ul>
//             </div>
//         </div>
//     );
// };

// export default PhotoPost;