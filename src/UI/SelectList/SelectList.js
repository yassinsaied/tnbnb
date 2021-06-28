import React from 'react';
import {MenuItem ,Select ,FormControl ,InputLabel} from '@material-ui/core';
import "./SelectList.css"



const SelectList = (props) => {
    return (<>

      <FormControl variant="outlined" >
        <InputLabel id="demo-simple-select-outlined-label">GOV</InputLabel>
        <Select {...props.fieldSelect} value={props.fieldSelect.value ? props.fieldSelect.value :"" } label={props.labelSelect}>
     
          {props.optionsSelect.map((opt,index)=> {
          
           return  <MenuItem key={index} value={opt.value}>{opt.label}</MenuItem>


          }) }
         
        
        </Select>
     
        </FormControl>


    </>);
}

export default SelectList;