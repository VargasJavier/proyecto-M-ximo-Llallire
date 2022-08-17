import NavBAr from "./header/navBar/NavBar";
import Presentation from "./header/presentation/Presentation";
import "../assets/scss/base/App.scss";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";
function App() {
  return (
    <>
      <NavBAr />
      <Presentation />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
