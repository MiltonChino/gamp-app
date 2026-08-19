import Table from "../components/Table";
import "./../App.css";

function Gaceta() {
  return (
    <div className="container my-5">
      <div className="gaceta-sec text-center mb-4">
        <h1 className="font-weight-bold section-header-title">
          Gaceta del Gobierno Autónomo Municipal de Pasorapa
        </h1>
        <div className="card-title-accent mx-auto mb-3"></div>
        <p className="lead text-muted">Busca los documentos que necesitas</p>
      </div>

      <Table />
    </div>
  );
}

export default Gaceta;
