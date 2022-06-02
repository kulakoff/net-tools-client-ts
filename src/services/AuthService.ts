import api from "../http";
import { AxiosResponse } from "axios";
import { IAuthResponse } from "../types/response/IAuthResponse"

export default class AuthService {
  static async login(
    email: string,
    password: string
  ): Promise<AxiosResponse<IAuthResponse>> {
    return api.post<IAuthResponse>("login", { email, password });
  }

  //TODO: сделать регистрацию
  static async registration(
    email: string,
    password: string
  ): Promise<AxiosResponse<IAuthResponse>> {
    return api.post<IAuthResponse>("registration", { email, password });
  }

  static async logout(): Promise<void> {
    return api.post("/logout");
  }



 
}
