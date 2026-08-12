import logo from './../assets/logo1.png';

function NavIcon() {
  let companyName = "Gobierno Autónomo Municipal de Pasorapa";
  const style = {
    color: "#ffffff",
    backgroundColor: 'rgb(0, 128, 55)',
    padding: '15px 10px',
    borderRadius: '4px 4px 0 0'
  };

  return (
    <div className="container text-center" style={style}>
      <div className="d-flex flex-column align-items-center justify-content-center">
        <img 
          src={logo} 
          className='img-fluid rounded mb-2' 
          style={{ maxWidth: "110px", height: "auto" }} 
          alt="GAM Pasorapa Logo" 
        />
        <h2 className="h4 text-light font-weight-bold m-0 text-center">
          {companyName}
        </h2>
      </div>
    </div>
  );
}

export default NavIcon;
