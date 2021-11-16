import React, { useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import { ListItem, List, Button } from "@material-ui/core";
import RangSlider from "../../UI/RangSlider/RangSlider";
import SelectList from "../../UI/SelectList/SelectList";
import InputText from "../../UI/InputText/InputTerxt";
import DatePicker from "../../UI/DatePicker/DatePicker";
import DateFnsUtils from "@date-io/date-fns";
import { gov, rangeVal } from "../../helpres/const";

const UseStyles = makeStyles((theme) => ({
  textFiled: theme.textFiled,
  selectStyle: theme.selectStyle,
  datePicker: theme.datePicker,
  sliderRange: {
    ...theme.sliderRange,
    "&.MuiInputLabel-root": {
      color: "rgba(0, 0, 0, 0.54)",
      marginRight: "20px",
    },

    "&.MuiBox-root": {
      display: "flex",
      verticalAlign: "middle",
      margin: "30px 0 10px 0",
    },

    "&>.MuiSlider-rail": {
      backgroundColor: "rgba(103, 65, 114, .7)",
      opacity: "0.5",
      height: "5px",
    },

    "&.MuiSlider-root": {
      padding: "6px 0",
    },
  },
}));

const LeftFormSearch = ({ searchData }) => {
  const classes = UseStyles();
  const { control } = useForm();
  const dateFns = new DateFnsUtils();
  const checkInRef = useRef({});

  return (
    <>
      <List
        component="nav"
        className={classes.root}
        aria-label="mailbox folders">
        <ListItem button>
          <Controller
            name="fastSearch"
            control={control}
            defaultValue={searchData !== undefined ? searchData.fastSearch : ""}
            render={({
              field: { onChange, onBlur, value, name },
              fieldState: { invalid, isTouched, isDirty, error },
            }) => (
              <InputText
                labelInput="Any text"
                variantInput="outlined"
                changeInput={onChange}
                classesInput={classes.textFiled}
              />
            )}
          />
        </ListItem>

        <ListItem button>
          <Controller
            control={control}
            name="gov"
            defaultValue={searchData !== undefined ? searchData.gov : ""}
            render={({
              field: { onChange, onBlur, value, name },
              fieldState: { invalid, isTouched, isDirty, error },
            }) => (
              <SelectList
                classeSelect={classes.selectStyle}
                changeSelect={onChange}
                valueSelect={value}
                id="gove-select"
                labelSelect="Choose Location"
                optionsSelect={gov}
                variantSelect="outlined"
                keyType="city"
              />
            )}
          />
        </ListItem>

        <ListItem button>
          <Controller
            control={control}
            name="checkIn"
            defaultValue={
              searchData !== undefined
                ? searchData.checkIn !== null
                  ? new Date(searchData.checkIn)
                  : null
                : null
            }
            render={({
              field: { onChange, onBlur, value, name },
              fieldState: { invalid, isTouched, isDirty, error },
              formState,
            }) => (
              <DatePicker
                labelInput="Check-In"
                formatDate="dd-MM-yyyy"
                idPicker="date-check-in"
                changeDate={onChange}
                valueDate={value}
                classDate={classes}
                DateFn={DateFnsUtils}
                minCheckIn={new Date()}
              />
            )}
          />
        </ListItem>

        <ListItem button>
          <Controller
            control={control}
            name="checkOut"
            defaultValue={
              searchData !== undefined
                ? searchData.checkOut !== null
                  ? new Date(searchData.checkOut)
                  : null
                : null
            }
            render={({
              field: { onChange, onBlur, value, name },
              fieldState: { invalid, isTouched, isDirty, error },
              formState,
            }) => (
              <DatePicker
                labelInput="Check-Out"
                formatDate="dd-MM-yyyy"
                idPicker="date-check-out"
                changeDate={onChange}
                valueDate={value}
                classDate={classes}
                DateFn={DateFnsUtils}
                minCheckIn={dateFns.addDays(checkInRef.current, 1)}
              />
            )}
          />
        </ListItem>

        <ListItem>
          <Controller
            name="rangePrice"
            control={control}
            defaultValue={
              searchData !== undefined
                ? [searchData.gte, searchData.lte]
                : [0, 2000]
            }
            render={({ field }) => (
              <RangSlider
                valueRange={field.value}
                changeRange={(_, value) => field.onChange(value)}
                maxRange={2000}
                minRange={0}
                marksRange={rangeVal}
                stepRange={100}
                classeRange={classes.sliderRange}
                labelVal="on"
              />
            )}
          />
        </ListItem>

        <ListItem  className="justify-content-center">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}>
            Edite My Profile
          </Button>
        </ListItem>
      </List>
    </>
  );
};

export default LeftFormSearch;
