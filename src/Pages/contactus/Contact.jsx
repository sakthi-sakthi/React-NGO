import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Form } from 'react-bootstrap';
import Axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Row, Col } from 'react-bootstrap';
import ApiUrl from '../../Components/API/Api';

function Contact() {
    const initialFormData = {
        name: '',
        email: '',
        mobile: '',
        message: '',
    };

    const [formData, setFormData] = useState(initialFormData);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, mobile, message } = formData;

        if (!name) {
            toast.error('Name is required');
        } else if (name.length < 3) {
            toast.error('Name should contain at least 3 letters');
        } else if (/[^A-Za-z\s]/.test(name)) {
            toast.error('Name should only contain letters');
        } else if (!mobile) {
            toast.error('Mobile Number is required');
        } else if (!/^\d{10}$/.test(mobile)) {
            toast.error('Mobile Number must be 10 digits and contain only numbers');
        } else if (!email) {
            toast.error('Email is required');
        } else if (!/^[A-Za-z0-9]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(email)) {
            toast.error('Email is not valid');
        } else if (!message) {
            toast.error('Message is required');
        } else {
            setLoading(true);


            const dataToSend = {
                name,
                email,
                mobile,
                message,
            };

            Axios.post(`${ApiUrl }/store/contact/`, dataToSend)
                .then((response) => {
                    console.log('Form submitted with data:', formData);
                    setFormData(initialFormData);
                    toast.success('Form submitted successfully');
                })
                .catch((error) => {
                    toast.error('Failed to submit the form: ' + error.message);
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    return (
        <>
            <div className="page-nav no-margin row">
                <div className="container">
                    <div className="row">
                        <h2>Contact Us</h2>
                        <ul>
                            <li>
                                {" "}
                                <a href="/">
                                    <i className="fas fa-home" /> Home
                                </a>
                            </li>
                            <li>
                                <i className="fas fa-angle-double-right" /> Contact Us
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div style={{ marginTop: 0 }} className="row no-margin">
                <iframe
                    style={{ width: "100%" }}
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d249759.19784092825!2d79.10145254589841!3d12.009924873581818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1448883859107"
                    height={450}
                    allowFullScreen=""
                    title="boscosoft"
                />
            </div>
            <div className="row contact-rooo no-margin">
                <div className="container">
                    <div className="row">
                        <div style={{ padding: 20 }} className="col-sm-7">
                            <h2>Contact Form</h2> <br />
                            <Form onSubmit={handleSubmit} style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)', padding: "17px 23px 17px 23px" }}>
                                <Row>
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>Name <span style={{ color: "red" }}>*</span></Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter Name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                autoComplete="off"
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>Mobile <span style={{ color: "red" }}>*</span></Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="mobile"
                                                placeholder="Enter Mobile Number"
                                                value={formData.mobile}
                                                onChange={handleChange}
                                                autoComplete="off"
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Form.Group>
                                    <Form.Label>Email <span style={{ color: "red" }}>*</span></Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="email"
                                        placeholder="Enter Email Address"
                                        value={formData.email}
                                        onChange={handleChange}
                                        autoComplete="off"
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Message <span style={{ color: "red" }}>*</span></Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={5}
                                        placeholder="Enter Your Message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        autoComplete="off"
                                    />
                                </Form.Group>
                                <button type="submit" className="btn btn-primary" disabled={loading}>
                                    {loading ? (
                                        <>
                                            <span className="loader">
                                                <FontAwesomeIcon icon={faSpinner} spin />
                                            </span>
                                            &nbsp;Submitting...
                                        </>
                                    ) : (
                                        'Send Message'
                                    )}
                                </button>
                            </Form>

                        </div>
                        <ToastContainer position="top-right" autoClose={3000} />
                        <div className="col-sm-5">
                            <div style={{ margin: 50 }} className="serv">
                                <h2 style={{ marginTop: 10 }}>Address</h2>
                                Antonya Street, <br />
                                23/H-2, Building
                                <br />
                                TA, AUS District
                                <br />
                                Phone:+91 9159669599
                                <br />
                                Email:support@smarteyeapps.com
                                <br />
                                Website:www.smarteyeapps.com.com
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Contact
