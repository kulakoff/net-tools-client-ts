import { ErrorType } from "./error";


export interface ICountersState {
  // data: ResponseCounterItem[] | null,
  data: ResponseCounterItem[] | null
  isLoading: boolean,
  error: ErrorType | null
}

export type counterModel = "CE-300" | "CE-301" | "CE-102M";

export type ResponseCounterItem = {
  id: number;
  model: counterModel;
  serial_number: string;
  address: string;
  telemetry: boolean;
};


/**
 * Данные полученные из формы отправик показаний прибора учета
 */
export type CounterFormData = {
  serial_number: string;
  value: string;
};
export type CounterItemData = {
  id?: number;
  counter_id: number;
  value: number;
  timestamp: Date;
};
export interface IFormCountersData extends CounterFormData {
  reportDate: Date;
}
export interface ISendingData {
  meters: [IFormCountersData];
}

// export interface IMetersResponse {

// }

export enum CountersActionTypes {
  FETCHING_COUNTERS_DATA = "FETCHING_COUNTERS_DATA",
  FETCHING_COUNTERS_DATA_SUCCESS = "FETCHING_COUNTERS_SUCCESS",
  FETCHING_COUNTERS_DATA_FAILURE = "FETCHING_COUNTERS_FAILURE",
}

export interface IFetchingCountersData {
  type: CountersActionTypes.FETCHING_COUNTERS_DATA;
  // payload?: IFormCountersData;
}
export interface IFetchingCountersDataSuccess {
  type: CountersActionTypes.FETCHING_COUNTERS_DATA_SUCCESS;
  payload: ResponseCounterItem[];
}
export interface IFetchingCountersDataFailure {
  type: CountersActionTypes.FETCHING_COUNTERS_DATA_FAILURE;
  payload: ErrorType;
}

export type CountersActions =
  | IFetchingCountersData
  | IFetchingCountersDataSuccess
  | IFetchingCountersDataFailure;
