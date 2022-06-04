import { Dispatch } from "react";
import { API_URL } from "../../http";
import { DeviceService } from "../../services/DeviceService";
import {
  DeviceActions,
  DeviceActionTypes,
  getDevicePropsType,
  ISetDeviceConfigMode,
} from "../../types/cpe";
import { ErrorType } from "../../types/error";

export const getDevice = (props: getDevicePropsType) => {
  return async (dispatch: Dispatch<DeviceActions>) => {
    try {
      dispatch({
        type: DeviceActionTypes.FETCHING_DEVICE_DATA,
      });
      console.log("getDevice");
      console.log("getDevice props > ", props);
      const response = await DeviceService.getDevice(props);
      const { data } = response;
      console.log(response);
      if (data)
        dispatch({
          type: DeviceActionTypes.FETCHING_DEVICE_DATA_SUCCESS,
          payload: data,
        });
    } catch (error: any) {
      console.log("getDevice error : ", error);
      dispatch({
        type: DeviceActionTypes.FETCHING_DEVICE_DATA_FAILURE,
        payload: error.response.data,
      });
    }
  };
};

export const setDevice = (payload: ISetDeviceConfigMode) => {
  console.log("setDevice payload: ", payload);
  return async (dispatch: Dispatch<DeviceActions>) => {
    try {
      dispatch({
        type: DeviceActionTypes.FETCHING_DEVICE_DATA,
      });

      const { data } = await DeviceService.setDevice(payload);
      console.log(data);
      if (data)
        dispatch({
          type: DeviceActionTypes.FETCHING_DEVICE_DATA_SUCCESS,
          payload: data,
        });
    } catch (error) {
      console.log("setDevice error : ", error);
    }
  };
};

export const clearDeviceData = () => {
  return (dispatch: Dispatch<DeviceActions>) => {
    try {
      dispatch({ type: DeviceActionTypes.CLEAR_DEVICE_DATA });
    } catch (error) {
      console.log(error);
    }
  };
};
