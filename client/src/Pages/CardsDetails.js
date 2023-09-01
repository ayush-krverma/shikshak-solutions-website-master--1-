import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "../components/layout/CustomNavbar";
import Footer from "../components/layout/Footer";
import { NavLink } from "react-router-dom";
import { DLT,ADD,REMOVE } from '../store/actions/action';
import via from '../image/1.jpg';
import Breadcrumb from "../components/layout/Breadcrumb";
// import Cards from './Cards';
import { useDispatch, useSelector } from 'react-redux';
// import Breadcrumb from "../../components/Frontend/layout/Breadcrumb";
import "../index.css";

function CardsDetails() {



    const [data,setData] = useState([]);
    // console.log(data);


    const {id} = useParams();
    // console.log(id);


    const history = useNavigate();




const dispatch = useDispatch();


    const getdata = useSelector((state)=> state.cartReducer.carts);
    // console.log(getdata);

    const compare = ()=>{
        let comparedata = getdata.filter((e)=>{
            return e.id == id
        });
        setData(comparedata);
    }
// add data
const send = (e)=>{
    // console.log(e);
    dispatch(ADD(e));
  } 

    const dlt = (id)=>{
        dispatch(DLT(id));
        history("/");
    }

    // remove one

const remove = (item)=>{
    dispatch(REMOVE(item))
}


    useEffect(()=>{
        compare();
    },[id])

  return (
    <>
    <CustomNavbar mClass="menu_four hosting_menu" nClass="w_menu m-auto" slogo="sticky_logo" hbtnClass="event_btn"/>
    <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Iteams Details" Pdescription="Please place your order via email(info@shikshaksolutions.com)/phone(8427023406). ecommerce portal is comming soon." />
              
    <div className="container mt-2">
        {/* <h2 className='text-center' style={{color:'black'}}>Iteams Details page</h2> */}
<br></br>
<section className='container mt-3'>
<div className="iteamsdetails d-flex">

{
    data.map((ele)=>{
        return (
            <>
            <div className="items_img">
    <img src={ele.imgdata} height={400} width={400}   alt="..."/>
    </div>
    <div className="details">
        <table>
            <tr>
                <td>
                    <p style={{color:'black'}}><strong>{ele.tname}</strong></p><br></br>
                    <p><strong  style={{color:'black'}}>Price</strong>: ₹ {ele.price}</p><br></br>
                    <p ><strong style={{color:'black'}}>Text</strong>: {ele.address}</p><br></br>
                    <p ><strong style={{color:'black'}}>Total</strong>:₹ {ele.price * ele.qnty}</p><br></br>

<div className='mt-5 d-flex justify-content-between align-items-center' style={{width:100,cursor:"pointer",background:"#ddd",color:"#111"}}>
<span style={{fontSize:24,color:'black'}} onClick={ele.qnty <=1 ? ()=>dlt(ele.id) : ()=>remove(ele)}>-</span>
<span style={{fontSize:22,color:'black'}}>{ele.qnty}</span>
<span style={{fontSize:24,color:'black'}} onClick={()=>send(ele)}>+</span>
</div>

                    {/* <p ><strong style={{color:'black'}}>SS Basic Robotics Kit</strong></p> */}
              <p>Lorem ipsum dolor sit, amet<br></br> adipisicing  jhdj elit.recusandae<br></br> possimus aspernatur 
              </p> 
                </td>
                <td>
                    <p><strong  style={{color:'black'}}>Rating :</strong><span style={{backgroundColor:'green', color:'black',padding:"2px 5px",borderRadius:"5px"}}>{ele.rating} ★ </span></p><br></br>
                    <p><strong  style={{color:'black'}}>Order Review :</strong><span style={{color:'black'}}>{ele.somedata}</span></p><br></br>
                    <p><strong  style={{color:'black'}}>Remove :</strong><span><i className='fas fa-trash'  onClick={()=>dlt(ele.id)}  style={{color:'red',fontSize:20,cursor:"pointer"}}></i></span></p><br></br>
                </td>
            </tr>
        </table>
    </div>

            </>
        )
    })
}

</div>
</section>

    </div>


    <Footer/>
    
    </>
  )
}

export default CardsDetails
