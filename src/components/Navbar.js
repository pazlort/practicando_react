import logo from '../img/logo.png';
import CartWidget from "./CartWidget.js";

let desplegable = document.querySelector("#navbarSupportedContent");

function toggleMenu() {
   if (desplegable.classList.value === 'collapse navbar-collapse show' ) {
    desplegable.classList.value = 'collapse navbar-collapse';
   } else if (desplegable.classList.value === 'collapse navbar-collapse' ) {
    desplegable.classList.value = 'collapse navbar-collapse show';
   };
};

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <button className="navbar-toggler collapsed" type="button" onClick={toggleMenu} data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="/">
          <img src={logo} alt="Logo" width="200" height="70" className="d-inline-block align-text-top"></img>
        </a>
        <div className="collapse navbar-collapse show" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/">Velas y bengalas</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Globos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Banderines</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Adornos para tortas</a>
            </li>
          </ul>
        </div>
        <CartWidget/>
      </div>
    </nav>
  );
};

export default Navbar;