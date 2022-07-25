import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { deviceReducer } from "./deviceReducer"
import { countersReducer } from "./countersReducer"
import incrementSlice from "./incrementSlice"

export const rootReducer = combineReducers({
  // user: userReducer,
  // device: deviceReducer,
  // counters: countersReducer,
  increment: incrementSlice
});

// export type RootState = ReturnType<typeof rootReducer>;