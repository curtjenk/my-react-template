import ProtectedRoute, { ProtectedRouteProps } from "./app/components/ProtectedRoute";
import { Route, Switch } from 'react-router';
import Homepage from "./app/pages/Homepage";
import Dashboard from "./app/pages/Dashboard";
import SignInSide from "./app/pages/SignInSide";
import globalState from "./stores/GlobalStore";
import { useState } from "@hookstate/core";
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'
import NotFound from "./app/pages/NotFound";

export default function App() {
  const state = useState(globalState);
  
  const setRedirectPath = (path: string) => {
    state.redirectPath.set(path); 
  }
  
  const defaultProtectedRouteProps: ProtectedRouteProps = {
    isAuthenticated: !!state.isAuthenticated.get(),
    authenticationPath: '/',
    redirectPath: state.redirectPath.get(),
    setRedirectPath: setRedirectPath
  };

  console.log("RouteProps", defaultProtectedRouteProps);

  return (
  
    <div>
        <ReactNotification />
        <Switch>
          <ProtectedRoute {...defaultProtectedRouteProps} 
                exact={true} path='/home' component={Homepage} />
          <ProtectedRoute {...defaultProtectedRouteProps} 
                exact={true} path='/dashboard' component={Dashboard} />
          <Route exact={true} path='/' component={SignInSide} />
          <Route component={NotFound} />
        </Switch>
    </div>
  );
};