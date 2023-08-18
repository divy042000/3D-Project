
import { BrowserRouter } from "react-router-dom";
import {
  EarthCanvas,
  BallCanvas,
  Contact,
  Feedbacks,
  Experience,
  ComputersCanvas,
  StarsCanvas,
  About,
  Tech,
  Works,
  Hero,
  Loader,
  Navbar,
} from "./components";
function App() {
  return (
    <div>
      <BrowserRouter>
       <div className="relative z-0 bg-primary"> 
       <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
       <Navbar/>
       <Hero/>   
       </div>
       <About/>
       <Experience/>
       <Tech/>
       <Works/>
       <Feedbacks/>
       <div className="relative z-0">
        <Contact/>
        <StarsCanvas/>

       </div>
       </div>
      </BrowserRouter>
    </div>
  )
}

export default App
