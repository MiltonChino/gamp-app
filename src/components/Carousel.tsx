import img1 from './../assets/1.png'
import img2 from './../assets/2.png'
import img3 from './../assets/3.png'
import img4 from './../assets/4.png'

type Props = {}

function Carousel({}: Props) {
  return (
<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src={img1} alt="First slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={img2} alt="Second slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={img3} alt="Third slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={img4} alt="Fourth slide" />
    </div>
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
  )
}

export default Carousel