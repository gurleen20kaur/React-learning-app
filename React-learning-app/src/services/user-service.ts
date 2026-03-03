import apiClient from "./api-client";

export interface User {
  id: number;
  name: string;
}

// methods for getting users, updating users, creating and deleting users
class UserService {
  getAllUsers() {
    const controller = new AbortController();
    const request = apiClient
      .get<User[]>("/users", {
        signal: controller.signal,
      });
    return { request, cancel: () => controller.abort()}  
  }

  deleteUser(id: number){
    return apiClient.delete("/users/" + id)
  }

  createUser(user: User) {
    apiClient
      .post("/users", user)
  }

  updateUser(user: User) {
    apiClient.patch("/users/" + user.id, user)
  }
}

export default new UserService();