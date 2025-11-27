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


// Start from the top at loading page
function StartOnTop() {
    const { pathname } = useLocation()
    useEffect(() => { window.scrollTo(0, 0) }, [pathname])
    return null
}


/**
 * Protect private route.
 * - Check if there is a valid session, if there is then display children, if not, redirect to /login
 */
function IsAuth({ children }: { children: React.ReactNode }) {
    const [ok, setOk] = useState<boolean | null>(null)

    useEffect(() => {

        const checkAuth = async () => {
            const token = localStorage.getItem("login_token")

            if (!token) {
                setOk(false)
                return
            }

            try {
                
                const res = await fetch(`${API_URL}/api/auth/me`, {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })

                if (!res.ok) {
                    localStorage.removeItem("login_token")
                    setOk(false)
                    return
                }

                setOk(true)
            } catch (err) {
                setOk(false)
            }
        }

        checkAuth()
    }), []

    if (ok === null) return null
    return ok ? <>{children}</> : <Navigate to="/login" replace />
}


/**
 * Router, unknown routes redirect to home
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