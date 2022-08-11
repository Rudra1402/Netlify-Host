import React, { useState, useEffect } from 'react'

function Gallery() {
    const [imgObj, setImgObj] = useState([]);
    const getImages = (query) => {
        const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=aiGK1ceKRKqZdBX78mXUkBFIFkHIrJkZ3sjPHcu4xfo`;
        fetch(url).then(res => res.json()).then(res => {
            setImgObj(res.results.splice(0,8));
        });
    }
    useEffect(() => {
        getImages('football');
    }, []);

    return (
        <div className='containGallery'>
            <div className='containGrid'>
                {imgObj.map((imgSrc, index) => {
                    return (
                        <div key={index}>
                            <div className='img'>
                                <img src={imgSrc.urls.raw} /> <div className='btns'>
                                    <a href={imgSrc.urls.raw} target='_blank'><button>View</button></a>
                                    <a href={imgSrc.urls.raw} download><button>Download</button></a>
                                </div></div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Gallery