import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { deviceReducer } from "./deviceReducer"

export const rootReducer = combineReducers({
  user: userReducer,
  device: deviceReducer
});

export type RootState = ReturnType<typeof rootReducer>;