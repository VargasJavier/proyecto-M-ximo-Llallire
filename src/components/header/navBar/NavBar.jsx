import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

function NavBar() {
  return (
    // using bootstrap for the navbar
      <Navbar bg='ligth' expand='lg'>
        <Container>
          {/* title  */}
          <h1 className='title-navbar' href='#home'>
            &lt;Max-Llallire/&gt;
          </h1>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mx-auto'>
              <Nav.Link href='#home'>QUIEN SOY</Nav.Link>
              <Nav.Link href='#link'>HABILIDADES</Nav.Link>
              <Nav.Link href='#link'>SERVICIOS</Nav.Link>
              <Nav.Link href='#link'>CONTACTO</Nav.Link>
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
  );
}

export default NavBar;
