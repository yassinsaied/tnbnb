import React , { useState ,useEffect} from 'react'
import FormSearchH from '../FormSearchH/FormSearchH'
import TextSlider from '../../UI/TextSlider/TexSlider'
import AdsCategory from '../AdsCategory/AdsCategory'
import ListAd from "../ListAds/ListAds"
import ServiceAds from "../../services/AdsAPI"
import './HomeContainer.css'

const HomeContainer = () => {
const [lastAds, setLastAds] = useState([])
useEffect(() => {
 ServiceAds.findAll()
 .then(data => setLastAds(data))
 .catch(error => console.log(error.response))
 ;


}, [])




  return (
    <div className="row align-items-center justify-content-center text-center">
      <TextSlider/>
      <FormSearchH/>
      <AdsCategory/>

   
      <ListAd listAds={lastAds}/>


    
    </div>
  )
}

export default HomeContainer
