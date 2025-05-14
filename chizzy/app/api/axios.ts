import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export const baseUrl: string | undefined = process.env.REACT_APP_BASE_URL;

// Generic POST function with TypeScript
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
}
