import { Link } from "react-router-dom";
import footerImg from "./../assets/footer-img1.png";

function Footer() {
  const style = {
    color: "#ffffff",
    backgroundColor: 'rgb(0, 128, 55)',
    padding: '25px 15px',
    marginTop: '40px',
    borderRadius: '0 0 4px 4px'
  };

  let navLinks = [
    "agronomia-y-medio-ambiente",
    "urbanismo-y-catastro",
    "administrativa-financiera",
    "desarrollo-humano",
  ];
  
  let dropdownMenu = [
    "Dirección de Agronomía y Medio Ambiente",
    "Dirección Urbanismo y Catástro",
    "Dirección Administrativa Financiera",
    "Desarrollo Humano",
  ];

  return (
    <div className="container" style={style}>
      <div className="row align-items-center justify-content-center text-center text-md-left">
        <div className="col-12 col-md-4 mb-3 mb-md-0 d-flex justify-content-center">
          <img 
            className="img-fluid rounded" 
            src={footerImg} 
            alt="GAM Pasorapa" 
            style={{ maxHeight: "120px", width: "auto" }} 
          />
        </div>
        
        <div className="col-12 col-md-4 mb-3 mb-md-0">
          <ul className="nav flex-column align-items-center align-items-md-start">
            <li className="nav-item">
              <Link to="/" className="nav-link text-light font-weight-bold p-1" style={style}>
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/gaceta" className="nav-link text-light font-weight-bold p-1" style={style}>
                Gaceta
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contacto" className="nav-link text-light font-weight-bold p-1" style={style}>
                Contáctanos
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-12 col-md-4">
          <nav className="nav flex-column align-items-center align-items-md-start">
            <Link to={"/direccion/" + navLinks[0]} className="nav-link text-light p-1 small" style={style}>
              {dropdownMenu[0]}
            </Link>
            <Link to={"/direccion/" + navLinks[1]} className="nav-link text-light p-1 small" style={style}>
              {dropdownMenu[1]}
            </Link>
            <Link to={"/direccion/" + navLinks[2]} className="nav-link text-light p-1 small" style={style}>
              {dropdownMenu[2]}
            </Link>
            <Link to={"/direccion/" + navLinks[3]} className="nav-link text-light p-1 small" style={style}>
              {dropdownMenu[3]}
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Footer;
