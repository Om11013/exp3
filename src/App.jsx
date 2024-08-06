import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Footer from './Footer'
import HeroSection from './HeroSection'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Navbar />
      <h1>Hi There, Welcome to Om's Page</h1>
      <h2>Current Branch</h2>
      <HeroSection/>
      <Footer/>
    </>
  )
}
export default App