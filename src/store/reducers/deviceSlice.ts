import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IDeviceResponse } from "../../types/response/IDeviceResponse";

export interface IDeviceState {
  cpe: IDeviceResponse | null;
}
const initialState: IDeviceState = {
  cpe: null,
};

export const deviceSlice = createSlice({
  initialState,
  name: "deviceSlice",
  reducers: {
    clearCPE: () => initialState,
    setCPE: (state, action: PayloadAction<IDeviceResponse>) => {
      state.cpe = action.payload;
    },
  },
});

export default deviceSlice.reducer;
export const { clearCPE, setCPE } = deviceSlice.actions;
