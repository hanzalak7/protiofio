 import './App.scss';
import Navbar from "./componant/Navbar";
import About from './componant/About'; 
import Projects from './componant/Projects/Projects.js'; 
import Achivments from './componant/Achivments/Achivments.js'; 
import Footer from "./componant/Footer";

function App() {
  return (
    <>    
    <Navbar/>
    <About/>
    <Projects/>
    <Achivments/>
    <Footer/>
    </>
  );
}

export default App;
