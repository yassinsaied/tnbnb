import React from "react";
import { MenuItem, Select, FormControl, InputLabel } from "@material-ui/core";
import FormHelperText from '@material-ui/core/FormHelperText';

//import "./SelectList.css";

const SelectList = (props) => {
  return (
    <>
    
      <FormControl className={props.classeSelect} variant={props.variantSelect}  error={props.errorSelect !== undefined}>
        <InputLabel id="demo-simple-select-outlined-label">{props.labelSelect}</InputLabel>
        <Select
         
          value={props.valueSelect ? props.valueSelect : ""}
          onChange={props.changeSelect}
          label={props.labelSelect}
          className={props.classeSelect}>
          {props.optionsSelect.map((opt, index) => {
            return (
              <MenuItem key={index} value={opt[props.keyType]}>
                {opt[props.keyType]}
              </MenuItem>
            );
          })}
        </Select>
        <FormHelperText>{props.errorSelect ? props.errorSelect.message : ""}</FormHelperText>
      </FormControl>
    </>
  );
};

export default SelectList;
