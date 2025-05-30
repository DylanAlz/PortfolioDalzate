import React from "react";
import '../Styles/footer.css';

const Footer: React.FC = () => {
    return (
        <footer>
            <div className="footer-content">
            <div className="footer-section">
                <h1>Dylan Alzate.</h1>
            </div>
            <div className="footer-card">
                <h3>Links</h3>
                <ul>
                    <li>Projects</li>
                    <li>Skills</li>
                    <li>Experience</li>
                </ul>
            </div>
            </div>
        </footer>
    )
}

export default Footer