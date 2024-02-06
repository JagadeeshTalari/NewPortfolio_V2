import './App.css'
import About from './Components/About/About'
import HeroSection from './Components/HeroSection'
import Navbar from './Components/Navbar/Navbar'
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
   </>
  )
}

export default App
