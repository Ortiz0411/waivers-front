import React from "react";
import logo from '../assets/rcrlogo.png';
import '../styles/Footer.css';

import { AiOutlineTikTok, AiOutlineGoogle } from "react-icons/ai";
import { FiFacebook, FiInstagram } from "react-icons/fi";


function Footer() {

    return (

        <div className='footer'>
            <div className='footercontainer'>
                <div className='footerinfo'>


                    {/**  Parte izquierda  */}
                    <div className='footerleft'>

                        {/**  Logo  */}
                        <div className='footerlogocontainer'>
                            <div className='footerlogo'>
                                <img src={logo} className='footerlogoimg' />
                            </div>
                        </div>

                        {/**  Contacto  */}
                        <div className='footercontact'>
                            <h5 className='footertitle'>Contacto</h5>
                            <div className='footercontactinfo'>
                                <p className='footersubtitle'>📞 +506 4001 0662</p>
                                <p className='footersubtitle'>📧 reservas@rinconcorobici.com</p>
                                <p className='footersubtitle'>📌 Cañas, Guanacaste</p>
                            </div>
                        </div>

                    </div>

                    {/**  Parte Derecha  */}
                    <div className='footerright'>
                        <h5 className='footertitle'>Siguenos</h5>
                        <div className='footersocialsinfo'>
                            <button className='footersocial' onClick={() => window.open('https://www.instagram.com/rcrrafting/', '_blank')}><FiInstagram className='footersocialicon' />rcrrafting</button>
                            <button className='footersocial' onClick={() => window.open('https://www.facebook.com/people/RCR-Rafting/100063453527949/', '_blank')} ><FiFacebook className='footersocialicon' />RCR Rafting</button>
                            <button className='footersocial' onClick={() => window.open('https://www.tiktok.com/@rcrrafting', '_blank')}><AiOutlineTikTok className='footersocialicon' />RCR-Rafting</button>
                            <button className='footersocial' onClick={() => window.open('https://share.google/6Lryg4z9XD9CHzOgw', '_blank')}><AiOutlineGoogle className='footersocialicon' />RCR Rafting</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>


    );

}

export default Footer;