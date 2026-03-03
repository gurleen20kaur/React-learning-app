import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

function App() {
  const [error, setError] = useState("");
  const [users, setUsers] = useState<User[]>([]);

  // call the server
  // returns a promise - has method .then
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get<User[]>(
          "https://jsonplaceholder.typicode.com/xusers",
        );
        setUsers(res.data);
      } catch (err) {
        setError((err as AxiosError).message);
      }
    };
    fetchUsers();
    // axios
    //   .get<User[]>("https://jsonplaceholder.typicode.com/xusers")
    // .then((res) => setUsers(res.data))
    // .catch((err) => setError(err));
  }, []);
  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
