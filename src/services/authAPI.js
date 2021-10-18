import axios from "axios";
import jwt_decode from "jwt-decode";

const API_USERS_URL = "http://127.0.0.1:8000/api/users"; 
const API_CHECK_lOGIN_URL = "http://127.0.0.1:8000/api/";

const getUserByEmail = (username) => {

  return axios
     .get(API_USERS_URL+"?email=" + username).then((res) => {
          return res.data
     })

}

const getUserBySlug = (slug) => {

  return axios
     .get(API_USERS_URL+"?slug=" + slug).then((res) => {
          return res.data
     })

}


const loginService = (credentials) => {
  return axios
    .post(API_CHECK_lOGIN_URL + "login_check", credentials)
    .then((response) => {
      //window.localStorage.setItem("authToken", response.data.token);
      axios.defaults.headers["Authorization"] = "Bearer " + response.data.token;
      return response.data.token;
    })
    .then((token) => {
      const { username } = jwt_decode(token);

      return  getUserByEmail(username).then((user) => {
         
         return {
            data: user,
            token,
          };
        });
    });
};






const registerService = (user) => {
  console.log(user)
  return axios
    .post(API_USERS_URL, user)
    .then((response) => {
      return response;
    });
};

const userService = {
  loginService,
  registerService,
  getUserByEmail,
  getUserBySlug
};

export default userService;
