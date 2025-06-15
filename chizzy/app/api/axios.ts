import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export const baseUrl: string | undefined = process.env.EXPO_PUBLIC_API_URL;


export async function AxiosPost<T = any, R = any>(
  url: string,
  dataObject: T,
  config?: AxiosRequestConfig
): Promise<R> {
  const defaultConfig: AxiosRequestConfig = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response: AxiosResponse<R> = await axios.post(
      `${baseUrl}${url}`,
      dataObject,
      defaultConfig
    );
    return response.data;
  } catch (err) {
    throw err;
  }
};


export async function AxiosAuthPost<T = any, R = any>(
  url: string,
  token: string,
  dataObject: T,
  config?: AxiosRequestConfig
): Promise<R> {
  const defaultConfig: AxiosRequestConfig = {
    headers: {
      "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response: AxiosResponse<R> = await axios.post(
      `${baseUrl}${url}`,
      dataObject,
      defaultConfig
    );
    return response.data;
  } catch (err) {
    throw err;
  }
};


export async function AxiosAuthGet<T = any, R = any>(
  url: string,
  token: string | null,
  config?: AxiosRequestConfig
): Promise<R> {
  const defaultConfig: AxiosRequestConfig = {
    headers: {
      "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response: AxiosResponse<R> = await axios.get(
      `${baseUrl}${url}`,
      defaultConfig
    );
    return response.data;
  } catch (err) {
    throw err;
  }
}
