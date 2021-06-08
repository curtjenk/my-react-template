import {
    SET_ACCESS_TOKEN,
    //
    SET_USER_TOKEN,
    //
    END_USER_SESSION,
  } from '../actions';
  
  type AuthState = {
      userToken: string | null,
      accessToken: string | null
  }
  const initialState: AuthState = {
    userToken: null,
    accessToken: null
  }
  
  const AuthReducer = (state: AuthState = initialState, action: AuthActions) => {
    switch (action.type) {
      case SET_ACCESS_TOKEN:
        return { ...state, accessToken: action.payload };
      case SET_USER_TOKEN:
        return { ...state, userToken: action.payload };
      case END_USER_SESSION:
        return { ...initialState };
      default:
        return state;
    }
  }
  export default AuthReducer;