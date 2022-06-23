import { Dispatch } from "react";
import { API_URL } from "../../http";
import { CoutersService } from "../../services/CoutersService";
import {
  CountersActions, CountersActionTypes
} from "../../types/counters";

import { ErrorType } from "../../types/error";

export const getCounters = () => {
  return async (dispatch: Dispatch<CountersActions>) => {
    try {
      dispatch({
        type: CountersActionTypes.FETCHING_COUNTERS_DATA,
      });
      console.log("getCounters");
      // console.log("getDevice props > ", props);
      const response = await CoutersService.getCounters();
      const { data } = response;
      console.log(response);
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

