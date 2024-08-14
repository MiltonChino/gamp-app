import jumboimg1 from "./../assets/jumbo-img1.png";
import "./../App.css";
import CallAction, { CallActionBody } from "../components/CallAction";

function NotFound() {
  // const stylesMargin = {
  //   margin: "30px",
  // };

  return (
    <>
      <div className="container">
        <CallAction>
          <CallActionBody
            img={jumboimg1}
            title={"Página no Encontrada"}
            text={"Por favor verifica el nombre de la página que buscas"}
            hasButton={true}
          />
        </CallAction>
        {/* Here you can use a Hook available to track cx paths.*/}
      </div>
    </>
  );
}

export default NotFound;
