import { useLocation, useNavigate } from 'react-router-dom'
import Logo from '../assets/logo-rcr.png'
import Raft from '../assets/raft-rcr.jpg'
import RaftMobile from '../assets/raft-rcr-mobile.jpg'
import { useEffect } from 'react'
import Footer from './Footer'
import '../styles/Success.css'

const Success = () => {


    const location = useLocation()
    const navigate = useNavigate()

    console.log(location)


    const email = location.state?.email
    const tour_date = location.state?.tour_date

    const date = new Date(tour_date).toLocaleDateString('en-EN', { day: '2-digit', month: 'long', year: 'numeric' })


    useEffect(() => {
        if (!email || !tour_date) {
            navigate('/')
        }
    }, [email, tour_date, navigate])

    if (!email || !tour_date) return null


    return (

        <div className='success-body'>
            <div className='success-page'>

                {/* Header */}
                <div className='success-header '>

                    <div className='success-logo-container'>
                        <img src={Logo} alt="RCR Logo" className='success-logo' />
                    </div>

                    <div className='success-img-container'>

                        <img src={Raft} className='raft-img' />
                        <img src={RaftMobile} className='raft-img-mobile' />

                        <div className='success-img-text'>
                            <div className='success-heading'>
                                <h2 className='success-title'>Waiver Submitted Successfully</h2>
                                <p>Thank you for submitting your waiver.</p>
                            </div>
                            <p>We have received your information and You're all set for your adventure on {date}!</p>
                            <p>Please arrive 15 minutes prior to your scheduled tour time.</p>
                            <p>We look forward to seeing you!</p>
                        </div>

                    </div>

                </div>

            </div>

            <Footer />
        </div>


    )



    {/*
        <div style={{ textAlign: "center", marginTop: "5rem" }}>
            <h1>Waiver enviado con exito.</h1>
            <p>Se ha enviado la confirmacion al correo: </p>
            <p><strong>{email}</strong></p>
        </div>*/}


}

export default Success;