import axios from "axios";
import { LOGIN_USER, REGISTER_USER, FETCH_USER, LOGOUT_USER, FETCH_DATA, RESET_DATA } from "./types";


export const fetchUser = () => async (dispatch) => {
  try {
    const res = await axios.get("/current_user");
    dispatch({ type: FETCH_USER, payload: res.data });
    console.log(res.data);
  } catch (err) {
    console.log(err);
  }
};

export const logInUser = (login, history) => async dispatch => {
  try {
    const res = await axios.post("/login", login);
    dispatch({ type: LOGIN_USER, payload: res.data });
    history.push("/main");
    console.log(history);
  } catch (err) {
    console.log(err);
  }
};

export const fetchData = input => async dispatch => {
  console.log(input);
  try {
    const res = await axios.post("/api/search", { text: input });
    dispatch({ type: FETCH_DATA, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};

export const registerUser = (register, history)  => async dispatch => {
  try {
    const res = await axios.post("/register", register);
    dispatch({ type: REGISTER_USER, payload: res.data });
    history.push("/main");
  } catch (err) {
    console.log(err);
  }
};

export const logOutUser = (history) => async dispatch => {
  try {
    const res = await axios.get("/logout");
    dispatch({ type: LOGOUT_USER, payload: res.data });
    history.push("/");
    console.log(res.data);
  } catch (err) {
    console.log(err);
  }
};

export const resetData = () => dispatch => {
 

    dispatch({ type: RESET_DATA, payload: [] });

};