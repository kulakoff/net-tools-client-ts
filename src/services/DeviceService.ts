import { AxiosResponse } from "axios";
import api from "../http";
import { getDevicePropsType, ISetDeviceConfigMode } from "../types/cpe";
import { IDeviceResponse } from "../types/response/IDeviceResponse";

//  BASE_URL/device?cpe[type]=macAddress&cpe[value]=C0:06:C3:01:2F:3B
export class DeviceService {
  static async getDevice(
    props: getDevicePropsType
  ): Promise<AxiosResponse<IDeviceResponse>> {
    return api.get<IDeviceResponse>(
      `/device?cpe[type]=${props.idType}&cpe[value]=${props.value}`
    );
  }

  /**
   * Отправка запроса для модификации конфига CPE
   * @param payload 
   * @returns 
   */
  static async setDevice(payload: ISetDeviceConfigMode): Promise<AxiosResponse<IDeviceResponse>> {
    return api.post<IDeviceResponse>('device', payload)
  }
}
