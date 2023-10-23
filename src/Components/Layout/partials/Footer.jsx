import React from 'react'

function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-12">
                            <h2>About Us</h2>
                            <p>
                                <i className="fa fa-arrow-right" />
                                &nbsp;&nbsp;Smart Eye is a leading provider of information technology, consulting,
                                and business process services. Our dedicated employees offer strategic
                                insights, technological expertise and industry experience.
                            </p>
                            <br />
                            <p>
                                <i className="fa fa-arrow-right" />
                                &nbsp;&nbsp;We focus on technologies that promise to reduce costs, streamline
                                processes and speed time-to-market, Backed by our strong quality
                                processes and rich experience managing global...
                            </p>
                        </div>
                        <div className="col-md-3 col-sm-12">
                            <h2>Useful Links</h2>
                            <ul className="list-unstyled link-list">
                                <li>
                                    <a ui-sref="about" href="#/about">
                                        About us
                                    </a>
                                    <i className="fa fa-angle-right" />
                                </li>
                                <li>
                                    <a ui-sref="portfolio" href="#/portfolio">
                                        Gallery
                                    </a>
                                    <i className="fa fa-angle-right" />
                                </li>
                                <li>
                                    <a ui-sref="products" href="#/products">
                                        Our Team
                                    </a>
                                    <i className="fa fa-angle-right" />
                                </li>
                                <li>
                                    <a ui-sref="gallery" href="#/gallery">
                                        On Going Project
                                    </a>
                                    <i className="fa fa-angle-right" />
                                </li>
                                <li>
                                    <a ui-sref="contact" href="#/contact">
                                        Contact us
                                    </a>
                                    <i className="fa fa-angle-right" />
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-12 map-img">
                            <h2>Contact Us</h2>
                            <address className="md-margin-bottom-40">
                                Boscosoft Technologies, <br />
                                Yelagiri, <br />
                                Tamil Nadu, IND <br />
                                Phone: +91 9159669599 <br />
                                Email:
                                <a href="mailto:boscosoft@gmail.com" className="">
                                    &nbsp;boscosoft@gmail.com
                                </a>
                                <br />
                                Web:
                                <a href="https://boscosofttech.com/" className="" target="_blank" rel="noreferrer">
                                    &nbsp;www.boscosofttech.com
                                </a>
                            </address>
                        </div>
                        <div className="col-md-3 col-sm-12">
                            <h2>Our Location</h2>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1946.9706832907643!2d78.632737!3d12.586116!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3badaaea950786f3%3A0x5f3b489cca9a30a2!2sBosco%20Soft%20Technologies%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1697647544028!5m2!1sen!2sin"
                                width={250}
                                height={150}
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="boscosoft"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer
