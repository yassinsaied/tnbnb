import React from "react";
import Slider from "@material-ui/core/Slider";
import InputLabel from '@material-ui/core/InputLabel'
import Box from '@material-ui/core/Box';
import "./RangSlider.css";

const RangeSlider = (props)=> {

  return (
    
    <div className="ran-Box">
    <Box  className={props.classeRange}>
    <InputLabel className={props.classeRange} >Price</InputLabel>
  
      <Slider
        onChange={props.changeRange}
        max={props.maxRange}
        min={props.minRange}
        step={props.stepRange}
        marks={props.marksRange}
        value={props.valueRange}
        className={props.classeRange}
        valueLabelDisplay={props.labelVal}
      />
      </Box>
    </div>
  );
}

export default RangeSlider