import axios from "axios"


function findAll() {

   return  axios.get("http://127.0.0.1:8000/api/ads")
                .then(response => response.data['hydra:member']  )
                
}

const exporteAds = {
    findAll
}
export default exporteAds