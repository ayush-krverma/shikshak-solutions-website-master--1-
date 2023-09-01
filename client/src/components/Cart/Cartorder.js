import React from 'react'
import {useSelector} from "react-redux";

function Cartorder() {

    const userCartData = useSelector((state) => state.cartReducer.userCartData);
    let totalCheckoutAmount = 0.00;
    userCartData.map((userCartData, index) => {
        totalCheckoutAmount = totalCheckoutAmount + (userCartData.price)*(userCartData.qty);
    })
  return (
    <div>


<table class="order mt-10">
  <thead>
  
      <th scope="col"><h5>Order summary</h5></th>
    
  </thead>
  <tbody>
   
      <th scope="row"><h6>Sub total</h6></th>
      <td><h6>₹ {totalCheckoutAmount}</h6></td>
     
    <tr>
      <th scope="row"><div className="ordertext">
  <p>Taxes and shipping calculated <br></br>at checkout</p>
</div></th>
    
    </tr>
   
  </tbody>
</table>



    </div>
  )
}

export default Cartorder
