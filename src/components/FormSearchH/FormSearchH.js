import "date-fns";
import React, { useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import RangSlider from "../../UI/RangSlider/RangSlider";
import SelectList from "../../UI/SelectList/SelectList";
import InputText from "../../UI/InputText/InputTerxt";
import DatePicker from "../../UI/DatePicker/DatePicker";
import DateFnsUtils from "@date-io/date-fns";
import "./FormSearchH.css";
import { gov , rangeVal} from "../../helpres/const"

const UseStyles = makeStyles((theme) => ({

   textFiled : theme.textFiled,
   selectStyle : theme.selectStyle,
   datePicker : theme.datePicker,
   sliderRange : theme.sliderRange

}));



const FormSearchH = () => {
  const classes = UseStyles();
  const {
    handleSubmit,
    control,
    watch,
   
  } = useForm();
  const dateFns = new DateFnsUtils();
  let history = useHistory();
  const checkInRef = useRef({});
  checkInRef.current = watch("checkIn", "");

  const onSubmit = (data) => {
   
    const newData = {
      ...data,
      checkIn: data.checkIn && dateFns.format(data.checkIn, "yyyy-MM-dd"),
      checkOut: data.checkOut && dateFns.format(data.checkOut, "yyyy-MM-dd"),
      gte: data.rangePrice[0],
      lte: data.rangePrice[1],
    };
   
    history.push({
      pathname: "/adresult",
      state: newData,
    });
  };

  return (
    <div className="col-12 bkg-trs form-row-home">
      <form
        className="d-flex row form-serch-home flex-wrap justify-content-start align-items-center"
        onSubmit={handleSubmit(onSubmit)}>
        <div className="col-sm-3 col-md-2 col-lg-2">
          <Controller
            name="fastSearch"
            control={control}
            defaultValue=""
            render={({
              field: { onChange, onBlur, value, name },
              fieldState: { invalid, isTouched, isDirty, error },
              formState,
            }) => (
              <InputText
                labelInput="Any text"
                variantInput="filled"
                changeInput={onChange}
                valueInput={value}
                classesInput={classes.textFiled}
                typeInput="text"
               
              />
            )}
          />
        </div>

        <div className="col-sm-3 col-md-2 col-lg-2">
          <Controller
            control={control}
            name="gov"
            defaultValue={null}
            render={({
              field: { onChange, onBlur, value, name },
              fieldState: { invalid, isTouched, isDirty, error },
            }) => (
              <SelectList
                classeSelect={classes.selectStyle}
                changeSelect={onChange}
                valueSelect={value}
                id="gove-select"
                optionsSelect={gov}
                variantSelect="filled"
                keyType="city"
                labelSelect ="Location"
              />
            )}
          />
        </div>

        <div className="col-sm-3 col-md-2 col-lg-2">
          <Controller
            control={control}
            name="checkIn"
            defaultValue={null}
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
                classeDate={classes.datePicker}
                DateFn={DateFnsUtils}
                minCheckIn={new Date()}
              />
            )}
          />
        </div>

        <div className="col-sm-3 col-md-2 col-lg-2">
          <Controller
            control={control}
            name="checkOut"
            defaultValue={null}
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
                classeDate={classes.datePicker}
                DateFn={DateFnsUtils}
                minCheckIn={dateFns.addDays(checkInRef.current, 1)}
              />
            )}
          />
        </div>

        <div className="ps-3 col-sm-3 col-md-2 col-lg-2 d-flex">
          <Controller
            name="rangePrice"
            control={control}
            defaultValue={[0, 2000]}
            render={({ field}) => (
              <RangSlider
                valueRange={field.value}
                changeRange={(_, value) => field.onChange(value)}
                maxRange={2000}
                minRange={0}
                marksRange={rangeVal}
                stepRange={100}
                classeRange={classes.sliderRange}
                labelVal ="auto"
              />
            )}
          />
        </div>

        <div className="btnsrch col-sm-3 col-md-2 col-lg-2">
          <button type="submit" className="btn btn-success">
            Success
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormSearchH;
