import axios from "axios";
import {
  LOGIN_USER,
  REGISTER_USER,
  FETCH_USER,
  LOGOUT_USER,
  FETCH_DATA,
  RESET_DATA
} from "./types";

export const fetchUser = () => async dispatch => {
  try {
    const res = await axios.get("/current_user");
    dispatch({ type: FETCH_USER, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};

export const logInUser = (
  login,
  history,
  enqueueSnackbar
) => async dispatch => {
  try {
    const res = await axios.post("/login", login);
    dispatch({ type: LOGIN_USER, payload: res.data });
    history.push("/main");
  } catch (err) {
    errHandler(err, enqueueSnackbar);
  }
};

export const registerUser = (
  register,
  history,
  enqueueSnackbar
) => async dispatch => {
  try {
    const res = await axios.post("/register", register);
    dispatch({ type: REGISTER_USER, payload: res.data });
    history.push("/main");
  } catch (err) {
    errHandler(err, enqueueSnackbar);
  }
};

export const logOutUser = history => async dispatch => {
  try {
    const res = await axios.get("/logout");
    dispatch({ type: LOGOUT_USER, payload: res.data });
    history.push("/");
  } catch (err) {
    console.log(err);
  }
};

export const fetchData = (input, enqueueSnackbar) => async dispatch => {
  try {
    const res = await axios.post("/api/search", { text: input });
    dispatch({ type: FETCH_DATA, payload: res.data });
  } catch (err) {
    errHandler(err, enqueueSnackbar);
  }
};

export const resetData = () => dispatch => {
  dispatch({ type: RESET_DATA, payload: [] });
};

function errHandler(err, enqueueSnackbar) {
  if (!err.response) {
    enqueueSnackbar("Network Error", { variant: "error" });
  } else {
    console.log(err);
    enqueueSnackbar(err.response.data, { variant: "error" });
  }
}
