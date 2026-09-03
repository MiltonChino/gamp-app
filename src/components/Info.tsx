function Info() {
  return (
    <div className="contact-card">
      <h3 className="contact-card-title">
        <span>📌</span> Información Institucional
      </h3>

      <ul className="contact-info-list">
        <li className="contact-info-item">
          <div className="contact-info-icon" aria-hidden="true">📍</div>
          <div className="contact-info-content">
            <div className="contact-info-label">Dirección Principal</div>
            <div className="contact-info-value">
              Edificio Municipal: Plaza 5 de Marzo acera oeste, Pasorapa, Cochabamba, Bolivia
            </div>
            <a
              href="https://maps.google.com/?cid=13649522687063751516&entry=gps"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-action-badge badge-outline mt-2"
            >
              🗺️ Abrir en Google Maps
            </a>
          </div>
        </li>

        <li className="contact-info-item">
          <div className="contact-info-icon" aria-hidden="true">📞</div>
          <div className="contact-info-content">
            <div className="contact-info-label">Teléfono de Atención</div>
            <div className="contact-info-value">+591 73-794-170</div>
            <a
              href="tel:+59173794170"
              className="contact-action-badge mt-2"
            >
              📞 Llamar ahora
            </a>
          </div>
        </li>

        <li className="contact-info-item">
          <div className="contact-info-icon" aria-hidden="true">💬</div>
          <div className="contact-info-content">
            <div className="contact-info-label">WhatsApp Institucional</div>
            <div className="contact-info-value">+591 73-794-170</div>
            <a
              href="https://wa.link/xwkra8"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-action-badge badge-whatsapp mt-2"
            >
              💬 Mensaje por WhatsApp
            </a>
          </div>
        </li>

        <li className="contact-info-item">
          <div className="contact-info-icon" aria-hidden="true">✉️</div>
          <div className="contact-info-content">
            <div className="contact-info-label">Correo Electrónico</div>
            <div className="contact-info-value">
              contacto@gampasorapa.gob.bo
            </div>
            <a
              href="mailto:contacto@gampasorapa.gob.bo"
              className="contact-action-badge badge-outline mt-2"
            >
              ✉️ Enviar correo
            </a>
          </div>
        </li>

        <li className="contact-info-item">
          <div className="contact-info-icon" aria-hidden="true">⏰</div>
          <div className="contact-info-content">
            <div className="contact-info-label">Horario de Atención</div>
            <div className="contact-info-value">
              Lunes a Viernes: 08:00 - 12:00 | 14:00 - 18:00
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Info;