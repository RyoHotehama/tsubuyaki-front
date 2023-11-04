import { BASE_URL } from '@/utill/config';
import Axios from 'axios';

const axios = Axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
  },
  withCredentials: true,
});

export default axios;
