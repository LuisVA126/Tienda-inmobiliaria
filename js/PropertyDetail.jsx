function PropertyDetail({ property, onBack }) {
  const discount = Math.round(
    ((property.precio_anterior - property.precio_actual) /
      property.precio_anterior) *
      100
  );
  const mapUrl = `https://www.google.com/maps?q=${property.latitud},${property.longitud}&output=embed`;

  return (
    <div className="property-detail active">
      <button className="back-btn" onClick={onBack}>
        Volver al catálogo
      </button>

      <div className="detail-header">
        <div className="detail-images">
          <img
            src={property.imagen}
            alt={property.nombre}
            className="detail-main-image"
          />
        </div>

        <div className="detail-info">
          <h2 className="detail-title">{property.nombre}</h2>
          <p className="detail-location">{property.ciudad}</p>

          <div className="detail-price-container">
            <span className="old-price">
              ${property.precio_anterior.toLocaleString()}
            </span>
            <span className="detail-price">
              ${property.precio_actual.toLocaleString()}
            </span>
            {discount > 0 && (
              <span className="discount-badge">{discount}% OFF</span>
            )}
          </div>

          <div className="detail-features">
            <div className="feature-item">
              <strong>Área:</strong> {property.area}
            </div>
            <div className="feature-item">
              <strong>Habitaciones:</strong> {property.habitaciones}
            </div>
            <div className="feature-item">
              <strong>Baños:</strong> {property.baños}
            </div>
            <div className="feature-item">
              <strong>Parqueaderos:</strong> {property.parqueaderos}
            </div>
            <div className="feature-item">
              <strong>Tipo:</strong> {property.categoria}
            </div>
          </div>

          <a
            href={`https://www.google.com/maps?q=${property.latitud},${property.longitud}`}
            target="_blank"
            rel="noopener noreferrer"
            className="map-btn"
          >
            Ver en Google Maps
          </a>
        </div>
      </div>

      <div className="detail-description">
        <h3>Descripción</h3>
        <p>{property.descripcion}</p>
      </div>

      <div className="property-map">
        <iframe
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          src={mapUrl}
          title={`Mapa de ${property.nombre}`}
        ></iframe>
      </div>
    </div>
  );
}
