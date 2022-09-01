import { combineReducers } from "redux";
import { authAPI } from "../api/authApi";
import { userApi } from "../api/userApi";
import userReducer from "./userSlice";

export const rootReducer = combineReducers({
  [authAPI.reducerPath]: authAPI.reducer,
  [userApi.reducerPath]:userApi.reducer,
  userState: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
