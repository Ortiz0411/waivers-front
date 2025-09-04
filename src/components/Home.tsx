import Logo from '../assets/rcrlogo.png'
import { MdOutlineShield } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";
import { CiMedicalClipboard } from "react-icons/ci";
import { AiOutlineSignature } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import "../styles/Home.css";

import Heather from './Heather';
import Footer from './Footer';



function Home() {

    const navigate = useNavigate();

    const termsButton = () => {
        navigate('/terms');
    }


    return (

        <div>

            <Heather />

            <section className='section1'>
                <div className='container'>

                    <div className='secontainer'>
                        <div className='imgcontainer'>
                            <img src={Logo} className='rcrlogo' />
                        </div>
                    </div>
                    <h2>VIVE LA AVENTURA
                        <span>SEGURA EN EL RIO</span>
                    </h2>
                    <p className='p1'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae dolore odio vel unde, quis impedit voluptatum voluptas necessitatibus perferendis doloribus! Praesentium voluptate ipsum laudantium optio officiis! Similique molestiae dolor iusto?
                    </p>
                    <button className='empezar' onClick={termsButton}><MdOutlineShield className='escudo' />Completar Formulario</button>

                </div>
            </section>



            <section className='cardsection'>
                <div className='contentcontainer'>

                    <div className='titlecontainer'>
                        <h3>PROCESO EN 3 PASOS</h3>
                        <p className='p2'>PROCESO SIMPLE Y SEGURO</p>
                    </div>

                    <div className='cardcontainer'>

                        <div className='card'>
                            <div className='cardheader'>
                                <div className='cardnumber'>
                                    1
                                </div>
                                <div className='cardiconcontainer'>
                                    <IoDocumentTextOutline className='cardicon' />
                                </div>
                                <div className='cardtitle'>LEER TERMINOS</div>
                            </div>
                            <div className='cardcontent'>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, est vero, nam magnam maiores facere sint similique excepturi doloribus dolores, quisquam vitae fuga! Molestias unde fugit, praesentium aperiam similique voluptatum.</p>
                            </div>
                        </div>

                        <div className='card'>
                            <div className='cardheader'>
                                <div className='cardnumber cardnumber2'>
                                    2
                                </div>
                                <div className='cardiconcontainer cardiconcontainer2'>
                                    <CiMedicalClipboard className='cardicon cardicon2' />
                                </div>
                                <div className='cardtitle cardtitle2'>INFORMACION MEDICA</div>
                            </div>
                            <div className='cardcontent'>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, est vero, nam magnam maiores facere sint similique excepturi doloribus dolores, quisquam vitae fuga! Molestias unde fugit, praesentium aperiam similique voluptatum.</p>
                            </div>
                        </div>

                        <div className='card'>
                            <div className='cardheader'>
                                <div className='cardnumber cardnumber3'>
                                    3
                                </div>
                                <div className='cardiconcontainer cardiconcontainer3'>
                                    <AiOutlineSignature className='cardicon cardicon3' />
                                </div>
                                <div className='cardtitle cardtitle3'>FIRMA DIGITAL</div>
                            </div>
                            <div className='cardcontent'>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, est vero, nam magnam maiores facere sint similique excepturi doloribus dolores, quisquam vitae fuga! Molestias unde fugit, praesentium aperiam similique voluptatum.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />

        </div>

    )

};

export default Home;