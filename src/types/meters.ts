import { ErrorType } from "./error";

export type CounterItem = {
  model?: string; //указать потом перечисление допустимых моделей
  serialNumber: string;
  metersValue: string;
};
export interface IFormMetersData extends CounterItem {
  reportDate: Date;
}
export interface ISendingData {
  meters: [IFormMetersData];
}

export interface IMetersResponse {}

export enum MetersActionTypes {
  FETCHING_METERS_DATA = "FETCHING_METERS_DATA",
  FETCHING_METERS_DATA_SUCCESS = "FETCHING_METERS_SUCCESS",
  FETCHING_METERS_DATA_FAILURE = "FETCHING_METERS_FAILURE",
}

export interface IFetchingMetersData {
  type: MetersActionTypes.FETCHING_METERS_DATA;
  payload: IFormMetersData;
}
export interface IFetchingMetersDataSuccess {
  type: MetersActionTypes.FETCHING_METERS_DATA_SUCCESS;
  payload: IMetersResponse;
}
export interface IFetchingMetersDataFailure {
  type: MetersActionTypes.FETCHING_METERS_DATA_FAILURE;
  payload: ErrorType;
}

export type MetersActions =
  | IFetchingMetersData
  | IFetchingMetersDataSuccess
  | IFetchingMetersDataFailure;
