import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Header from './Components/Header'
import Slider from './Components/Slider'
import Intro from './Components/Intro'
import Languages from './Components/Languages'
import Projects from './Components/Projects'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=''  >
       <Header />
       <Intro />
       <Slider />
       {/* <Intro /> */}
       <Languages/>
       <Projects/>
       <Footer/>
    </div>
    </>
  )
}

export default App
