
import './App.css';
import Parti from './tsparticle/particles';
import Navbar from './components/Navbar';
import Information from "./components/Information";
import AboutMe from './components/about_me';
import Projects from './components/project/projects';
function App() {
  return (
    <>
      <Navbar/>
      <Information/>
      <AboutMe/>
    <Projects/>
  <Parti/>
</>
  );
}

export default App;
