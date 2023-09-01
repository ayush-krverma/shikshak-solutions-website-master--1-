import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
 import {useDispatch} from 'react-redux'
import {actionAddToCart} from "../../store/actions/shopAction";
import moment from "moment/moment";
import AuthService from "../services/auth.service";
import {NotificationManager} from "react-notifications";


function ProductComming({productDetailsData}) {
    const [quantity, setQuantity] = useState(1);
    const dispatch  = useDispatch();
    const userInfo =  localStorage.getItem('user');
    let userRawData =   AuthService.parseJwt(JSON.parse(userInfo)?.accessToken);
    const handleInputChange = (e) => {
        const value = e.target.value;

        // Allow only positive numbers
        if (/^[0-9]*$/.test(value) && (value>0 || value ==="")) {
            setQuantity(value);
        }
    };

    const addToCart = () => {
        console.log((userInfo?.user?.id))
            if (quantity > 0) {
                let payload = {
                    'productId': productDetailsData?.id,
                    'qty': parseInt(quantity),
                    'userId': userRawData?.user?.id,
                    'createdAt': moment().format("YYYY-MM-DD HH:mm:ss"),
                }
                dispatch(actionAddToCart(payload));
                NotificationManager.success("Product has been added to cart", "Product added to cart");
                setQuantity(1);
            }
        // }else{
        //     window.open('/login')
        // }
    }

  return (

    <div>
          
     <section>
     <h3 className='fw-bold mb-0'>{productDetailsData?.name}</h3>
     <h6 className='mb-4'>SKU:DGYT00025</h6>
     <h3 className='fw-bold mb-4 fw-light text-danger'>₹ {productDetailsData?.price}</h3>
     <div class="col-sm-2 mb-4">
    <label class="visually-hidden" for="specificSizeInputName">Name</label>
    <input type="text" class="form-control" value={quantity} onChange={(e)=>handleInputChange(e)} id="specificSizeInputName" placeholder="Qty"/>
  </div>
 
  <button type="button" onClick={()=>addToCart()} class="btn btn-success btn-sm col-md-2 mb-3 fw-bold">ADD TO CART</button>
 
   <h6 className='mb-4' dangerouslySetInnerHTML={{__html:productDetailsData?.description}}></h6>
     </section>
    </div>
   
  )
}

export default ProductComming
