import { AxiosResponse } from "axios";
import api from "../http";
import { ResponseCounterItem } from "../types/counters";

export class CoutersService {
  /**
   *Получение всех приборов учета
   *
   * @returns массив с данными приборов учета
   */
  static async getCounters(): Promise<AxiosResponse<ResponseCounterItem[]>> {
    console.log("|CoutersService|getCounters all|");
    return api.get<ResponseCounterItem[]>('/counters')
  }


  /**
   *Получить данные по указанному прибору учета
   * @param id - ID прибора учета
   * @returns  данные по выбранному прибору учета
   */
  static async getCountersItem(id: number) {
    console.log("|CoutersService|getCountersItem|");
    return null;
  }


  static async sendCountersData ():Promise<AxiosResponse>{
    return api.post
  }
}
