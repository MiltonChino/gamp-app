import Info from "../components/Info";
import ContactForm from "../components/Contacto";

function Contacto() {
  return (
    <div className="container py-3">
      {/* Hero / Header Section */}
      <div className="contact-hero-banner text-center text-md-start">
        <h1 className="contact-hero-title">Contáctanos</h1>
        <p className="contact-hero-subtitle">
          Estamos a su servicio. Comuníquese con el Gobierno Autónomo Municipal de Pasorapa a través de nuestros canales oficiales o envíenos su mensaje directamente.
        </p>
      </div>

      <div className="row g-4 align-items-stretch">
        {/* Contact Info & Map Column */}
        <div className="col-12 col-lg-5 d-flex flex-column gap-4">
          <Info />

          <div className="contact-card">
            <h3 className="contact-card-title mb-2">
              <span>🗺️</span> Ubicación Geográfica
            </h3>
            <p className="text-muted small mb-3">
              Encuentre las oficinas del Gobierno Autónomo Municipal en el mapa interactivo:
            </p>
            <div className="contact-map-wrapper">
              <iframe
                title="Ubicación GAM Pasorapa"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d758.6331358485987!2d-64.67815283842779!3d-18.321734068564698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93fa93ab5e878be3%3A0xbd6cd890cc11fb5c!2sGovierno%20Aut%C3%B3nomo%20Municipal%20de%20Pasorapa!5e0!3m2!1ses!2sbo!4v1690567689967!5m2!1ses!2sbo"
                className="contact-map-iframe"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Contact Form Column */}
        <div className="col-12 col-lg-7">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Contacto;

