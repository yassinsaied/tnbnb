import axios from "axios";

const baseUrl = "http://127.0.0.1:8000/api/ads?";


// Get all Das
function findAll(page, itemPerPage) {
  return axios
    .get(baseUrl + "itemsPerPage=" + itemPerPage + "&page=" + page)
    .then((response) => response.data);
}


// GET Ads result from form search home
function searchAdHome(page, itemPerPage, data) {
  let serachUrl = baseUrl + "itemsPerPage=" + itemPerPage + "&page=" + page + "&price[gte]=" + data.gte + "&price[lte]=" + data.lte;
     
  if (data.fastSearch !== "") {
    serachUrl += "&search=" + data.fastSearch;
  }

  if (data.gove !== undefined) {
    serachUrl += "&gov=" + data.gov;
   }                 
   
  return axios.get(serachUrl).then((response)=> response.data);
}

function addAd(ad)  {
   return axios.post( baseUrl + "ads", ad)
}

function uploadImage(formDataPictres)  {
  return axios.post("http://localhost:4000/picture", formDataPictres)
    
    .then((res) => console.log(res));
}










const exporteAds = {
  findAll,
  searchAdHome,
  addAd,
  uploadImage



};
export default exporteAds;
