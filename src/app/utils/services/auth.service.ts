
import JwtResponse from "../../models/JwtResponse";
import { APIProps, API_BASE_URL, API_POST } from "../api/API";

// const register = (username: string, email: string, password: string): any => {
//   return api.post(API_URL + "signup", {
//     username,
//     email,
//     password,
//   });
// };

const login =  async (username: string, password: string) => {
  const apiProps: APIProps = {
    path: `${API_BASE_URL}/auth/signin`,
    body: { username: username, password: password}
  }
 
  return await API_POST(apiProps)

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

const AuthService = {
  login,
  logout,
  getCurrentUser,
};

export default AuthService;