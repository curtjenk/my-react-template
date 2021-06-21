import ProtectedRoute, { ProtectedRouteProps } from "./app/components/ProtectedRoute";
import { Route, Switch } from 'react-router';
import Homepage from "./app/pages/Homepage";
import Dashboard from "./app/pages/Dashboard";
import SignInSide from "./app/pages/SignInSide";
import globalState from "./contexts/GlobalStore";
import { useState } from "@hookstate/core";
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'

export default function App() {
  const state = useState(globalState);
  
  const setRedirectPath = (path: string) => {
    state.redirectPath.set(path);
   
  }
  console.log("Is Authenticated", state.isAuthenticated.get());

  const defaultProtectedRouteProps: ProtectedRouteProps = {
    isAuthenticated: !!state.isAuthenticated.get(),
    authenticationPath: '/login',
    redirectPath: state.redirectPath.get(),
    setRedirectPath: setRedirectPath
  };

  return (
  
    <div>
        <ReactNotification />
        <Switch>
          <ProtectedRoute {...defaultProtectedRouteProps} 
                exact={true} path='/' component={Homepage} />
          <ProtectedRoute {...defaultProtectedRouteProps} 
                path='/dashboard' component={Dashboard} />
          <Route path='/login' component={SignInSide} />
        </Switch>
    </div>
  );
};