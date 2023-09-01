import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "../components/layout/CustomNavbar";
 import header from "../components/layout/CustomNavbar";

import Footer from "../components/layout/Footer";
import Breadcrumb from "../components/layout/Breadcrumb";
// import Breadcrumb2 from "../../components/Frontend/layout/Breadcrumb";
import Cardsdata from './CardsData';
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useDispatch, useSelector } from 'react-redux';
import { ADD } from '../store/actions/action';
import { DLT } from '../store/actions/action';
import via from '../image/1.jpg';
import { NavLink } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import ProductFilter from "./ProductFilter";

const Cards = () => {

const [price,setPrice] = useState(0);
// console.log(price);


  const getdata = useSelector((state)=> state.cartReducer.carts);
  console.log(getdata);

// const dispatch = useDispatch();

const [data,setData] = useState(Cardsdata);
// console.log(data);

const dispatch = useDispatch();


const send = (e)=>{
  // console.log(e);
  dispatch(ADD(e));
} 






const [anchorEl, setAnchorEl] = useState(null);
const open = Boolean(anchorEl);
const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
};
const handleClose = () => {
  setAnchorEl(null);
};


const dlt = (id)=>{
  dispatch(DLT(id))
}



const total = ()=>{
  let price = 0;
  getdata.map((ele,k)=>{
    price = ele.price * ele.qnty + price
  });
  setPrice(price);
};

useEffect(()=>{
  total();
},[total])



  return (
<>
<header/>
<CustomNavbar mClass="menu_four hosting_menu" nClass="w_menu m-auto" slogo="sticky_logo" hbtnClass="event_btn" />
{/* <br></br><br></br><br></br><br></br><br></br><br></br> */}
{/* <Badge badgeContent ={getdata.length} color="primary" style={{marginLeft:"1400px",marginTop:"-10px",position:"fixed"}}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
                            <i class="fa fa-shopping-cart" aria-hidden="true" style={{fontSize:25,cursor:"pointer",marginLeft:"20px", marginTop:"-10px"}}></i>

                            </Badge>   */}
                             <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Our Products" Pdescription="Please place your order via email(info@shikshaksolutions.com)/phone(8427023406). ecommerce portal is comming soon." />
              
    <div>
      
      <br></br><br></br>
      <Badge badgeContent ={getdata.length} color="primary" style={{marginLeft:"1400px",marginTop:"-70px"}}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
                            <i class="fa fa-shopping-cart" aria-hidden="true" style={{fontSize:25,cursor:"pointer",marginLeft:"20px", marginTop:"-10px"}}></i>

                            </Badge>




                            <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >


        {
          getdata.length?
          <div className='card_details' style={{width:"24rem",padding:10}}>
            <table>
              <thead>
                <tr>
                  <th>Photo</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {
                  getdata.map((e)=>{
                    return(
                      <>
                      <tr>
                        <td>
                         <NavLink to={`/cart/${e.id}`} onClick={handleClose}>
                         <img src={e.imgdata} style={{width:"5rem",height:"5rem"}} alt="" />
                         </NavLink> 
                        </td>
                        <td>
                          <p>{e.tname}</p>
                          <p>Price : ₹{e.price}</p>
                          <p>Quantity : {e.qnty}</p>
                          <p style={{color:"red",fontSize:20,cursor:"pointer"}} onClick={()=>dlt(e.id)}>
                            <i className='fas fa-trash smalltrash'></i>
                          </p>
                        </td>
                        <td style={{color:"red",fontSize:20,cursor:"pointer"}}  onClick={()=>dlt(e.id)}>
                        <i className='fas fa-trash largetrash'></i>
                        </td>
                      </tr>
                      </>
                    )
                  })
                }
                <p className='text-center'>Total : ₹{price}</p>
              </tbody>
            </table>

          </div>:


<div className="card_details d-flex justify-content-center align-items-center" style={{width:"24rem",padding:10,position:"relative"}}>
          <i className='fas fa-close smallclose'
          onClick={handleClose}
          style={{position:"absolute",top:2,right:20,fontSize:23,cursor:"pointer"}}></i>
          <p style={{fontSize:22}}>your cart is Empty</p>
          <img src={via} height={100} width={100}   alt="..." className='emptycart_img' style={{padding:10}}/>
        </div>




        }


        



        {/* your cart is Empty */}
        {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem> */}
      </Menu>







<div className="container mt-3">
      <div className="row">

{
  data.map((element,id)=>{
    return (
      <>
      <div className="card" style={{width:"15rem",marginLeft:"100px",marginBottom:"30px"}}>
  <img src= {element.imgdata}  class="card-img-top" alt="loading img"/>
  <div className="card-body" >
    <h5 className="card-title">{element.tname}</h5>
    <p className="card-text">
      Price : ₹ {element.price} </p>
      <div className="button_div d-flex justify-content-center">
      <a href="#" onClick={()=> send(element)} className="btn btn-primary col-lg-12">Add to cart</a>
      </div>
    
  </div>
  </div>
      </>
    )
  })
}

      
</div>

      </div>


      
    </div>
    
    <Footer/>
    </>
  )
}

export default Cards
