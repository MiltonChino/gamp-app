// import gampLogo from './assets/react.svg'
import jumboimg1 from "./../assets/jumbo-img1.png";
import CAImg1 from "./../assets/call-action1.png";
import "./../App.css";
// import Accordion from './components/Accordion'
// import Dropdown from './components/Dropdown'
import Jumbotron, { JumboBody } from "./../components/Jumbotron";
// import Card from './components/Card'
import Carousel from "./../components/Carousel";
import ButtonGroup from "./../components/ButtonGroup";
import Card, { CardBody } from "./../components/Card";
import CallAction, { CallActionBody } from "./../components/CallAction";
import Scroller, { ScrollCard } from "./../components/Scroller";
// import Footer from "./../components/Footer";
import Gallery from "./../components/Gallery";
import Titulo from "../components/Titulo";
// import Parallax from './components/Parallax';
// import {ReactDataTables} from 'react-data-tables-components';
// import Counter from './components/Counter'

// import img1 from './assets/5.svg'
// import img2 from './assets/7.svg'
// import img3 from './assets/8.svg'

function App() {
  // const stylesMargin = {
  //   margin: "30px",
  // };
  const styles = {
    display: "flex",
    justifyContent: "center",
  };

  return (
    <>
      {/* <div>
        <a href="https://react.dev" target="_blank">
          <img src={gampLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <div className="container">
        <Carousel />
        {/* <div className="container" style={stylesMargin}> */}
        <div className="container">
          <ButtonGroup />
        </div>
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
        {/* <Parallax /> */}
        <div className="container" style={styles}>
          <Card>
            <CardBody
              title={"Misión"}
              text={
                "El municipio de Pasorapa es la institución promotora en la dinámica productiva, agropecuaria y turística, canalizadora de mecanización y fortalecimiento técnico en la producción, en coordinación con las organizaciones sociales, con servicios básicos y progresión del desarrollo humano para el crecimiento socio económico de los habitantes del municipio con la consolidación de políticas de gestión de riesgos"
              }
              hasButton={false}
            />
          </Card>
          <Card>
            <CardBody
              title={"Visión"}
              text={
                "Ser un Municipio ganadero, productivo, comercial, competitivo, agrícola, turístico con asesoramiento técnico y fomento a la mecanización agrícola, con una agropecuaria resiliente para incrementar una economía rentable. Con servicios básicos, salud y educación acorde a nuestras necesidades, que contribuya con la reducción de la migración de nuestra población, conservando los valores humanos, fortaleciendo nuestra cultura y protegiendo el medio ambiente"
              }
              hasButton={false}
            />
          </Card>
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
        <div className="container" style={styles}>
          <Scroller>
            <ScrollCard
              title={"Honorable Alcalde Municipal"}
              text={"Lic. Ismael Rios Castro"}
              hasButton={false}
              src={"..."}
            />
            <ScrollCard
              title={"Secretario Municipal General"}
              text={"Ronaldt Torrez"}
              hasButton={false}
              src={"..."}
            />
            <ScrollCard
              title={"Dir. Administrativa Financiera"}
              text={"Marizol Terceros Panozo"}
              hasButton={false}
              src={"..."}
            />
            <ScrollCard
              title={"Dir. Obras Publicas y Urbanismo"}
              text={"Paulo Cesar Salvatierra Quiroz"}
              hasButton={false}
              src={"..."}
            />
            <ScrollCard
              title={"Dir. Desarrollo Agropecuario y Medio Ambiente"}
              text={"Maximo Espinoza Balderrama"}
              hasButton={false}
              src={"..."}
            />
          </Scroller>
        </div>
        <div className="container" style={styles}>
          {/* <Titulo display=""/> */}
          <Scroller>
            <ScrollCard
              title={"Presidenta"}
              text={"Ruth Giovanna Camacho Martinez"}
              hasButton={false}
              src={"..."}
            />
            <ScrollCard
              title={"Vice-Presidenta"}
              text={"Jenny Hinojosa Moscoso"}
              hasButton={false}
              src={"..."}
            />
            <ScrollCard
              title={"Secretaria"}
              text={"Teodorica Tapia"}
              hasButton={false}
              src={"..."}
            />
            <ScrollCard
              title={"Concejal"}
              text={"Darlen Escobar Contreras"}
              hasButton={false}
              src={"..."}
            />
            <ScrollCard
              title={"Concejal"}
              text={"Edgar J. Alvarez Pedrazas"}
              hasButton={false}
              src={"..."}
            />
          </Scroller>
        </div>
        <div className="container"></div>
        <Gallery />
      </div>
      {/* <Accordion /> */}
      {/* <a href="https://gampasorapa.gob.bo/" target="_blank">Gobierno Autonomo Municipal de Pasorapa</a> */}
      {/* <Titulo /> */}
      {/* <Counter /> */}
      {/* <p className="read-the-docs">Revisa el estado de tu solicitud aqui </p> */}

      {/* <Dropdown /> */}
    </>
  );
}

export default App;
