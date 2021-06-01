import React from 'react'
import RangSlider from "../../UI/RangSlider/RangSlider"
import "./FormSearchH.css"






const FormSearchH = () =>{

  return(<div className="row bkg-trs form-row-home">

<form className="d-flex row form-serch-home flex-wrap justify-content-start align-items-center">

  <div className="col-sm-3 col-md-3 col-lg-3">
    <input type="text" className="form-control" placeholder="City" aria-label="City"/>
  </div>
  
  <div className="col-sm-3 col-md-3 col-lg-1">
    <input type="text" className="form-control" placeholder="City" aria-label="City"/>
  </div>
  <div className="col-sm-3 col-md-3 col-lg-2">
    <input type="text" className="form-control" placeholder="State" aria-label="State"/>
  </div>
  <div className="col-sm-3 col-md-3 col-lg-2 ">
    <input type="text" className="form-control" placeholder="Zip" aria-label="Zip"/>
  </div>
  <div className="ps-3 col-sm-3 ol-md-3 col-lg-2 d-flex">
  <RangSlider/>
  
  </div>
  <div className="btnsrch col-sm-3 col-md-3 col-lg-2"><button type="button" className="btn btn-success">Success</button></div>

</form>


  </div>)

}

export default FormSearchH ;