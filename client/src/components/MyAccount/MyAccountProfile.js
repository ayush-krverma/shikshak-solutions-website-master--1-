import React, {useState} from 'react'
import profile from "../../image/profile.png";
import {useSelector} from "react-redux";
import {useEffectOnce} from "../../hooks/useEffectOnce";
import AuthService from "../services/auth.service";

function MyAccountProfile() {
  const userInfo = localStorage.getItem('user')
  const [userData, setUserData] = useState([]);
  useEffectOnce(()=>{
    let userRawData =   AuthService.parseJwt(JSON.parse(userInfo)?.accessToken);
    console.log(userRawData,"userRawData")
    setUserData(userRawData?.user)
  },[]);
  return (
    <>
   
    <div className='mb-3'>
      <img src={profile} height={150} width={150}   alt="..."/>
    </div>
    <h6 className='mb-3 container'>{userData?.name}</h6>
    <h6 className='mb-4 container '>{userData?.email}</h6>
    <h5 className='mb-3 container fw-bold text-danger'>Personal Information</h5>
    <h5 className='mb-3 container '>Biling & payments</h5>
    <h5 className='mb-3 container '>Order History</h5>
     <h5 className='mb-3 container '>Gift Cards</h5>
    </>
  )
}

export default MyAccountProfile
