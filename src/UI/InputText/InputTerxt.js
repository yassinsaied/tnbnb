import React from 'react'
import TextField from "@material-ui/core/TextField";


const InputText = (props) => {

  return(<>
  
  <TextField {...props.fieldSelect}
            id="fast-search"
            label={props.labelInput}
            variant={props.variantInput}
            value={props.fieldInput.value}
            onChange={props.fieldInput.onChange}
            className={props.classesInput.root}
            InputProps={{ className: props.classesInput.input }}
          />
  
  </>)


}


export default InputText ;