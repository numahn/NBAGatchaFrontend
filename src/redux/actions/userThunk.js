import axios from "axios";
import {
  FETCH_USER,
  START_FETCHING_USER,
  END_FETCHING_USER,
  INITIAL_STATE_USER,
} from "./userActions";

const getUserThunk = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_FETCHING_USER });
    const response =
      await axios.get(`https://ttp-capstone-project-backend.vercel.app/
user/${id}`);
    const user = response.data[0];
    dispatch({ type: FETCH_USER, payload: user });
    dispatch({ type: END_FETCHING_USER });
  } catch (error) {
    console.error(error);
  }
};

const initialUserState = () => async (dispatch) => {
  try {
    dispatch({ type: INITIAL_STATE_USER });
  } catch (error) {
    console.error(error);
  }
};

export { getUserThunk, initialUserState };
