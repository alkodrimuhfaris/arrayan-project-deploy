import axios from 'axios';

export default (token = false) =>
  axios.create({
    baseURL:
      process.env.NEXT_PUBLIC_URL_BACKEND + process.env.NEXT_PUBLIC_URL_API_VER,
    headers: {
      Authorization: token ? `Bearer ${token}` : undefined,
    },
  });
