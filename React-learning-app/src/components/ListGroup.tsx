import { MouseEvent } from "react";

function ListGroup() {
  const cities = ["Delhi", "New york", "Paris", "Ottowa", "Karachi"];
  // const cities: string[] = [];
  const getMessage = () => {
    // better way then ternary operator, use logical and
    return cities.length === 0 && <p>List is empty</p>;
  };

  // type annotation in typescript
  // event handler
  // function will be called at runtime
  const handleClick = (event: MouseEvent) => {
    console.log(event);
  };
  return (
    <>
      <h1>List Group</h1>
      {getMessage()}
      <ul className="list-group">
        {cities.map((item) => (
          <li
            className="list-group-item"
            key={item}
            // Pass a reference and not call the function
            onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
