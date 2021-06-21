import axios from "axios"


function findAll(page, itemPerPage) {

    return axios.get("http://127.0.0.1:8000/api/ads?itemsPerPage=" + itemPerPage + "&page=" + page)
        .then(response => response.data)

}

const exporteAds = {
    findAll
}
export default exporteAds