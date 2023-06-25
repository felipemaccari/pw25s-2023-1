import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

export const getApi = async () => {
  const api = axios.create();

  const tokenFrom = "";

  api.interceptors.request.use(
    (config) => {
      config.headers.Authorization = "Bearer " + tokenFrom;
      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  );

  api.defaults.headers.common.Authorization = `Bearer ${tokenFrom}`;

  api.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      if (error.response.status === 401) {
        console.log(error);
      } else {
        return Promise.reject(error);
      }
    }
  );

  return api;
};

export const handleFetchRequests = async (
  method: "post" | "get",
  requestURL: string,
  payload: any
) => {
  const api = await getApi();

  return await api[method](`${baseURL}/${requestURL}`, payload);
};
