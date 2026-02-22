function ListGroup() {
  const cities = ["Delhi", "New york", "Paris", "Ottowa", "Karachi"];
  return (
    <>
      <h1>List Group</h1>
      <ul className="list-group">
        {cities.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
