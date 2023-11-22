import About from './Components/About'
import Contact from './Components/Contact'
import Header from './Components/Header'
import Portfolio from './Components/Portfolio'
import Services from './Components/Services'
import Skills from './Components/Skills'
import Slider from './Components/Slider'

function App() {
  return (
    <div className='p-0 m-0 box-border bg-black overflow-hidden text-white'>
      <Header/>
  <Slider/>
  <About/>
  <Skills/>
  <Services/>
  <Portfolio/>
  <Contact/>
    </div>
  )
}

export default App
