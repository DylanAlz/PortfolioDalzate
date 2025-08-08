import Menubar from './Components/MenuBar'
import MainContent from './Components/MainContent'
import Footer from './Components/Footer'
import React from 'react'

const App: React.FC = () => {
  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Dylan Alzate Betancur",
          "jobTitle": "Fullstack Developer",
          "description": "Consultor y Desarrollador Fullstack con enfoque principal en el desarrollo backend",
          "url": "https://portfolio-dalzate.vercel.app/",
          "sameAs": [
            "https://github.com/DylanAlz",
            "https://www.linkedin.com/in/dylan-styv-alzate-betancur-b30302263/"
          ]
        })}
      </script>
      <Menubar />
      <MainContent />
      <Footer />
    </>
  )
}

export default App
