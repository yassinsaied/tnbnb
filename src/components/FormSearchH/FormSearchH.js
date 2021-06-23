import React from 'react'
import RangSlider from '../../UI/RangSlider/RangSlider'
import SelectList from '../../UI/SelectList/SelectList'
import './FormSearchH.css'
import { useForm, Controller } from 'react-hook-form'

const FormSearchH = () => {
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

  const { handleSubmit, control, register } = useForm()
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
            placeholder="Any Text"
            name="srtxt"
            {...register('srtxt')}
          />
        </div>
        <div className="col-sm-3 col-md-3 col-lg-2">
          <Controller
            name="selectCoutry"
            control={control}
            defaultValue=""
            render={({ field}) => (

              <SelectList {...field} optionsSelect={[
                  { value: "chocolate", label: "Chocolate" },
                  { value: "strawberry", label: "Strawberry" },
                  { value: "vanilla", label: "Vanilla" }
                ]} />


                )}
          />
         
        </div>

        <div className="ps-3 col-sm-3 ol-md-3 col-lg-2 d-flex">
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
