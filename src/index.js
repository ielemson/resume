import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {

  return (
    <BrowserRouter forceRefresh={true}>
      <Routes />
    </BrowserRouter>
  );
};
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
