// import gampLogo from './assets/react.svg'
import jumboimg1 from "./../assets/jumbo-img1.png";
import CAImg1 from "./../assets/call-action1.png";
import "./../App.css";
import Jumbotron, { JumboBody } from "./../components/Jumbotron";

import ButtonGroup from "./../components/ButtonGroup";
import CallAction, { CallActionBody } from "./../components/CallAction";

function Gaceta() {
  // const stylesMargin = {
  //   margin: "30px",
  // };

  return (
    <>
      <div className="container">
        {/* <div className="container" style={stylesMargin}> */}
        <CallAction>
          <CallActionBody
            img={jumboimg1}
            title={"PASORAPA TURÍSTICA"}
            text={
              "Aquí encontraras una reseña de los atractivos turísticos de Pasorapa"
            }
            hasButton={true}
          />
        </CallAction>
        <Jumbotron>
          <JumboBody
            img={CAImg1}
            title="Organigrama"
            text="Conoce nuestro organigrama"
            hasButton={true}
          />
        </Jumbotron>
        {/* If you have a Database then you'll be able to map through the list for the card info, and print only one time.*/}
        <ButtonGroup />
      </div>
    </>
  );
}

export default Gaceta;
