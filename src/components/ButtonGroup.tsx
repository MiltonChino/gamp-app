import icon1 from './../assets/btg-icon1.png';
import icon2 from './../assets/btg-icon2.png';
import icon3 from './../assets/btg-icon3.png';
import icon4 from './../assets/btg-icon4.png';

function ButtonGroup() {
  return (
    <div className="button-group-container my-4">
      <div className="btn-group flex-wrap justify-content-center" role="group" aria-label="Navegación principal">
        <button type="button" className="btn btn-light button-group-item m-1 border">
          <img src={icon1} alt="Municipio" />
          <span className="font-weight-bold mt-1">Municipio</span>
        </button>
        <button type="button" className="btn btn-light button-group-item m-1 border">
          <img src={icon2} alt="Gaceta" />
          <span className="font-weight-bold mt-1">Gaceta</span>
        </button>
        <button type="button" className="btn btn-light button-group-item m-1 border">
          <img src={icon3} alt="Direcciones" />
          <span className="font-weight-bold mt-1">Direcciones</span>
        </button>
        <button type="button" className="btn btn-light button-group-item m-1 border">
          <img src={icon4} alt="Servicios" />
          <span className="font-weight-bold mt-1">Servicios</span>
        </button>
      </div>
    </div>
  );
}

export default ButtonGroup;
