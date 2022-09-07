import { combineReducers } from "redux";
import { authAPI } from "../api/authApi";
import { deviceApi } from "../api/deviceApi";
import { userApi } from "../api/userApi";
import { countersAPI } from "../api/countersAPI";
import userReducer from "./userSlice";
import deviceReducer from "./deviceSlice";
import countersReducer from "./countersSlice";

export const rootReducer = combineReducers({
  [authAPI.reducerPath]: authAPI.reducer,
  [userApi.reducerPath]: userApi.reducer,
  [deviceApi.reducerPath]: deviceApi.reducer,
  [countersAPI.reducerPath]: countersAPI.reducer,
  userState: userReducer,
  deviceState: deviceReducer,
  countersState: countersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
