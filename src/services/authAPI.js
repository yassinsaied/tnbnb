import axios from "axios";
import jwt_decode from "jwt-decode";

const API_URL = "http://127.0.0.1:8000/api/";

const loginService = (credentials) => {
  return axios
    .post(API_URL + "login_check", credentials)
    .then((response) => {
      //window.localStorage.setItem("authToken", response.data.token);
      axios.defaults.headers["Authorization"] = "Bearer " + response.data.token;
      return response.data.token;
    })
    .then((token) => {
      const { username } = jwt_decode(token);

      return axios
        .get("http://127.0.0.1:8000/api/users?email=" + username)
        .then((response) => {
          // window.localStorage.setItem("user", response.data.token);

          return {
            data: response.data,
            token,
          };
        });
    });
};

const registerService = (user) => {
  console.log(user)
  return axios
    .post("http://127.0.0.1:8000/api/users", user)
    .then((response) => {
      return response;
    });
};

const userService = {
  loginService,
  registerService,
};

export default userService;
