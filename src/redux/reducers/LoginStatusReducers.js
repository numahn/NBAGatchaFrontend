//where all states actually exists, (initial state)
//run actions based on it
import {
   SET_LOGIN_TRUE, 
   SET_LOGIN_FALSE, 
   GET_LOGIN_STATUS, 

} from "../actions/loginStatusActions"; 

const initialState = {
    loginStatus: false
}

export const loginStatusReducer = (state = initialState, action) =>{
    switch(action.type){
        case SET_LOGIN_FALSE: 
        return {
            ...state, //must return copy of state
            state: state.loginStatus=false, 
            
        }
        case SET_LOGIN_TRUE:
            return {
                ...state, 
                state: state.loginStatus=true, 
        }
        case GET_LOGIN_STATUS: 
            return {
                ...state, 
                state: state.loginStatus, 
            }
            default: 
            return state; 
    }
}