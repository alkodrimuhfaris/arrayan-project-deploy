import axios from 'axios';

export default (token = false) =>
  axios.create({
    baseURL: process.env.NEXT_PUBLIC_URL_BACKEND,
    headers: {
      Authorization: token ? `Bearer ${token}` : undefined,
    },
  });
