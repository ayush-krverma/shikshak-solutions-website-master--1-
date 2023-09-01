import React, {useState} from 'react'
import {useEffectOnce} from "../../hooks/useEffectOnce";
import AuthService from "../services/auth.service";

function MyAccountInfo() {
  const userInfo =  localStorage.getItem('user');
  const [userData, setUserData] = useState([]);
  useEffectOnce(()=>{
    let userRawData =   AuthService.parseJwt(JSON.parse(userInfo)?.accessToken);
    setUserData(userRawData?.user)
  },[]);
  return (
    <div>
      <h4 className='mb-3 container fw-bold'>Personal Information</h4>
      <div className="row mb-3">
  <div className="col-sm-5">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Name</h5>
        <p className="card-text">{userData?.name}</p>
      </div>
    </div>
  </div>
  <div className="col-sm-5">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Mobile Number</h5>
        <p className="card-text">{userData?.mobile}</p>
        
      </div>
    </div>
  </div>
</div>


      <div className="row mb-3">
  <div className="col-sm-5">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Email</h5>
        <p className="card-text">{userData?.email}</p>
       
      </div>
    </div>
  </div>
  <div className="col-sm-5">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Country</h5>
        <p className="card-text">India</p>
        
      </div>
    </div>
  </div>
</div>


<div className="row">
  <div className="col-sm-5">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">State</h5>
        <p className="card-text">N/A</p>
       
      </div>
    </div>
  </div>
  
</div>
    </div>
    
  )
}

export default MyAccountInfo
