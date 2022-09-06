import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import { authAPI } from "./api/authApi";
import { deviceApi } from "./api/deviceApi";
import { userApi } from "./api/userApi";
import { rootReducer } from "./reducers";

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    // devTools: process.env.NODE_ENV === "development",
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([
        authAPI.middleware,
        userApi.middleware,
        deviceApi.middleware,
        // deviceApi.middleware,
        createLogger(),
      ]),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
