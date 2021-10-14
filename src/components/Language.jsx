import React from 'react';
const Language=(props)=>{
 //console.log(props);
  return(
    <> 
    <div className="col-sm-4">
   <div className="card">
    <div className="card-body">
      <img src={`assests/${props.img}`} className="card-img" alt="noimg" width="100px" height="100px"  />
      <h4 className="card-title">Language : {props.name}</h4>
      <h4 className="card-title">Duration : {props.duration}</h4>
      <h4 className="card-title">FEES : {props.fees}</h4>
      <h4 className="card-title">TRAINER : {props.trainer}</h4>
    </div>
  </div>
  </div>
    </>
  )
}
export default Language;
