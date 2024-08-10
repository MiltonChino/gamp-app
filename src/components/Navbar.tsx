import { ReactNode } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

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
        <CustomLink to="/">Inicio</CustomLink>
        {/* <li className="nav-item">
          <a className="nav-link" href="#">
            Gaceta
          </a>
        </li> */}
        <CustomLink to="/gaceta">Gaceta</CustomLink>
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
            <CustomLink to={"/" + dropdownMenu[0]}>
              {dropdownMenu[0]}
            </CustomLink>
            <CustomLink to={"/" + dropdownMenu[1]}>
              {dropdownMenu[1]}
            </CustomLink>
            <CustomLink to={"/" + dropdownMenu[2]}>
              {dropdownMenu[2]}
            </CustomLink>
            <CustomLink to={"/" + dropdownMenu[3]}>
              {dropdownMenu[3]}
            </CustomLink>
          </div>
        </li>
        {/* <li className="nav-item">
    <a className="nav-link" href="#">Contáctanos</a>
  </li> */}
        <CustomLink to="/contacto">Contactanos</CustomLink>
      </ul>
    </div>
  );
}

type Props = {
  to: string;
  children: ReactNode;
};

function CustomLink(props: Props) {
  const { to, children } = props;
  const resolvedPath = useResolvedPath(to);
  var isActive = false;
  isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive === to ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Navbar;
