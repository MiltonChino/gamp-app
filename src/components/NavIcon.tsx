// type Props = {
//   data: string[];
// };
import logo from './../assets/logo1.png';

function NavIcon() {
    let companyName = "Gobierno Autónomo Municipal de Pasorapa";
    const style = {
      color: "#ffffff",
      backgroundColor: 'rgb(0, 128, 55)'
    }
    return (
      <div className="container" style={style}>
        <nav className="navbar navbar-expand-lg navbar-light" style={style}>
        <img src={logo} className='rounded mx-auto d-block' width="120" height="120" alt="" />
      </nav>
        <nav className="navbar justify-content-center navbar-light" style={style}>
        <a className="navbar-brand text-light" href="#">{companyName}</a>
      </nav>
      </div>
    );
  }
  

export default NavIcon;

