import CAImg1 from "./../assets/call-action1.png";
import "./../App.css";
import Jumbotron, { JumboBody } from "./../components/Jumbotron";
import ButtonGroup from "./../components/ButtonGroup";

function Direccion() {
  // const stylesMargin = {
  //   margin: "30px",
  // };

  return (
    <>
      <div className="container">
        <div className="container">
          <ButtonGroup />
        </div>
        <Jumbotron>
          <JumboBody
            img={CAImg1}
            title="Organigrama"
            text="Conoce nuestro organigrama"
            hasButton={true}
          />
        </Jumbotron>
        {/* If you have a Database then you'll be able to map through the list for the card info, and print only one time.*/}
      </div>
    </>
  );
}

export default Direccion;
