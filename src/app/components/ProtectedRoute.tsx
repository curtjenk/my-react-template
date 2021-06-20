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

  console.log(isAuthenticated);
  console.log(currentLocation);
  
  useEffect(() => {
    if (!isAuthenticated) {
      setRedirectPath(currentLocation.pathname);
    }
  }, [isAuthenticated, setRedirectPath, currentLocation]);

  if(isAuthenticated && redirectPath === currentLocation.pathname) {
    return <Route {...routeProps} />;
  } else {
    return <Redirect to={{ pathname: isAuthenticated ? redirectPath : authenticationPath }} />;
  }
};
