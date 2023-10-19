import React from 'react'

function Testimonial() {
    return (
        <>
            <section style={{ color: "#000", backgroundColor: "#f3f2f2" }}>
                <div className="container py-5">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-10 col-xl-8 text-center">
                            <h2 className="fw-bold mb-4">Testimonials</h2>
                            <p className="mb-4 pb-2 mb-md-5 pb-md-0">
                                Best Words from Our Customers
                            </p>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col-md-4 mb-4 mb-md-0">
                            <div className="card">
                                <div className="card-body py-4 mt-2">
                                    <div className="d-flex justify-content-center mb-4">
                                        <img
                                            src="http://localhost/ngohtml/assets/images/team/team-memb1.jpg"
                                            className="rounded-circle shadow-1-strong"
                                            width={100}
                                            height={100}
                                            alt={"Noimage"}
                                        />
                                    </div>
                                    <h5 className="font-weight-bold">Teresa May</h5>
                                    <h6 className="font-weight-bold my-3">Founder at ET Company</h6>
                                    <ul className="list-unstyled d-flex justify-content-center">
                                        <li>
                                            <i className="fas fa-star fa-sm text-info" />
                                        </li>
                                        <li>
                                            <i className="fas fa-star fa-sm text-info" />
                                        </li>
                                        <li>
                                            <i className="fas fa-star fa-sm text-info" />
                                        </li>
                                        <li>
                                            <i className="fas fa-star fa-sm text-info" />
                                        </li>
                                        <li>
                                            <i className="fas fa-star-half-alt fa-sm text-info" />
                                        </li>
                                    </ul>
                                    <p className="mb-2">
                                        <i className="fas fa-quote-left pe-2" /> Throughout my entire
                                        experience, the Boscosoft team was incredibly helpful and
                                        responsive. They answered all my questions promptly .
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4 mb-md-0">
                            <div className="card">
                                <div className="card-body py-4 mt-2">
                                    <div className="d-flex justify-content-center mb-4">
                                        <img
                                            src="http://localhost/ngohtml/assets/images/team/team-memb2.jpg"
                                            className="rounded-circle shadow-1-strong"
                                            width={100}
                                            height={100}
                                            alt={"Noimage"}
                                        />
                                    </div>
                                    <h5 className="font-weight-bold">Maggie McLoan</h5>
                                    <h6 className="font-weight-bold my-3">Photographer at Studio LA</h6>
                                    <ul className="list-unstyled d-flex justify-content-center">
                                        <li>
                                            <i className="fas fa-star fa-sm text-info" />
                                        </li>
                                        <li>
                                            <i className="fas fa-star fa-sm text-info" />
                                        </li>
                                        <li>
                                            <i className="fas fa-star fa-sm text-info" />
                                        </li>
                                        <li>
                                            <i className="fas fa-star fa-sm text-info" />
                                        </li>
                                        <li>
                                            <i className="fas fa-star fa-sm text-info" />
                                        </li>
                                    </ul>
                                    <p className="mb-2">
                                        <i className="fas fa-quote-left pe-2" /> The software I purchased
                                        from Boscosoft is nothing short of amazing. It's clear that
                                        Boscosoft takes pride in their craftsmanship. The attention to
                                        detail and the quality.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-0">
                            <div className="card">
                                <div className="card-body py-4 mt-2">
                                    <div className="d-flex justify-content-center mb-4">
                                        <img
                                            src="http://localhost/ngohtml/assets/images/team/team-memb3.jpg"
                                            className="rounded-circle shadow-1-strong"
                                            width={100}
                                            height={100}
                                            alt={"Noimage"}
                                        />
                                    </div>
                                    <h5 className="font-weight-bold">Alexa Horwitz</h5>
                                    <h6 className="font-weight-bold my-3">Front-end Developer in NY</h6>
                                    <ul className="list-unstyled d-flex justify-content-center">
                                        <li>
                                            <i className="fas fa-star fa-sm text-info" />
                                        </li>
                                        <li>
                                            <i className="fas fa-star fa-sm text-info" />
                                        </li>
                                        <li>
                                            <i className="fas fa-star fa-sm text-info" />
                                        </li>
                                        <li>
                                            <i className="fas fa-star fa-sm text-info" />
                                        </li>
                                        <li>
                                            <i className="far fa-star fa-sm text-info" />
                                        </li>
                                    </ul>
                                    <p className="mb-2">
                                        <i className="fas fa-quote-left pe-2" /> I couldn't be happier
                                        with my experience with Boscosoft. I wholeheartedly recommend
                                        their products/services to anyone looking for software solutions
                                        of the highest quality.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Testimonial
