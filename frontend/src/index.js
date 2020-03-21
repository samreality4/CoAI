import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import reduxThunk from "redux-thunk";
import { SnackbarProvider } from "notistack";
import {ThemeProvider} from "@material-ui/core/styles";
import GlobalMaterialUI from "./theme/GlobalMaterialUI";

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <ThemeProvider theme={GlobalMaterialUI}>
  <SnackbarProvider maxSnack={1}>
    <Provider store={store}>
      <App />
    </Provider>
  </SnackbarProvider>
  </ThemeProvider>,
  document.getElementById("root")
);
