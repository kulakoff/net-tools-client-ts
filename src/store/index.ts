import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { authAPI } from "./api/authApi";
import { rootReducer } from "./reducers";

// export const rootReducer = combineReducers({
//   // user: userReducer,
//   // device: deviceReducer,
//   // counters: countersReducer,
//   // increment: incrementSlice,
//   [authAPI.reducerPath]: authAPI.reducer,
// });

// const middleware: any[] = [authAPI.middleware];
// if (process.env.NODE_ENV !== "production") {
//   middleware.push(createLogger());
// }

// export const store = configureStore({ reducer: rootReducer , middleware});
export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(authAPI.middleware, createLogger()),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
