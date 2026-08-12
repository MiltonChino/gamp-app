import jumboimg1 from "./../assets/jumbo-img1.png";
import CAImg1 from "./../assets/call-action1.png";
import src1 from "./../assets/silueta-mujer.png";
import src2 from "./../assets/silueta-varon.png";
import "./../App.css";

import Jumbotron, { JumboBody } from "./../components/Jumbotron";
import Carousel from "./../components/Carousel";
import ButtonGroup from "./../components/ButtonGroup";
import Card, { CardBody } from "./../components/Card";
import CallAction, { CallActionBody } from "./../components/CallAction";
import Scroller, { ScrollCard } from "./../components/Scroller";
import Gallery from "./../components/Gallery";

function App() {
  return (
    <>
      <div className="container">
        {/* Carousel */}
        <Carousel />

        {/* Quick Nav Button Group */}
        <ButtonGroup />

        {/* Call to Action Banner */}
        <CallAction>
          <CallActionBody
            img={jumboimg1}
            title={"PASORAPA TURÍSTICA"}
            text={"Aquí encontrarás una reseña de los atractivos turísticos de Pasorapa"}
            hasButton={true}
          />
        </CallAction>

        {/* Misión y Visión Cards */}
        <div className="flex-container-centered">
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

        {/* Jumbotron / Organigrama Banner */}
        <Jumbotron>
          <JumboBody
            img={CAImg1}
            title="Organigrama"
            text="Conoce nuestro organigrama institucional"
            hasButton={true}
          />
        </Jumbotron>

        {/* Autoridades Ejecutivas */}
        <div className="my-4">
          <h4 className="text-center font-weight-bold mb-3">Órgano Ejecutivo</h4>
          <Scroller>
            <ScrollCard
              title={"Honorable Alcalde Municipal"}
              text={"Lic. Ismael Rios Castro"}
              hasButton={false}
              src={src2}
            />
            <ScrollCard
              title={"Secretario Municipal General"}
              text={"Ronaldt Torrez"}
              hasButton={false}
              src={src2}
            />
            <ScrollCard
              title={"Dir. Administrativa Financiera"}
              text={"Marizol Terceros Panozo"}
              hasButton={false}
              src={src1}
            />
            <ScrollCard
              title={"Dir. Obras Publicas y Urbanismo"}
              text={"Paulo Cesar Salvatierra Quiroz"}
              hasButton={false}
              src={src2}
            />
            <ScrollCard
              title={"Dir. Desarrollo Agropecuario y Medio Ambiente"}
              text={"Maximo Espinoza Balderrama"}
              hasButton={false}
              src={src2}
            />
          </Scroller>
        </div>

        {/* Concejo Municipal */}
        <div className="my-4">
          <h4 className="text-center font-weight-bold mb-3">Concejo Municipal</h4>
          <Scroller>
            <ScrollCard
              title={"Presidenta"}
              text={"Ruth Giovanna Camacho Martinez"}
              hasButton={false}
              src={src1}
            />
            <ScrollCard
              title={"Vice-Presidenta"}
              text={"Jenny Hinojosa Moscoso"}
              hasButton={false}
              src={src1}
            />
            <ScrollCard
              title={"Secretaria"}
              text={"Teodorica Tapia"}
              hasButton={false}
              src={src1}
            />
            <ScrollCard
              title={"Concejal"}
              text={"Darlen Escobar Contreras"}
              hasButton={false}
              src={src2}
            />
            <ScrollCard
              title={"Concejal"}
              text={"Edgar J. Alvarez Pedrazas"}
              hasButton={false}
              src={src2}
            />
          </Scroller>
        </div>

        {/* Gallery Section */}
        <Gallery />
      </div>
    </>
  );
}

export default App;
