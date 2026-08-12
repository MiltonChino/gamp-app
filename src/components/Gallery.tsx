import img1 from "./../assets/gallery-1.png";
import img2 from "./../assets/gallery-2.jpeg";
import img3 from "./../assets/gallery-3.jpg";
import img4 from "./../assets/gallery-4.jpeg";
import img5 from "./../assets/gallery-5.jpg";
import img6 from "./../assets/gallery-6.jpg";

function Gallery() {
  const images = [
    { id: 1, src: img1, alt: "Galería Pasorapa 1" },
    { id: 2, src: img2, alt: "Galería Pasorapa 2" },
    { id: 3, src: img3, alt: "Galería Pasorapa 3" },
    { id: 4, src: img4, alt: "Galería Pasorapa 4" },
    { id: 5, src: img5, alt: "Galería Pasorapa 5" },
    { id: 6, src: img6, alt: "Galería Pasorapa 6" },
  ];

  return (
    <div className="container my-4">
      <h3 className="text-center font-weight-bold mb-4">Galería Fotográfica</h3>
      <div className="row">
        {images.map((item) => (
          <div className="col-12 col-sm-6 col-md-4 gallery-card" key={item.id}>
            <div className="card h-100 shadow-sm">
              <img className="card-img-top gallery-img rounded" src={item.src} alt={item.alt} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;