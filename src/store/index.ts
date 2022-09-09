import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import { authAPI } from "./api/authAPI";
import { countersAPI } from "./api/countersAPI";
import { deviceAPI } from "./api/deviceAPI";
import { reportAPI } from "./api/reportAPI";
import { userAPI } from "./api/userApi";
import { rootReducer } from "./reducers";

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    // devTools: process.env.NODE_ENV === "development",
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([
        authAPI.middleware,
        userAPI.middleware,
        deviceAPI.middleware,
        countersAPI.middleware,
        reportAPI.middleware,
        // deviceApi.middleware,
        createLogger(),
      ]),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
