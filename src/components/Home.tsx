import "../styles/Home.css"
import Logo from "../assets/logo-rcr.png"
import { MdOutlineShield } from "react-icons/md"
import { IoDocumentTextOutline } from "react-icons/io5"
import { CiMedicalClipboard } from "react-icons/ci"
import { AiOutlineSignature } from "react-icons/ai"
import { useNavigate } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import { useTranslation } from "react-i18next"

const Home: React.FC = () => {

    const navigate = useNavigate()
    const { t } = useTranslation()

    const termsButton = () => {
        navigate('/terms')
    }

    return (
        <div>

            <Header />

            {/* Hero Section (Seccion principal) */}
            <section className="hero-section">
                <div className="hero-container">

                    {/* Logo principal */}
                    <div>
                        <div className="hero-logo-box">
                            <img src={Logo} alt="RCR Logo" className="hero-logo" />
                        </div>
                    </div>

                    {/* Texto principal */}
                    <h2 className="hero-title">
                        {t('home.homeTitle1')}
                        <span className="hero-title-highlight">{t('home.homeTitle2')}</span>
                    </h2>
                    <p className="hero-description">
                        {t('home.description')}
                    </p>
                    <button className="hero-cta" onClick={termsButton}>
                        <MdOutlineShield className="hero-cta-icon" />
                        {t("home.botton")}
                    </button>

                </div>
            </section>

            {/* Seccion de pasos */}
            <section className="steps-section">
                <div className="steps-container">
                    <div className="steps-header">
                        <h3 className="steps-title">{t("home.steps")}</h3>
                        <p className="steps-subtitle">{t("home.stepsDesc")}</p>
                    </div>

                    <div className="steps-grid">
                        
                        {/* Paso 1 */}
                        <div className="step-card">
                            <div className="step-card-header">
                                <div className="step-number">1</div>
                                <div className="step-icon-wrapper">
                                    <IoDocumentTextOutline className="step-icon" />
                                </div>
                                <div className="step-title">{t("home.step1Title")}</div>
                            </div>
                            <div className="step-card-content">
                                <p>
                                    {t("home.step1Desc")}
                                </p>
                            </div>
                        </div>

                        {/* Paso 2 */}
                        <div className="step-card">
                            <div className="step-card-header">
                                <div className="step-number step-number-2">2</div>
                                <div className="step-icon-wrapper step-icon-wrapper-2">
                                    <CiMedicalClipboard className="step-icon step-icon-2" />
                                </div>
                                <div className="step-title step-title-2">{t("home.step2Title")}</div>
                            </div>
                            <div className="step-card-content">
                                <p>
                                    {t("home.step2Desc")}
                                </p>
                            </div>
                        </div>

                        {/* Paso 3 */}
                        <div className="step-card">
                            <div className="step-card-header">
                                <div className="step-number step-number-3">3</div>
                                <div className="step-icon-wrapper step-icon-wrapper-3">
                                    <AiOutlineSignature className="step-icon step-icon-3" />
                                </div>
                                <div className="step-title step-title-3">{t("home.step3Title")}</div>
                            </div>
                            <div className="step-card-content">
                                <p>
                                    {t("home.step3Desc")}
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Home