import React from 'react';
import Spline from '@splinetool/react-spline';
import '../Styles/mainContent.css';

const MainContent: React.FC = () => {
  return (
    <>
      <div className='main-presentation'>
        <Spline scene="https://prod.spline.design/oyUPCKgmrWzmmzLq/scene.splinecode" className='animated-bg'/>
        <div className='typewriter'>
          <h1>Dylan Alzate Betancur.</h1>
        </div> 
        <h4>Software developer</h4>
      </div>
      <div className='about-me-container'>
        <img src="src\Assets\dalzatephoto.jpg" alt=""/>
        <div className='about-me-container-content'>
          <h1>Sobre mi</h1>
          <p>
          Consultor y Desarrollador Fullstack con enfoque principal en el desarrollo backend, orientado a la obtención de resultados y con pasión por resolver desafíos técnicos complejos. Me defino por mi compromiso, adaptabilidad y fuerte capacidad para el trabajo en equipo, manteniéndome en constante evolución tanto profesional como personalmente.
          <br />
          Poseo experiencia sólida en lenguajes y frameworks backend como Python con Django, ABAP, Go con Gin, Java y C# con .NET Framework, así como en el diseño e implementación de bases de datos SQL y NoSQL. También tengo experiencia desarrollando APIs RESTful y soluciones en la nube con AWS.
          <br />
          Además, destaco mis habilidades en resolución de problemas y mi enfoque proactivo hacia el desarrollo frontend con React, lo que me permite abordar soluciones de extremo a extremo de forma integral.
          <br />
          Mi objetivo es seguir creciendo en entornos dinámicos, aportando valor desde la tecnología y siempre con una mentalidad de mejora continua.</p>
        </div>
      </div>
      <div className='technologies-container'>
        <h1>Tecnologias</h1>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" alt="Django" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg" alt="Go" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="C#" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" alt="AWS" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-original.svg" alt="Trello" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dynamodb/dynamodb-original.svg" alt="DynamoDB" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/filezilla/filezilla-original.svg" alt="Filezilla" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" alt="jira" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="visualstudio" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain-wordmark.svg" alt="sql" />
          <img src="src\Assets\SAP_ABAP.png " alt="ABAP" />
      </div>
    </>
  );
};

export default MainContent;


