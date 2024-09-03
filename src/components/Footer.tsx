import { Link } from "react-router-dom";
// type Props = {
//   data: string[];
// };

function Footer() {
  const style = {
    color: "#ffffff",
    backgroundColor: 'rgb(0, 128, 55)',
    
  }
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
    // let companyName = "Gobierno Autónomo Municipal de Pasorapa";
    // let dropdownMenu = ["Dirección de Agronomía y Medio Ambiente","Dirección Urbanismo y Catástro", "Dirección Administrativa Financiera", "Desarrollo Humano"]
    return (
      <div className="container" style={style}>
  <div className="row d-flex align-items-center">
    <div className="col-sm">
            <img className="card-img-top rounded" src={"./../src/assets/footer-img1.png"} alt="Card image cap" />
    </div>
    <div className="col-sm">
        {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Inicio <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Gaceta</a>
              </li>
            </ul>
        </div> */}
          <ul className="nav flex-column">
            <li className="nav-item">
            <Link to="/" className="nav-link" style={style}>
          Inicio
        </Link>
            </li>
            <li className="nav-item">
            <Link to="/gaceta" className="nav-link" style={style}>
          Gaceta
        </Link>
            </li>
            <li className="nav-item">
            <Link to="/contacto" className="nav-link" style={style}>
          Contáctanos
        </Link>
            </li>
          </ul>
    </div>
    {/* <div className="dropdown-divider"></div> */}
    <div className="col-sm">
    <nav className="nav flex-column">
    <Link to={"/direccion/" + navLinks[0]} className="nav-link" style={style}>
              {dropdownMenu[0]}
            </Link>
            <Link to={"/direccion/" + navLinks[1]} className="nav-link" style={style}>
              {dropdownMenu[1]}
            </Link>
            <Link to={"/direccion/" + navLinks[2]} className="nav-link" style={style}>
              {dropdownMenu[2]}
            </Link>
            <Link to={"/direccion/" + navLinks[3]} className="nav-link" style={style}>
              {dropdownMenu[3]}
            </Link>
</nav>
    </div>
          </div>
          </div>
    );
  }
  

export default Footer;
