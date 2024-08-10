// type Props = {
//   data: string[];
// };

function Footer() {
    // let companyName = "Gobierno Autónomo Municipal de Pasorapa";
    // let dropdownMenu = ["Dirección de Agronomía y Medio Ambiente","Dirección Urbanismo y Catástro", "Dirección Administrativa Financiera", "Desarrollo Humano"]
    return (
      <div className="container">
  <div className="row">
    <div className="col-sm">
      image Here
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
              <a className="nav-link active" href="#">Active</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">Disabled</a>
            </li>
          </ul>
    </div>
    <div className="col-sm">
    <nav className="nav flex-column">
  <a className="nav-link active" href="#">Active</a>
  <a className="nav-link" href="#">Link</a>
  <a className="nav-link" href="#">Link</a>
  <a className="nav-link disabled" href="#">Disabled</a>
</nav>
    </div>
          </div>
          </div>
    );
  }
  

export default Footer;
