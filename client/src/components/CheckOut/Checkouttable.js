import React from 'react';
import intermediate from '../../image/product/intermediate.jpg'

function Checkouttable() {
  return (
    <div>
      <table className="table mt-5">
  <thead>
    <tr>
      <th scope="col" colSpan={2}>
      <div className="riz">
     
      <img src={intermediate} height={100} width={100}   alt="..."/>
      <div className="card-body">
        <h6 className="card-title"><b>SS Basic Robotics Kit</b></h6>
        <br></br>
        
        </div>
       
        </div>
      </th>
      <th scope="col">₹ 13000.00</th>
     
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
      <td className='sub'>Sub total<br></br><br></br>Tax<br></br><br></br>Discount</td>
        
      </th>
      <td>2 items</td>
      <td>₹ 6500.00<br></br><br></br>₹0.00<br></br><br></br>₹0.00</td>
      
      
    </tr>

    <tr>
      <th scope="row">
      <td className='total'>Total</td>
        
      </th>
      <td></td>
      <td>₹ 6500.00</td>
      
      
    </tr>
  </tbody>

</table>
    </div>
  )
}

export default Checkouttable
