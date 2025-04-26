function App() {
  const [properties, setProperties] = React.useState(propertiesData);
  const [selectedProperty, setSelectedProperty] = React.useState(null);
  const [filter, setFilter] = React.useState("all");
  const [sort, setSort] = React.useState("price-asc");

  React.useEffect(() => {
    let filtered = [...propertiesData];

    if (filter !== "all") {
      filtered = filtered.filter((prop) => prop.categoria === filter);
    }

    if (sort === "price-asc") {
      filtered.sort((a, b) => a.precio_actual - b.precio_actual);
    } else if (sort === "price-desc") {
      filtered.sort((a, b) => b.precio_actual - a.precio_actual);
    }

    setProperties(filtered);
  }, [filter, sort]);

  const handleViewDetail = (property) => {
    setSelectedProperty(property);
  };

  const handleBackToList = () => {
    setSelectedProperty(null);
  };

  return (
    <div>
      {selectedProperty ? (
        <PropertyDetail property={selectedProperty} onBack={handleBackToList} />
      ) : (
        <Home
          properties={properties}
          onViewDetail={handleViewDetail}
          filter={filter}
          onFilterChange={setFilter}
          sort={sort}
          onSortChange={setSort}
        />
      )}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
