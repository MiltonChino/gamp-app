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
  return (
    <div className="container">
      <ul className="nav justify-content-center bg-light">
        {/* <li className="nav-item">
          <a className="nav-link active" href="#">
            Inicio
          </a>
        </li> */}
        <Link to="/" className="nav-link active">
          Inicio
        </Link>
        {/* <li className="nav-item">
          <a className="nav-link" href="#">
            Gaceta
          </a>
        </li> */}
        <Link to="/gaceta" className="nav-link">
          Gaceta
        </Link>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Direcciones
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link to={"/" + dropdownMenu[0]} className="nav-link">
              {dropdownMenu[0]}
            </Link>
            <Link to={"/" + dropdownMenu[1]} className="nav-link">
              {dropdownMenu[1]}
            </Link>
            <Link to={"/" + dropdownMenu[2]} className="nav-link">
              {dropdownMenu[2]}
            </Link>
            <Link to={"/" + dropdownMenu[3]} className="nav-link">
              {dropdownMenu[3]}
            </Link>
          </div>
        </li>
        {/* <li className="nav-item">
    <a className="nav-link" href="#">Contáctanos</a>
  </li> */}
        <Link to="/contacto" className="nav-link">
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
