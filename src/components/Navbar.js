import logo from '../img/logo.png';
import CartWidget from "./CartWidget.js";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavbarBootstrap from 'react-bootstrap/Navbar';

function Navbar() {
  return (
    <NavbarBootstrap bg="light" expand="lg" className='contenedor'>
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



// const Navbar = () => {
//   return (
//     <nav className="Navbar Navbar-expand-lg bg-light">
//       <div className="container-fluid d-flex flex-row">
//         <button className="Navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="/NavbarSupportedContent" aria-controls="NavbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
//           <span className="Navbar-toggler-icon"></span>
//         </button>
//         <a className="Navbar-brand" href="/">
//           <img src={logo} alt="Logo" width="200" height="70" className="d-inline-block align-text-top"></img>
//         </a>
//         <div className="collapse Navbar-collapse show" id="NavbarSupportedContent">
//           <ul className="Navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <a className="nav-link" href="/">Velas y bengalas</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="/">Globos</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="/">Banderines</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="/">Adornos para tortas</a>
//             </li>
//           </ul>
//         </div>
//        
//       </div>
//     </nav>
//   );
// };

// export default Navbar;