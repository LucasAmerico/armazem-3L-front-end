import { Carga } from '../utils/interfaces';
import api from './api';

const getCargaRoute = '/carga/listagem';
const postCargaRoute = '/carga';

async function getCarga(id?: any, motorista?: any) {
  let url = getCargaRoute;

  if (id) {
    url = `${url}?id=${id}`;
  }

  if (motorista) {
    url = `${url}?id=${id}`;
  }

  const response = await api.get(url);
  return response.data;
}

async function postCarga(carga: Carga) {
  const url = postCargaRoute;

  const response = await api.post(url, carga);
  return response.data;
}

export default {
  getCarga,
  postCarga,
};