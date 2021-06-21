import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import RangSlider from '../../UI/RangSlider/RangSlider'
import './FormSearchH.css'
import { Checkbox, Slider } from '@material-ui/core'
import { useForm, Controller } from 'react-hook-form'

const FormSearchH = () => {
  //const value = new Date()

  // const [rgval, setRgval] = useState([50, 400])

  // const handleChange = (event, newValue) => {
  //   setRgval(newValue)
  // }

  
  const val = [
    {
      value: 0,
      label: '0€',
    },

    {
      value: 2000,
      label: '2000 €',
    },
  ]

  const { handleSubmit, control } = useForm()
  const onSubmit = (data) => console.log(data)
  return (
    <div className="col-12 bkg-trs form-row-home">
      <form
        className="d-flex row form-serch-home flex-wrap justify-content-start align-items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="col-sm-3 col-md-3 col-lg-2">
          <input
            type="text"
            className="form-control"
            placeholder="City"
            aria-label="City"
          />
        </div>

        <div className="col-sm-3 col-md-3 col-lg-2">
          <Controller
            name="MyCheckbox"
            control={control}
            defaultValue={false}
            render={({ field }) => <Checkbox {...field} />}
          />
        </div>

        <section>
          <label>MUI Slider</label>
          <Controller
            name="MUI_Slider"
            control={control}
           
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { invalid, isTouched, isDirty, error },
            }) => (
              <Slider
              
            //  onChange={onChange}
              onChange={(_, value)=> onChange(value)}
              defaultValue={[50, 400]}
                //onChange={handleChange}
                valueLabelDisplay="auto"
                max={2000}
                step={100}
                marks={val}
              />
            )}
          />
        </section>

        {/* <div className="col-sm-3 col-md-3 col-lg-2">
          <TextField
            id="date"
            type="date"
            defaultValue={value}
            className="form-control book-date"
          />
        </div>
        <div className="col-sm-3 col-md-3 col-lg-2 ">
          <TextField
            id="date"
            type="date"
            defaultValue={value}
            className="form-control book-date"
          />
        </div> */}
        <div className="ps-3 col-sm-3 ol-md-3 col-lg-2 d-flex">
          <RangSlider />
        </div>
        <div className="btnsrch col-sm-3 col-md-3 col-lg-2">
          <button type="submit" className="btn btn-success">
            Success
          </button>
        </div>
      </form>
    </div>
  )
}

export default FormSearchH
