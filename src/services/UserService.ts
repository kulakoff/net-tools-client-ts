//

import api from "./../http";
import { AxiosResponse } from "axios";
import { IAuthResponse } from "../types/response/IAuthResponse"
import { IUser } from "../types/user";

export default class UserService {
  static async fetchUsers(): Promise<AxiosResponse<IUser[]>> {
    return api.get<IUser[]>("/users");
  }
}
