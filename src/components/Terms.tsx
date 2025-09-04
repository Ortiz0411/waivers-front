import '../styles/Terms.css';
import Logo from '../assets/rcrlogo.png';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { GoAlert } from "react-icons/go";
import { useNavigate } from 'react-router-dom';

function Terms() {

    const navigate = useNavigate();

    const formButton = () => {
        navigate('/form');
    }



    return (

        <div className='body'>

            <div className='termspage'>

                {/**  HEADER  */}
                <div className='termsheader'>
                    <div className='termsheadertitle'>
                        <img src={Logo} className='termsheaderimg' />
                    </div>
                    <h2 className='termstitle'>Terminos y Condiciones del Waiver</h2>
                    <p className='termsdescription'>Lea cuidadosamente los siguientes ...</p>
                </div>


                {/**   TERMS CONTENt   */}
                <div className='termscard'>

                    


                    {/**   CARDS CONTENT   */}
                    <div className='termscardcontent'>

                        <div className='termscontentcontainer'>

                            <p className='termsinfo'>
                                El suscrito entiende que ha hecho arreglos para una excursión de Rafting en Aguas Bravas o
                                Flotación en Río proporcionada por Rincon Corobici en Costa Rica.
                                Estoy completamente consciente de que el rafting en aguas bravas tiene peligros inherentes incluyendo
                                el riesgo de que los participantes puedan caerse de la balsa y resultar lesionados. Aunque estas
                                ocurrencias son raras, el cliente debe investigar por sí mismo los posibles peligros y riesgos
                                involucrados en su participación en el tour, sin que esto implique o autorice un reembolso.
                            </p>

                            <p className='termsinfo'>
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

                            <p className='termsinfo'>
                                Por lo tanto, el suscrito libera, descarga y acepta salvar indemne a
                                Rincon Corobici, y cualquiera de sus compañías asociadas, sus
                                representantes, cesionarios, empleados, o cualquier otra persona, corporación o corporaciones
                                para quienes, ellos puedan estar actuando sin importar cómo pueda surgir cualquier reclamo.
                                El suscrito acepta cumplir con todas las reglas, regulaciones y restricciones gubernamentales
                                durante este viaje.
                            </p>

                            <p className='termsinfo'>
                                El tour contratado o actividad, así como esta liberación de responsabilidad será gobernada
                                exclusivamente por la ley de Costa Rica. Incluso a pesar de este contrato, procedo a presentar
                                una demanda contra Rincon Corobici, y cualquiera de sus compañías
                                asociadas, sus representantes, cesionarios, empleados, o cualquier otra persona, acepto que no
                                haré bajo jurisdicción de Costa Rica, bajo su jurisdicción, para lo cual renuncio expresa y
                                voluntariamente a las leyes y jurisdicción de cualquier otro país.
                            </p>


                            <div className='termsagrements'>
                                <p className='termsconditions'>
                                    HE LEÍDO LA EXONERACIÓN Y LIBERACIÓN PRECEDENTE, ANTES DE AFIRMAR MI FIRMA ABAJO,
                                    Y GARANTIZO QUE SOY DE EDAD LEGAL Y ENTIENDO COMPLETAMENTE EL CONTENIDO Y CONSECUENCIAS
                                    DE LA MISMA, INCLUYENDO QUE ESTOY RENUNCIANDO A MIS DERECHOS DE PRESENTAR DEMANDA SI
                                    RESULTO LESIONADO.
                                </p>
                            </div>


                            <div className='termsrequirementscontainer'>
                                <div>
                                    <h4 className='termsrequirementstitle'>Información Requerida</h4>
                                    <ul className='termsrequirements'>
                                        <li>Nombre completo impreso</li>
                                        <li>Nombre completo impreso</li>
                                        <li>Nombre completo impreso</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className='termsrequirementstitle'>Para menores de 18 años</h4>
                                    <ul className='termsrequirements'>
                                        <li>Nombre completo impreso</li>
                                        <li>Nombre completo impreso</li>
                                        <li>Nombre completo impreso</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="warningcontainer">
                    <GoAlert className="warningicon" />
                    <div className="warningdescription">
                        <div className="warningtitle"><strong>Advertencia:</strong></div>
                        <div className="warningtext">
                            Rincon Corobici no es responsable por anteojos, audífonos, lentes de contacto, cámaras, dentaduras, u otros objetos de valor.
                        </div>
                    </div>
                </div>


                <div className='buttoncontainer'>
                    <button className='nextbutton' onClick={formButton}> <FaArrowRight className='buttonicon'/>Acepto los terminos - Proceder al Formulario</button>
                </div>

            </div>

        </div>
    )
}

export default Terms;