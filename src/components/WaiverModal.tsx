import { Modal, Spin, Divider } from "antd"
import { useEffect, useState } from "react"
import '../styles/Modal.css'

type Waiver = {
    id: number
    created_at?: string

    name: string
    legal_guardian: string
    email: string
    tour_date: string

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
    date_medications: string
    date_examination: string
    date_xray: string

    other_areas: string

    signature_url: string

    risk_level: string
}

function WaiverModal({ waiverId, open, onClose }: { waiverId: number | null, open: boolean, onClose: () => void }) {

    const [loading, setLoading] = useState(false)
    const [waiver, setWaiver] = useState<Waiver | null>(null)

    // Formateo de fecha a DD MONTH YYYY
    const waiverDate = new Date(waiver?.tour_date!)
    const date = waiverDate.toLocaleString('es-Es', { day: '2-digit', month: 'long', year: 'numeric' })
    const hour = waiverDate.toLocaleString('es-Es', { hour: '2-digit', minute: '2-digit' })

    useEffect(() => {

        if (!open || !waiverId) {
            setWaiver(null)
            return
        }

        let exist = true

        // Buscar waiver con ID
        const fetchWaiver = async () => {
            try {
                setLoading(true)

                const res = await fetch(`${import.meta.env.VITE_API_URL}/api/waivers/${waiverId}`, {
                    credentials: "include",
                })

                const data = (await res.json()) as Waiver
                if (exist) setWaiver(data)
            } catch (err: any) {
                if (exist) {
                    setWaiver(null)
                }
            } finally {
                if (exist) setLoading(false)
            }
        }

        fetchWaiver()
        return () => {
            exist = false
        }
    }, [open, waiverId])


    return (

        <Modal open={open} onCancel={onClose} footer={null} width={900} getContainer={false} centered>

            {loading && (
                <div style={{ display: "flex", justifyContent: "center", padding: 24 }}>
                    <Spin />
                </div>
            )}

            {!loading && waiver && (

                <div >

                    <div className='details-header'>
                        <div className='details-header-name'>{waiver.name}</div>
                        <div className='details-header-id'>{waiver.id}</div>
                    </div>
                    <div className='details-header-sent'>
                        <strong>Enviado el día {date}, a las {hour}.</strong>
                    </div>


                    {/** Informacion Personal */}
                    <div className='details-container'>

                        <Divider orientation='left' orientationMargin='0' style={{ borderColor: '#000000' }}>
                            <span className='details-divider-title'>
                                <span>Informacion Personal</span>
                            </span>
                        </Divider>

                        <div className='medical-info-container'>
                            <div className='details-personal-info'>
                                <div><strong>Fecha del tour: </strong> {waiver.tour_date}</div>
                                <div><strong>Email: </strong> {waiver.email}</div>
                                <div><strong>Riesgo: </strong> {waiver.risk_level}</div>
                                <div><strong>Tutor Legal: </strong> {waiver.legal_guardian}</div>
                            </div>
                        </div>

                    </div>


                    {/** Condiciones medicas */}
                    <div className='details-container'>

                        <Divider orientation='left' orientationMargin='0' style={{ borderColor: '#000000' }}>
                            <span className='details-divider-title'>
                                <span>Condiciones Medicas</span>
                            </span>
                        </Divider>

                        <div className="medical-info-container">
                            <ul className="medical-list">
                                <li>Alcoholism: {waiver.alcoholism ? "Sí *" : "No"}</li>
                                <li>Claustrophobia: {waiver.claustrophobia ? "Sí *" : "No"}</li>
                                <li>Dizziness: {waiver.dizzines ? "Sí *" : "No"}</li>
                                <li>Ear infection: {waiver.ear_infection ? "Sí *" : "No"}</li>
                                <li>Epilepsy: {waiver.epilepsy ? "Sí *" : "No"}</li>
                                <li>Peptic ulcers: {waiver.peptic_ulcers ? "Sí *" : "No"}</li>
                                <li>Respiratory problems: {waiver.respiratory_problems ? "Sí *" : "No"}</li>
                                <li>Neck injury: {waiver.neck_injure ? "Sí *" : "No"}</li>
                                <li>Back problems: {waiver.back_problems ? "Sí *" : "No"}</li>
                                <li>Drug use: {waiver.drug_use ? "Sí *" : "No"}</li>
                                <li>Depression: {waiver.depression ? "Sí *" : "No"}</li>
                                <li>Heart problems: {waiver.heart_problems ? "Sí *" : "No"}</li>
                                <li>Recent operation: {waiver.recent_operation ? "Sí *" : "No"}</li>
                                <li>Headaches: {waiver.headaches ? "Sí *" : "No"}</li>
                                <li>Overweight: {waiver.overweight ? "Sí *" : "No"}</li>
                            </ul>
                        </div>

                    </div>


                    {/** Otras condiciones */}
                    <div className='details-container'>

                        <Divider orientation='left' orientationMargin='0' style={{ borderColor: '#000000' }} >
                            <span className='details-divider-title'>
                                <span>Otras Condiciones</span>
                            </span>
                        </Divider>

                        <div className='medical-info-container'>

                            <div className='medical-list'>
                                <div className='details-date-title'>
                                    <strong>Otras áreas</strong> 
                                    <span>{waiver.other_areas}</span>
                                </div>
                                <div className='details-date-title'>
                                    <strong>Embarazo (meses)</strong> 
                                    <span>{waiver.pregnancy}</span>
                                </div>
                                <div className='details-date-title'>
                                    <strong>Medicamentos</strong> 
                                    <span>{waiver.medications}</span>
                                </div>
                            </div>

                        </div>
                    </div>


                    {/** Fechas importantes */}
                    <div className='details-container'>

                        <Divider orientation='left' orientationMargin='0' style={{ borderColor: '#000000' }} >
                            <span className='details-divider-title'>
                                <span>Fechas Relevantes</span>
                            </span>
                        </Divider>

                        <div className='medical-list'>
                            <div className='details-date-title'>
                                <strong>Último medicamento</strong>
                                <span>{waiver.date_medications}</span>
                            </div>
                            <div className='details-date-title'>
                                <strong>Último examen médico</strong>
                                <span>{waiver.date_examination}</span>
                            </div>
                            <div className='details-date-title'>
                                <strong>Última radiografía</strong>
                                <span>{waiver.date_xray}</span>
                            </div>
                        </div>

                    </div>



                    {/** Firma */}
                    <div className='details-container'>

                        <Divider orientation='left' orientationMargin='0' style={{ borderColor: '#000000' }} >
                            <span className='details-divider-title'>Firma</span>
                        </Divider>

                        <div style={{ gridColumn: "1 / -1", marginTop: 12 }}>
                            <div style={{ marginTop: 8 }}>
                                <img
                                    src={waiver.signature_url}
                                    alt="signature"
                                    style={{ maxWidth: "100%", border: "1px solid #eee", padding: 8, background: "#fff" }}
                                />
                            </div>
                        </div>
                    </div>



                </div>
            )}
        </Modal>

    )
}

export default WaiverModal