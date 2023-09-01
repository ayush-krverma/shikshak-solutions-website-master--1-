import React from 'react';
import CustomNavbar from '../layout/CustomNavbar';
import Footer from '../layout/Footer';
import MyOrdercard from './MyOrdercard';


function MyOrder() {
  return (
    <>
    <CustomNavbar mClass="menu_four hosting_menu" nClass="w_menu m-auto" slogo="sticky_logo" hbtnClass="event_btn"/>
               
    <div className='mt-6'>
    <div className="row g-0 mt-5">
    <div className="nav mt-5">
    <a href="http://" className="cat mt-5">Home   ></a>
    <a href="http://" className="cat mt-5">Orders    ></a>
    <a href="http://" className="cat mt-5">ID: 334902461</a>
    </div>
    </div>
    
    
    
    
    <section className="sec_without_breadcrumb col mt-1">
        
        <div className={"container custom_container p0"}>
        
             <div className={"row"}>
                
                <div className={"col-md-12"}>
                    <MyOrdercard/>
                </div>
               
               
            </div>
           
        </div>
    </section>
      
    <Footer/>
    </div>
    </>
  )
}

export default MyOrder
