import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
    const initialFormData = {
        name: '',
        email: '',
        mobile: '',
        message: '',
    };

    const [formData, setFormData] = useState(initialFormData);

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, mobile, message } = formData;

        if (!name) {
            toast.error('Name is required');
        } else if (/[^A-Za-z\s]/.test(name)) {
            toast.error('Name should only contain letters');
        } else if (!email) {
            toast.error('Email is required');
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            toast.error('Email is not valid');
        } else if (!mobile) {
            toast.error('Mobile Number is required');
        } else if (!/^\d{10}$/.test(mobile)) {
            toast.error('Mobile Number must be 10 digits and contain only numbers');
        } else if (!message) {
            toast.error('Message is required');
        } else {
            console.log('Form submitted with data:', formData);
            setFormData(initialFormData);
            toast.success('Form submitted successfully');
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
                            <form onSubmit={handleSubmit}>
                                {/* Name */}
                                <div className="row cont-row">
                                    <div className="col-sm-3">
                                        <label>Name <span style={{ color: "red" }}>*</span></label>
                                    </div>
                                    <div className="col-sm-8">
                                        <input
                                            type="text"
                                            placeholder="Enter Name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="form-control input-sm"
                                            autoComplete="off"
                                        />
                                    </div>
                                </div>
                                {/* Email */}
                                <div className="row cont-row">
                                    <div className="col-sm-3">
                                        <label>Email <span style={{ color: "red" }}>*</span></label>
                                    </div>
                                    <div className="col-sm-8">
                                        <input
                                            type="text"
                                            name="email"
                                            placeholder="Enter Email Address"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="form-control input-sm"
                                            autoComplete="off"
                                        />
                                    </div>
                                </div>
                                {/* Mobile Number */}
                                <div className="row cont-row">
                                    <div className="col-sm-3">
                                        <label>Mobile <span style={{ color: "red" }}>*</span></label>
                                    </div>
                                    <div className="col-sm-8">
                                        <input
                                            type="text"
                                            name="mobile"
                                            placeholder="Enter Mobile Number"
                                            value={formData.mobile}
                                            onChange={handleChange}
                                            className="form-control input-sm"
                                            autoComplete="off"
                                        />
                                    </div>
                                </div>
                                {/* Message */}
                                <div className="row cont-row">
                                    <div className="col-sm-3">
                                        <label>Message <span style={{ color: "red" }}>*</span></label>
                                    </div>
                                    <div className="col-sm-8">
                                        <textarea
                                            rows={5}
                                            placeholder="Enter Your Message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="form-control input-sm"
                                            autoComplete="off"
                                        />
                                    </div>
                                </div>
                                {/* Submit Button */}
                                <div style={{ marginTop: 10 }} className="row">
                                    <div style={{ paddingTop: 10 }} className="col-sm-3">
                                        <label />
                                    </div>
                                    <div className="col-sm-8">
                                        <button className="btn btn-primary btn-sm" type="submit">
                                            Send Message
                                        </button>
                                    </div>
                                </div>
                            </form>
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
