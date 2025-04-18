import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app/App.js";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store/store.js";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
