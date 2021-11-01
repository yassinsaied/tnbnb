import axios from "axios";
import jwt_decode from "jwt-decode";

const API_USERS_URL = "http://127.0.0.1:8000/api/users";
const API_CHECK_lOGIN_URL = "http://127.0.0.1:8000/api/";


// Get user by email
const getUserByEmail = (username) => {
  return axios.get(API_USERS_URL + "?email=" + username).then((res) => {
    return res.data;
  });
};


// Get user by slug
const getUserBySlug = (slug) => {
  return axios.get(API_USERS_URL + "?slug=" + slug).then((res) => {
    return res.data;
  });
};

// GET sub resource of user
const getAdsOfUser = (idUser, itemsPerPage, page) => {
  return axios
    .get(
      API_USERS_URL +
        "/" +
        idUser +
        "/ads?page=" +
        page +
        "&itemsPerPage=" +
        itemsPerPage
    )
    .then((res) => {
      return res.data;
    });
};


// login user
const loginService = (credentials) => {
  return axios
    .post(API_CHECK_lOGIN_URL + "login_check", credentials)
    .then((response) => {
      //window.localStorage.setItem("authToken", response.data.token);
      axios.defaults.headers["Authorization"] = "Bearer " + response.data.token;
      console.log( response.data.token)
      return response.data.token;
    })
    .then((token) => {
      const { username } = jwt_decode(token);

      return getUserByEmail(username).then((user) => {
        return {
          data: user,
          token,
        };
      });
    });
};


// Register user
const registerService = (user) => {
 
  return axios.post(API_USERS_URL, user).then((response) => {
    return response;
  });
};


//Upload avatar user
function uploadAvatar(formDataPictres)  {
  return axios.post("http://localhost:4000/avatar", formDataPictres)
    
    .then((res) => console.log(res));
}


//Update user Profile
function updateProfileUser (user) {
  return axios.put(API_USERS_URL+ "/" +user.id , user)
}







const userService = {
  loginService,
  registerService,
  getUserByEmail,
  getUserBySlug,
  getAdsOfUser,
  uploadAvatar,
  updateProfileUser
};

export default userService;
