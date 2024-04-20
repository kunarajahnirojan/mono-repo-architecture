import axiosInstance from 'axios';
import { apiURL } from '@mono-repo-architecture/config';
import { accessTokenWithType } from '@mono-repo-architecture/store/customer';

export const axios = axiosInstance.create({
  baseURL: apiURL,

  headers: {
    'Content-Type': 'application/json',
    Accept: '*/*',
  },
});

export function createAxios({ getState }: { getState: any }) {
  axios.interceptors.request.use(
    (config: any) => {
      const { useAuth, ...headers } = config.headers;

      const state = getState();
      headers.Authorization = accessTokenWithType(state);

      return { ...config, headers };
    },
    (error) => {
      return Promise.reject(error);
    }
  );
}
