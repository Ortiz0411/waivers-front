import "../styles/Footer.css"
import logo from "../assets/logo-rcr.png"
import { AiOutlineTikTok, AiOutlineGoogle } from "react-icons/ai"
import { FiFacebook, FiInstagram } from "react-icons/fi"
import { useTranslation } from "react-i18next"


const Footer: React.FC = () => {

    const { t } = useTranslation()

    const open = (url: string) => window.open(url, "_blank")

    return (

        <footer className="footer">

            <div className="footer-container">
                <div className="footer-content">

                    {/* Seccion izquierda. Logo + contacto */}
                    <div className="footer-left">
                        <div className="footer-logo-box">
                            <div className="footer-logo-wrapper">
                                <img src={logo} alt="RCR Logo" className="footer-logo-img" />
                            </div>
                        </div>

                        <div className="footer-contact">
                            <h5 className="footer-heading">{t("footer.contact")}</h5>
                            <div className="footer-contact-info">
                                <p className="footer-text">📞 +506 4001 0662</p>
                                <p className="footer-text">📧 reservas@rinconcorobici.com</p>
                                <p className="footer-text">📌 Cañas, Guanacaste</p>
                            </div>
                        </div>
                    </div>

                    {/* Seccion derecha: Redes Sociales */}
                    <div className="footer-right">
                        <h5 className="footer-heading">{t("footer.followUs")}</h5>
                        <div className="footer-socials">
                            <button className="footer-social-btn" type="button" onClick={() => window.open("https://www.instagram.com/rcrrafting/")}><FiInstagram className="footer-social-icon" />rcrrafting</button>
                            <button className="footer-social-btn" onClick={() => open("https://www.facebook.com/people/RCR-Rafting/100063453527949/")}><FiFacebook className="footer-social-icon" />RCR Rafting</button>
                            <button className="footer-social-btn" onClick={() => open("https://www.tiktok.com/@rcrrafting")}><AiOutlineTikTok className="footer-social-icon" />RCR-Rafting</button>
                            <button className="footer-social-btn" onClick={() => open("https://share.google/6Lryg4z9XD9CHzOgw")}><AiOutlineGoogle className="footer-social-icon" />RCR Rafting</button>
                        </div>
                    </div>

                </div>
            </div>

        </footer>
    )
}

export default Footer