export interface ISET_ACCESS_TOKEN {
  readonly type: 'SET_ACCESS_TOKEN';
  payload: string | null;
}
export interface ISET_USER_TOKEN {
  readonly type: 'SET_USER_TOKEN';
  payload: string | null;
}
export interface IEND_USER_SESSION {
  readonly type: 'END_USER_SESSION';
  payload?: string | null;
}

export type AuthTypes =
| ISET_ACCESS_TOKEN
| ISET_USER_TOKEN
| IEND_USER_SESSION;

/*
Example usage in a component tsx file
import React, { Dispatch } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from './redux/reducers/rootReducter';
import { AuthActions } from './redux/actions/AuthActions';

function MyAuthComponent() {
    const { auth } = useSelector((state: AppState) => state.name);
    const authDispatch = useDispatch<Dispatch<AuthActions>>();

    const handleSetAccessToken = (accessToken: string) => {
        authDispatch({type: 'SET_ACCESS_TOKEN', payload: accessToken})
    }

    const handleSetUserToken = (userToken: string) => {
        authDispatch({type: 'SET_USER_TOKEN', payload: accessToken})
    }
    const handleSetEndUserSession = () => {
        authDispatch({type: 'END_USER_SESSION'})
        localStorage.clear();
    }
}


*/

/*
export const setUserSession = (accessToken, userToken) => {
    return dispatch => {
      // Method to set all User session data
      dispatch(setAccessToken(accessToken));
      dispatch(updateUserPermissions(accessToken, userToken));
    }
  }
  
  // Update User Token with Permissions
  const updateUserPermissions = (accessToken, userToken) => {
    return dispatch => {
      // Update User Token in Redux
      dispatch(setUserToken(userToken));
    }
  }
  // Kept in code in case explicit permissions are needed from the Okta jwt
  // // Method to parse JWT token
  // const parseJwt = (token) => {
  //   let json;
  //   try {
  //     const base64Url = token.split('.')[1];
  //     const base64 = base64Url.replace('-', '+').replace('_', '/');
  //     json = JSON.parse(window.atob(base64));
  //   } catch (e) {
  //     console.error('error parsing jwt ' + String(e));
  //   }
  //   return json;
  // }
  
  const setAccessToken = (accessToken: string | null) => {
    return (dispatch: (arg0: { type: string; payload: string | null; }) => void) => {
      dispatch({ type: 'SET_ACCESS_TOKEN', payload: accessToken });
    }
  }
  
  const setUserToken = (userToken) => {
    return dispatch => {
      dispatch({ 
        type: SET_USER_TOKEN, 
        payload: userToken });
    }
  }
  
  export const endUserSession = () => {
    return dispatch => {
      dispatch({ 
        type: END_USER_SESSION }
        );
      localStorage.clear();
    }
  }
  */