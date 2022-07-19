import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from '@redux-devtools/extension';
import { rootReducer } from "./reducers";


const middleware:any[] = [thunk]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));