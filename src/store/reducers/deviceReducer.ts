import {
  DeviceActions,
  DeviceActionTypes,
  IDeviceState,
} from "../../types/cpe";
import { IDeviceResponse } from "../../types/response/IDeviceResponse";
const initialState: IDeviceState = {
  cpe: null,
  isLoading: false,
  error: null,
};

export const deviceReducer = (
  state = initialState,
  action: DeviceActions
): IDeviceState => {
  switch (action?.type) {
    case DeviceActionTypes.FETCHING_DEVICE_DATA:
      return { ...state, isLoading: true };
    case DeviceActionTypes.FETCHING_DEVICE_DATA_SUCCESS:
      return { ...state, isLoading: false, cpe: action.payload };
    case DeviceActionTypes.FETCHING_DEVICE_DATA_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    case DeviceActionTypes.CLEAR_DEVICE_DATA:
      return { ...state, cpe: null, error: null };
    default:
      return state;
  }
};
