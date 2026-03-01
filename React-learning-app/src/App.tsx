import { useEffect } from "react";

const connect = () => {
  console.log("Connecting...");
};
const disconnect = () => {
  console.log("Disconnecting...");
};

function App() {
  useEffect(() => {
    connect();

    // Provide cleanup code
    return () => disconnect();
  });
  return <div></div>;
}

export default App;
