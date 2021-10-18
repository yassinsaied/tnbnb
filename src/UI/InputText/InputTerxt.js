import React from "react";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

const InputText = ({
  typeEntry,
  errorinput,
  labelInput,
  variantInput,
  changeInput,
  valueInput,
  classesInput,
  typeInput,
  nameInput,
  refInput,
  rowsInput,
}) => {
  return (
    <>
      <TextField
        error={errorinput !== undefined}
        label={labelInput}
        variant={variantInput}
        value={valueInput}
        onChange={changeInput}
        className={classesInput.root}
        InputProps={
          typeEntry === "price"
            ? {
                startAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                ),
              }
            : null
        }
        type={typeInput}
        name={nameInput}
        inputRef={refInput}
        helperText={errorinput ? errorinput.message : ""}
        rows={rowsInput}
        //multiline
       
      />
    </>
  );
};

export default InputText;
