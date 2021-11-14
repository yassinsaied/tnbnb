import React from "react";

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const DatePicker = (props) => {
  return (
    <>
      <MuiPickersUtilsProvider
          utils={props.DateFn}>
        <KeyboardDatePicker
          inputVariant="filled"
          margin="normal"
          id={props.idPicker}
          label={props.labelInput}
          format={props.formatDate}
          onChange={props.changeDate}
          className={props.classeDate}
          InputProps={{ className: props.classeDate }}
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
