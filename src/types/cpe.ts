import { ErrorType } from "./error";
import { IDeviceResponse } from "./response/IDeviceResponse";

export interface ISetDeviceConfigMode {
  serialNumber: string;
  macAddress: string;
  configMode: string;
}

export type getDeviceValueType = "serialNumber" | "macAddress";
/**
 * данные формы поиска CPE.
 * @request type and value
 */
export interface getDevicePropsType {
  idType: getDeviceValueType;
  value: string;
}

export type deviceInfoType = {
  serialNumber: string;
  macAddress: string;
  manufacturer: string;
  modelName: string;
};
export type configModeValuesType = "passwd" | "serial";
export interface configModeType {
  _value: configModeValuesType;
  _timestamp: string;
}
export interface IWifi {
  ssid2: {
    _value: string;
    _timestamp: string;
  };
  ssid5: {
    _value: string;
    _timestamp: string;
  };
  keyPassphrase: {
    _value: string;
    _timestamp: string;
  };
}
export interface IDeviceState {
  cpe: IDeviceResponse | null;
  isLoading: boolean;
  error: ErrorType | null;
}

export interface IFormGetDevice {
  idType: getDeviceValueType;
  value: string;
}
