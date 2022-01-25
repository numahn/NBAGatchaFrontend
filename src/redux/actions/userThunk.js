import { FETCH_USER, START_FETCHING_USER, END_FETCHING_USER } from "./userActions";

export const getUserThunk = (id) => async (dispatch) => {
    try {
        dispatch({type: START_FETCHING_USER});
        const user = await fetch(`http://localhost:5000/login/${id}`)
        const data = await user.json()
        dispatch({type: FETCH_USER, payload: data})
        dispatch({type: END_FETCHING_USER}); 
    } catch (error) {
        console.error(error); 
    }

}
