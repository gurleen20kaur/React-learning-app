import apiClient from "./api-client";

interface Entity {
  id: number;
}
// methods for getting users, updating users, creating and deleting users
class HttpService {
  endpoint: string;

  // Contructor - function called when an instance of the class is created
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll<T>() {
    const controller = new AbortController();
    const request = apiClient
      .get<T[]>(this.endpoint, {
        signal: controller.signal,
      });
    return { request, cancel: () => controller.abort()}  
  }

  delete(id: number){
    return apiClient.delete(this.endpoint+ '/' + id)
  }

  create<T>(entity: T) {
    apiClient
      .post(this.endpoint, entity)
  }

  update<T extends Entity>(entity: T) {
    apiClient.patch(this.endpoint + '/' + entity.id, entity)
  }
}

// function to create an instance of this class
const create = (endpoint: string) => new HttpService(endpoint);

export default create;