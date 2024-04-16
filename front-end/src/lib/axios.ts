import axios from 'axios';

const axiosBase = axios.create({
  baseURL: 'http://localhost:3000/data',
});

export { axiosBase };
