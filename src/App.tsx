import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Terms from './components/Terms';
import WaiverForm from './components/WaiverForm';



function App() {

    return (
        
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/terms' element={<Terms />} />
                <Route path='/form' element={<WaiverForm />} />
            </Routes>
        </Router>

    );
}

export default App;