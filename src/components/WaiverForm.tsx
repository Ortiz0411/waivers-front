import Logo from '../assets/logo-rcr.png'
import { MdOutlineShield } from "react-icons/md"
import SignatureCanvas from "react-signature-canvas"
import '../styles/Form.css'
import { conditions } from '../utils/Conditions.tsx'
import { useState, useEffect, useRef } from "react"
import { useNavigate } from 'react-router-dom'
import dayjs, { Dayjs } from "dayjs"

import { Form, Button, Checkbox, DatePicker, Input, Space, Row, Col, InputNumber, message } from 'antd';


export type WaiverFormData = {
    name: string
    under_age?: boolean
    legal_guardian: string
    email: string
    tour_date: Dayjs

    alcoholism: boolean
    claustrophobia: boolean
    dizzines: boolean
    ear_infection: boolean
    epilepsy: boolean
    peptic_ulcers: boolean
    respiratory_problems: boolean
    neck_injure: boolean
    back_problems: boolean
    drug_use: boolean
    depression: boolean
    heart_problems: boolean
    recent_operation: boolean
    headaches: boolean
    overweight: boolean

    other_condition: string
    pregnancy: number
    medications: string

    date_medications: Dayjs
    date_examination: Dayjs
    date_xray: Dayjs
    other_areas: string
    signature: string

    terms: boolean
};



const WaiverForm = () => {

    const [form] = Form.useForm<WaiverFormData>();

    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const sigCanvasRef = useRef<SignatureCanvas>(null)
    const clearCanvas = () => sigCanvasRef.current?.clear()


    const isUnderAge = Form.useWatch('under_age', form)


    const onFinish = async (values: WaiverFormData) => {

        try {

            if (!sigCanvasRef.current || sigCanvasRef.current.isEmpty()) {
                message.error('Falta firma')
                return
            }

            setLoading(true)

            const signature = sigCanvasRef.current?.toDataURL("image/png")


            const legalGuardian = values.under_age && values.legal_guardian ? values.legal_guardian : 'Adulto'
            const tourDate = values.tour_date ? values.tour_date.format('YYYY-MM-DD') : null

            const personalData = {
                name: values.name,
                legal_guardian: legalGuardian,
                email: values.email,
                tour_date: tourDate,
            }

            const medicalConditions = {
                alcoholism: !!values.alcoholism,
                claustrophobia: !!values.claustrophobia,
                dizzines: !!values.dizzines,
                ear_infection: !!values.ear_infection,
                epilepsy: !!values.epilepsy,
                peptic_ulcers: !!values.peptic_ulcers,
                respiratory_problems: !!values.respiratory_problems,
                neck_injure: !!values.neck_injure,
                back_problems: !!values.back_problems,
                drug_use: !!values.drug_use,
                depression: !!values.depression,
                heart_problems: !!values.heart_problems,
                recent_operation: !!values.recent_operation,
                headaches: !!values.headaches,
                overweight: !!values.overweight
            }

            const medicalDates = {
                other_condition: values.other_condition || 'Ninguno',
                pregnancy: values.pregnancy ?? 0,
                medications: values.medications || 'Ninguno',
                date_medications: values.date_medications ? values.date_medications.format('YYYY-MM-DD') : 'No aplica',
                date_examination: values.date_examination ? values.date_examination.format('YYYY-MM-DD') : 'No aplica',
                date_xray: values.date_xray ? values.date_xray.format('YYYY-MM-DD') : 'No aplica',
                other_areas: values.other_areas || 'Ninguno'
            }

            const waiver = {
                ...personalData,
                ...medicalConditions,
                ...medicalDates,
                signature
            }

            console.log('Campos: ', waiver)


            const response = await fetch(
                /*'https://waivers-api.onrender.com/api/waivers'*/'http://localhost:4000/api/waivers',
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(waiver)
                }
            )


            if (!response.ok) {
                throw new Error('Error al enviar formulario')
            }

            message.success('Formulario enviado')

            const dateStr = values.tour_date.format('YYYY-MM-DD')
            navigate('/success', { state: { email: values.email, tour_date: dateStr } })

            form.resetFields()
            sigCanvasRef.current.clear()

            

        } catch (err) {
            console.error(err)
            message.error('Error al procesar datos')
        }
        finally {
            setLoading(false)
        }

        console.log('Submitted:', values)
    };


    useEffect(() => {
        if (!isUnderAge) {
            form.setFieldsValue({ legal_guardian: undefined });
        }
    }, [isUnderAge, form]);




    return (

        <div className="body">

            <div className="form-page">

                {/**  HEADER  */}
                <div className="form-header">
                    <div className="form-header-title">
                        <img src={Logo} className="form-header-img" />
                    </div>
                    <h2 className="form-title">Formulario de ...</h2>
                    <p className="form-description">Complete los campos a continuacion ...</p>
                </div>


                <Form
                    form={form}
                    layout="vertical"
                    requiredMark={false}
                    onFinish={onFinish}
                >

                    <div className='form-card'>
                        <div className='form-content-container'>


                            <div className="card-title">
                                Informacion Personal
                            </div>


                            <Row gutter={16}>

                                <Col xs={24} sm={12}>
                                    <Form.Item
                                        name={"name"}
                                        label="Full Name"
                                        rules={[{ required: true, message: "Please enter your full name"},
                                                { max: 59, message: "Maximo 60 caracteres"}
                                        ]}
                                    >
                                        <Input placeholder="Enter your full name" maxLength={60}/>
                                    </Form.Item>
                                </Col>

                                <Col xs={24} sm={12}>
                                    <Form.Item
                                        name={"email"}
                                        label="Email"
                                        rules={[{ required: true, message: "Please enter your email" },
                                                { max: 59, message: "Maximo 60 caracteres"},
                                                { type: "email", message: "Please enter a valid email addres" }
                                        ]}
                                    >
                                        <Input placeholder="email@email.com" maxLength={60}/>
                                    </Form.Item>
                                </Col>

                            </Row>


                            <Row gutter={16}>
                                <Col xs={24} sm={12}>
                                    <Form.Item
                                        name={"under_age"}
                                        valuePropName="checked"
                                        style={{ marginBottom: 24 }}
                                    >
                                        <Checkbox><span className="guardian-checkbox">Is under 18 years old?</span></Checkbox>
                                    </Form.Item>
                                </Col>
                            </Row>

                            {isUnderAge && (
                                <Form.Item
                                    name={"legal_guardian"}
                                    label="Legal Guardian Name"
                                    rules={[{ required: true, message: 'Please enter the legal guardian name' },
                                            { max: 59, message: "Maximo 60 caracteres"}
                                    ]}
                                >
                                    <Input placeholder="Guardian's full name" maxLength={60}/>
                                </Form.Item>
                            )}

                            <Row gutter={16}>
                                <Col xs={24} sm={12}>
                                    <Form.Item
                                        name={"tour_date"}
                                        label={"Dia del Tour"}
                                        rules={[{ required: true, message: 'Please enter the date of your tour.' }]}
                                    >
                                        <DatePicker disabledDate={(current) => current && current < dayjs().startOf('day')} />
                                    </Form.Item>
                                </Col>
                            </Row>


                        </div>
                    </div>


                    {/**   CARDS CONTENT   */}
                    <div className='form-card'>
                        <div className='form-content-container'>


                            <div className="card-title2">
                                Condiciones Medicas
                            </div>
                            <div className="card-description">
                                Marque todas las condiciones que apliquen a su historial medico
                            </div>


                            <Row gutter={16}>
                                {conditions.map((condition, index) => (
                                    <Col span={12} key={index}>
                                        <Form.Item
                                            name={condition.name}
                                            valuePropName="checked"
                                            noStyle
                                        >
                                            <Checkbox>
                                                <span className="conditions">{condition.label}</span>
                                            </Checkbox>
                                        </Form.Item>

                                    </Col>
                                ))}
                            </Row>

                            <Form.Item
                                name={"other_condition"}
                                label={"Otras Condiciones"}
                                style={{ marginTop: '1.5rem' }}
                                rules={[{ max: 119, message: "Maximo 120 caracteres"}]}
                            >
                                <Input maxLength={120}/>
                            </Form.Item>


                            <Form.Item
                                name={"pregnancy"}
                                label={"Pregnancy (Months, if Apply)"}
                                style={{ marginTop: '1.5rem' }}
                            >
                                <InputNumber min={0} max={9} />
                            </Form.Item>


                            <Form.Item
                                name={"medications"}
                                label={"Actual Medicines"}
                                rules={[{ max: 119, message: "Maximo 120 caracteres"}]}
                            >
                                <Input maxLength={120}/>
                            </Form.Item>


                            <Row gutter={16}>

                                <Col xs={24} sm={8}>
                                    <Form.Item
                                        name={"date_medications"}
                                        label={"Ultimo Medicamento"}
                                        rules={[{ required: true, message: 'Please enter a valid date.' }]}
                                    >
                                        <DatePicker className="datepicker" disabledDate={(current) => current && current > dayjs().endOf('day')} />
                                    </Form.Item>
                                </Col>

                                <Col xs={24} sm={8}>
                                    <Form.Item
                                        name={"date_examination"}
                                        label={"Ultimo Examen Medico"}
                                        rules={[{ required: true, message: 'Please enter a valid date.' }]}
                                    >
                                        <DatePicker className="datepicker" disabledDate={(current) => current && current > dayjs().endOf('day')} />
                                    </Form.Item>
                                </Col>

                                <Col xs={24} sm={8}>
                                    <Form.Item
                                        name={"date_xray"}
                                        label={"Ultima Radiografia"}
                                        rules={[{ required: true, message: 'Please enter a valid date.' }]}
                                    >
                                        <DatePicker className="datepicker" disabledDate={(current) => current && current > dayjs().endOf('day')} />
                                    </Form.Item>
                                </Col>

                            </Row>


                            <Form.Item
                                name={"other_areas"}
                                label={"Otras Condiciones Medicas"}
                                rules={[{ max: 119, message: "Maximo 120 caracteres"}]}
                            >
                                <Input maxLength={120}/>
                            </Form.Item>

                        </div>
                    </div>


                    {/**   CARDS CONTENT   */}
                    <div className='form-card'>
                        <div className='form-content-container'>

                            <div className="card-title2">Firma Digital</div>
                            <div className="card-description">
                                Firme en el area de abajo usando su dedo o mouse
                            </div>



                            <Form.Item
                                name="signature"
                                rules={[{
                                    validator: () => {
                                        if (sigCanvasRef.current?.isEmpty()) {
                                            return Promise.reject('Debe completar su firma')
                                        }
                                        return Promise.resolve()
                                    }
                                }]}
                            >
                                <SignatureCanvas ref={sigCanvasRef} backgroundColor="white" canvasProps={{ className: 'signature-canvas' }}></SignatureCanvas>
                            </Form.Item>




                            <button type='button' className="cleanbutton" onClick={clearCanvas} >Limpiar Firma</button>
                        </div>
                    </div>


                    {/**   CARDS CONTENT   */}
                    <div className="form-card">
                        <Form.Item
                            name={"terms"}
                            valuePropName="checked"
                            className='form-terms-check'
                            rules={[{ required: true, message: "Debe confirmar los terminos*" }]}
                        >
                            <Checkbox className='form-warning-card'>
                                <div className='form-warning-description'>
                                    Acepto los terminos y condiciones de RCR Rafting. Soy plenamente consciente de los riesgos inherentes que conlleva la actividad
                                    y afirmo que he proprionado informacion medica completa y veraz. Al completar este documento, exonero de responsabilidad
                                    a RCR Rafting, sus representantes y empleados; de cualquier lesion que pueda ocurrir durante la actividad, o en caso de proceder,
                                    hacerlo unicamente en Costa Rica, bajo su jurisdiccion y renuncio voluntariamente a las leyes y jurisdiccion de cualquier otro pais.
                                </div>
                            </Checkbox>
                        </Form.Item>

                        <div className="form-privacy-card">
                            <p className="form-privacy-text">
                                <MdOutlineShield className='form-privacy-icon' />
                                Su informacion personal sera protegida y utilizada unicamente para fines de seguridad.
                            </p>

                        </div>

                        <div className='form-submit-container'>
                            <Form.Item>
                                <Space>
                                    <Button htmlType="submit" className="submit-button" loading={loading}>
                                        {loading ? 'Enviando Waiver' : 'Enviar Formulario'}
                                    </Button>
                                </Space>
                            </Form.Item>
                        </div>


                    </div>

                </Form>

            </div>

        </div>

    )

}


export default WaiverForm;