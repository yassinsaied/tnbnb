import React from 'react'
import FormSearchH from '../FormSearchH/FormSearchH'
import TextSlider from '../../UI/TextSlider/TexSlider'
import './HomeContainer.css'

const HomeContainer = () => {
  return (
    <div className="row align-items-center justify-content-center text-center">
      <TextSlider/>
      <FormSearchH/>
    </div>
  )
}

export default HomeContainer
