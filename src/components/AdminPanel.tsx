import { Button, DatePicker, Input, Divider, Table, Tag } from "antd"
import "../styles/AdminPanel.css"
import Logo from '../assets/logo-rcr.png'
import { useEffect, useMemo, useState } from "react"
import dayjs, { Dayjs } from "dayjs"
import WaiverModal from "./WaiverModal"
import { MdOutlineRemoveRedEye, MdOutlineFileDownload, MdLogout } from "react-icons/md"
import { useNavigate } from "react-router-dom"


type waiver = {
    id: number
    name: string
    //email: string
    legal_guardian: string
    tour_date: string
    created_at: string
    risk_level: string
}


const AdminPanel: React.FC = () => {


    const navigate = useNavigate()

    const [waivers, setWaivers] = useState<waiver[]>([])
    const [loading, setLoading] = useState(false)

    const [selectedwaiver, setSelectedwaiver] = useState<number | null>(null)
    const [modalOpen, setModalOpen] = useState(false)

    const [search, setSearch] = useState("")
    const [date, setDate] = useState<Dayjs | null>(null)

    // Normalize search text
    const normalize = (text: string) => (text).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")

    const formatDate = (date?: string | Dayjs | null) => date ? dayjs(date).format('YYYY-MM-DD') : ''

    // Filter results with useMemo
    const searchWaiver = useMemo(() => {
        const text = normalize(search.trim())
        return waivers.filter(w => {
            const byText = !text || normalize(w.name).includes(text) //|| normalize(w.email).includes(text)
            const byDate = !date || formatDate(w.tour_date) === formatDate(date)
            return byText && byDate
        })
    }, [waivers, search, date])


    // Risk label, according to risk level
    const riskTag = (risk: string) => {
        switch (risk) {
            case 'Bajo': return <Tag color="green">Bajo</Tag>
            case 'Medio': return <Tag color="yellow">Medio</Tag>
            case 'Alto': return <Tag color="red">Alto</Tag>
        }
    }


    // Open modal with complete information
    const openwaiver = (w: waiver) => {
        setSelectedwaiver(w.id)
        setModalOpen(true)
    }
    // Close modal with complete information
    const closeModal = () => {
        setSelectedwaiver(null)
        setModalOpen(false)
    }



    // Load all waivers
    useEffect(() => {
        const loadwaivers = async () => {
            try {
                setLoading(true)
                const res = await fetch(`${import.meta.env.VITE_API_URL}/api/waivers`, { credentials: 'include' })
                const data = await res.json()
                setWaivers(data)
            } catch (err) {
                console.error(err)
            } finally {
                setLoading(false)
            }
        }
        loadwaivers()
    }, [])


    // Download the waiver in PDF format
    const pdfDownload = async (value: waiver) => {

        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/waivers/${value.id}/pdf`, {
            credentials: 'include'
        })

        const blob = await res.blob()
        const url = window.URL.createObjectURL(blob)

        const doc = document.createElement('a')
        doc.href = url
        doc.download = `Waiver-${value.name}.pdf`
        document.body.appendChild(doc)
        doc.click()
        doc.remove()
        window.URL.revokeObjectURL(url)
    }


    // Columns definition 
    const columns = [
        {
            title: 'Participante', dataIndex: 'name', key: 'name',
            render: (_: any, value: waiver) => (
                <div>
                    <div className='waiver-info-name'>{value.name}</div>
                    {/** <div className='waiver-info-email'>{value.email}</div> */}

                    <div className="waiver-info-tags">
                        {value.legal_guardian !== 'Adulto' && (<Tag color="default" >Es menor</Tag>)}
                        <span className="waiver-risk-mobile">{riskTag(value.risk_level)}</span>
                    </div>

                    {/** Different distribution on mobile devices */}
                    <div className="waiver-info-name-mobile">
                        <Button size="small" onClick={() => openwaiver(value)}>
                            <MdOutlineRemoveRedEye size={16} />
                        </Button>
                        <Button size="small" onClick={() => pdfDownload(value)}>
                            <MdOutlineFileDownload size={16} />
                        </Button>
                    </div>
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

                    {/** Buttons to view and download the waiver */}
                    <Button size='middle' onClick={() => openwaiver(value)}>
                        <MdOutlineRemoveRedEye size={16} />
                    </Button>
                    <Button size='middle' onClick={() => pdfDownload(value)}>
                        <MdOutlineFileDownload size={16} />
                    </Button>
                </div>
            )
        }
    ]


    {/** Log out from the backend */}
    const logout = async () => {
        try {
            await fetch(`${import.meta.env.VITE_API_URL}/api/auth/logout`, {
                method: 'POST',
                credentials: 'include',
            })
        } finally {
            navigate('/login', { replace: true })
        }
    }


    return (

        <div className='body-admin'>
            <div className='admin-page'>


                <div className='admin-page-header'>
                    <h1 className='admin-page-header-title'><img src={Logo} className="admin-page-logo" /></h1>
                    <button className='logout-btn' onClick={logout}> <MdLogout className="logout-icon"/> Logout</button>
                </div>


                <div className='admin-card'>
                    <div className='admin-card-container'>

                        <h2 className='admin-card-title'>Buscar</h2>
                        <div className='search-container'>
                            <Input value={search} onChange={(e) => setSearch(e.target.value)} allowClear placeholder="Nombre" className='search-text-input'></Input>
                            <div className='search-section-date'>
                                <DatePicker placeholder='Seleccionar fecha' value={date} onChange={(d) => setDate(d)} allowClear showToday={false} presets={[
                                    { label: 'Ayer', value: dayjs().subtract(1, 'day') },
                                    { label: 'Hoy', value: dayjs() },
                                    { label: 'Mañana', value: dayjs().add(1, 'day') },
                                ]} />
                            </div>
                            <div className='search-section-clearbtn'>
                                <Button type='default' onClick={() => {setSearch(''), setDate(null)}}>Limpiar</Button>
                                <Divider type='vertical' className='search-section-divider' style={{ borderColor: '#000000', marginLeft: 15, marginRight: 10 }} />
                                <span className="result-count">Mostrando: {searchWaiver.length}</span>
                            </div>
                        </div>

                    </div>
                </div>



                <div className='admin-card'>
                    <div className='admin-card-container'>
                        <h2 className='admin-card-title'>Waivers Completados</h2>
                        <div className='table-section-table'>
                            <Table columns={columns} dataSource={searchWaiver} loading={loading} rowKey="id" className='table-header' />
                        </div>

                    </div>
                </div>

            </div>

            <WaiverModal waiverId={selectedwaiver} open={modalOpen} onClose={closeModal} />

        </div>


    )
}

export default AdminPanel