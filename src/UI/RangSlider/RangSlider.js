import React from 'react'
import Slider from '@material-ui/core/Slider'
import './RangSlider.css'

export default function RangeSlider(props) {

  return (
    <>
      <Slider
        onChange={props.changeRange}
        //defaultValue={props.defaultRangeValue}
        valueLabelDisplay="auto"
        max={props.maxRange}
        min={props.minRange}
        step={props.stepRange}
        marks={props.marksRange}
        value={props.valueRange}
      />
    </>
  )
}
