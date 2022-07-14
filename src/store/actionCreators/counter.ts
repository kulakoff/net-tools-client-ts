//actionCreator counters
import { Dispatch } from "react";
import { API_URL } from "../../http";
import { CoutersService } from "../../services/CoutersService";
import {
  CounterFormData,
  CountersActions,
  CountersActionTypes,
  ISendMetersDataForm,
  ReportActions,
  reportActionType,
} from "../../types/counters";

import { ErrorType } from "../../types/error";

export const getCounters = () => {
  return async (dispatch: Dispatch<CountersActions>) => {
    try {
      dispatch({
        type: CountersActionTypes.FETCHING_COUNTERS_DATA,
      });
      // console.log("getCounters");
      // console.log("getDevice props > ", props);
      const { data } = await CoutersService.getCounters();
      // const { data } = response;
      console.log(data);
      if (data)
        dispatch({
          type: CountersActionTypes.FETCHING_COUNTERS_DATA_SUCCESS,
          payload: data,
        });
    } catch (error: any) {
      console.log("getDevice error : ", error);
      dispatch({
        type: CountersActionTypes.FETCHING_COUNTERS_DATA_FAILURE,
        payload: error.response.data,
      });
    }
  };
};

export const sendCountersData = (formData: CounterFormData) => {
  return async (dispatch: Dispatch<CountersActions>) => {
    try {
      dispatch({
        type: CountersActionTypes.SENDING_COUNTERS_DATA,
        payload: formData,
      });

      const { data } = await CoutersService.sendCountersData(formData);

      dispatch({
        type: CountersActionTypes.SENDING_COUNTERS_DATA_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      console.log("sendCountersData error : ", error);
      dispatch({
        type: CountersActionTypes.SENDING_COUNTERS_DATA_FAILURE,
        payload: error.response.data,
      });
    }
  };
};

export const getCounterHistory = (id: number) => {
  return async (dispatch: Dispatch<CountersActions>) => {
    try {
      dispatch({
        type: CountersActionTypes.FETCHING_COUNTERS_TELEMETRY,
      });
      //Получаем историю показаний  выбранного прибора учета
      const { data } = await CoutersService.getCounterItemHistory(id);

      dispatch({
        type: CountersActionTypes.FETCHING_COUNTERS_TELEMETRY_SCUCCESS,
        payload: data,
      });
    } catch (error: any) {
      console.log("sendCountersData error : ", error);
      dispatch({
        type: CountersActionTypes.FETCHING_COUNTERS_TELEMETRY_FAILURE,
        payload: error.response.data,
      });
    }
  };
};

export const clearCountersSelectedItem = () => {
  return async (dispatch: Dispatch<CountersActions>) => {
    try {
      dispatch({
        type: CountersActionTypes.CLEAR_COUNTERS_SELECTEDITEM,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getReport = (action: reportActionType) => {
  return async (dispatch: Dispatch<CountersActions>) => {
    try {
      dispatch({
        type: CountersActionTypes.SENDING_CHECK_REPORT,
      });

      switch (action) {
        case ReportActions.REPORT_CHECK_DATA:
          const { data } = await CoutersService.getReport(action);
          if (data) {
            dispatch({
              type: CountersActionTypes.SENDING_CHECK_REPORT_SUCCESS,
              payload: data,
            });
          }
      }
    } catch (error: any) {
      console.log("getReport error : ", error);
      dispatch({
        type: CountersActionTypes.SENDING_CHECK_REPORT_FAILURE,
        payload: error.response.data,
      });
    }
  };
};
