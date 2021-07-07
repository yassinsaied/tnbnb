import React from "react";
import RangSlider from "../../UI/RangSlider/RangSlider";
import SelectList from "../../UI/SelectList/SelectList";
import "./FormSearchH.css";
import { useForm, Controller } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import InputText from "../../UI/InputText/InputTerxt";
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

  input: {
    backgroundColor: "#fff !important",
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

const FormSearchH = () => {
  const classes = useStyles();

  const { handleSubmit, control } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="col-12 bkg-trs form-row-home">
      <form
        className="d-flex row form-serch-home flex-wrap justify-content-start align-items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="col-sm-3 col-md-3 col-lg-3">
          <Controller
            name="fast-search"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <InputText
                labelInput="Any text"
                variantInput="filled"
                fieldInput={field}
                classesInput={classes}
              />
            )}
          />
        </div>
        <div className="col-sm-3 col-md-3 col-lg-3">
          <Controller
            control={control}
            name="gov-slect"
            render={({ field }) => (
              <SelectList
                classeOverrided={classes}
                fieldSelect={field}
                id="gove-select"
                labelSelect="Choose GOV"
                optionsSelect={gov}
              />
            )}
          />
        </div>

        <div className="ps-3 col-sm-3 ol-md-3 col-lg-3 d-flex">
          <Controller
            name="rangePrice"
            control={control}
            defaultValue={[0, 2000]}
            render={({ field, fieldState }) => (
              <RangSlider
                valueRange={field.value}
                changeRange={(_, value) => field.onChange(value)}
                maxRange={2000}
                minRange={0}
                marksRange={val}
                stepRange={100}
              />
            )}
          />
        </div>

        <div className="btnsrch col-sm-3 col-md-3 col-lg-3">
          <button type="submit" className="btn btn-success">
            Success
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormSearchH;
