// import React from 'react'

function Info() {
const style = {
    color: '#000000',
    textDecoration: 'none'
}
    return (
    <div>
        <h4>Encuentranos Aquí</h4>
        <ul>
            <li>Dirección: Edificio Municipal: plaza 5 de Marzo acera oeste, localidad de Pasorapa</li>
            <li>Teléfono: <a href="tel:+59172242555" className="badge badge-light" style={style}>73-794-170</a></li>
            <li>Correo: <a href="mailto:municipalidadpasorapa@gmail.com" className="badge badge-light" style={style}>contacto@gampasorapa.gob.bo</a></li>
            <li>WhatsApp: <a href="https://wa.link/xwkra8" className="badge badge-light" style={style}>73-794-170</a></li>
            <li><a href='https://maps.google.com/?cid=13649522687063751516&entry=gps' className="badge badge-info" style={{textDecoration: 'none'}}>Ver mapa</a></li>
        </ul>
    </div>
  )
}

export default Info