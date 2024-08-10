// type Props = {
//   data: string[];
// };
import logo from './../assets/logo1.png';

function NavIcon() {
    let companyName = "Gobierno Autónomo Municipal de Pasorapa";
    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <img src={logo} className='rounded mx-auto d-block' width="120" height="120" alt="" />
      </nav>
        <nav className="navbar justify-content-center navbar-light bg-light">
        <a className="navbar-brand" href="#">{companyName}</a>
      </nav>
      </div>
    );
  }
  

export default NavIcon;

