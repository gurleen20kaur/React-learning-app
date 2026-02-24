import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const BtnText = "My Button";
  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>
          Hello <span>World</span>
        </Alert>
      )}
      <Button text={BtnText} onClick={() => setAlertVisible(true)}></Button>
    </div>
  );
}

export default App;
