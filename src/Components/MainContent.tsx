import React from 'react';
import Spline from '@splinetool/react-spline';
import '../Styles/mainContent.css';

const MainContent: React.FC = () => {
  return (
    <>
      <div className='main-presentation'>
        <Spline scene="https://prod.spline.design/oyUPCKgmrWzmmzLq/scene.splinecode" className='animated-bg' />
        <div className='typewriter'>
          <h1>Dylan Alzate Betancur.</h1>
        </div>
        <h4>Software developer</h4>
      </div>
      <div className='about-me-container'>
        <img src="src\Assets\dalzatephoto.jpg" alt="" />
        <div className='about-me-container-content'>
          <h1>Sobre mi</h1>
          <p>
            Consultor y Desarrollador Fullstack con enfoque principal en el desarrollo backend, orientado a la obtención de resultados y con pasión por resolver desafíos técnicos complejos. Me representa por mi compromiso, adaptabilidad y fuerte capacidad para el trabajo en equipo, manteniéndome en constante evolución tanto profesional como personalmente.
            <br />
            Poseo experiencia sólida en lenguajes y frameworks backend como Python con Django, ABAP, Go con Gin y C# con .NET Framework. así como en el diseño e implementación de bases de datos SQL y NoSQL. También tengo experiencia desarrollando APIs RESTful y soluciones en la nube con AWS.
            <br />
            Destaco mis habilidades en resolución de problemas y mi enfoque proactivo hacia el desarrollo frontend con React, lo que me permite abordar soluciones de extremo a extremo de forma integral.
            <br />
            Mi objetivo es seguir creciendo en entornos dinámicos, aportando valor a todos los equipos donde participe y siempre con una mentalidad de mejora continua.
          </p>
        </div>
      </div>
      <div className='technologies-container'>
        <h1>Habilidades</h1>
        <br />
        <div className='slider'>
          <div className="slide-track">

            <div className="slide">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
            </div>

            <div className="slide">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" alt="Django" />
            </div>

            <div className="slide">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg" alt="Go" />
            </div>

            <div className="slide">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" />
            </div>

            <div className="slide">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="C#" />
            </div>

            <div className="slide">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
            </div>

            <div className="slide">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
            </div>

            <div className="slide">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" alt="AWS" />
            </div>

            <div className="slide">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-original.svg" alt="Trello" />
            </div>

            <div className="slide">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dynamodb/dynamodb-original.svg" alt="DynamoDB" />
            </div>

            <div className="slide">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/filezilla/filezilla-original.svg" alt="Filezilla" />
            </div>

            <div className="slide">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" alt="jira" />
            </div>

            <div className="slide">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="visualstudio" />
            </div>

            <div className="slide">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain-wordmark.svg" alt="sql" />
            </div>

            <div className="slide">
              <img src="src/Assets/SAP_ABAP.png " alt="ABAP" />
            </div>

            {/* Repetimos el contenido para efecto de slider */}

            <div className="slide">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
            </div>

            <div className="slide">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" alt="Django" />
            </div>

            <div className="slide">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg" alt="Go" />
            </div>

            <div className="slide">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" />
            </div>

            <div className="slide">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="C#" />
            </div>

            <div className="slide">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
            </div>

            <div className="slide">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
            </div>

            <div className="slide">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" alt="AWS" />
            </div>

            <div className="slide">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-original.svg" alt="Trello" />
            </div>

            <div className="slide">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dynamodb/dynamodb-original.svg" alt="DynamoDB" />
            </div>

            <div className="slide">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/filezilla/filezilla-original.svg" alt="Filezilla" />
            </div>

            <div className="slide">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" alt="jira" />
            </div>

            <div className="slide">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="visualstudio" />
            </div>

            <div className="slide">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain-wordmark.svg" alt="sql" />
            </div>

            <div className="slide">
              <img src="src/Assets/SAP_ABAP.png " alt="ABAP" />
            </div>

          </div>
        </div>
      </div>
      <div className='experience-container'>
        <h1> Experiencia </h1>
        <div className='experience-container-content'>
          <div className='experience-card'>
            <h2>Junior developer</h2>
            <h3>ITA</h3>
            <p>2024 - Actualidad</p>
            <p>Desarrollo de aplicaciones backend en Python y ABAP, así como la implementación de soluciones en la nube con AWS e integración de interfaces frontend con React ⚛.</p>
          </div>
        </div>
      </div>
      <div>
        <h1> Proyectos </h1>
        <div className='projects-container'>
          <div className='project-card'>
            <h2>Proyecto 1</h2>
            <p>Descripción del proyecto 1.</p>
          </div>
          <div className='project-card'>
            <h2>Proyecto 2</h2>
            <p>Descripción del proyecto 2.</p>
          </div>
          <div className='project-card'>
            <h2>Proyecto 3</h2>
            <p>Descripción del proyecto 3.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContent;


