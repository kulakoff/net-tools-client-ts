// import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { CookiesProvider } from "react-cookie";
import App from "./App";
import { setupStore } from "./store";
import "./index.css";
import AuthMiddleware from "./helpers/AuthMiddleware";

const store = setupStore();
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <CookiesProvider>
        {/* <AuthMiddleware> */}
        <App />
        {/* </AuthMiddleware> */}
      </CookiesProvider>
    </BrowserRouter>
  </Provider>
);
