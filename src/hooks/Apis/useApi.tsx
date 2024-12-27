import { useState } from "react";
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export const useApi = () => {
  // 인증 로직은 유연하게 추가하도록
  const [isLoading, setIsLoading] = useState(false);

  // add axios instance
  const api: AxiosInstance = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_URL}/api`,
    timeout: 10000,
    headers: { "Content-Type": "application/json" },
  });

  const callApi = async (
    config: AxiosRequestConfig
  ): Promise<AxiosResponse> => {
    setIsLoading(true); // api 호출 처리 전 로딩 처리
    try {
      const res = await api(config);
      setIsLoading(false);
      return res;
    } catch (err) {
      setIsLoading(false);
      console.error(err);
      throw err;
    }
  };

  return { api, callApi, isLoading };
};
