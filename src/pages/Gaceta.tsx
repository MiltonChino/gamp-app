// import Button from "../components/Button";
import Table from "../components/Table";
import "./../App.css";
// import style from "styled-components"

function Gaceta() {
  // const stylesMargin = {
  //   margin: "30px",
  // };

  return (
    <>
<Table />

      <div className="container">
        <div className="gaceta-sec">
          <h1>Gaceta del Gobierno Autónomo Municipal de Pasorapa</h1>
          <p>Busca los documentos que necesitas</p>
          <div className="table-wrapper">
            <table
              id="myTable"
              className="table table-striped table-hover display"
            >
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Título</th>
                  <th>Descripción</th>
                  <th>Enlace</th>
                </tr>
              </thead>
              <tbody id="table_gaceta">
                <tr>
                  <td data-cell="fecha">2022-05-03</td>
                  <td data-cell="titulo">
                    Ley N° 192 - Creación de la Gaceta Municipal de Pasorapa
                  </td>
                  <td data-cell="descripcion">
                    <div className="btn-group dropleft">
                      <button
                        className="btn btn-success btn-sm dropdown-toggle"
                        type="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Ver Descripción
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          Creación de la Gaceta Municipal de Pasorapa promulgada
                          el 8 de abril de 2022
                        </a>
                      </div>
                    </div>
                  </td>
                  <td data-cell="enlace">
                    <a
                      className="btn btn-primary"
                      href="https://drive.google.com/open?id=1-4o63tSbs-053c1_J2LFOisYMBTcq6iN"
                      target="_blank"
                      role="button"
                    >
                      Descargar
                    </a>
                  </td>
                </tr>
                <tr>
                  <td data-cell="fecha">2022-05-04</td>
                  <td data-cell="titulo">
                    Ley Municipal N 195/2022 - Creación de Impuestos
                  </td>
                  <td data-cell="descripcion">
                    <div className="btn-group dropleft">
                      <button
                        className="btn btn-success btn-sm dropdown-toggle"
                        type="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Ver Descripción
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          Ley de impuestos, aprobada por el H. Consejo Municipal
                          el 26 de Abril de 2022 y promulgada por el Alcalde el
                          27de abril de 2022
                        </a>
                      </div>
                    </div>
                  </td>
                  <td data-cell="enlace">
                    <a
                      className="btn btn-primary"
                      href="https://drive.google.com/open?id=1RX4SV3iTFRusfwFqRTPh-Ada9wRHCD0a"
                      target="_blank"
                      role="button"
                    >
                      Descargar
                    </a>
                  </td>
                </tr>
                <tr>
                  <td data-cell="fecha">2022-03-09</td>
                  <td data-cell="titulo">Ley N° 190/2022</td>
                  <td data-cell="descripcion">
                    <div className="btn-group dropleft">
                      <button
                        className="btn btn-success btn-sm dropdown-toggle"
                        type="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Ver Descripción
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          Ley municipal de zonificación y valuación zonal de la
                          mancha urbana de Pasorapa.
                        </a>
                      </div>
                    </div>
                  </td>
                  <td data-cell="enlace">
                    <a
                      className="btn btn-primary"
                      href="https://drive.google.com/open?id=1LPokGHjCfG3dMxQPo2JvuP3gZk3Bn0Ok"
                      target="_blank"
                      role="button"
                    >
                      Descargar
                    </a>
                  </td>
                </tr>
                <tr>
                  <td data-cell="fecha">2022-02-01</td>
                  <td data-cell="titulo">DECRETO MUNICIPAL Nº 001 - 2022</td>
                  <td data-cell="descripcion">
                    <div className="btn-group dropleft">
                      <button
                        className="btn btn-success btn-sm dropdown-toggle"
                        type="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Ver Descripción
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          APROBACIÓN DE MODIFICACIÓN DE PLANILLAS
                          PRESUPUESTARIAS DE PERSONAL DEL ÓRGANO EJECUTIVO Y
                          ORGANIGRAMA - GESTIÓN 2022
                        </a>
                      </div>
                    </div>
                  </td>
                  <td data-cell="enlace">
                    <a
                      className="btn btn-primary"
                      href="https://drive.google.com/open?id=1OjDRXpwTMY6TK7BPO-6hRKgDIBGziL60"
                      target="_blank"
                      role="button"
                    >
                      Descargar
                    </a>
                  </td>
                </tr>
                <tr>
                  <td data-cell="fecha">2022-05-17</td>
                  <td data-cell="titulo">DECRETO MUNICIPAL Nº 002 - 2022</td>
                  <td data-cell="descripcion">
                    <div className="btn-group dropleft">
                      <button
                        className="btn btn-success btn-sm dropdown-toggle"
                        type="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Ver Descripción
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          REGLAMENTO PARA LA DOTACIÓN DE UNIFORMES ESCOLARES
                          (CHAMARRA - PANTALÓN) EN EL MUNICIPIO DE PASORAPA
                        </a>
                      </div>
                    </div>
                  </td>
                  <td data-cell="enlace">
                    <a
                      className="btn btn-primary"
                      href="https://drive.google.com/open?id=1VzhN4fKa-UlGXw5JDl49q_bLoNbd59C-"
                      target="_blank"
                      role="button"
                    >
                      Descargar
                    </a>
                  </td>
                </tr>
                <tr>
                  <td data-cell="fecha">2022-03-10</td>
                  <td data-cell="titulo">
                    LEY 190 - ZONIFICACION Y VALUACIÓN ZONAL
                  </td>
                  <td data-cell="descripcion">
                    <div className="btn-group dropleft">
                      <button
                        className="btn btn-success btn-sm dropdown-toggle"
                        type="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Ver Descripción
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          LEY MUNICIPAL DE ZONIFICACION Y VALUACIÓN ZONAL DE LA
                          MANCHA URBANA DE PASORAPA
                        </a>
                      </div>
                    </div>
                  </td>
                  <td data-cell="enlace">
                    <a
                      className="btn btn-primary"
                      href="https://drive.google.com/open?id=1O9GDO9w04gOTyButpF0WJQ68DYUkIVeT"
                      target="_blank"
                      role="button"
                    >
                      Descargar
                    </a>
                  </td>
                </tr>
                <tr>
                  <td data-cell="fecha">2022-04-08</td>
                  <td data-cell="titulo">LEY 192 - GACETA MUNICIPAL</td>
                  <td data-cell="descripcion">
                    <div className="btn-group dropleft">
                      <button
                        className="btn btn-success btn-sm dropdown-toggle"
                        type="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Ver Descripción
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          LEY DE CREACIÓN DE LA GACETA MUNICIPAL AUTONÓMICA DEL
                          GOBIERNO AUTÓNOMO MUNICIPAL DE PASORAPA
                        </a>
                      </div>
                    </div>
                  </td>
                  <td data-cell="enlace">
                    <a
                      className="btn btn-primary"
                      href="https://drive.google.com/open?id=1r4yQ9HbJ-AopRmCytuLb6lIrhIok89iG"
                      target="_blank"
                      role="button"
                    >
                      Descargar
                    </a>
                  </td>
                </tr>
                <tr>
                  <td data-cell="fecha">2022-04-08</td>
                  <td data-cell="titulo">
                    LEY 193 - TENENCIA RESPONSABLE DE PERROS
                  </td>
                  <td data-cell="descripcion">
                    <div className="btn-group dropleft">
                      <button
                        className="btn btn-success btn-sm dropdown-toggle"
                        type="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Ver Descripción
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          LEY MUNICIPAL DE TENENCIA RESPONSABLE DE PERROS EN EL
                          MUNICIPIO DE PASORAPA LEY Nº 193/2022
                        </a>
                      </div>
                    </div>
                  </td>
                  <td data-cell="enlace">
                    <a
                      className="btn btn-primary"
                      href="https://drive.google.com/open?id=1r4SGbrBexPVqh_Bexg2k7ojfz6zpw-lP"
                      target="_blank"
                      role="button"
                    >
                      Descargar
                    </a>
                  </td>
                </tr>
                <tr>
                  <td data-cell="fecha">2022-04-14</td>
                  <td data-cell="titulo">
                    LEY 194 - EXPROPIACIÓN TERRENO COMUNITARIO
                  </td>
                  <td data-cell="descripcion">
                    <div className="btn-group dropleft">
                      <button
                        className="btn btn-success btn-sm dropdown-toggle"
                        type="button"
                      >
                        Ver Descripción
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          LEY MUNICIPAL DE ""DECLARATORIA DE NECESIDAD Y
                          UTILIDAD PUBLICA DE EXPROPIACIÓN DE TERRENO
                          COMUNITARIO PARA ÁREA DE EQUIPAMIENTO DEL CENTRO DE
                          CAPACITACIÓN RODEO CON UNA EXTENSIÓN SUPERFICIAL DE
                          1.252,55 M2"", UBICADO EN LA COMUNIDAD DE
                          CHAQUILAGUNA, DISTRITO II, SUB CENTRAL PAMPAS,
                          JURISDICCIÓN DEL MUNICIPIO DE PASORAPA
                        </a>
                      </div>
                    </div>
                  </td>
                  <td data-cell="enlace">
                    <a
                      className="btn btn-primary"
                      href="https://drive.google.com/open?id=1mxd7_8XYtJzfhSLSDpjirxDr8WT3vEKE"
                      target="_blank"
                      role="button"
                    >
                      Descargar
                    </a>
                  </td>
                </tr>
                <tr>
                  <td data-cell="fecha">2022-05-17</td>
                  <td data-cell="titulo">LEY 195 - 2022</td>
                  <td data-cell="descripcion">
                    <div className="btn-group dropleft">
                      <button
                        className="btn btn-success btn-sm dropdown-toggle"
                        type="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Ver Descripción
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          LEY MUNICIPAL DE CREACIÓN DE IMPUESTOS LEY Nº 195/2022
                        </a>
                      </div>
                    </div>
                  </td>
                  <td data-cell="enlace">
                    <a
                      className="btn btn-primary"
                      href="https://drive.google.com/open?id=1NKN6f75HV0UWBauzGq4RXUdMv-V0-_wm"
                      target="_blank"
                      role="button"
                    >
                      Descargar
                    </a>
                  </td>
                </tr>
                <tr>
                  <td data-cell="fecha">2022-05-10</td>
                  <td data-cell="titulo">LEY 196 - 2022</td>
                  <td data-cell="descripcion">
                    <div className="btn-group dropleft">
                      <button
                        className="btn btn-success btn-sm dropdown-toggle"
                        type="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Ver Descripción
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          LEY MUNICIPAL DE TENENCIA RESPONSABLE DE PERROS EN EL
                          MUNICIPIO DE PASORAPA LEY Nº 193/2022
                        </a>
                      </div>
                    </div>
                  </td>
                  <td data-cell="enlace">
                    <a
                      className="btn btn-primary"
                      href="https://drive.google.com/open?id=116sfPY23q23GzK8n5Z7NyF7sHwqii13R"
                      target="_blank"
                      role="button"
                    >
                      Descargar
                    </a>
                  </td>
                </tr>
                <tr>
                  <td data-cell="fecha">2022-05-12</td>
                  <td data-cell="titulo">LEY 198 - 2022</td>
                  <td data-cell="descripcion">
                    <div className="btn-group dropleft">
                      <button
                        className="btn btn-success btn-sm"
                        type="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Ver Descripción
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          LEY MUNICIPAL DE CREACIÓN Y ADMINISTRACIÓN DE PATENTES
                          A LA ACTIVIDAD ECONÓMICA LEY Nº 198/2022
                        </a>
                      </div>
                    </div>
                  </td>
                  <td data-cell="enlace">
                    <a
                      className="btn btn-primary"
                      href="https://drive.google.com/open?id=1kxlVFZSWBJxH83IYAClrH3i0Yd6gS30q"
                      target="_blank"
                      role="button"
                    >
                      Descargar
                    </a>
                  </td>
                </tr>
                <tr>
                  <td data-cell="fecha">2022-05-12</td>
                  <td data-cell="titulo">LEY 200 - 2022</td>
                  <td data-cell="descripcion">
                    <div className="btn-group dropleft">
                      <button
                        className="btn btn-success btn-sm dropdown-toggle"
                        type="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Ver Descripción
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          LEY MUNICIPAL DE APROBACIÓN DE CONVENIO
                          INTERGUBERNATIVO PARA EL PROYECTO DE VIVIENDA NUEVA
                          AUTOCONSTRUCCION EN EL MUNICIPIO DE PASORAPA - FASE
                          (VI) 2022 - COCHABAMBA. LEY Nº 200/2022
                        </a>
                      </div>
                    </div>
                  </td>
                  <td data-cell="enlace">
                    <a
                      className="btn btn-primary"
                      href="https://drive.google.com/open?id=1e2516xuX-X0eNYwdRg53PX190v6Kczwc"
                      target="_blank"
                      role="button"
                    >
                      Descargar
                    </a>
                  </td>
                </tr>
                <tr>
                  <td data-cell="fecha">2022-05-12</td>
                  <td data-cell="titulo">LEY 199 - 2022</td>
                  <td data-cell="descripcion">
                    <div className="btn-group dropleft">
                      <button
                        className="btn btn-success btn-sm dropdown-toggle"
                        type="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Ver Descripción
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          LEY MUNICIPAL DE TASAS POR SERVICIOS TÉCNICOS Y
                          ADMINISTRATIVOS LEY Nº 199/2022
                        </a>
                      </div>
                    </div>
                  </td>
                  <td data-cell="enlace">
                    <a
                      className="btn btn-primary"
                      href="https://drive.google.com/open?id=1TY_5fLJPdaz8MOPnPxHgFL5ZDHIIGMSN"
                      target="_blank"
                      role="button"
                    >
                      Descargar
                    </a>
                  </td>
                </tr>
                <tr>
                  <td data-cell="fecha">2022-05-16</td>
                  <td data-cell="titulo">LEY 201 - 2022</td>
                  <td data-cell="descripcion">
                    <div className="btn-group dropleft">
                      <button
                        className="btn btn-success btn-sm dropdown-toggle"
                        type="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Ver Descripción
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          LEY DE APROBACIÓN DE INSCRIPCIÓN PRESUPUESTARIA SALDOS
                          CAJA BANCOS Y TRASPASO PRESUPUESTARIO
                          INTERINSTITUCIONAL. LEY Nº 201/2022
                        </a>
                      </div>
                    </div>
                  </td>
                  <td data-cell="enlace">
                    <a
                      className="btn btn-primary"
                      href="https://drive.google.com/open?id=15oqS7W2HrFkAoXNGXjT4vdNnCD0R70vx"
                      target="_blank"
                      role="button"
                    >
                      Descargar
                    </a>
                  </td>
                </tr>
                <tr>
                  <td data-cell="fecha">2022-05-12</td>
                  <td data-cell="titulo">LEY 198 - 2022</td>
                  <td data-cell="descripcion">
                    <div className="btn-group dropleft">
                      <button
                        className="btn btn-success btn-sm dropdown-toggle"
                        type="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Ver Descripción
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          LEY MUNICIPAL DE CREACIÓN Y ADMINISTRACIÓN DE PATENTES
                          LA ACTIVIDAD ECONÓMICA LEY Nº 198/2022
                        </a>
                      </div>
                    </div>
                  </td>
                  <td data-cell="enlace">
                    <a
                      className="btn btn-primary"
                      href="https://drive.google.com/open?id=1LLGz52Oj37j2pOJcll4xzZ9tfXIZeWNs"
                      target="_blank"
                      role="button"
                    >
                      Descargar
                    </a>
                  </td>
                </tr>
                <tr>
                  <td data-cell="fecha">2022-05-25</td>
                  <td data-cell="titulo">LEY 202 - 2022</td>
                  <td data-cell="descripcion">
                    <div className="btn-group dropleft">
                      <button
                        className="btn btn-success btn-sm dropdown-toggle"
                        type="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Ver Descripción
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          LEY MUNICIPAL DE ""DECLARATORIA DE NECESIDAD Y
                          UTILIDAD PUBLICA DE EXPROPIACIÓN DE TERRENO
                          COMUNITARIO PARA ÁREA DE IMPLEMENTACION DEL RELLENO
                          SANITARIO (BOTADERO MUNICIPAL DE PASORAPA) CON UNA
                          EXTENSIÓN SUPERFICIAL DE 19.953 M2 (DIECINUEVE MIL
                          NOVECIENTOS CINCUENTA Y TRES METROS CUADRADOS)"",
                          UBICADO EN LA COMUNIDAD DE TABACAL, DISTRITO I, SUB
                          CENTRAL PASORAPA, JURISDICCIÓN DEL MUNICIPIO DE
                          PASORAPA.
                        </a>
                      </div>
                    </div>
                  </td>
                  <td data-cell="enlace">
                    <a
                      className="btn btn-primary"
                      href="https://drive.google.com/open?id=10nOpTJD-0mHxPtr5m0CGDKCCFPENEn8B"
                      target="_blank"
                      role="button"
                    >
                      Descargar
                    </a>
                  </td>
                </tr>
                <tr>
                  <td data-cell="fecha">2022-05-25</td>
                  <td data-cell="titulo">LEY Nº 203 - 2022</td>
                  <td data-cell="descripcion">
                    <div className="btn-group dropleft">
                      <button
                        className="btn btn-success btn-sm dropdown-toggle"
                        type="button"
                      >
                        Ver Descripción
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          ""LEY MUNICIPAL DE """"DECLARATORIA COMO PRIORIDAD
                          MUNICIPAL LA INCORPORACIÓN A LA RED VIAL DEPARTAMENTAL
                          EL TRAMO DE INTEGRACIÓN CAMINERA ENTRE LOS
                          DEPARTAMENTOS DE COCHABAMBA Y CHUQUISACA""""""
                        </a>
                      </div>
                    </div>
                  </td>
                  <td data-cell="enlace">
                    <a
                      className="btn btn-primary"
                      href="https://drive.google.com/open?id=1gnzJvpwz1wNDu_tCYcOX2aLNEqInV84s"
                      target="_blank"
                      role="button"
                    >
                      Descargar
                    </a>
                  </td>
                </tr>
                <tr>
                  <td data-cell="fecha">2022-05-19</td>
                  <td data-cell="titulo">
                    Decreto Municipal N° 003/2022 REGLAMENTO A LA LEY MUNICIPAL
                    N° 195/2022 DE CREACION DE IMPUESTOS
                  </td>
                  <td data-cell="descripcion">
                    <div className="btn-group dropleft">
                      <button
                        className="btn btn-success btn-sm dropdown-toggle"
                        type="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Ver Descripción
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          REGLAMENTO DE LA LEY MUNICIPAL AUTONOMICA N° 195/2022
                          DE CREACION DE IMPUESTOS MUNICIPALES
                        </a>
                      </div>
                    </div>
                  </td>
                  <td data-cell="enlace">
                    <a
                      className="btn btn-primary"
                      href="https://drive.google.com/open?id=1gnzJvpwz1wNDu_tCYcOX2aLNEqInV84s"
                      target="_blank"
                      role="button"
                    >
                      Descargar
                    </a>
                  </td>
                </tr>
                <tr>
                  <td data-cell="fecha">2022-05-30</td>
                  <td data-cell="titulo">DECRETO MUNICIPAL Nº 004/2022</td>
                  <td data-cell="descripcion">
                    <div className="btn-group dropleft">
                      <button
                        className="btn btn-success btn-sm dropdown-toggle"
                        type="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Ver Descripción
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          REGLAMENTO A LA LEY MUNICIPAL Nº 198/2022 DE CREACION
                          Y ADMINISTRACION DE PATENTES A LA ACTIVIDAD ECONOMICA
                          DEL GOBIERNO AUTONOMO MUNICIPAL DE PASORAPA
                        </a>
                      </div>
                    </div>
                  </td>
                  <td data-cell="enlace">
                    <a
                      className="btn btn-primary"
                      href="https://drive.google.com/file/d/115PWtAzTTzXoC-YXbPDY9VY2Rl4Cgm0_/view?usp=drive_link"
                      target="_blank"
                      role="button"
                    >
                      Descargar
                    </a>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <th>Fecha</th>
                  <th>Título</th>
                  <th>Descripción</th>
                  <th>Enlace</th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gaceta;
