import Menubar from './Components/MenuBar'
import MainContent from './Components/MainContent'
import Footer from './Components/Footer'
import React from 'react'

const App: React.FC = () => {
  return (
    <>
      <Menubar />
      <MainContent />
      <Footer />
    </>
  )
}

export default App
