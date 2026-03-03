import { useEffect, useState } from "react";
import type { User } from "../services/user-service";
import userService from "../services/user-service";
import { CanceledError } from "../services/api-client";

const useUsers = () => {

  const [error, setError] = useState("");
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // call the server
  // returns a promise - has method .then
  useEffect(() => {
    setIsLoading(true);
    const { request, cancel } = userService.getAll<User>();
    request
      .then((res) => {
        setUsers(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });
    // .finally(() => {
    //   setIsLoading(false)
    // });

    return cancel;
  }, []);

  // return state variables so they can be used in the component
  return { users, error, isLoading};
}

export default useUsers;