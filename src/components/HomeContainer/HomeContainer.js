import React from 'react'
import FormSearchH from '../FormSearchH/FormSearchH'
import TextSlider from '../../UI/TextSlider/TexSlider'
import AdsCategory from '../AdsCategory/AdsCategory'
import './HomeContainer.css'

const HomeContainer = () => {
  return (
    <div className="row align-items-center justify-content-center text-center">
      <TextSlider/>
      <FormSearchH/>
      <AdsCategory/>


    
    </div>
  )
}

export default HomeContainer
