import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Slider() {
    const [slider, setSlider] = useState([]);
    useEffect(() => {
        const apiUrl = 'http://127.0.0.1:8000/api/get/slider';
        axios.get(apiUrl)
            .then(response => {
                setSlider(response?.data?.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                slidesPerView={1}
                navigation
                loop={true}
                pagination={{ clickable: true }}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
            > {slider?.map(item => (
                <SwiperSlide> <div className="item">
                    <div className="slider-img">
                        <img src={item?.image} className='slider-img-height' width="2000px" alt="" />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-offset-2 col-lg-8 col-md-offset-2 col-md-8 col-sm-12 col-xs-12">
                                <div className="slider-captions">
                                    <h1 className="slider-title">
                                        {item.title}
                                    </h1>
                                    <p className="slider-text hidden-xs">{item.content}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> </SwiperSlide>
            ))}
            </Swiper>
        </>
    )
}

export default Slider
