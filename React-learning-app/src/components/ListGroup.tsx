import { useState } from "react";

function ListGroup() {
  const cities = ["Delhi", "New york", "Paris", "Ottowa", "Karachi"];

  // hook
  const [selected, setSelected] = useState(-1);

  const getMessage = () => {
    // better way then ternary operator, use logical and
    return cities.length === 0 && <p>List is empty</p>;
  };

  return (
    <>
      <h1>List Group</h1>
      {getMessage()}
      <ul className="list-group">
        {cities.map((item, index) => (
          <li
            className={
              selected === index ? "list-group-item active" : "list-group-item"
            }
            key={item}
            // Pass a reference and not call the function
            onClick={() => {
              setSelected(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
