import React from "react";
import "./DatePicker.css";

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const DatePicker = (props) => {
  return (
    <>
      <MuiPickersUtilsProvider
        className={props.classDate.root}
        utils={props.DateFn}>
        <KeyboardDatePicker
          inputVariant="filled"
          margin="normal"
          id={props.idPicker}
          label={props.labelInput}
          format={props.formatDate}
          onChange={props.changeDate}
          className={props.classDate.datePicker}
          InputProps={{ className: props.classDate.input }}
          value={props.valueDate}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
          minDate={props.minCheckIn}
        />
      </MuiPickersUtilsProvider>
    </>
  );
};

export default DatePicker;
