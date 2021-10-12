import React from "react";
import Slider from "@material-ui/core/Slider";
import InputLabel from '@material-ui/core/InputLabel'
import Box from '@material-ui/core/Box';
import "./RangSlider.css";

const RangeSlider = (props)=> {

  return (
    
    <div className="ran-Box">
    <Box >
    <InputLabel className={props.classRange.labelRange} >Price</InputLabel>
  
      <Slider
        onChange={props.changeRange}
       
        max={props.maxRange}
        min={props.minRange}
        step={props.stepRange}
        marks={props.marksRange}
        value={props.valueRange}
        className={props.classRange.sliderRange}
        valueLabelDisplay={props.labelVal}
      />
      </Box>
    </div>
  );
}

export default RangeSlider