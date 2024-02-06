import './App.css'
import About from './Components/About/About'
import Certifications from './Components/Certifications/Certifications'
import HeroSection from './Components/HeroSection'
import Navbar from './Components/Navbar/Navbar'
import Projects from './Components/Projects/Projects'
import SelfIntroducing from './Components/SelfIntroducing/SelfIntroducing'


function App() {
  return (
   <>
   <Navbar/>
   <div className="d-flex">
   <SelfIntroducing/>
   <HeroSection/>
   </div>
   <About/>
   <Projects/>
   <Certifications/>
   </>
  )
}

export default App
