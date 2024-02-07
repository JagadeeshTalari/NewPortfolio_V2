import './App.css'
import About from './Components/About/About'
import Articles from './Components/Articles/Articles'
import Certifications from './Components/Certifications/Certifications'
import Footer from './Components/Footer/Footer'
import HeroSection from './Components/HeroSection'
import Navbar from './Components/Navbar/Navbar'
import Projects from './Components/Projects/Projects'
import SelfIntroducing from './Components/SelfIntroducing/SelfIntroducing'


function App() {
  return (
   <>
    <Navbar/>
    <div className="d-flex layout">
      <SelfIntroducing/>
      {/* <div className='dividerLine'></div> */}
      <div className='aboutDetails'>
        <HeroSection/>
        <About/>
        <Projects/>
        <Certifications/>
        <Articles/>
      </div>
    </div>
    <Footer/>
   </>
  )
}

export default App
