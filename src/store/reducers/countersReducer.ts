import { ICountersState, CountersActions, CountersActionTypes } from "../../types/counters"

const initialState: ICountersState = {
    data: null,
    sendingResponse: null,
    selectedItem: null,
    isLoading: false,
    error: null
}

export const countersReducer = (
    state = initialState,
    action: CountersActions
): ICountersState => {
    switch (action?.type) {
        case CountersActionTypes.FETCHING_COUNTERS_DATA:
            return { ...state, isLoading: true }
        case CountersActionTypes.FETCHING_COUNTERS_DATA_SUCCESS:
            return { ...state, isLoading: false, data: action.payload }
        case CountersActionTypes.FETCHING_COUNTERS_DATA_FAILURE:
            return { ...state, isLoading: false, error: action.payload }

        case CountersActionTypes.SENDING_COUNTERS_DATA:
            return { ...state, isLoading: true }
        case CountersActionTypes.SENDING_COUNTERS_DATA_SUCCESS:
            return { ...state, isLoading: false, sendingResponse: action.payload }
        case CountersActionTypes.SENDING_COUNTERS_DATA_FAILURE:
            return { ...state, isLoading: false, error: action.payload }

        case CountersActionTypes.FETCHING_COUNTERS_TELEMETRY:
            return { ...state, isLoading: true }
        case CountersActionTypes.FETCHING_COUNTERS_TELEMETRY_SCUCCESS:
            return { ...state, isLoading: false, selectedItem: { history: action.payload } }
        case CountersActionTypes.FETCHING_COUNTERS_TELEMETRY_FAILURE:
            return { ...state, isLoading: false, error: action.payload }
        case CountersActionTypes.CLEAR_COUNTERS_SELECTEDITEM:
            return { ...state, isLoading: false, selectedItem: null }

        default:




            return state
    }
}