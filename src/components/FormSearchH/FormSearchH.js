import React from 'react'
import RangSlider from "../../UI/RangSlider/RangSlider"






const FormSearchH = () =>{

  return(<>

<form className="d-flex justify-content-between">

  <div className="col-sm-3 col-md-3 col-lg-2 ">
    <input type="text" className="form-control" placeholder="City" aria-label="City"/>
  </div>
  <div className="col-sm-3 ol-md-3 col-lg-2">
    <input type="text" className="form-control" placeholder="State" aria-label="State"/>
  </div>
  <div className="col-sm-3 ol-md-3 col-lg-2 ">
    <input type="text" className="form-control" placeholder="Zip" aria-label="Zip"/>
  </div>
  <div className="col-sm-3 ol-md-3 col-lg-2 ">
  <RangSlider/>
  
  </div>
 
<button type="button" className="btn btn-success">Success</button>
</form>


  </>)

}

export default FormSearchH ;