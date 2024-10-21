import axios from "axios";

const useAuth = () => {
  const baseUrl = process.env.REACT_APP_API_URL;
  console.log(baseUrl);
  const request = axios.create({
    baseURL: baseUrl,
  });
  return { request };
};

export default useAuth;