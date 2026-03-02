import axios from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState([]);

  // call the server
  // returns a promise - has method .then
  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => console.log(res.data[0].name));
  });
  return <div></div>;
}

export default App;
