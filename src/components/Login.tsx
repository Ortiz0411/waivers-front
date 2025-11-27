import Logo from '../assets/logo-rcr.png'
import { Form, Input, Button, message } from "antd"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Login.css'
import { IoHome } from "react-icons/io5"


function Login() {

    const [loading, setloading] = useState(false)
    const navigate = useNavigate()


    /** Submit data to log in */
    const onFinish = async (values: { username: string, password: string }) => {

        if (loading) return
        setloading(true)

        try {

            const username = values.username?.trim()
            const password = values.password?.trim()

            // Timeout if backend does not respond
            const controller = new AbortController()
            const timeOut = setTimeout(() => controller.abort(), 5000)

            const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
                signal: controller.signal
            }).finally(() => clearTimeout(timeOut))

            const data = await res.json().catch(() => null)

            if (!res.ok) {
                message.error(data?.error || 'Credenciales incorrectas')
                return
            }

            const accessToken = data?.access_token as string | undefined
            if (!accessToken) {
                message.error('No se recibió el token de autenticación')
                return
            }

            localStorage.setItem('login_token', accessToken)
            navigate('/admin')

        } catch (err: any) {

        } finally {
            setloading(false)
        }
    }


    return (

        <div className='login-body'>
            <div className="login-page">

                <div className="login-card">

                    <div className='login-header'>
                        <div className='login-logo'>
                            <img src={Logo} alt='RCR Logo' />
                        </div>
                        <h3 className='login-title'>Iniciar Sesion</h3>
                        <p className='login-subtitle'>Ingrese sus credeciales</p>
                    </div>

                    <div className='login-form'>

                        <Form layout='vertical' requiredMark={false} onFinish={onFinish}>

                            <Form.Item
                                label='Usuario'
                                name='username'
                                rules={[{ required: true, message: 'Ingrese su usuario' }]}
                            >
                                <Input placeholder='Usuario' autoComplete='username' />
                            </Form.Item>

                            <Form.Item
                                label='Contraseña'
                                name='password'
                                rules={[{ required: true, message: 'Ingrese su contraseña' }]}
                            >
                                <Input.Password placeholder='Contraseña' autoComplete='current-password' />
                            </Form.Item>

                            <Form.Item>
                                <div className='login-buttons'>
                                    <Button type='default' className='home-button' onClick={() => navigate('/')}>
                                        <IoHome />
                                    </Button>
                                    <Button htmlType='submit' className='submit-button' loading={loading} block>
                                        Ingresar
                                    </Button>
                                </div>

                            </Form.Item>

                        </Form>

                    </div>

                </div>

            </div>

        </div>

    )

}

export default Login