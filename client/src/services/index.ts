import axios from "axios";

export const getApi = async () => {
  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_HOST,
  });

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

  return await api[method](requestURL, payload);
};
