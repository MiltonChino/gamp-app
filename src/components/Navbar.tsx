// type Props = {
//   data: string[];
// };

function Navbar() {
    let dropdownMenu = ["Dirección de Agronomía y Medio Ambiente","Dirección Urbanismo y Catástro", "Dirección Administrativa Financiera", "Desarrollo Humano"]
    return (
      <div className="container">
       <ul className="nav justify-content-center bg-light" >
  <li className="nav-item">
    <a className="nav-link active" href="#">Inicio</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Gaceta</a>
  </li>
  <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Direcciones
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">{dropdownMenu[0]}</a>
          <a className="dropdown-item" href="#">{dropdownMenu[1]}</a>
          <a className="dropdown-item" href="#">{dropdownMenu[2]}</a>
          <a className="dropdown-item" href="#">{dropdownMenu[3]}</a>
        </div>
      </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Contáctanos</a>
  </li>
</ul>
{/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
</div> */}
      </div>
    );
  }
  

export default Navbar;

