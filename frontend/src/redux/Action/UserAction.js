import axios from "axios";
import { GET_USERS } from "../ActionTypes/UserAction";
export const get_users = () => async (dispatch) => {
  try {
    const res = await axios.get("/user/all");
    dispatch({ type: GET_USERS, payload: res.data });
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};
export const add_user = (data) => async (dispatch) => {
  try {
    await axios.post("/user/add", data);
    dispatch(get_users());
  } catch (error) {
    console.log(error);
  }
};
export const del_user = (id) => async (dispatch) => {
  try {
    await axios.delete(`user/delete/${id}`);

    dispatch(get_users());
  } catch (error) {
    console.log(error);
  }
};
export const edit_user = (id, data) => async (dispatch) => {
  try {
    const res = await axios.put(`user/edit/${id}`, data);
    dispatch(get_users());
  } catch (error) {
    console.log(error);
  }
};
