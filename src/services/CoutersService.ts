import { AxiosResponse } from "axios";
import api from "../http";
import {
  CounterFormData,
  IRequestSendTelemetryReport,
  IResponseReportItem,
  IResponseSendCounters,
  IResponseSendTelemetryReport,
  IResponseTelemetryItem,
  ISendMetersDataForm,
  reportActionType,
  ResponseCounterItem,
} from "../types/counters";

export class CoutersService {
  /**
   *Получение всех приборов учета
   *
   * @returns массив с данными приборов учета
   */
  static async getCounters(): Promise<AxiosResponse<ResponseCounterItem[]>> {
    console.log("|CoutersService|getCounters all|");
    return api.get<ResponseCounterItem[]>("/counters");
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

  static async sendCountersData(
    props: CounterFormData
  ): Promise<AxiosResponse<IResponseSendCounters>> {
    // console.log("|CoutersService|sendCountersData|", props);
    const sendData = { payload: { ...props } };
    // console.log("|CoutersService|sendCountersData|", sendData);

    return api.post<IResponseSendCounters>("/counters/data", sendData);
  }
  /**
   * 
   * @param id 
   * @returns История показанйи по Id прибора учета
   */
  static async getCounterItemHistory(
    id: number
  ): Promise<AxiosResponse<IResponseTelemetryItem[]>> {
    return api.get<IResponseTelemetryItem[]>(`counters/${id}/history`);
  }

  static async getReport(
    action: reportActionType
  ): Promise<AxiosResponse<IResponseReportItem[]>> {
    return api.post<IResponseReportItem[]>("main/report", { action });
  }

  /**
   * 
   * @param action 
   * @returns 
   * запрос на отправку email с отчетом
   */
  static async sendTelemetryReport(action: IRequestSendTelemetryReport): Promise<AxiosResponse<IResponseSendTelemetryReport>> {
    return api.post<IResponseSendTelemetryReport>("main/report",  action )
  }

}
