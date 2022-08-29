import { IUser } from "../user";

export interface IAuthResponse {
  accessToken: string;
  refreshToken: string;
  user: IUser;
}

export interface IApiResponse {
  status: string;
  message?: string;
}
