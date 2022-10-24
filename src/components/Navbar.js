import logo from '../img/logo.png';
import CartWidget from "./CartWidget.js";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavbarBootstrap from 'react-bootstrap/Navbar';

function Navbar() {
  return (
    <NavbarBootstrap bg="light" expand="lg" sticky="top">
      <Container className="success d-flex flex-row">
        <NavbarBootstrap.Toggle aria-controls="basic-Navbar-nav" />
        <NavbarBootstrap.Brand className="text-center" href="#home">
          <img src={logo} alt="Logo" width="200" height="70" className="d-inline-block align-text-top"></img>
        </NavbarBootstrap.Brand>
        <NavbarBootstrap.Collapse id="basic-Navbar-nav">
          <Nav className="me-auto text-center">
            <Nav.Link href="#velasVengalas">Velas y bengalas</Nav.Link>
            <Nav.Link href="#globos">Globos</Nav.Link>
            <Nav.Link href="#banderines">Banderines</Nav.Link>
            <Nav.Link href="#adornosTortas">Adornos para tortas</Nav.Link>
          </Nav>
        </NavbarBootstrap.Collapse>
        <div className='shoping cart cart' id="carrito">
          <CartWidget/>
        </div>
      </Container>
    </NavbarBootstrap>
  );
}

export default Navbar;