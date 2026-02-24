import ListGroup from "./components/ListGroup";

function App() {
  const cities = ["Delhi", "New york", "Paris", "Ottowa", "Karachi"];
  const cityHeading = "Cities";
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={cities}
        heading={cityHeading}
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
