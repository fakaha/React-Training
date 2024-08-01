import React from "react";
import "./assets/css/index.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import SearchContextProvider from "./context/SearchContext";
import { Provider } from "react-redux";
import store from "./redux/store";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>

    <Provider store={store}>
      <SearchContextProvider>
        <App />
      </SearchContextProvider>
    </Provider>

  </React.StrictMode>
);
