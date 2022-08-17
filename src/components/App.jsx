// SASS
import NavBAr from "./header/navBar/NavBar";
import "../assets/scss/base/App.scss";

// COMPONENTS 
import Presentation from "./header/presentation/Presentation";
import Skills from "./main/skills";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";
function App() {
  return (
    <>
      <NavBAr />
      <Presentation />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
