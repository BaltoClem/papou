import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-links">
                    <ul>
                        <li><a href="#!">Conditions générales de vente</a></li>
                        <li><a href="#!">Données personnelles</a></li>
                        <li><a href="#!">Mentions légales</a></li>
                        <li><a href="#!">Nous contacter</a></li>
                    </ul>
                </div>
                <div className="social-icons">
                    <a href="https://www.facebook.com/yourpage">
                        <FaFacebook size={50} color="white" />
                    </a>
                    <a href="https://www.instagram.com/yourpage">
                        <FaInstagram size={50} color="white" />
                    </a>
                    <a href="https://www.linkedin.com/in/yourprofile">
                        <FaLinkedin size={50} color="white" />
                    </a>
                </div>
            </div>
            <div className="copyright">
                © 2023 Papou
            </div>
        </footer>
    );
};

export default Footer;