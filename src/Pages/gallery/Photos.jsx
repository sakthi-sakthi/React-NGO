import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ApiUrl from '../../Components/API/Api';

function Photos() {
    const [galleryData, setGalleryData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [autoPlay, setAutoPlay] = useState(false);

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

    const openModal = (index) => {
        setCurrentIndex(index);
        const modal = document.getElementById('imageModal');
        const modalInstance = new window.bootstrap.Modal(modal);
        modalInstance.show();
    };

    // Function to go to the next image
    const nextImage = () => {
        setCurrentIndex((currentIndex + 1) % galleryData.length);
    };

    // Function to go to the previous image
    const prevImage = () => {
        setCurrentIndex((currentIndex - 1 + galleryData.length) % galleryData.length);
    };

    // Function to toggle autoplay
    const toggleAutoPlay = () => {
        setAutoPlay(!autoPlay);
    };

    useEffect(() => {
        let autoPlayInterval;

        if (autoPlay) {
            autoPlayInterval = setInterval(nextImage, 3000);
        } else {
            clearInterval(autoPlayInterval);
        }

        return () => {
            clearInterval(autoPlayInterval);
        };
    }, );

    return (
        <>
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
                                    onClick={() => openModal(index)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="modal fade" id="imageModal" tabIndex="-1" aria-labelledby="imageModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                            <img
                                src={galleryData[currentIndex]?.image}
                                className="img-responsive"
                                alt=""
                            />
                        </div>
                        <div className="modal-footer">
                            <button onClick={prevImage} className="btn btn-primary">Prev</button>
                            <button onClick={nextImage} className="btn btn-primary">Next</button>
                            <button data-bs-dismiss="modal" onClick={toggleAutoPlay} className="btn btn-primary">
                                {autoPlay ? <i className="fa fa-pause"></i> : <i className="fa fa-play"></i>}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Photos;
