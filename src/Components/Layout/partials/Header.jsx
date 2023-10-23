import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

function Header() {
    useEffect(() => {
        const menuItems = document.querySelectorAll('.nav-item');

        const handleMouseEnter = function () {
            const dropdownMenu = this.querySelector('.dropdown-menu');
            if (dropdownMenu) {
                dropdownMenu.style.display = 'block';
            }
        };

        const handleMouseLeave = function () {
            const dropdownMenu = this.querySelector('.dropdown-menu');
            if (dropdownMenu) {
                dropdownMenu.style.display = 'none';
            }
        };

        menuItems.forEach((menuItem) => {
            menuItem.addEventListener('mouseenter', handleMouseEnter);
            menuItem.addEventListener('mouseleave', handleMouseLeave);
        });
        return () => {
            menuItems.forEach((menuItem) => {
                menuItem.removeEventListener('mouseenter', handleMouseEnter);
                menuItem.removeEventListener('mouseleave', handleMouseLeave);
            });
        }
    }, []);
    return (
        <>
            <header className="continer-fluid">
                <div className="header-top">
                    <div className="container">
                        <div className="row col-det">
                            <div className="col-lg-6 d-none d-lg-block">
                                <ul className="ulleft">
                                    <li>
                                        <i className="far fa-envelope" />
                                        <a href="mailto:uacnnccin@gmail.com">uacnnccin@gmail.com</a>
                                        <span>|</span>
                                    </li>
                                    <li>
                                        <i className="fas fa-phone-volume" />
                                        <a href="tel:+91- 8907654523"> +91- 8907654523 </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 folouws">
                                <ul className="ulright">
                                    <li>
                                        <small>Folow Us </small>:
                                    </li>
                                    <li>
                                        <i className="fab fa-facebook-square" />
                                    </li>
                                    <li>
                                        <i className="fab fa-twitter-square" />
                                    </li>
                                    <li>
                                        <i className="fab fa-instagram" />
                                    </li>
                                    <li>
                                        <i className="fab fa-linkedin" />
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 d-none d-md-block col-md-6 btn-bhed">
                                <button className="btn btn-sm btn-success">Donate</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="menu-jk" className="header-bottom">
                    <div className="container">
                        <div className="row nav-row">
                            <div className="col-lg-3 col-md-12 logo">
                                <a href="index.html">
                                    <img src="assets/images/logo.jpg" alt="" />
                                </a>
                                <a data-toggle="collapse" data-target="#menu" href="#menu">
                                    <i className="fas d-block d-lg-none small-menu fa-bars" />
                                </a>
                            </div>
                            <div id="menu" className="col-lg-9 col-md-12 d-none d-lg-block nav-col">
                                <ul className="navbad">
                                    <li className="nav-item active">
                                        <Link to={"/"} className="nav-link">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <div className="dropdown">
                                            <Link to={"/"} className="nav-link dropdown-toggle" role="button"
                                                id="aboutDropdown"
                                                data-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false">
                                                About Us
                                            </Link>
                                            <div className="dropdown-menu" aria-labelledby="aboutDropdown">
                                                <a className="dropdown-item" href="about_us.html">
                                                    Our Vision
                                                </a>
                                                <a className="dropdown-item" href="about_us.html">
                                                    Our Mission
                                                </a>
                                                <a className="dropdown-item" href="about_us.html">
                                                    Our Objective
                                                </a>
                                                <Link to={"history"} className="dropdown-item">
                                                    Our History
                                                </Link>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <div className="dropdown">
                                            <a
                                                className="nav-link dropdown-toggle"
                                                href="/"
                                                role="button"
                                                id="servicesDropdown"
                                                data-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                            >
                                                Our Team
                                            </a>
                                            <div
                                                className="dropdown-menu"
                                                aria-labelledby="servicesDropdown"
                                            >
                                                <Link to={"gccteam"} className="dropdown-item">GCC Team</Link>
                                                <Link to={"lccteam"} className="dropdown-item">LCC Team</Link>
                                                <Link to={"nccteam"} className="dropdown-item">NCC Team</Link>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <div className="dropdown">
                                            <a
                                                className="nav-link dropdown-toggle"
                                                href="/"
                                                role="button"
                                                id="galleryDropdown"
                                                data-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                            >
                                                Activities
                                            </a>
                                            <div
                                                className="dropdown-menu"
                                                aria-labelledby="galleryDropdown"
                                            >
                                                <a className="dropdown-item" href="gallery.html">
                                                    Socio Charitable
                                                </a>
                                                <a className="dropdown-item" href="gallery.html">
                                                    Spiritual
                                                </a>
                                                <a className="dropdown-item" href="gallery.html">
                                                    Pastoral
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <div className="dropdown">
                                            <Link to={"/"} className="nav-link dropdown-toggle" role="button"
                                                id="blogDropdown"
                                                data-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false">
                                                Gallery
                                            </Link>
                                            <div className="dropdown-menu" aria-labelledby="blogDropdown">
                                                <Link to={"photos"} className="dropdown-item">
                                                    Photos
                                                </Link>
                                                <Link to={"videos"} className="dropdown-item">
                                                    Videos
                                                </Link>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={"contact-us"} className="nav-link">
                                            Contact Us
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}

export default Header
