import { http } from 'msw';
import {
  dataSuccessRickAndMortin,
  // testAvatar,
} from '../modulos/dashboard/mocks/dataSuccessRickAndMortin';
import { countriesMock } from '../modulos/countries/mocks/countries';
import { loginMock } from '../page/login/mocks/login';
import { materialsMock } from '../modulos/materials/mocks/materials';

export const handlers = [
  http.get(
    `${import.meta.env.VITE_BACKEND_URL}/character`,
    dataSuccessRickAndMortin,
  ),
  http.get(`${import.meta.env.VITE_BACKEND_URL}/countries`, countriesMock),
  http.get(`${import.meta.env.VITE_BACKEND_URL}/materials`, materialsMock),

  http.post(`https://reqres.in/api/login`, loginMock),
];
