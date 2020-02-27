import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App";
import "bootstrap/dist/css/bootstrap.min.css";
// import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

// const theme = createMuiTheme({
//   palette: {
//     primary: {
//         main: "#f95959",
//         contrastText: '#fff',
//     },
//     secondary: {
//       main: "#facf5a",
//       contrastText: '#fff',
//     },
//     info: {
//         main: "#455d7a",
//         contrastText: '#fff',
//     }
//   },
// });

ReactDOM.render(

    <App />,

  document.getElementById("root")
);
