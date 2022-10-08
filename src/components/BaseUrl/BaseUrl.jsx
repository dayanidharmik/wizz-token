import axios from "axios";

// Encrypt & Decrypt

const instance = axios.create({
  baseURL:process.env.REACT_APP_BASE_URL,
  withCredentials: true,
});
// eslint-disable-next-line consistent-return

instance.interceptors.request.use(
  (config) => {
    let getAuth = localStorage.getItem("token");
    let Auth = JSON.parse(getAuth);
      if (Auth) {
      config.headers = {
        Authorization: `${Auth.token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
        // "content-type": "multipart/form-data",
      };
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    Promise.reject(error);
  }
);
export default instance;
