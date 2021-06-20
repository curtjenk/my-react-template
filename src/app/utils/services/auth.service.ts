
// const API_URL = "http://localhost:8080/api/auth/";

import JwtResponse from "../../models/JwtResponse";
import { APIProps, API_POST } from "../api/API";

// const register = (username: string, email: string, password: string): any => {
//   return api.post(API_URL + "signup", {
//     username,
//     email,
//     password,
//   });
// };

const login = (username: string, password: string) => {
  const apiProps: APIProps = {
    path: "auth/sigin",
    body: { username: username, password: password}
  }
  
  return API_POST(apiProps )
    .then((response) => {
      const data: JwtResponse = response.data;
      
      if (data.token) {
        localStorage.setItem("user", JSON.stringify(data));
      }

      return response.data;
    })
};

const logout = (): void => {
  localStorage.removeItem("user");
};

const getCurrentUser = (): JwtResponse | null => {
  const user: string | null  = localStorage.getItem("user");
  if (user) {
    const jwtResponse = JSON.parse(user) as JwtResponse;
    return jwtResponse;
  } else {
    return null;
  }
};

export default {
  // register,
  login,
  logout,
  getCurrentUser,
};