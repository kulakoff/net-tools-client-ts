import { combineReducers } from "redux";
// import { userReducer } from "./userReducer";
// import { deviceReducer } from "./deviceReducer";
// import { countersReducer } from "./countersReducer";
import incrementSlice from "./incrementSlice";
import { authAPI } from "../api/authApi";

export const rootReducer = combineReducers({
  // user: userReducer,
  // device: deviceReducer,
  // counters: countersReducer,
  increment: incrementSlice,
  [authAPI.reducerPath]: authAPI.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
