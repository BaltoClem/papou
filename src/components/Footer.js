import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {

    const footerStyle = {
        backgroundColor: "#00988E", // Définit la couleur de fond
        color: "white", // Définit la couleur du texte en blanc
    };

    return (
        <footer className="page-footer" style={footerStyle}>
            <div className="container">
                <div className="row">
                    <div className="col l4 offset-l2 s12">
                        <ul>
                            <li><a className="grey-text text-lighten-3" href="#!">Conditions générales de vente</a></li>
                            <li><a className="grey-text text-lighten-3" href="#!">Données personnelles</a></li>
                            <li><a className="grey-text text-lighten-3" href="#!">Mentions légales</a></li>
                            <li><a className="grey-text text-lighten-3" href="#!">Nous contacter</a></li>
                        </ul>
                    </div>
                    <div className="col l6 s12">
                        <h5 className="white-text">Rejoignez la team Papou !</h5>
                        <div className='social_icons'>
                            <a href="https://www.facebook.com/yourpage"><FaFacebook size={30} color="white" /></a>
                            <a href="https://www.instagram.com/yourpage"><FaInstagram size={30} color="white" /></a>
                            <a href="https://www.linkedin.com/in/yourprofile"><FaLinkedin size={30} color="white" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    © 2023 Copyright Text
                </div>
            </div>
        </footer>
    );
};

export default Footer;