// import { useState } from "react";
import ListGroup from "./components/ListGroup";

function App() {
  const Cities = [
    "New York",
    "New Delhi",
    "Abu Dhabi",
    "Karachi",
    "Dublin",
    "Paris",
    "Tokyo",
    "Riyadh",
    "Jakarda",
  ];
  const title = "Cities";

  const handleSelect = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={Cities}
        heading={title}
        onSelectItem={handleSelect}
      ></ListGroup>
    </div>
  );
}

export default App;
