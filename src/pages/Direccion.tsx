import CAImg1 from "./../assets/jumbo-img1.png";
import "./../App.css";
import CallAction, { CallActionBody } from "../components/CallAction";

import { useParams } from "react-router-dom";

function Direccion() {
  // const stylesMargin = {
  //   margin: "30px",
  // };
  var direccion,
    content,
    personal = "";
  const { id } = useParams();
  console.log(id);
  switch (id) {
    case "agronomia-y-medio-ambiente":
      direccion = "Dirección de Agronomía y Medio ambiente";
      content = "Conoce la direccion";
      personal = "unknown";

      break;
    case "urbanismo-y-catastro":
      direccion = "Dirección de Urbanismo y Catastro";
      content = "Conoce la direccion";
      personal = "unknown";
      break;
    case "administrativa-financiera":
      direccion = "Dirección Administrativa Financiera";
      content = "Conoce la direccion";
      personal = "unknown";
      break;
    case "desarrollo-humano":
      direccion = "Desarrollo Humano";
      content = "Conoce la direccion";
      personal = "unknown";
      break;
    default:
      direccion = "none";
      content = "none";
      personal = "none";
  }

  return (
    <>
      <div className="container">
        <CallAction>
          <CallActionBody
            img={CAImg1}
            title={direccion}
            text={content}
            hasButton={false}
          />
        </CallAction>
        <h2></h2>
        <p>Here enter direccion info</p>
        <h6>Director {personal}</h6>
        {/* If you have a Database then you'll be able to map through the list for the card info, and print only one time.*/}
      </div>
    </>
  );
}

export default Direccion;
