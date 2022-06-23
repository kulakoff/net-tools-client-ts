import { ICountersState, CountersActions, CountersActionTypes } from "../../types/counters"

const initialState: ICountersState = {
    data: null,
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
        default:
            return state
    }
}