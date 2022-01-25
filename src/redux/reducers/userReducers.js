import { FETCH_USER, START_FETCHING_USER, END_FETCHING_USER } from "../actions/userActions";

const initialState = {
    user: {}, 
    isFetchingUser: true, 
}

export const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USER: 
        return {
            ...state, 
            user: action.payload, 
        }; 
        case START_FETCHING_USER: 
        return {
            ...state, 
            isFetchingUser: true
        }; 
        case END_FETCHING_USER: 
        return {
            ...state, 
            isFetchingUser: false
        }
        default: 
        return state; 
    }
}