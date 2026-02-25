import { useState } from "react";
import "./ListGroup.css";

interface Props {
  items: string[];
  heading: string;
  // function - (item: string) => void
  onSelectItem: (item: string) => void;
}
function ListGroup({ items, heading, onSelectItem }: Props) {
  // hook
  const [selected, setSelected] = useState(-1);

  const getMessage = () => {
    // better way then ternary operator, use logical and
    return items.length === 0 && <p>List is empty</p>;
  };

  return (
    <>
      <h1>{heading}</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selected === index ? "list-group-item active" : "list-group-item"
            }
            key={item}
            // Pass a reference and not call the function
            onClick={() => {
              setSelected(index);
              onSelectItem(item);
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
