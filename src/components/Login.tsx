import Logo from '../assets/logo-rcr.png'
import { Form, Input, Button, message } from "antd"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Login.css'


function Login() {

    const [loading, setloading] = useState(false)
    const navigate = useNavigate()


    const onFinish = async (values: { username: string, password: string }) => {

        if (loading) return
        setloading(true)

        try {

            const username = values.username?.trim()
            const password = values.password?.trim()

            const controller = new AbortController()
            const timeOut = setTimeout(() => controller.abort(), 5000)

            const res = await fetch('http://localhost:4000/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                credentials: 'include',
                body: JSON.stringify({username, password}),
                signal: controller.signal
            }).finally(() => clearTimeout(timeOut))

            if (!res.ok) throw new Error('Credenciales invalidas')

            message.success('Ingreso exitoso')
            navigate('/admin')
            
        } catch (err: any) {
            console.error(err)
        } finally {
            setloading(false)
        }

        console.log('se presiono el boton', values)
    } 


    return (

        <div className='login-body'>
            <div className="login-page">

                <div className="login-card">
                    
                        <div className='login-header'>
                            <div className='login-logo'>
                                <img src={Logo} alt='RCR Logo' />
                            </div>
                            <h3 className='login-title'>Admin Panel</h3>
                            <p className='login-subtitle'>Ingrese sus credeciales</p>
                        </div>

                        <div className='login-form'>

                            <Form layout='vertical' requiredMark={false} onFinish={onFinish}>

                                <Form.Item
                                    label='Usuario'
                                    name='username'
                                    rules={[{ required: true, message: 'Ingrese su usuario'}]}
                                >
                                    <Input placeholder='Usuario' autoComplete='username'/>
                                </Form.Item>

                                <Form.Item
                                    label='Contraseña'
                                    name='password'
                                    rules={[{ required: true, message: 'Ingrese su contraseña'}]}
                                >
                                    <Input.Password placeholder='Contraseña' autoComplete='current-password'/>
                                </Form.Item>

                                <Form.Item>
                                    <Button htmlType='submit' className='submit-button' loading={loading} block>
                                        Ingresar
                                    </Button>
                                </Form.Item>

                            </Form>

                        </div>

                </div>

            </div>

        </div>

    )

}

export default Login