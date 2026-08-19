import img1 from './../assets/1.png'
import img2 from './../assets/2.png'
import img3 from './../assets/3.png'
import img4 from './../assets/4.png'

const slides = [
  {
    img: img1,
    title: "RESERVA NATURAL DE LA PARABA FRENTE ROJA",
    alt: "Reserva Natural de la Paraba Frente Roja"
  },
  {
    img: img2,
    title: 'PASORAPA "TIERRA DE VALIENTES"',
    alt: 'Pasorapa "Tierra de Valientes"'
  },
  {
    img: img3,
    title: "PASORAPA HOGAR DE LA PARABA FRENTE ROJA",
    alt: "Pasorapa Hogar de la Paraba Frente Roja"
  },
  {
    img: img4,
    title: "CUNA DE VAQUEROS",
    alt: "Cuna de Vaqueros"
  }
];

function Carousel() {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        {slides.map((_, index) => (
          <li
            key={index}
            data-target="#carouselExampleIndicators"
            data-slide-to={index}
            className={index === 0 ? "active" : ""}
          ></li>
        ))}
      </ol>
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
            <img className="d-block w-100" src={slide.img} alt={slide.alt} />
            <div className="carousel-caption-overlay">
              <h3 className="carousel-slide-title">{slide.title}</h3>
            </div>
          </div>
        ))}
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export default Carousel;