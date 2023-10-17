import axios from 'axios';
import {Characters} from '@/app/models'

const {BACKEND_URI} = process.env

export const getHumans = () => {
  return axios.get<Characters>(`${BACKEND_URI}/api/v1/data/humans`);
};
