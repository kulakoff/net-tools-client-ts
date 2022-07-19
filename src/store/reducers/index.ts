import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { deviceReducer } from "./deviceReducer"
import { countersReducer } from "./countersReducer"

export const rootReducer = combineReducers({
  user: userReducer,
  device: deviceReducer,
  counters: countersReducer
});

export type RootState = ReturnType<typeof rootReducer>;