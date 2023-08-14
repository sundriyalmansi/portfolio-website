import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Work from "./components/Work/Work";
import Skills from './components/Skills/Skills';

function App() {
  return (
    <>
      <div className="app">
        <Navbar/>
        <Header/>
        <Work />
        {/* <Projects/> */}
        <Skills/>
        {/* <Timeline/> */}
        

        {/* <Contact/> */}
        {/* <Footer/> */}
      </div>
    </>
  );
}

export default App;
