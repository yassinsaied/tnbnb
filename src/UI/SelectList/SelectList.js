import React from 'react';
import {MenuItem ,Select ,FormControl ,InputLabel} from '@material-ui/core';
import "./SelectList.css"



const SelectList = (props) => {
    return (<>

      <FormControl variant="filled" >
        <InputLabel id="select-gov" >GOV</InputLabel>
        <Select  {...props.fieldSelect}
                 value={props.fieldSelect.value ? props.fieldSelect.value :"" }
                 className={props.classeOverrided.root}
              
                
                 >
                   
     
          {props.optionsSelect.map((opt,index)=> {
          
           return  <MenuItem key={index} value={opt.city}>{opt.city}</MenuItem>


          }) }
         
        
        </Select>
     
        </FormControl>


    </>);
}

export default SelectList;