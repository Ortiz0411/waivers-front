import '../styles/Header.css';
import { RiAdminLine } from "react-icons/ri";
import { Languajes } from '../utils/Languajes';
import { Select } from 'antd'
import { useNavigate } from 'react-router-dom';


const Header: React.FC = () => {

    const { Option } = Select

    const navigate = useNavigate()

    const loginButton = () => {
        navigate('/login')
    }

    return (
        <header className="header">
            <div className="header-container">
                <div className="header-info">
                    <div className="header-sides">

                        <Select defaultValue={Languajes[0].languaje} className='header-select' style={{ minWidth: 120 }}>
                            {Languajes.map((languaje) => (
                                <Option key={languaje.languaje} value={languaje.languaje}>
                                    <span className='option-content'>
                                        <span className='lang-label'>{languaje.label}</span>
                                        <span className='lang-code'>{languaje.languaje}</span>
                                    </span>

                                </Option>
                            ))}
                        </Select>

                        <button className="admin-button" onClick={loginButton}><RiAdminLine className='admin-icon' />Panel Admin</button>
                    </div>
                </div>
            </div>
        </header>

    );
};

export default Header;