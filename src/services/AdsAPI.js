import axios from "axios";

const baseUrl = "http://127.0.0.1:8000/api/ads?";

function findAll(page, itemPerPage) {
  return axios
    .get(baseUrl + "itemsPerPage=" + itemPerPage + "&page=" + page)
    .then((response) => response.data);
}

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

const exporteAds = {
  findAll,
  searchAdHome,
};
export default exporteAds;
