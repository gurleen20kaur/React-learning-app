import ListGroup from "./components/ListGroup";

function App() {
  const cities = ["Delhi", "New york", "Paris", "Ottowa", "Karachi"];
  const cityHeading = "Cities";
  return (
    <div>
      <ListGroup items={cities} heading={cityHeading} />
    </div>
  );
}

export default App;
