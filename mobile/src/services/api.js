import axios from 'axios';

const baseURL = 'http://10.168.70.188:3333';
// const baseURL = 'http://127.0.0.1:3333';

const api = axios.create({
  baseURL,
});

export default api;
