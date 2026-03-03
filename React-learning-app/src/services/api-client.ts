import axios, { CanceledError } from 'axios';

export default axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  // Some backends require API key with every request
  // headers: {
  //   'api-key': '...'
  // }
})

export { CanceledError };