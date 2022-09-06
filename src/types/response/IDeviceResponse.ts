import { configModeType, deviceInfoType, IWifi } from "../cpe";
/**
 * API GET device response
 */
export interface IDeviceResponse {
  _id: string;
  _deviceInfo: deviceInfoType;
  wifi: IWifi;
  configMode: configModeType;
  createDateTime: string;
}

export interface IDevice extends IDeviceResponse {}
