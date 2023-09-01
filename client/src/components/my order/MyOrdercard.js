import React from 'react';
import intermediate from '../../image/product/intermediate.jpg';

function MyOrdercard() {
  return (
    <div>
       <table class="table mb-5 mt-1">
  <thead>
    <tr>
      <th scope="col"><h3 className='mb-3 container'>Order ID: 334902461</h3>
      <h6 className='mb-3 container'>Order date:Feb 16, 2023 </h6></th>
    </tr>
  </thead>
  <tbody>
      <th scope="row">
      <div className="d-flex col-md-12">
          <img src={intermediate} height={150} width={150}   alt="..."/>
    <h6 className='fw-bold mt-4'>SS Basic Robotics Kit</h6></div></th>

      <td></td>
      <td></td>
      
      <td className='fw-bold mt-3'>₹ 6500.00<br></br>
     
      <div class="col-md-2">
   
    <input type="text" class="form-control" id="inputZip" placeholder='Qty'/>
  </div>
      </td>
  </tbody>
   <tbody>
   <th scope="row">
      <div className="d-flex col-md-19">
          <img src={intermediate} height={150} width={150}   alt="..."/>
    <h6 className='fw-bold  mt-4'>SS Basic Robotics Kit</h6></div></th>
      <td></td>
      <td></td>
      
      <td className='fw-bold'>₹ 6500.00<br></br>
     
      <div class="col-md-2">
   
    <input type="text" class="form-control" id="inputZip" placeholder='Qty'/>
  </div>
      </td>
    
  </tbody>





  <tbody>
    <tr>
      <th scope="row">
      <div className="d-flex col-md-19">
          <img src={intermediate} height={150} width={150}   alt="..."/>
    <h6 className='fw-bold mt-4'>SS Basic Robotics Kit</h6></div></th>

      <td></td>
      <td></td>
      
      <td className='fw-bold'>₹ 6500.00<br></br>
     
      <div class="col-md-2">
   
    <input type="text" class="form-control" id="inputZip" placeholder='Qty'/>
  </div>
      </td>
    </tr>
   
  </tbody>


 
        
        <div className={"container custom_container p0"}>
        
            <div className={"row"}>
                
                <div className={"col-md-6"}>
                <h5 className='mb-3 container fw-bold'>Payment</h5>
  <h6 className='mb-3 container'>Visa**56</h6>
                    
                </div>
                <div className={"col-md-6"}>
                <h5 className='mb-2 container fw-bold'>Delivery</h5>
                <h5 className='mb-3 container'>address</h5>
                <h6 className='mb-3 container'>847 jewess Bridge Apt.174<br></br>
                London, UK<br></br>
                474-769-3919</h6>
                <h5 className='mb-3 container fw-bold'>Delivery method</h5>
                <h5 className='mb-3 container '>Free(30 days)</h5>
                </div>
                
                
               
            </div>
           
        </div>
   

</table>

    </div>
  )
}

export default MyOrdercard
