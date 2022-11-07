import logo from '../img/logo.png';
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget.js";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavbarBootstrap from 'react-bootstrap/Navbar';

function Navbar() {
  return (
    <NavbarBootstrap bg="light" expand="lg" sticky="top">
      <Container>
          <NavbarBootstrap.Toggle aria-controls="basic-Navbar-nav" className='order-lg-1'/>
            <NavbarBootstrap.Brand className='order-lg-0'>
            <Link to={`/`}>
              <img src={logo} alt="Logo" width="200" height="70" className="d-inline-block align-text-top"></img>
              </Link>
            </NavbarBootstrap.Brand>
            <CartWidget/>
          <NavbarBootstrap.Collapse id="basic-Navbar-nav">
            <Nav className="me-auto text-center">
              <Nav.Link><Link to={`/category/4`} className='linksNabar'>Velas y bengalas</Link></Nav.Link>
              <Nav.Link><Link to={`/category/1`} className='linksNabar'>Globos</Link></Nav.Link>
              <Nav.Link><Link to={`/category/2`} className='linksNabar'>Banderines</Link></Nav.Link>
              <Nav.Link><Link to={`/category/3`} className='linksNabar'>Adornos para tortas</Link></Nav.Link>
            </Nav>
          </NavbarBootstrap.Collapse>
      </Container>
    </NavbarBootstrap>
  );
}

export default Navbar;