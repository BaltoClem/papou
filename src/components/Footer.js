import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    const footerStyle = {
        backgroundColor: "#fdb0aa",
        color: "white",
    };

    const containerStyle = {
        display: "grid",
        gridTemplateColumns: "1fr 1fr", // Deux colonnes égales
        alignItems: "center",
        gap: "20px", // Espace entre les colonnes
        padding: "20px 0",
    };

    const socialIconsStyle = {
        display: "flex",
        alignItems: "center", // Centrer les icônes horizontalement
    };

    const ulStyle = {
        textAlign: "center", // Aligner la liste à gauche
    };

    const iconStyle = {
        marginRight: "50px",
        marginLeft: "50px", // Ajoute de la marge à droite de l'icône de Facebook
    };

    return (
        <footer style={footerStyle}>
            <div style={containerStyle}>
                <div className="general_links">
                    <ul style={ulStyle}>
                        <li><a className="grey-text text-lighten-3" href="#!">Conditions générales de vente</a></li>
                        <li><a className="grey-text text-lighten-3" href="#!">Données personnelles</a></li>
                        <li><a className="grey-text text-lighten-3" href="#!">Mentions légales</a></li>
                        <li><a className="grey-text text-lighten-3" href="#!">Nous contacter</a></li>
                    </ul>
                </div>
                <div className='icons_social' style={socialIconsStyle}>
                    <a href="https://www.facebook.com/yourpage">
                        <FaFacebook size={50} color="white" style={iconStyle} />
                    </a>
                    <a href="https://www.instagram.com/yourpage">
                        <FaInstagram size={50} color="white" style={iconStyle} />
                    </a>
                    <a href="https://www.linkedin.com/in/yourprofile">
                        <FaLinkedin size={50} color="white" style={iconStyle} />
                    </a>
                </div>
            </div>
            <div className="footer-copyright">
                <div style={{ textAlign: "center" }}>
                    © 2023 Papou
                </div>
            </div>
        </footer>
    );
};

export default Footer;
