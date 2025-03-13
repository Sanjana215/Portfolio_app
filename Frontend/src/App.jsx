import Sidebar from "./Component/Sidebar"
import Profile from "./Component/Profile"
import About from "./Component/About"
import Skills from "./Component/Skills"
import Projects from "./Component/Projects"
import Education from "./Component/Education"
import Experience from "./Component/Experience"
import Contact from "./Component/Contact"
import { useColorMode } from "@/components/ui/color-mode"
import Mobilenav from "./Component/Mobilenav"



export default function App()
{ const { toggleColorMode } = useColorMode()
  return(
    <>
        <Mobilenav/>
        <Sidebar/>
        <Profile/>
        <About/>
        <Skills />
        <Projects/>
        <Education />
        <Experience/>
        <Contact/>
       
         
    </>
    
    
    
  )
}