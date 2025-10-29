import React from "react"
import Logo from "../assets/logo-rcr.png"
import { MdOutlineShield } from "react-icons/md"
import { IoDocumentTextOutline } from "react-icons/io5"
import { CiMedicalClipboard } from "react-icons/ci"
import { AiOutlineSignature } from "react-icons/ai"
import { useNavigate } from "react-router-dom"
import "../styles/Home.css"

import Header from "./Header";
import Footer from "./Footer";

const Home: React.FC = () => {
    const navigate = useNavigate()

    const termsButton = () => {
        navigate('/terms');
    };

    return (
        <div>
            <Header />

            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-container">
                    <div className="hero-logo-wrapper">
                        <div className="hero-logo-box">
                            <img src={Logo} alt="RCR Logo" className="hero-logo" />
                        </div>
                    </div>
                    <h2 className="hero-title">
                        VIVE LA AVENTURA
                        <span className="hero-title-highlight">SEGURA EN EL RIO</span>
                    </h2>
                    <p className="hero-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae dolore
                        odio vel unde, quis impedit voluptatum voluptas necessitatibus
                        perferendis doloribus! Praesentium voluptate ipsum laudantium optio
                        officiis! Similique molestiae dolor iusto?
                    </p>
                    <button className="hero-cta" onClick={termsButton}>
                        <MdOutlineShield className="hero-cta-icon" />
                        Completar Formulario
                    </button>
                </div>
            </section>

            {/* Steps Section */}
            <section className="steps-section">
                <div className="steps-container">
                    <div className="steps-header">
                        <h3 className="steps-title">PROCESO EN 3 PASOS</h3>
                        <p className="steps-subtitle">PROCESO SIMPLE Y SEGURO</p>
                    </div>

                    <div className="steps-grid">
                        {/* Step 1 */}
                        <div className="step-card">
                            <div className="step-card-header">
                                <div className="step-number">1</div>
                                <div className="step-icon-wrapper">
                                    <IoDocumentTextOutline className="step-icon" />
                                </div>
                                <div className="step-title">LEER TERMINOS</div>
                            </div>
                            <div className="step-card-content">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit,
                                    est vero, nam magnam maiores facere sint similique excepturi
                                    doloribus dolores, quisquam vitae fuga! Molestias unde fugit,
                                    praesentium aperiam similique voluptatum.
                                </p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="step-card">
                            <div className="step-card-header">
                                <div className="step-number step-number-2">2</div>
                                <div className="step-icon-wrapper step-icon-wrapper-2">
                                    <CiMedicalClipboard className="step-icon step-icon-2" />
                                </div>
                                <div className="step-title step-title-2">INFORMACION MEDICA</div>
                            </div>
                            <div className="step-card-content">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit,
                                    est vero, nam magnam maiores facere sint similique excepturi
                                    doloribus dolores, quisquam vitae fuga! Molestias unde fugit,
                                    praesentium aperiam similique voluptatum.
                                </p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="step-card">
                            <div className="step-card-header">
                                <div className="step-number step-number-3">3</div>
                                <div className="step-icon-wrapper step-icon-wrapper-3">
                                    <AiOutlineSignature className="step-icon step-icon-3" />
                                </div>
                                <div className="step-title step-title-3">FIRMA DIGITAL</div>
                            </div>
                            <div className="step-card-content">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit,
                                    est vero, nam magnam maiores facere sint similique excepturi
                                    doloribus dolores, quisquam vitae fuga! Molestias unde fugit,
                                    praesentium aperiam similique voluptatum.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Home;
