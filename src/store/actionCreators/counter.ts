import { Dispatch } from "react";
import { API_URL } from "../../http";
import { CoutersService } from "../../services/CoutersService";
import {
  CounterFormData,
  CountersActions,
  CountersActionTypes,
  ISendMetersDataForm,
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
    console.log("sendCountersData >>> ", formData);
    try {
      dispatch({
        type: CountersActionTypes.SENDING_COUNTERS_DATA,
        payload: formData
      });

      const { data } = await CoutersService.sendCountersData(formData);

      dispatch({
        type: CountersActionTypes.SENDING_COUNTERS_DATA_SUCCESS,
        payload: data
      })
      
    } catch (error: any) {
      console.log("sendCountersData error : ", error);
      dispatch({
        type: CountersActionTypes.SENDING_COUNTERS_DATA_FAILURE,
        payload: error.response.data,
      });
    }
  };
};

// export const getCountersItem = (payload: ISetDeviceConfigMode) => {
//   console.log("setDevice payload: ", payload);
//   return async (dispatch: Dispatch<DeviceActions>) => {
//     try {
//       dispatch({
//         type: DeviceActionTypes.FETCHING_DEVICE_DATA,
//       });

//       const { data } = await DeviceService.setDevice(payload);
//       console.log(data);
//       if (data)
//         dispatch({
//           type: DeviceActionTypes.FETCHING_DEVICE_DATA_SUCCESS,
//           payload: data,
//         });
//     } catch (error) {
//       console.log("setDevice error : ", error);
//     }
//   };
// };
