import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { IAuthResponse } from "../types/response/IAuthResponse";
export const API_URL = "http://localhost:5000/api/v1";

const api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

//type AxiosRequestConfig
api.interceptors.request.use((config: any) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

api.interceptors.response.use(
  (config: AxiosResponse) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const response = await axios.get<IAuthResponse>(`${API_URL}/refresh`, {
          withCredentials: true,
        });
        localStorage.setItem("token", response.data.accessToken);
        return api.request(originalRequest);
      } catch (error) {
        console.log("Пользователь не авторизован");
      }
    }
    throw error;
  }
);

export default api;
