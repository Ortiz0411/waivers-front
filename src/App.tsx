import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Home from './components/Home'
import Terms from './components/Terms'
import WaiverForm from './components/WaiverForm'
import Success from './components/Success'
import Login from './components/Login'
import AdminPanel from './components/AdminPanel'
import './utils/i18n'


// URL Backend
const API_URL = import.meta.env.VITE_API_URL


// Al cargar una pagina, empezamos desde arriba
function StartOnTop() {
    const { pathname } = useLocation()
    useEffect(() => { window.scrollTo(0, 0) }, [pathname])
    return null
}


/**
 * Protege ruta privada.
 * - Verifica si hay sesion valida, si hay -> muestra children, no hay -> redirige /login
 */
function IsAuth({ children }: { children: React.ReactNode }) {
    const [ok, setOk] = useState<boolean | null>(null)

    useEffect(() => {
        fetch(`${API_URL}/api/auth/me`, { credentials: "include" })
            .then(res => setOk(res.ok))
            .catch(() => setOk(false))
    }, [])

    if (ok === null) return null
    return ok ? children : <Navigate to="/login" replace />
}


/**
 * Router, rutas desconocidas redirigen al /
 */
function App() {

    return (

        <Router>
            <StartOnTop />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/terms' element={<Terms />} />
                <Route path='/form' element={<WaiverForm />} />
                <Route path='/success' element={<Success />} />
                <Route path='/login' element={<Login />} />
                <Route path='/admin' element={<IsAuth> <AdminPanel /> </IsAuth>} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Router>

    )
}

export default App