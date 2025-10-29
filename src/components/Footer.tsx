import React from "react";
import logo from "../assets/logo-rcr.png";
import "../styles/Footer.css";

import { AiOutlineTikTok, AiOutlineGoogle } from "react-icons/ai";
import { FiFacebook, FiInstagram } from "react-icons/fi";

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">

                    {/* Parte izquierda */}
                    <div className="footer-left">
                        <div className="footer-logo-box">
                            <div className="footer-logo-wrapper">
                                <img src={logo} alt="RCR Logo" className="footer-logo-img" />
                            </div>
                        </div>

                        <div className="footer-contact">
                            <h5 className="footer-heading">Contacto</h5>
                            <div className="footer-contact-info">
                                <p className="footer-text">📞 +506 4001 0662</p>
                                <p className="footer-text">📧 reservas@rinconcorobici.com</p>
                                <p className="footer-text">📌 Cañas, Guanacaste</p>
                            </div>
                        </div>
                    </div>

                    {/* Parte derecha */}
                    <div className="footer-right">
                        <h5 className="footer-heading">Síguenos</h5>
                        <div className="footer-socials">
                            <button className="footer-social-btn" onClick={() => window.open("https://www.instagram.com/rcrrafting/", "_blank")}><FiInstagram className="footer-social-icon" />rcrrafting</button>
                            <button className="footer-social-btn" onClick={() => window.open("https://www.facebook.com/people/RCR-Rafting/100063453527949/", "_blank")}><FiFacebook className="footer-social-icon" />RCR Rafting</button>
                            <button className="footer-social-btn" onClick={() => window.open("https://www.tiktok.com/@rcrrafting", "_blank")}><AiOutlineTikTok className="footer-social-icon" />RCR-Rafting</button>
                            <button className="footer-social-btn" onClick={() => window.open("https://share.google/6Lryg4z9XD9CHzOgw", "_blank")}><AiOutlineGoogle className="footer-social-icon" />RCR Rafting</button>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;