import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import reduxThunk from "redux-thunk";
import { SnackbarProvider } from "notistack";

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <SnackbarProvider maxSnack={1}>
    <Provider store={store}>
      <App />
    </Provider>
  </SnackbarProvider>,
  document.getElementById("root")
);
