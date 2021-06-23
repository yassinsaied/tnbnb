import React from 'react'
import Slider from '@material-ui/core/Slider'
import './RangSlider.css'

export default function RangeSlider(props) {

  return (
    <>
      <Slider
        onChange={props.changeRange}
        value={props.value}
        valueLabelDisplay="auto"
        max={props.maxRange}
        min={props.minRange}
        step={props.stepRange}
        marks={props.marksRange}
      />
    </>
  )
}
