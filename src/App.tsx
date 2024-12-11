import { About } from "./Components/About"
import { Contact } from "./Components/Contact"
import { Footer } from "./Components/Footer"
import { Home } from "./Components/Home"
import { NavBar } from "./Components/NavBar"
import { Projects } from "./Components/Projects"
import { Skill } from "./Components/Skill"


function App() {

  return (
    <div className="">
      <NavBar />
      <Home />
      <About />
      <Skill />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
