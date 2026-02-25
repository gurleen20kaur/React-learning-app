import LikeButton from "./components/LikeButton/LikeButton";

function App() {
  return (
    <div>
      <LikeButton onClick={() => console.log("clicked")} />
    </div>
  );
}

export default App;
