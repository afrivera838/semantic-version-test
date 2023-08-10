import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API,
});

export const setHeaders: (token: string, client: string, uid: string) => void = (token, client, uid) => {
  axios.defaults.headers.common['Content-Type'] = 'application/json';
  axios.defaults.headers.common['Accept'] = 'application/json';
  axios.defaults.headers.common['access-token'] = token;
  axios.defaults.headers.common['client'] = client;
  axios.defaults.headers.common['uid'] = uid;
};
