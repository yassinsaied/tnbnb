import React from 'react';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';



const SelectList = (props) => {
    return (<>


        <Select>
     
          {props.optionsSelect.map((opt,index)=> {
          
           return  <MenuItem key={index} value={opt.value}>{opt.label}</MenuItem>


          }) }
         
        
        </Select>
     



    </>);
}

export default SelectList;