import '../styles/Terms.css';
import Logo from '../assets/logo-rcr.png';
import { FaArrowRight } from "react-icons/fa6";
import { GoAlert } from "react-icons/go";
import { useNavigate } from 'react-router-dom';

function Terms() {
    const navigate = useNavigate();

    const formButton = () => {
        navigate('/form');
    }

    return (
        <div className="terms-body">
            <div className="terms-page">

                {/* Header */}
                <div className="terms-header">
                    <div className="terms-logo-container">
                        <img src={Logo} alt="RCR Logo" className="terms-logo" />
                    </div>
                    <h2 className="terms-title">Términos y Condiciones del Waiver</h2>
                    <p className="terms-subtitle">
                        Lea cuidadosamente los siguientes términos antes de continuar.
                    </p>
                </div>

                {/* Terms Card */}
                <div className="terms-card">
                    <div className="terms-card-content">
                        <div className="terms-text-container">

                            <p className="terms-paragraph">
                                El suscrito entiende que ha hecho arreglos para una excursión de Rafting en Aguas Bravas o
                                Flotación en Río proporcionada por Rincon Corobici en Costa Rica.
                                Estoy completamente consciente de que el rafting en aguas bravas tiene peligros inherentes incluyendo
                                el riesgo de que los participantes puedan caerse de la balsa y resultar lesionados. Aunque estas
                                ocurrencias son raras, el cliente debe investigar por sí mismo los posibles peligros y riesgos
                                involucrados en su participación en el tour, sin que esto implique o autorice un reembolso.
                            </p>

                            <p className="terms-paragraph">
                                El suscrito conoce y voluntariamente asume los riesgos del Rafting en Aguas Bravas o Flotación
                                en Río, demandas, causas de acción o demandas de cualquier tipo contra
                                Rincon Corobici y cualquiera de sus compañías asociadas, sus empleados
                                y oficiales por cualquier lesión, enfermedad o pérdida material que pueda surgir de mi participación
                                voluntaria en este viaje. El suscrito conoce y voluntariamente asume los riesgos del Rafting en
                                Aguas Bravas o Flotación en Río en los alrededores del río Corobicí, río Tenorio, río Sarapiquí,
                                río Aguacate o cualquier otro Rafting en Aguas Bravas o Flotación en Río no mencionado aquí, visitado
                                durante el tour para cualquier reclamo hecho en su nombre contra Rincon Corobici,
                                o cualquiera de sus compañías asociadas.
                            </p>

                            <p className="terms-paragraph">
                                Por lo tanto, el suscrito libera, descarga y acepta salvar indemne a
                                Rincon Corobici, y cualquiera de sus compañías asociadas, sus
                                representantes, cesionarios, empleados, o cualquier otra persona, corporación o corporaciones
                                para quienes, ellos puedan estar actuando sin importar cómo pueda surgir cualquier reclamo.
                                El suscrito acepta cumplir con todas las reglas, regulaciones y restricciones gubernamentales
                                durante este viaje.
                            </p>

                            <p className="terms-paragraph">
                                El tour contratado o actividad, así como esta liberación de responsabilidad será gobernada
                                exclusivamente por la ley de Costa Rica. Incluso a pesar de este contrato, procedo a presentar
                                una demanda contra Rincon Corobici, y cualquiera de sus compañías
                                asociadas, sus representantes, cesionarios, empleados, o cualquier otra persona, acepto que no
                                haré bajo jurisdicción de Costa Rica, bajo su jurisdicción, para lo cual renuncio expresa y
                                voluntariamente a las leyes y jurisdicción de cualquier otro país.
                            </p>

                            <div className="terms-agreement">
                                <p className="terms-agreement-text">
                                    HE LEÍDO LA EXONERACIÓN Y LIBERACIÓN PRECEDENTE, ANTES DE AFIRMAR MI FIRMA ABAJO,
                                    Y GARANTIZO QUE SOY DE EDAD LEGAL Y ENTIENDO COMPLETAMENTE EL CONTENIDO Y CONSECUENCIAS
                                    DE LA MISMA, INCLUYENDO QUE ESTOY RENUNCIANDO A MIS DERECHOS DE PRESENTAR DEMANDA SI
                                    RESULTO LESIONADO.
                                </p>
                            </div>

                            <div className="terms-requirements-wrapper">
                                <div>
                                    <h4 className="terms-requirements-title">Información Requerida</h4>
                                    <ul className="terms-requirements-list">
                                        <li>Nombre completo impreso</li>
                                        <li>Firma del participante</li>
                                        <li>Fecha de la actividad</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="terms-requirements-title">Para menores de 18 años</h4>
                                    <ul className="terms-requirements-list">
                                        <li>Nombre completo impreso del menor</li>
                                        <li>Firma del padre, madre o tutor</li>
                                        <li>Relación con el menor</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Warning Box */}
                <div className="terms-warning">
                    <GoAlert className="terms-warning-icon" />
                    <div className="terms-warning-textbox">
                        <div className="terms-warning-title"><strong>Advertencia:</strong></div>
                        <div className="terms-warning-message">
                            Rincon Corobici no es responsable por anteojos, audífonos, lentes de contacto,
                            cámaras, dentaduras, u otros objetos de valor.
                        </div>
                    </div>
                </div>

                {/* Button */}
                <div className="terms-button-container">
                    <button className="terms-next-button" onClick={formButton}>
                        <FaArrowRight className="terms-button-icon"/>Acepto los términos - Proceder al Formulario
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Terms;
