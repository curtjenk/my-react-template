export type Session = {
    isAuthenticated?: boolean;
    loggedInUser?: {};
    redirectPath: string;

  }
  
  export const initialSession: Session = {
    redirectPath: ''
  };