
import { AxiosResponse } from "axios";
import globalState from "../../stores/GlobalStore";
import JwtResponse from "../models/JwtResponse";
import { APIProps, API_BASE_URL, API_POST } from "../utils/api/API";

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
    if (resp.status === 200) {
      globalState.isAuthenticated.set(true);
      globalState.tokenData.set(resp.data);
    } else {
      globalState.isAuthenticated.set(false);
      globalState.tokenData.set(undefined);
    }
    return resp;
  } catch (err) {
    console.log("login exception caught");
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