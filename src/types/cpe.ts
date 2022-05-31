import { ErrorType } from "./error"
import { IDeviceResponse } from "./response/IDeviceResponse"

export type getDeviceValueType = "serialNumber" | "macAddress"
/**
 * данные формы поиска CPE.
 * @request type and value
 */
export interface getDevicePropsType {
    idType: getDeviceValueType
    value: string
}

export type deviceInfoType = {
    "serialNumber": string,
    "macAddress": string,
    "manufacturer": string,
    "modelName": string
}
export type configModeValuesType = "passwd" | "serial"
export interface configModeType {
    
        "_value": configModeValuesType,
        "_timestamp": string
   
}
export interface IWifi {
    "ssid2": {
        "_value": string,
        "_timestamp": string
    },
    "ssid5": {
        "_value": string,
        "_timestamp": string
    },
    "keyPassphrase": {
        "_value": string,
        "_timestamp": string
    }
}
export interface IDeviceState {
    cpe: IDeviceResponse | null
    isLoading: boolean,
    error: ErrorType | null
}

/**
 * Dispatch types
 */
export enum DeviceActionTypes {
    FETCHING_DEVICE_DATA = "FETCHING_DEVICE_DATA",
    // FETCHING_DEVICE_DATA = "FETCHING_DEVICE_DATA",
    FETCHING_DEVICE_DATA_SUCCESS = "FETCHING_DEVICE_DATA_SUCCESS",
    FETCHING_DEVICE_DATA_FAILURE = "FETCHING_DEVICE_DATA_FAILURE",

    // SENDING_DEVICE_DATA = "SENDING_DEVICE_DATA",
    // SENDING_DEVICE_DATA_SUCCESS = "SENDING_DEVICE_DATA_SUCCESS",
    // SENDING_DEVICE_DATA_FAILURE = "SENDING_DEVICE_DATA_FAILURE",
}

export interface IFetchingDeviceDataAtion {
    type: DeviceActionTypes.FETCHING_DEVICE_DATA
}
export interface IFetchingDeviceDataSuccessAction {
    type: DeviceActionTypes.FETCHING_DEVICE_DATA_SUCCESS,
    payload: IDeviceResponse
}
export interface IFetchingDeviceDataFailureAction {
    type: DeviceActionTypes.FETCHING_DEVICE_DATA_FAILURE,
    payload: ErrorType
}
// export interface ISendingDeviceDataSuccessAction {
//     type: DeviceActionTypes.SENDING_DEVICE_DATA_SUCCESS,
//     payload: IDeviceResponse
// }
// export interface ISendingDeviceDataFailureAction {
//     type: DeviceActionTypes.SENDING_DEVICE_DATA_FAILURE,
//     payload: string
// }

export type DeviceActions =
    | IFetchingDeviceDataAtion
    | IFetchingDeviceDataSuccessAction
    | IFetchingDeviceDataFailureAction
    // | ISendingDeviceDataSuccessAction
    // | ISendingDeviceDataFailureAction