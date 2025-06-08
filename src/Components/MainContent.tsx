import React from 'react';
import Spline from '@splinetool/react-spline';
import '../Styles/mainContent.css';
import dalzatephoto from '../Assets/dalzatephoto.jpg';
import abaplogo from '../Assets/SAP_ABAP.png';

const MainContent: React.FC = () => {
  return (
    <>
      <div className='main-presentation'>
        <Spline scene="https://prod.spline.design/oyUPCKgmrWzmmzLq/scene.splinecode" className='animated-bg' />
        <div className='typewriter'>
          <h1>Dylan Alzate Betancur.</h1>
        </div>
        <h4>Fullstack developer</h4>
      </div>
      <section id='sobre-mi'><br />
        <div className='about-me-container'>
          <img src={dalzatephoto} alt="" />
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
      </section>
      <section id='experiencia'>
        <div className='experience-container'>
          <h1 style={{ paddingBottom: '2rem' }}> Experiencia </h1>
          <div className='experience-card'>
            <h2 style={{
              marginBottom: '-1rem'
            }}>Junior developer</h2>
            <div className='experience-card-header'>
              <h5>ITA</h5>
              <p>2024 - Actualidad</p>
            </div>
            <div className="experience-card-content">
              <p>Desarrollo de aplicaciones backend en Python y ABAP, así como la implementación de soluciones en la nube con AWS e integración de interfaces frontend con React.</p>
              <button>React</button>
              <button>Python</button>
              <button>AWS</button>
              <button>SQLite</button>
              <button>Abap</button>
            </div>
          </div>
        </div>
      </section>
      <section id='habilidades'>
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
                <img src={abaplogo} alt="ABAP" />
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
                <img src={abaplogo} alt="ABAP" />
              </div>

            </div>
          </div>
        </div>
      </section>

      <section id='proyectos'><br />
        <h1 style={{ textAlign: 'center' }}> Proyectos </h1>
        <div className='projects-container'>
          <div className='project-card-left'>
            <h2>ITASIA - Frontend</h2>
            <p>Responsable del desarrollo completo del frontend para el proyecto itasia.</p>
            <p>Construcción de interfaces, implementación funcionalidades clave como: autenticación, formularios dinámicos, consumo de APIs REST, dashboards y gráficos.</p> <br />
            <div className='project-card-content'>
              <button>React</button>
              <button>Typescript</button>
            </div>
          </div>
          <div className='project-card-right'>
            <h2>ITASIA - Backend</h2>
            <p>Encargado del modulo de autenticacion, envio de correos, CRUD de usuarios y generación de graficas. </p>
            <br />
            <div className='project-card-content'>
              <button>Python</button>
              <button>RestAPI</button>
              <button>Postman</button>
              <button>JWT</button>
              <button>AWS Lambda</button>
              <button>Stepfunctions</button>
              <button>NoSQL(DynamoDB)</button>
            </div>
          </div>
          <div className='project-card-left'>
            <h2>Prueba concepto Chatbot</h2>
            <p>Prueba concepto de un chatbot de whats'app para el pago de SOAT conectado al sistema sap </p><p>de la Gobernación de Antioquia por medio del consumo de un web service tipo SOAP creado desde ABAP.</p><br />
            <div className='project-card-content'>
              <button>Python(Flask)</button>
              <button>Web Service(abap SOAP)</button>
            </div>
          </div>
          <div className='project-card-right'>
            <h2>Odata creación de materiales</h2>
            <p>Encargado de la creación de Odata para la creación de materiales en un sistema sap desde SAP Build Apps.</p><br />
            <div className='project-card-content'>
              <button>REST Odata</button>
              <button>Sap ABAP</button>
            </div>
          </div>
          <div className='project-card-left'>
            <h2>Build day Haceb</h2>
            <p>Responsable de dictar la capacitacion sobre las herramientas low-code de sap en la nube para ©Haceb e ©ITA.</p><br />
            <div className='project-card-content'>
              <button>SAP BTP</button>
              <button>SAP Build</button>
              <button>REST Odata</button>
            </div>
          </div>
          <div className='project-card-right'>
            <h2>POC ITA-SIA</h2>
            <p>Prueba concepto inicial del programa ITA-SIA para el analisis de los programas custom.</p><br />
            <div className='project-card-content'>
              <button>Django</button>
              <button>SAP Abap</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainContent;


