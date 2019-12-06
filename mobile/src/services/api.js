import axios from 'axios';

const baseURL = 'http://192.168.1.103:3333';
// const baseURL = 'http://127.0.0.1:3333';

const api = axios.create({
  baseURL,
});

export default api;
