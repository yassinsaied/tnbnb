import React, { useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import RangSlider from "../../UI/RangSlider/RangSlider";
import SelectList from "../../UI/SelectList/SelectList";
import InputText from "../../UI/InputText/InputTerxt";
import DatePicker from "../../UI/DatePicker/DatePicker";
import DateFnsUtils from "@date-io/date-fns";
import gov from "../../gov.json";



const useStyles = makeStyles({
  root: {
    backgroundColor: "#fff",
    "&:focus": {
      backgroundColor: "#fff",
    },
    "&:hover": {
      backgroundColor: "#fff",
    },
  },
  datePicker: {
    backgroundColor: "#fff !important",
    marginTop: "10px",
  },

  input: {
    backgroundColor: "#fff !important",
  },

  sliderRange: {
    "&>.MuiSlider-markLabel": {
      color: "rgba(103, 65, 114, .7)",
      fontWeight: 700,
    },
    "&>.MuiSlider-rail" : {
      backgroundColor:"rgba(103, 65, 114, .7)"
    }
  },
   
  labelRange: {
  paddingBottom: "5px",
  paddingLeft: "10px" ,
  },

});

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

const LeftFormSearch = ({searchData}) => {
  const classes = useStyles();
  const {control } = useForm();
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
            defaultValue={searchData !== undefined ? searchData.fastSearch : "" }
            render={({
               field: { onChange, onBlur, value, name },
               fieldState: { invalid, isTouched, isDirty, error }, }) => (
              <InputText
                labelInput="Any text"
                variantInput="outlined"
                changeInput={onChange}
                valueInput={value}
                classesInput={classes}
              />
            )}
          />
        </ListItem>

        <ListItem button>
          <Controller
            control={control}
            name="gov"
            defaultValue={searchData !== undefined ? searchData.gov : ""}
            render={({ field }) => (
              <SelectList
                classeOverrided={classes}
                fieldSelect={field}
                id="gove-select"
                labelSelect="Choose GOV"
                optionsSelect={gov}
                variantSelect="outlined"
              />
            )}
          />
        </ListItem>

        <ListItem button>
          <Controller
            control={control}
            name="checkIn"
            defaultValue={  searchData !== undefined  &&(searchData.checkIn !== null ? new Date(searchData.checkIn): null)}
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
            defaultValue={ searchData !== undefined  &&(searchData.checkOut !== null ?new Date(searchData.checkOut) : null)}
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
            defaultValue={ searchData !== undefined  ?[searchData.gte, searchData.lte] : ""}
            render={({ field, fieldState }) => (
              <RangSlider
                valueRange={field.value}
                changeRange={(_, value) => field.onChange(value)}
                maxRange={2000}
                minRange={0}
                marksRange={val}
                stepRange={100}
                classRange={classes}
                labelVal ="on"
              />
            )}
          />
        </ListItem>
      </List> 
    </>
  );
};

export default LeftFormSearch;
