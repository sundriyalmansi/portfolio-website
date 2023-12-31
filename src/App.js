import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
// import Work from "./components/Work/Work";
import Skills from './components/Skills/Skills';
import Timeline from './components/Timeline/Timeline';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <div className="app">
        <Navbar/>
        <Header/>
        <Skills/>
        <Timeline/>
        {/* <Work /> */}
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
