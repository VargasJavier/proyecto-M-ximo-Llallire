import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import logoAzul from "../../../assets/image/logos/azulHorizontal.png"
import { FaInstagram, FaFacebookF, FaMapMarkerAlt, FaClock } from "react-icons/fa";

function NavBar() {
  return (
    // using bootstrap for the navbar
    <>
      

        <div className="box-hora-telefono">
          <div className="linea-horizontal">

          <div className="box-ubicacion">
            <p className="ubicacion">
            <FaMapMarkerAlt size='1.5rem' />{" "} 
            Ruta 93, Chañar Ladeado, Santa Fe </p>
          </div>
          <div className="linea-vertical">

          </div>
          <div className="box-hora">
            <p className="hora">
              <FaClock size='1.5rem' />{" "}
              Lunes a Viernes de 8:00 a 18:00</p>
          </div>
          </div>
        </div>    
          <img src= {logoAzul} alt="logoAzul" className='logo-navbar'/>

      <Navbar bg='ligth' expand='lg'>
        <Container>
          {/* title  */}
        
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mx-auto'>
              <Nav.Link href='#presentacion'>NOSOTROS</Nav.Link>
              <Nav.Link href='#skills'>SERVICIOS</Nav.Link>
              <Nav.Link href='#service'>PRODUCTOS</Nav.Link>
              <Nav.Link href='#contact'>DONDE ESTAMOS?</Nav.Link>
              <Nav.Link href='#contact'>FOTOS</Nav.Link>
              <button className="button-contacto">
                <a href="#contact"><span>CONTACTO</span></a>
              </button>
            </Nav>
            <Nav className='ms-auto'>
              <Nav.Link>
                {" "}
                <FaInstagram size='2rem' />{" "}
              </Nav.Link>

              <Nav.Link>
                {" "}
                <FaFacebookF size='2rem' />{" "}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
