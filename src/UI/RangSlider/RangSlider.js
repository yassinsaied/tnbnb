import React , {useState} from 'react';
import Slider from '@material-ui/core/Slider';
import "./RangSlider.css"




export default function RangeSlider() {

  const [value, setValue] = useState([20, 400]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const val = [
    {
      value: 0,
      label: "0€",
    },

    {
      value: 2000,
      label: "2000 €",
    },
  ];
 

  return (
    <>
     
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        min={0}
        max={2000}
        step={100}
        marks={val}
     
       
       
      />
    </>
  );
}