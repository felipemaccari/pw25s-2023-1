import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

export const getApi = async () => {
  const api = axios.create();

  const token = localStorage.getItem("token");

  api.interceptors.request.use(
    (config) => {
      if (token) {
        config.headers.Authorization = "Bearer " + token;
      }

      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  );

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
  method: "post" | "get" | "put" | "delete",
  requestURL: string,
  payload?: any
) => {
  const api = await getApi();

  const data = await api[method](`${baseURL}/${requestURL}`, payload)
    .then((data) => {
      if (data) {
        return { success: true, data: data.data };
      }
    })
    .catch((data) => {
      return { success: false, ...data.response.data };
    });

  return data;
};
