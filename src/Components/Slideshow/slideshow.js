import React from 'react';
import ImageGallery from "react-image-gallery";
import picture1 from "./1.jpeg";
import picture2 from "./2.jpeg";
import picture3 from "./3.jpeg";

const Slideshow = () => {
    const images = [
        {
            original:  picture1,
            thumbnail: "https://picsum.photos/id/1018/250/150/",
        },
        {
            original:  picture2,
            thumbnail: "https://picsum.photos/id/1015/250/150/",
        },
        {
            original:  picture3,
            thumbnail: "https://picsum.photos/id/1019/250/150/",
        },
    ];

    return (
     <div className="mb-2" style={{width:"700px"}}>
         <ImageGallery showThumbnails={false}  items={images} />
     </div>
    )
};

export default Slideshow;
