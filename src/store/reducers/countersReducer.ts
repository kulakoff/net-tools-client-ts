import {
  ICountersState,
  CountersActions,
  CountersActionTypes,
} from "../../types/counters";

const initialState: ICountersState = {
  dataCounters: null,
  dataReport: null,
  sendingResponse: null,
  selectedItem: null,
  isLoading: false,
  error: null,
};

export const countersReducer = (
  state = initialState,
  action: CountersActions
): ICountersState => {
  switch (action?.type) {
    //get counters
    case CountersActionTypes.FETCHING_COUNTERS_DATA:
      return { ...state, isLoading: true };
    case CountersActionTypes.FETCHING_COUNTERS_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        dataCounters :  action.payload,
      };
    case CountersActionTypes.FETCHING_COUNTERS_DATA_FAILURE:
      return { ...state, isLoading: false, error: action.payload };

    //send counter telemetry
    case CountersActionTypes.SENDING_COUNTERS_DATA:
      return { ...state, isLoading: true };
    case CountersActionTypes.SENDING_COUNTERS_DATA_SUCCESS:
      return { ...state, isLoading: false, sendingResponse: action.payload };
    case CountersActionTypes.SENDING_COUNTERS_DATA_FAILURE:
      return { ...state, isLoading: false, error: action.payload };

    //Counters history
    case CountersActionTypes.FETCHING_COUNTERS_TELEMETRY:
      return { ...state, isLoading: true };
    case CountersActionTypes.FETCHING_COUNTERS_TELEMETRY_SCUCCESS:
      return {
        ...state,
        isLoading: false,
        selectedItem: { history: action.payload },
      };
    case CountersActionTypes.FETCHING_COUNTERS_TELEMETRY_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    case CountersActionTypes.CLEAR_COUNTERS_SELECTEDITEM:
      return { ...state, isLoading: false, selectedItem: null };

    //REPORT
    case CountersActionTypes.SENDING_CHECK_REPORT:
      return { ...state, isLoading: true };
    case CountersActionTypes.SENDING_CHECK_REPORT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        dataReport:  action.payload ,
      };
    case CountersActionTypes.SENDING_CHECK_REPORT_FAILURE:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};
