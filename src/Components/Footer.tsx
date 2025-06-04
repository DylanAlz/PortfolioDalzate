import React from "react";
import '../Styles/footer.css';

const Footer: React.FC = () => {
    return (
        <footer>
            <div className="footer-content">
                <div className="row">
                    <div className="footer-row">
                        <h3>Dylan Alzate.</h3>
                        <p>Consultor y Desarrollador Fullstack con enfoque principal en el desarrollo backend, <br/> orientado a la obtención de resultados y con pasión por resolver desafíos técnicos complejos.<br/> Me representa por mi compromiso, adaptabilidad y fuerte capacidad para el trabajo en equipo,<br/> manteniéndome en constante evolución tanto profesional como personalmente.</p>
                    </div>
                    <div className="footer-row">
                        <h3>Links</h3>
                        <ul>
                            <li>Projects</li>
                            <li>Skills</li>
                            <li>Experience</li>
                        </ul>
                    </div>
                    <div className="footer-row">
                        <h3>Servicios</h3>
                        <ul>
                            <li>Desarrollo Fullstack</li>
                            <li>Desarrollo apps de escritorio</li>
                            <li>Consultoria</li>
                            <li>Cloud development</li>
                            <li>Desarrollo abap y BTP</li>
                        </ul>
                    </div>
                    <div className="footer-row">
                        <h3>Contacto</h3>
                        <ul>
                            <li>alzatedylan@gmail.com</li>
                            <li>+57 (300) 769 1351</li>
                            <li>Medellín - Colombia</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer