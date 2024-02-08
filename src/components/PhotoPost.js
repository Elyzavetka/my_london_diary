// import './Post.css'

const PhotoPost = ({ id, title, userId, body}) => {
    return (
        <div className='post'>
            <small>{id}</small>
            <h2>{title}</h2>
            <p>{body}</p>
            <h3>User ID: {userId}</h3>
        </div>
    )
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