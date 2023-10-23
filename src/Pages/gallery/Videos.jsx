import React, { useState, useEffect } from 'react';
import axios from 'axios';
import YouTube from 'react-youtube';
import { Button, Container, Row, Col, Spinner } from 'react-bootstrap';

const API_KEY = "AIzaSyAxy_q6XJh4H-5Y2jPoEFkoXW1ROwVvFRg";
const CHANNEL_ID = "UCYSoiPWzqYRePZXW_Eu-4Og";

function Videos() {
    const [videos, setVideos] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const videosPerPage = 4;
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchVideos() {
            try {
                const response = await axios.get(
                    `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=10`
                );

                setVideos(response.data.items);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching videos:', error);
            }
        }

        fetchVideos();
    }, []);

    const playSelectedVideo = () => {
        if (selectedVideo) {
            selectedVideo.playVideo();
        }
    };

    const selectVideo = (video) => {
        setSelectedVideo(video);
    };
    const lastIndex = currentPage * videosPerPage;
    const firstIndex = lastIndex - videosPerPage;
    const currentVideos = videos.slice(firstIndex, lastIndex);
    const totalPages = Math.ceil(videos.length / videosPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
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
            <br />
            <Container>
                {isLoading ? ( 
                    <div className="text-center">
                        <Spinner animation="border" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                    </div>
                ) : videos.length === 0 ? (
                    <div className="text-center">
                        <h5 style={{ color: "black", fontWeight: "bold" }}>No videos found</h5>
                    </div>
                ) : (
                    <Row>
                        {currentVideos.map((video, index) => (
                            <Col key={video.id.videoId} lg={3} md={3} sm={6} xs={12}>
                                <div
                                    className="gallery_product"
                                    onClick={() => selectVideo(video)}
                                >
                                    <YouTube
                                        videoId={video.id.videoId}
                                        opts={{ width: '100%' }}
                                    />
                                </div>
                            </Col>
                        ))}
                    </Row>
                )}
            </Container>
            <div className="pagination-container">
                <div className="text-center">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <Button
                            key={index}
                            variant={currentPage === index + 1 ? 'primary' : 'secondary'}
                            onClick={() => {
                                handlePageChange(index + 1);
                                playSelectedVideo();
                            }}
                            style={{ margin: '5px' }}
                        >
                            {index + 1}
                        </Button>
                    ))}

                </div>
            </div>
        </>
    );
}

export default Videos;
