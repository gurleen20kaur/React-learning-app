function ListGroup() {
  // const cities = ["Delhi", "New york", "Paris", "Ottowa", "Karachi"];
  const cities: string[] = [];
  const getMessage = () => {
    // better way then ternary operator, use logical and
    return cities.length === 0 && <p>List is empty</p>;
  };
  return (
    <>
      <h1>List Group</h1>
      {getMessage()}
      <ul className="list-group">
        {cities.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
