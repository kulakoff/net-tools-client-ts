import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IResponseTelemetryItem } from "../../types/counters";

export interface IDeviceState {
  // telemetry: IResponseTelemetryItem[] | null;
  telemetry: any;
}
const initialState: IDeviceState = {
  telemetry: [null],
};

export const counterSlice = createSlice({
  initialState,
  name: "counterSlice",
  reducers: {
    setCounterHistory: (state, action: PayloadAction<any>) => {
      console.log(action)
      state.telemetry = action.payload;
    },
    clearCounterHistory: () => initialState,
  },
});

export default counterSlice.reducer;
export const { setCounterHistory, clearCounterHistory } = counterSlice.actions;
