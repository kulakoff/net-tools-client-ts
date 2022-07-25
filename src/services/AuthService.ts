import api from "../http";
import { AxiosResponse } from "axios";
import { IAuthResponse } from "../types/response/IAuthResponse"
import { IUserSignUp } from "../types/user";

export default class AuthService {
  static async login(
    email: string,
    password: string
  ): Promise<AxiosResponse<IAuthResponse>> {
    return api.post<IAuthResponse>("/auth/login", { email, password });
  }

  //TODO: сделать регистрацию
  static async registration(
    regProps:IUserSignUp
  ): Promise<AxiosResponse<IAuthResponse>> {
    console.log("auth-service registration",regProps)
    return api.post<IAuthResponse>("/auth/registration", regProps);
  }

  static async logout(): Promise<void> {
    return api.post("/auth/logout");
  }
}
