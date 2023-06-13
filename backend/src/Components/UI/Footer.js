import React from "react";
import "./Footer.css";
import logo from "../../Assets/3.png";

const Footer = () => {
    return (
        <>
            <section className="footer">
                <div className="footer__container">
                    <div className="footer__container__left">
                        <img src={logo} alt="logo" />
                        
                        <h4>© Copyrights 2023 All rights reserved </h4>
                    </div>
                    <div className="footer__container__middle">
                        <h3>Quick Links</h3>
                        <ul>
                            <li>Home</li>
                            <li>Products</li>
                            <li>Services</li>
                            <li>About Us</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className="footer__container__right">
                        <h3>Follow Us</h3>
                        <div className="footer__container__right__icons">   
                            <i class="bi bi-facebook"></i>
                            <i class="bi bi-instagram"></i>
                            <i class="bi bi-twitter"></i>
                            <i class="bi bi-github"></i>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Footer;