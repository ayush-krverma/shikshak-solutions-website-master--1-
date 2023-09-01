import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {removeProductFromCart, updateProductQuantityOnCart} from "../../store/actions/shopAction";
import IconButton from '@mui/material/IconButton';
//import DeleteIcon from '@mui/icons-material/delete';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import moment from "moment";

function CartTable() {

  const dispatch  = useDispatch();
  const userAllCartData = useSelector((state) => state.cartReducer.userCartData);

  console.log(userAllCartData);
  const removeFromCart = (cartId)=>{
    dispatch(removeProductFromCart(cartId));
  }

  const updateQuantity = (cartId, quantity) =>{
    let payload = {
      'cartId': cartId,
      'qty': parseInt(quantity),
    }
    dispatch(updateProductQuantityOnCart(payload));
  }

  return (
    <div>


<table className="table mt-5">
  <thead>
    <tr>
     
      <th scope="col">PRODUCT</th>
      <th scope="col">PRICE</th>
      <th scope="col">QUANTITY</th>
      <th scope="col">SUBTOTAL</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>

    {
      userAllCartData.map((userCartData, index) => {
            return (
                <tr key={index}>
                  <td scope="row"><img src={userCartData.photo} height={100} width={100}   alt="..."/>
                    <h6>{userCartData.name}</h6><br></br></td>

                  <td>₹ {userCartData.price}</td>
                  <td>
                    {(userCartData.qty > 1) ?
                    <>
                        <span onClick={()=>updateQuantity(userCartData.id, (userCartData.qty) - 1)}><IconButton aria-label="minus">
                          <RemoveIcon /></IconButton></span>
                    </> : <>
                        <span onClick={()=>removeFromCart(userCartData.id)}><IconButton aria-label="delete">
                          <DeleteIcon /></IconButton></span>
                        </>
                    }
                    {userCartData.qty}
                    <span onClick={()=>updateQuantity(userCartData.id, (userCartData.qty) + 1)}><IconButton aria-label="add">
                          <AddIcon /></IconButton></span>
                  </td>
                  <td>₹ {(userCartData.price)*(userCartData.qty)}</td>
                  <td><button type="button" className="btn btn-primary" onClick={()=>removeFromCart(userCartData.id)}>Remove</button></td>
                </tr>
            )

      })
    }
   
  </tbody>
</table>


    </div>
   
  )
}

export default CartTable
