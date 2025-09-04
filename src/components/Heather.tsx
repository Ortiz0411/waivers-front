import logo from '../assets/rcrlogo.png';
import '../styles/Heather.css';
import { Languajes } from '../utils/Languajes';
import { CiGlobe } from "react-icons/ci";



const options = Languajes.map((languaje => ({
})))



function heather() {

    return (

        <div className='header'>
            <div className='headercontainer'>
                <div className='headerinfo'>

                    <div className='headersides'>
                        
                        <select className='headerselect'>
                            {Languajes.map((languaje) => (
                                <option key={languaje.label} value={languaje.laguaje} className='headeroption'> 
                                <CiGlobe className='headerglobe'/> <span>{languaje.label}</span> {languaje.laguaje} </option>
                            ))}
                        </select>

                        
                        <button className='footerbutton'>Admin</button>


                    </div>


                </div>
            </div>
        </div>

    );
}

export default heather;