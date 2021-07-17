// eslint - disable import /first
import globalState from "../../../stores/GlobalStore";
import handleError from './APIError';
import axios from 'axios';

// Init Axios Instance
let axiosInstance = axios.create();

axiosInstance.interceptors.request.use(req => {
  return req;
}, error => {
  // Send Error to handler
  const handledError = handleError(error);
  return Promise.reject(handledError);
});

axiosInstance.interceptors.response.use(res => {
  return res;
}, error => {
  // console.log('error-response:', error.response)
  // Send Error to handler
  handleError(error);
  return Promise.reject(error.response);
});

const getConfig = async (responseType?: any) => {
  const accessToken = globalState.tokenData.get()?.token;
  let configResponseType = responseType ? responseType : 'json';
  return {
    responseType: configResponseType,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    },
  };
};

export type APIProps = {
  path: string,
  responseType?: string,
  file?: any,
  body?: any,
  cancelToken?: any
}
export const API_GET = async ({path, responseType}: APIProps) => {
  return await axiosInstance.get(path, await getConfig(responseType));
};

export const API_POST = async ({path, body}: APIProps) => {
  return await axiosInstance.post(path, body, await getConfig());
};

export const API_UPLOAD_FILE = async ({path, file, cancelToken}: APIProps) => {
  let formData = new FormData();

  // Append Data
  formData.append('name', 'file.name');
  formData.append('file', file);

  // Set config
  const config = {
    headers: { 'content-type': 'multipart/form-data' },
    cancelToken: cancelToken.token
  }

  const response = await axiosInstance.post(path, formData, config)
  return response;
}

export const generateAxiosCancelToken = () => {
  const token = axios.CancelToken;
  return token.source();
}

export const API_PATCH = async ({path, body}: APIProps) => {
  return await axiosInstance.patch(path, body, await getConfig());
};

export const API_PUT = async ({path, body}: APIProps) => {
  return await axiosInstance.put(path, body, await getConfig());
};

export const API_DEL = async ({path}: APIProps) => {
  return await axiosInstance.delete(path, await getConfig());
};

export const API_BASE_URL = process.env.REACT_APP_SERVER_URL;