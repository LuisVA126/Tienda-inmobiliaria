function Home({
  properties,
  onViewDetail,
  filter,
  onFilterChange,
  sort,
  onSortChange,
}) {
  return (
    <div>
      <div className="filters">
        <div className="filter-group">
          <label htmlFor="category-filter">Filtrar por:</label>
          <select
            id="category-filter"
            value={filter}
            onChange={(e) => onFilterChange(e.target.value)}
          >
            <option value="all">Todos</option>
            <option value="Apartamento">Apartamentos</option>
            <option value="Casa">Casas</option>
            <option value="Lote">Lotes</option>
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="sort">Ordenar por:</label>
          <select
            id="sort"
            value={sort}
            onChange={(e) => onSortChange(e.target.value)}
          >
            <option value="price-asc">Precio: Menor a Mayor</option>
            <option value="price-desc">Precio: Mayor a Menor</option>
          </select>
        </div>
      </div>

      <div className="properties-grid">
        {properties.length > 0 ? (
          properties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              onViewDetail={onViewDetail}
            />
          ))
        ) : (
          <p>No se encontraron propiedades con los filtros seleccionados.</p>
        )}
      </div>
    </div>
  );
}
