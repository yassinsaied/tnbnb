import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { FormHelperText } from "@material-ui/core";

const CheckBoxInput = ({
  errorcheck,
  changeCheck,
  checkedChek,
  valueCheck,
  nameInput,
  refInput,
  labelCheck,
  classesCheck,
}) => {
  return (
<Box mr={2}>
      <Box display="flex">
        <Checkbox
          onChange={(e) => changeCheck(e.target.checked)}
          checked={checkedChek}
          value={valueCheck}
          color="primary"
          name={nameInput}
          className={[classesCheck.checkBoxstyle ,`${errorcheck ? "is-invalid" : ""}`].join(
            " "
          )}

        />

        <Typography
          variant="h6"
          align="center"
          className={classesCheck.checkBoxLabel}>
          {labelCheck}
        </Typography>
      </Box>

      <FormHelperText
        className={classesCheck.helperText}
        display="bolck"
        id="my-helper-text">
        {" "}
        {errorcheck ? errorcheck.message : ""}
      </FormHelperText>
    </Box>
  );
};

export default CheckBoxInput;
