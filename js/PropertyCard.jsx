function PropertyCard({ property, onViewDetail }) {
  const discount = Math.round(
    ((property.precio_anterior - property.precio_actual) /
      property.precio_anterior) *
      100
  );

  return (
    <div className="property-card">
      <img
        src={property.imagen}
        alt={property.nombre}
        className="property-image"
      />
      <div className="property-info">
        <h3 className="property-title">{property.nombre}</h3>
        <p className="property-location">{property.ciudad}</p>

        <div className="property-features">
          <span className="feature-item">{property.area}</span>
          <span className="feature-item">{property.habitaciones} Hab.</span>
          <span className="feature-item">{property.baños} Baños</span>
          <span className="feature-item">{property.parqueaderos} Parq.</span>
        </div>

        <div className="property-price-container">
          <span className="old-price">
            ${property.precio_anterior.toLocaleString()}
          </span>
          <span className="property-price">
            ${property.precio_actual.toLocaleString()}
          </span>
          {discount > 0 && (
            <span className="discount-badge">{discount}% OFF</span>
          )}
        </div>

        <button
          className="view-detail-btn"
          onClick={() => onViewDetail(property)}
        >
          Ver Detalle
        </button>
      </div>
    </div>
  );
}
