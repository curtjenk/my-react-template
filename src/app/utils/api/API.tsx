// eslint - disable import /first
import handleError from './APIError';
// import { store } from '../../store';
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
  console.log('error:', error)
  // Send Error to handler
  const handledError = handleError(error);
  return Promise.reject(handledError.response);
});

const getConfig = async (responseType?: any) => {
  // Get latest accessToken from Redux
  // const { accessToken } = await store.getState().auth;
  const accessToken = "";
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

type APIProps = {
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