import AboutSection from './Components/Landing-page-components/About-section/AboutSection'
import HeroSection from './Components/Landing-page-components/Hero-section/HeroSection'
import Navbar from './Components/Landing-page-components/Navbar/Navbar'
import OurSolution from './Components/Landing-page-components/Our-solution/OurSolution'
import OurTechnologies from './Components/Landing-page-components/Our-technologies/OurTechnologies'
import SolutionAction from './Components/Landing-page-components/Solution-action/SolutionAction'

function App() {

  return (
    <div>
        <Navbar />
        <HeroSection />
        <AboutSection />
        <OurSolution />
        <SolutionAction />
        <OurTechnologies />
    </div>
  )
}

export default App
