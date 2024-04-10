import { useState } from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import './styles/resets.scss'
import './styles/normalise.scss'
import MainSection from './components/MainSection/MainSection'

function App() {

  return (
    <>
    <Sidebar />
    <MainSection />
    </>
  )
}

export default App
