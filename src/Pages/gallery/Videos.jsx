import React, { useState, useEffect } from 'react';
import axios from 'axios';
import YouTube from 'react-youtube';

const API_KEY = "AIzaSyDwqscN9EWeXR4IztZgPMNwLOPEKFCGmTg";
const CHANNEL_ID = "";

function Videos() {
    const [videos, setVideos] = useState([]);
    const [setSelectedVideo] = useState(null);

    useEffect(() => {
        async function fetchVideos() {
            try {
                const response = await axios.get(
                    `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=10`
                );

                setVideos(response.data.items);
            } catch (error) {
                console.error('Error fetching videos:', error);
            }
        }

        fetchVideos();
    }, []);

    const selectVideo = (video) => {
        setSelectedVideo(video);
    };

    return (
        <>
            <div className="page-nav no-margin row">
                <div className="container">
                    <div className="row">
                        <h2>Video Gallery</h2>
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
                        {videos.map((video) => (
                            <div
                                key={video.id.videoId}
                                className="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 filter"
                                onClick={() => selectVideo(video)}
                            >
                                <YouTube
                                    videoId={video.id.videoId}
                                    opts={{ width: '100%' }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>

    );
}

export default Videos;
