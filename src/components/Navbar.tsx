// import { ReactNode } from "react";
// import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { Link } from "react-router-dom";
// type Props = {
//   data: string[];
// };

function Navbar() {
  let dropdownMenu = [
    "Dirección de Agronomía y Medio Ambiente",
    "Dirección Urbanismo y Catástro",
    "Dirección Administrativa Financiera",
    "Desarrollo Humano",
  ];
  let navLinks = [
    "agronomia-y-medio-ambiente",
    "urbanismo-y-catastro",
    "administrativa-financiera",
    "desarrollo-humano",
  ];
  const style = {
    color: "#ffffff",
    backgroundColor: 'rgb(0, 128, 55)'
  }
  return (
    <div className="container" style={style}>
      <ul style={style} className="nav justify-content-center">
        {/* <li className="nav-item">
          <a className="nav-link active" href="#">
            Inicio
          </a>
        </li> */}
        <Link to="/" className="nav-link active" style={style}>
          Inicio
        </Link>
        {/* <li className="nav-item">
          <a className="nav-link" href="#">
            Gaceta
          </a>
        </li> */}
        <Link to="/gaceta" className="nav-link" style={style}>
          Gaceta
        </Link>
        <li className="nav-item dropdown" style={style}>
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            style={style}
          >
            Direcciones
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown" style={style}>
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
          </div>
        </li>
        {/* <li className="nav-item">
    <a className="nav-link" href="#">Contáctanos</a>
  </li> */}
        <Link to="/contacto" className="nav-link" style={style}>
          Contáctanos
        </Link>
      </ul>
    </div>
  );
}

// type Props = {
//   to: string;
//   children: ReactNode;
// };

// function CustomLink(props: Props) {
// const { to, children } = props;
// const resolvedPath = useResolvedPath(to);
// var isActive = false;
// console.log(typeof(isActive))
// isActive = useMatch({ path: resolvedPath.pathname, end: true });
// return (
// <li className={isActive === to ? "active" : ""}>
//   <Link to={to} {...props}>
//     {children}
//   </Link>
// </li>
// );
// }

export default Navbar;
