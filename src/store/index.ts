import { applyMiddleware, createStore, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from '@redux-devtools/extension';
import { rootReducer } from "./reducers";


const middleware: any[] = [thunk]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

export const store = configureStore({ reducer: rootReducer , middleware});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store
export type AppDispatch = AppStore['dispatch']

