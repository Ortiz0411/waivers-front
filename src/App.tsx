import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Terms from './components/Terms';
import WaiverForm from './components/WaiverForm';
import Success from './components/Success';
import Login from './components/Login';
import AdminPanel from './components/AdminPanel';



function App() {

    return (
        
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/terms' element={<Terms />} />
                <Route path='/form' element={<WaiverForm />} />
                <Route path='/success' element={<Success />} />
                <Route path='/login' element={<Login />} />
                <Route path='/admin' element={<AdminPanel />} />
            </Routes>
        </Router>

    );
}

export default App;