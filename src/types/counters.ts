import { ErrorType } from "./error";

export type reportActionType = "SEND_REPORT" | "REPORT_CHECK_DATA";
export enum ReportActions {
  SEND_REPORT = "SEND_REPORT",
  REPORT_CHECK_DATA = "REPORT_CHECK_DATA",
}

/**
 *  API response report item
 * интерфейс экземпляра возвращаемого массива
 */
export interface IResponseReportItem {
  id: number;
  serial_number: string;
  model: counterModel;
  address: string;
  telemetry: boolean;
  card_number: string;
  counters_data: IResponseTelemetryItem[];
}

//Показание прибота учета
export interface IResponseTelemetryItem {
  id: number;
  value: string;
  timestamp: string;
}

export interface ISendMetersDataForm {
  payload: {
    serial_number: string;
    value: number;
  };
}

export interface ICountersState {
  dataCounters?: ResponseCounterItem[] | null;
  dataReport?: IResponseReportItem[] | null;
  reportSended: boolean | null;
  sendingResponse: any;
  selectedItem: { history: IResponseTelemetryItem[] } | null;
  isLoading: boolean;
  error: ErrorType | null;
}

export type counterModel = "CE-300" | "CE-301" | "CE-102M";

export type ResponseCounterItem = {
  id: number;
  model: counterModel;
  serial_number: string;
  address: string;
  telemetry: boolean;
};

export type responseValues = {
  val: "CURRENT_TIMESTAMP";
};
export interface IResponseSendCounters {
  timestamp: responseValues;
  id: number;
  counter_id: number;
  value: number;
}

/**
 * Данные полученные из формы отправик показаний прибора учета
 */
export type CounterFormData = {
  serial_number: string;
  value: string;
  timestamp: Date;
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

export type ReqActionTypeValue =
  | "REPORT_SEND"
  | "REPORT_CHECK_DATA"
  | "REPORT_SEND_TO_EMAIL"
  | "REPORT_GET_DATA";

export interface IRequestSendTelemetryReport {
  customer_id: number;
  provider_id: number;
  action: ReqActionTypeValue;
}

export interface IResponseSendTelemetryReport {
  message: string;
}

// export interface IMetersResponse {

// }

/**
 * Action типы
 */
export enum CountersActionTypes {
  FETCHING_COUNTERS_DATA = "FETCHING_COUNTERS_DATA",
  FETCHING_COUNTERS_DATA_SUCCESS = "FETCHING_COUNTERS_SUCCESS",
  FETCHING_COUNTERS_DATA_FAILURE = "FETCHING_COUNTERS_FAILURE",
  SENDING_COUNTERS_DATA = "SENDING_COUNTERS_DATA",
  SENDING_COUNTERS_DATA_SUCCESS = "SENDING_COUNTERS_DATA_SUCCESS",
  SENDING_COUNTERS_DATA_FAILURE = "SENDING_COUNTERS_DATA_FAILURE",
  FETCHING_COUNTERS_TELEMETRY = "FETCHING_COUNTERS_TELEMETRY",
  FETCHING_COUNTERS_TELEMETRY_SCUCCESS = "FETCHING_COUNTERS_TELEMETRY_SCUCCESS",
  FETCHING_COUNTERS_TELEMETRY_FAILURE = "FETCHING_COUNTERS_TELEMETRY_FAILURE",
  CLEAR_COUNTERS_SELECTEDITEM = "CLEAR_COUNTERS_SELECTEDITEM",
  SENDING_CHECK_REPORT = "SENDING_CHECK_REPORT",
  SENDING_CHECK_REPORT_SUCCESS = "SENDING_CHECK_REPORT_SUCCESS",
  SENDING_CHECK_REPORT_FAILURE = "SENDING_CHECK_REPORT_FAILURE",
  SENDING_TELEMETRY_REPORT = "SENDING_TELEMETRY_REPORT",
  SENDING_TELEMETRY_REPORT_SUCCESS = "SENDING_TELEMETRY_REPORT_SUCCESS",
  SENDING_TELEMETRY_REPORT_FAILURE = "SENDING_TELEMETRY_REPORT_FAILURE",
}

//Отправить запрос на отправку email с отчетом в сбытовую компанию
export interface ISendingTelemetryReport {
  type: CountersActionTypes.SENDING_TELEMETRY_REPORT;
  // payload: IRequestSendTelemetryReport
}
export interface ISendingTelemetryReportSuccess {
  type: CountersActionTypes.SENDING_TELEMETRY_REPORT_SUCCESS;
  // payload: IResponseSendTelemetryReport
}
export interface ISendingTelemetryReportFailure {
  type: CountersActionTypes.SENDING_TELEMETRY_REPORT_FAILURE;
  payload: ErrorType;
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

/**
 * Отправка показания прибора учета
 */
export interface ISendingConutersData {
  type: CountersActionTypes.SENDING_COUNTERS_DATA;
  payload: CounterFormData;
}
/**
 * Успешная показания прибора учета
 */
export interface ISendingConutersDataSuccess {
  type: CountersActionTypes.SENDING_COUNTERS_DATA_SUCCESS;
  payload: IResponseSendCounters;
}
/**
 * Ошибка при отправке показаний прибора учета
 */
export interface ISendingConutersDataFailure {
  type: CountersActionTypes.SENDING_COUNTERS_DATA_FAILURE;
  payload: ErrorType;
}

/**
 * Получение истории показанйи прибора учета
 */
export interface IFeychingCountersTelemetry {
  type: CountersActionTypes.FETCHING_COUNTERS_TELEMETRY;
}
/**
 * Успешное получение истории показанйи прибора учета
 */
export interface IFeychingCountersTelemetrySuccess {
  type: CountersActionTypes.FETCHING_COUNTERS_TELEMETRY_SCUCCESS;
  payload: IResponseTelemetryItem[];
}
/**
 * Ошибка получения истории показанйи прибора учета
 */
export interface IFeychingCountersTelemetryFailure {
  type: CountersActionTypes.FETCHING_COUNTERS_TELEMETRY_FAILURE;
  payload: ErrorType;
}

export interface IClearCountersSelectedItem {
  type: CountersActionTypes.CLEAR_COUNTERS_SELECTEDITEM;
}

/**
 * Получение данных для отчета
 */
export interface ISendingCheckReport {
  type: CountersActionTypes.SENDING_CHECK_REPORT;
}
/**
 * Успешное получение данных для отчета, сохраняием в state
 */
export interface ISendingCheckReportSuccess {
  type: CountersActionTypes.SENDING_CHECK_REPORT_SUCCESS;
  payload: IResponseReportItem[];
}
export interface ISendingCheckReportFailure {
  type: CountersActionTypes.SENDING_CHECK_REPORT_FAILURE;
  payload: ErrorType;
}

export type CountersActions =
  | IFetchingCountersData
  | IFetchingCountersDataSuccess
  | IFetchingCountersDataFailure
  | ISendingConutersData
  | ISendingConutersDataSuccess
  | ISendingConutersDataFailure
  | IFeychingCountersTelemetry
  | IFeychingCountersTelemetrySuccess
  | IFeychingCountersTelemetryFailure
  | IClearCountersSelectedItem
  | ISendingCheckReport
  | ISendingCheckReportSuccess
  | ISendingCheckReportFailure
  | ISendingTelemetryReport
  | ISendingTelemetryReportSuccess
  | ISendingTelemetryReportFailure;
