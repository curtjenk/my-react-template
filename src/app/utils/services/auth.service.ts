
import { AxiosResponse } from "axios";
import globalState from "../../../contexts/GlobalStore";
import JwtResponse from "../../models/JwtResponse";
import { APIProps, API_BASE_URL, API_POST } from "../api/API";

// const register = (username: string, email: string, password: string): any => {
//   return api.post(API_URL + "signup", {
//     username,
//     email,
//     password,
//   });
// };

const login =  async (username: string, password: string): Promise<AxiosResponse<any>> => {
  const apiProps: APIProps = {
    path: `${API_BASE_URL}/auth/signin`,
    body: { username: username, password: password}
  }
  
  try {
    const resp = await API_POST(apiProps);
    globalState.isAuthenticated.set(true);
    globalState.userName.set(username);
    return resp;
  } catch (err) {
    console.log("login exception caught")
    globalState.isAuthenticated.set(false);
    return Promise.reject(err);
  }

};

const logout = (): void => {
  globalState.isAuthenticated.set(false);
  globalState.userName.set('');
  globalState.tokenData.set(undefined);
};

const getCurrentUser = (): JwtResponse | undefined => {
  return globalState.tokenData.get();
};

const AuthService = {
  login,
  logout,
  getCurrentUser,
};

export default AuthService;