import { combineReducers } from "redux";
import { authAPI } from "../api/authAPI";
import { deviceAPI } from "../api/deviceAPI";
import { userAPI } from "../api/userApi";
import { countersAPI } from "../api/countersAPI";

import userReducer from "./userSlice";
import deviceReducer from "./deviceSlice";
import countersReducer from "./countersSlice";
import { reportAPI } from "../api/reportAPI";

export const rootReducer = combineReducers({
  [authAPI.reducerPath]: authAPI.reducer,
  [userAPI.reducerPath]: userAPI.reducer,
  [deviceAPI.reducerPath]: deviceAPI.reducer,
  [countersAPI.reducerPath]: countersAPI.reducer,
  [reportAPI.reducerPath]: reportAPI.reducer,
  userState: userReducer,
  deviceState: deviceReducer,
  countersState: countersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
