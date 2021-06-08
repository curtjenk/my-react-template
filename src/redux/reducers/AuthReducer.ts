import { AuthActions } from '../actions/AuthActions'
  
  type AuthState = {
      userToken: string | null,
      accessToken: string | null
  }
  const initialState: AuthState = {
    userToken: null,
    accessToken: null
  }
  
  const AuthReducer = (state: AuthState = initialState, action: AuthActions) => {
    console.log(state, action);
    switch (action.type) {
      case 'SET_ACCESS_TOKEN':
        return { ...state, accessToken: action.payload };
      case 'SET_USER_TOKEN':
        return { ...state, userToken: action.payload };
      case 'END_USER_SESSION':
        return { ...initialState };
      default:
        return state;
    }
  }
  export default AuthReducer;