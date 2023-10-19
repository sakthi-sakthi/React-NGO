import React from 'react'

function Mission() {
    return (
        <>
            <section className="container-fluid mission-vision">
                <div className="container">
                    <div className="row mission">
                        <div className="col-md-6 mv-det">
                            <div style={{ color: "#000" }}>
                                <h1>Our Mission</h1>
                                <p>
                                    <i className="fa fa-arrow-right" />
                                    &nbsp;&nbsp;Who loves or pursues or desires to obtain pain of itself, because it
                                    is pain, because occasionally circumstances occur which toil and
                                    pain can procure him some great pleasure.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 mv-img">
                            <img src="assets/images/misin.jpg" alt="" />
                        </div>
                    </div>
                    <div className="row vision">
                        <div className="col-md-6 mv-img">
                            <img src="assets/images/vision.jpg" alt="" />
                        </div>
                        <div className="col-md-6 mv-det">
                            <div style={{ color: "#000" }}>
                                <h1>Our Vision</h1>
                                <p>
                                    <i className="fa fa-arrow-right" />
                                    &nbsp;&nbsp;Idea of denouncing pleasure and praising pain was born and I will
                                    give you a complete account of the system, and expound the actually
                                    teachings of the great explorer of the truth.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Mission
