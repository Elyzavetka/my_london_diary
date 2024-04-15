// import React from 'react';

// const GridImages = () => {
//     const images = importAll(require.context('../img', false, /\.(png|jpg|svg)$/));
//     return (
//         <div className="grid-container">
//             {isLoading ? <h1>Loading</h1> : images.map((image, index) => (
//             <>
//                 <div className="gallery">
//                     {/* <img className="images" src={image}  alt=""  /> */}
//                 </div>
//                 <PhotoPost className="gallery" onHover={handlePost} key={index} {...texts[index]} img={image} />
//             </>
//         ))}
//         </div>
//     )

//     function importAll(r) {
//         return r.keys().map(r);
//     }
// }