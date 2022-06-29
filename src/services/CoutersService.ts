import { AxiosResponse } from "axios";
import api from "../http";
import { CounterFormData, IResponseSendCounters, IResponseTelemetryItem, ISendMetersDataForm, ResponseCounterItem } from "../types/counters";

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


  static async sendCountersData(props: CounterFormData): Promise<AxiosResponse<IResponseSendCounters>> {
    // console.log("|CoutersService|sendCountersData|", props);
    const sendData = { payload: { ...props } }
    // console.log("|CoutersService|sendCountersData|", sendData);

    return api.post<IResponseSendCounters>('/counters/data', sendData)
  }

  static async getCounterItemHistory(id: number): Promise<AxiosResponse<IResponseTelemetryItem[]>> {
    return api.get<IResponseTelemetryItem[]>(`counters/${id}/history`)
  }

}
