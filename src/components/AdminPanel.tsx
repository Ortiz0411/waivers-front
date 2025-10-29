import { useNavigate } from "react-router-dom"
import { Button, DatePicker, Input, Divider, Table, Tag } from "antd"
import '../styles/AdminPanel.css'
import { useEffect, useState } from "react"
import dayjs from "dayjs"
import WaiverModal from "./WaiverModal"
import { MdOutlineRemoveRedEye, MdOutlineFileDownload } from "react-icons/md"


type waiver = {
    id: number
    name: string
    email: string
    legal_guardian: string
    tour_date: string
    created_at: string
    risk_level: string
}


const AdminPanel: React.FC = () => {


    const [waivers, setwaivers] = useState<waiver[]>([])
    const [loading, setLoading] = useState(false)

    const [selectedwaiver, setSelectedwaiver] = useState<number | null>(null)
    const [modalOpen, setModalOpen] = useState(false)

    const riskTag = (risk: string) => {
        switch (risk) {
            case 'Bajo': return <Tag color="green">Bajo</Tag>
            case 'Medio': return <Tag color="yellow">Medio</Tag>
            case 'Alto': return <Tag color="red">Alto</Tag>
        }
    }

    const openwaiver = (w: waiver) => {
        setSelectedwaiver(w.id)
        setModalOpen(true)
    }

    const closeModal = () => {
        setSelectedwaiver(null)
        setModalOpen(false)
    }


    useEffect(() => {
        const loadwaivers = async () => {
            try {
                setLoading(true)
                const res = await fetch("http://localhost:4000/api/waivers", { credentials: 'include' })
                const data = await res.json()
                setwaivers(data)
            } catch (err) {
                console.error(err)
            } finally {
                setLoading(false)
            }
        }
        loadwaivers()
    }, [])


    const columns = [
        {
            title: 'Participante', dataIndex: 'name', key: 'name',
            render: (_: any, value: waiver) => (
                <div>
                    <div className='waiver-info-name'>{value.name}</div>
                    <div className='waiver-info-email'>{value.email}</div>
                    {value.legal_guardian !== 'Adulto' && (
                        <Tag color="default" >Es menor</Tag>
                    )}
                </div>
            )
        },
        {
            title: 'Fecha Tour', dataIndex: 'tour_date', key: 'tour_date',
            render: (date: string) => dayjs(date).format('DD/MM/YYYY')
        },
        {
            title: 'Riesgo', dataIndex: 'risk_level', key: 'risk_level',
            render: (_: any, value: waiver) => {
                return <>{riskTag(value.risk_level)}</>
            }
        },
        {
            title: 'Enviado', dataIndex: 'created_at', key: 'created_at',
            render: (date: string) => dayjs(date).format('DD/MM/YYYY')
        },
        {
            title: 'Accion', key: 'accion',
            render: (_: any, value: waiver) => (
                <div className='table-buttons'>
                    <Button size='middle' onClick={() => openwaiver(value)}>
                        <MdOutlineRemoveRedEye size={16}/>
                    </Button>
                    <Button size='middle' onClick={() => openwaiver(value)}>
                        <MdOutlineFileDownload size={16}/>
                    </Button>
                </div>

            )
        }
    ]


    const navigate = useNavigate()

    /*const doLogout = async () => {
        await fetch('https://waivers-api.onrender.com/api/auth/logout', {
            method: 'POST',
            credentials: 'include',
        });
        message.success('Sesión cerrada');
        navigate('/login');
    };*/

    return (

        <div className='body'>
            <div className='admin-page'>


                <div className='admin-page-header'>
                    <h1 className='admin-page-header-title'>waivers</h1>
                    <button className='logout-btn'>Logout</button>
                </div>


                <div className='admin-card'>
                    <div className='admin-card-container'>

                        <h2 className='admin-card-title'>Buscar</h2>
                        <div className='search-container'>
                            <Input placeholder="Nombre o email" className='search-text-input'></Input>
                            <div className='search-section-date'>
                                <DatePicker placeholder='Seleccionar fecha' />
                            </div>
                            <div className='search-section-clearbtn'>
                                <Button type='default'>Limpiar</Button>
                                <Divider type='vertical' className='search-section-divider' style={{ borderColor: '#000000', marginLeft:15, marginRight:15 }} />
                                <Button type='default'>Ayer</Button>
                                <Button type='default'>Hoy</Button>
                                <Button type='default'>Mañana</Button>
                            </div>
                        </div>

                    </div>
                </div>



                <div className='admin-card'>
                    <div className='admin-card-container'>

                        <h2 className='admin-card-title'>Waivers Completados</h2>
                        <div className='table-section-table'>
                            <Table columns={columns} dataSource={waivers} loading={loading} rowKey="id" className='table-header' />
                        </div>

                    </div>
                </div>

            </div>

            <WaiverModal waiverId={selectedwaiver} open={modalOpen} onClose={closeModal} />

        </div>


    )

}

export default AdminPanel