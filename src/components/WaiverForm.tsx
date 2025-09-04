import Logo from '../assets/rcrlogo.png';
import SignatureCanvas from "react-signature-canvas";
import '../styles/Form.css'
import { conditions } from '../utils/Conditions.tsx';
import { useEffect, useRef } from "react";
import dayjs from "dayjs";

import { Form, Button, Checkbox, DatePicker, Input, Space, Row, Col, InputNumber } from 'antd';


export type WaiverFormData = {
    name: string;
    under_age?: boolean;
    legal_guardian: string;
    email: string;
    tour_date: string;

    alcoholism: boolean;
    claustrophobia: boolean;
    dizzines: boolean;
    ear_infection: boolean;
    epilepsy: boolean;
    peptic_ulcers: boolean;
    respiratory_problems: boolean;
    neck_injury: boolean;
    back_problems: boolean;
    drug_use: boolean;
    depression: boolean;
    heart_problems: boolean;
    recent_operation: boolean;
    headaches: boolean;
    overweight: boolean;

    other_condition: string;
    pregnancy: number;
    medications: string;
    date_medications: string;
    date_examination: string;
    date_xray: string;
    other_areas: string;
    signature: string;
    ip_address: string;
    user_agent: string;
    terms: boolean;
};



const WaiverForm = () => {

    const [form] = Form.useForm<WaiverFormData>();


    const sigCanvasRef = useRef<SignatureCanvas>(null);
    const clearCanvas = () => {
        sigCanvasRef.current?.clear();
    }



    const isUnderAge = Form.useWatch('under_age', form);

    const onFinish = (values: WaiverFormData) => {
        console.log('Submitted:', values);
    };

    useEffect(() => {
        if (!isUnderAge) {
            form.setFieldsValue({ legal_guardian: undefined });
        }
    }, [isUnderAge, form]);




    return (

        <div className="body">

            <div className="formpage">

                {/**  HEADER  */}
                <div className="formheader">
                    <div className="formheadertitle">
                        <img src={Logo} className="formheaderimg" />
                    </div>
                    <h2 className="formtitle">Formulario de ...</h2>
                    <p className="formdescription">Complete los campos a continuacion ...</p>
                </div>


                <Form
                    form={form}
                    layout="vertical"
                    requiredMark={false}
                    onFinish={onFinish}
                >

                    <div className='formcard'>
                        <div className='formcontentcontainer'>


                            <div className="prueba">
                                Informacion Personal
                            </div>


                            <Row gutter={16}>

                                <Col xs={24} sm={12}>
                                    <Form.Item
                                        name={"name"}
                                        label="Full Name"
                                        rules={[{ required: true, message: "Please enter your full name" }]}
                                    >
                                        <Input placeholder="Enter your full name" />
                                    </Form.Item>
                                </Col>

                                <Col xs={24} sm={12}>
                                    <Form.Item
                                        name={"email"}
                                        label="Email"
                                        rules={[{ required: true, message: "Please enter your email" },
                                        { type: "email", message: "Please enter a valid email addres" }
                                        ]}
                                    >
                                        <Input placeholder="email@email.com" />
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
                                        <Checkbox><span className="pruebaerror">Is under 18 years old?</span></Checkbox>
                                    </Form.Item>
                                </Col>
                            </Row>

                            {isUnderAge && (
                                <Form.Item
                                    name={"legal_guardian"}
                                    label="Legal Guardian Name"
                                    rules={[{ required: true, message: 'Please enter the legal guardian name' }]}
                                >
                                    <Input placeholder="Guardian's full name" />
                                </Form.Item>
                            )}

                            <Row gutter={16}>
                                <Col xs={24} sm={12}>
                                    <Form.Item
                                        name={"tour_date"}
                                        label={"Dia del Tour"}
                                    >
                                        <DatePicker disabledDate={(current) => current && current < dayjs().startOf('day')} />
                                    </Form.Item>
                                </Col>
                            </Row>


                        </div>
                    </div>


                    {/**   CARDS CONTENT   */}
                    <div className='formcard'>
                        <div className='formcontentcontainer'>


                            <div className="prueba2">
                                Condiciones Medicas
                            </div>
                            <div className="description">
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
                                name={"pregnancy"}
                                label={"Pregnancy (Months, if Apply)"}
                                style={{ marginTop: '1.5rem' }}
                            >
                                <InputNumber min={0} max={9} />
                            </Form.Item>


                            <Form.Item
                                name={"medications"}
                                label={"Actual Medicines"}
                            >
                                <Input />
                            </Form.Item>


                            <Row gutter={16}>

                                <Col xs={24} sm={8}>
                                    <Form.Item
                                        name={"date_medications"}
                                        label={"Ultimo Medicamento"}
                                    >
                                        <DatePicker className="datepicker" disabledDate={(current) => current && current > dayjs().endOf('day')} />
                                    </Form.Item>
                                </Col>

                                <Col xs={24} sm={8}>
                                    <Form.Item
                                        name={"date_examination"}
                                        label={"Ultimo Examen Medico"}
                                    >
                                        <DatePicker className="datepicker" disabledDate={(current) => current && current > dayjs().endOf('day')} />
                                    </Form.Item>
                                </Col>

                                <Col xs={24} sm={8}>
                                    <Form.Item
                                        name={"date_xray"}
                                        label={"Ultima Radiografia"}
                                    >
                                        <DatePicker className="datepicker" disabledDate={(current) => current && current > dayjs().endOf('day')} />
                                    </Form.Item>
                                </Col>

                            </Row>


                            <Form.Item
                                name={"other_areas"}
                                label={"Otras Condiciones Medicas"}
                            >
                                <Input />
                            </Form.Item>

                        </div>
                    </div>


                    {/**   CARDS CONTENT   */}
                    <div className='formcard'>
                        <div className='formcontentcontainer'>

                            <div className="prueba2">Firma Digital</div>
                            <div className="description">
                                Firme en el area de abajo usando su dedo o mouse
                            </div>

                            <div className="signaturecontainer">

                                <Form.Item
                                    name={"signature"}
                                >
                                    <SignatureCanvas ref={sigCanvasRef} backgroundColor="white" canvasProps={{ width: '700rem', height: '150rem', className: 'signaturecanvas' }}></SignatureCanvas>
                                </Form.Item>
                            </div>



                            <button className="cleanbutton" onClick={clearCanvas} >Limpiar Firma</button>
                        </div>
                    </div>


                    {/**   CARDS CONTENT   */}
                    <div className="warningcontainer">
                        <Form.Item
                            name={"terms"}
                            valuePropName="checked"
                            rules={[{ required: true, message: "Debe confirmar los terminos" }]}
                        >
                            <Checkbox>
                                <div className="warningdescription">
                                    <div className="warningtitle"><strong>Advertencia:</strong></div>
                                    <div className="warningtext">
                                        Acepto los terminos y condiciones de RCR Rafting. Entiendo que ...
                                    </div>
                                </div>
                            </Checkbox>
                        </Form.Item>
                    </div>


                    <div className='formcard'>
                        <div className='formcontentcontainer'>
                            <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                                <Space>
                                    <Button htmlType="submit" className="submitButton">
                                        Enviar Formulario  
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