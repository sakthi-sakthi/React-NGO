import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ApiUrl from '../../Components/API/Api';

function Photos() {
    const [galleryData, setGalleryData] = useState([]);

    useEffect(() => {
        const apiUrl = `${ApiUrl}/get/gallery_images`;
        axios.get(apiUrl)
            .then((response) => {
                setGalleryData(response?.data?.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <>
            <div className="page-nav no-margin row">
                <div className="container">
                    <div className="row">
                        <h2>Our Gallery</h2>
                        <ul>
                            <li>
                                {" "}
                                <a href="/">
                                    <i className="fas fa-home" /> Home
                                </a>
                            </li>
                            <li>
                                <i className="fas fa-angle-double-right" /> Gallery
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id="portfolio" className="gallery">
                <div className="container">
                    <div className="row">
                        {galleryData?.map((image, index) => (
                            <div key={index} className={`gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 filter ${image.category}`}>
                                <img
                                    src={image.image}
                                    className="img-responsive"
                                    alt=""
                                    style={{ height: '200px' }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Photos;
