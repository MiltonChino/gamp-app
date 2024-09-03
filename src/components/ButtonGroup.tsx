// type Props = {
//   data: string[];
// };
// import { Link } from "react-router-dom";
import icon1 from './../assets/btg-icon1.png';
import icon2 from './../assets/btg-icon2.png';
import icon3 from './../assets/btg-icon3.png';
import icon4 from './../assets/btg-icon4.png';


function ButtonGroup() {
  return (
    <div className="btn-toolbar justify-content-center" role="toolbar" aria-label="Toolbar with button groups">
      <div className="btn-group btn-group-md" role="group" aria-label="First group">
        <button type="button" className="btn btn-light">
        <img src={icon1} className='rounded mx-auto d-block' width='100'  alt="" />
        Municipio
        </button>
        <button type="button" className="btn btn-light">
        <img src={icon2} className='rounded mx-auto d-block' width='100' alt="" />
        Gaceta
        </button>
        <button type="button" className="btn btn-light">
        <img src={icon3} className='rounded mx-auto d-block' width='100' alt="" />
        Direcciones
        </button>
        <button type="button" className="btn btn-light">
        <img src={icon4} className='rounded mx-auto d-block' width='100' alt="" />
        Servicios
        </button>
    </div>
  {/* <div className="btn-group btn-group-lg" role="group" aria-label="Second group">
    <button type="button" className="btn btn-secondary">MUNICIPIO</button>
    <button type="button" className="btn btn-secondary">GACETA</button>
    <button type="button" className="btn btn-secondary">DIRECCIONES</button>
    <button type="button" className="btn btn-secondary">SERVICIOS</button>
  </div> */}
</div>
  );
}

export default ButtonGroup;

{
  /* Sizing
<div className="btn-group btn-group-lg" role="group" aria-label="...">...</div>
<div className="btn-group" role="group" aria-label="...">...</div>
<div className="btn-group btn-group-sm" role="group" aria-label="...">...</div>

Nesting
<div className="btn-group" role="group" aria-label="Button group with nested dropdown">
  <button type="button" className="btn btn-secondary">1</button>
  <button type="button" className="btn btn-secondary">2</button>

  <div className="btn-group" role="group">
    <button id="btnGroupDrop1" type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Dropdown
    </button>
    <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
      <a className="dropdown-item" href="#">Dropdown link</a>
      <a className="dropdown-item" href="#">Dropdown link</a>
    </div>
  </div>
</div>

You can also try a vertical disposition
<div className="btn-group-vertical">
  ...
</div>

*/
}
