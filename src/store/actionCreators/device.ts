import { Dispatch } from "react";
import { API_URL } from "../../http";
import { DeviceService } from "../../services/DeviceService";
import {
  DeviceActions,
  DeviceActionTypes,
  getDevicePropsType,
} from "../../types/cpe";

export const getDevice = (props: getDevicePropsType) => {
  return async (dispatch: Dispatch<DeviceActions>) => {
    try {
      dispatch({
        type: DeviceActionTypes.FETCHING_DEVICE_DATA,
      });
      console.log("getDevice");
      console.log("getDevice props > ", props);
      const { data } = await DeviceService.getDevice(props);
      console.log(data);
      if (data)
        dispatch({
          type: DeviceActionTypes.FETCHING_DEVICE_DATA_SUCCESS,
          payload: data,
        });
    } catch (error) {
      console.log("getDevice error : ", error);
    }
  };
};

export const setDevice = () => {
  console.log("setDevice");
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
