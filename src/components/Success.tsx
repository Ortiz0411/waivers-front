import { useLocation, useNavigate } from 'react-router-dom'
import Logo from '../assets/logo-rcr.png'
import Raft from '../assets/raft-rcr.webp'
import RaftMobile from '../assets/raft-rcr-mobile.webp'
import { useEffect } from 'react'
import Footer from './Footer'
import '../styles/Success.css'
import { useTranslation } from 'react-i18next'
import { Button } from 'antd'
import { IoHome } from 'react-icons/io5'

const Success = () => {

    const location = useLocation()
    const navigate = useNavigate()
    const { t } = useTranslation()

    // Extrae el estado
    // Activar en caso de habilitar email const email = location.state?.email
    const tour_date = location.state?.tour_date

    // Convierte la fecha a DD MONTH YYYY
    const date = new Date(tour_date).toLocaleDateString('en-US', { day: '2-digit', month: 'long', year: 'numeric' })


    // Si no hay datos se redirige al home
    useEffect(() => {
        if (/*!email ||*/ !tour_date) {
            navigate('/')
        }
    }, [/*email,*/ tour_date, navigate])

    if (/*!email ||*/ !tour_date) return null


    return (

        <div className='success-body'>
            <div className='success-page'>

                {/* Header */}
                <div className='success-header '>

                    <div className='success-logo-container'>
                        <img src={Logo} alt="RCR Logo" className='success-logo' />
                    </div>

                    <div className='success-img-container'>

                        {/** Imagen para escritorios y moviles */}
                        <img src={Raft} className='raft-img' />
                        <img src={RaftMobile} className='raft-img-mobile' />

                        <div className='success-img-text'>
                            <div className='success-heading'>
                                <h2 className='success-title'> {t("success.title")} </h2>
                                <p> {t("success.description")} </p>
                            </div>
                            <p> {t("success.received")} {date}!</p>
                            <p> {t("success.indication")} </p>
                            <p> {t("success.goodbye")} </p>
                        </div>

                    </div>

                    <div className='success-buttons'>
                        <Button htmlType='submit' className='success-repeat-button'>
                            {t("success.complete")}
                        </Button>
                        <Button type='default' className='success-home-button' onClick={() => navigate('/')}>
                            <IoHome />
                        </Button>
                    </div>

                </div>

            </div>

            <Footer />
        </div>


    )

}

export default Success