import axios from "axios";
import { LOGIN_USER, REGISTER_USER, FETCH_DATA } from "./types";



export const logInUser = login => async dispatch => {
  try {
    const res = await axios.post("/login", login);
    dispatch({ type: LOGIN_USER, payload: res.data });
    console.log(res.data);
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

export const registerUser = register => async dispatch => {
  try {
    const res = await axios.post("/register", register);
    dispatch({ type: REGISTER_USER, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};
