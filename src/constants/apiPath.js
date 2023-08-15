import axios from 'axios';
import { interceptorError, interceptorOK } from '../utils/interceptors';
const api = process.env.REACT_APP_API;

axios.defaults.baseURL = api;

const pathObj = {
  baseURL: api
};
export const interceptroAxios = axios.interceptors.response.use(interceptorOK, interceptorError);

export default pathObj;
