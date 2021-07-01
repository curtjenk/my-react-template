import { useEffect } from 'react';
import { Redirect, Route, RouteProps, useLocation } from 'react-router';

export type ProtectedRouteProps = {
  // Is the user authenticated?
  isAuthenticated: boolean;
  // Path to the sign in form
  authenticationPath: string;
  // Redirect path after authentication
  redirectPath: string;
  // Function to update the redirection path
  setRedirectPath: (path: string) => void;
} & RouteProps;

export default function ProtectedRoute({
    isAuthenticated, 
    authenticationPath, 
    redirectPath, 
    setRedirectPath, ...routeProps}: ProtectedRouteProps) 
{
  const currentLocation = useLocation();
  console.log("current location", currentLocation)
  useEffect(() => {
    if (!isAuthenticated) {
      console.log("PR useEffect(): CurrentLocation")
      setRedirectPath(currentLocation.pathname);
    }
  }, [isAuthenticated, setRedirectPath, currentLocation]);

  // if(isAuthenticated && redirectPath === currentLocation.pathname) {
  if(isAuthenticated) {
    console.log("loading new component")
    return <Route {...routeProps} />;
  } else {
    let whereTo = isAuthenticated ? redirectPath : authenticationPath ;
    console.log("protrout redirecting to ", whereTo)
    return <Redirect to={{ pathname: whereTo }} />;
  }
};
