import Axios from 'axios';
import { API_URL } from '../constants';

export const request = (endpoint, options = { method: 'get' }) => {
  return Axios({
    url: `${API_URL}/${endpoint}`,
    ...options,
  });
};
