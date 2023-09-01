import React ,{useState}from 'react'

function CheckoutForm() {
  const [shippingFullName, setShippingFullName] = useState("");
  const [shippingMobileNo, setShippingMobileNo] = useState("");
  const [shippingAddress, setShippingAddress] = useState("");
  const [shippingCity, setShippingCity] = useState("");
  const [shippingCountry, setShippingCountry] = useState("");
  const [shippingState, setShippingState] = useState("");
  const [shippingPinCode, setShippingPinCode] = useState("");
  const [shippingCompanyName, setShippingCompanyName] = useState("");
  const [shippingGstNo, setShippingGstNo] = useState("");
  const [shippingCompanyAddress, setShippingCompanyAddress] = useState("");
  const [shipToDifferentAddress, setShipToDifferentAddress] = useState(false);
  const [billingFullName, setBillingFullName] = useState("");
  const [billingMobileNo, setBillingMobileNo] = useState("");
  const [billingAddress, setBillingAddress] = useState("");
  const [billingCity, setBillingCity] = useState("");
  const [billingCountry, setBillingCountry] = useState("");
  const [billingState, setBillingState] = useState("");
  const [billingPinCode, setBillingPinCode] = useState("");
  const [billingCompanyName, setBillingCompanyName] = useState("");
  const [billingGstNo, setBillingGstNo] = useState("");
  const [billingCompanyAddress, setBillingCompanyAddress] = useState("");

  return (
    <div>
        <section className='mt-5'>
        <h3 className='fw-bold mb-4' >Shipping Address</h3>
        
      <form className="row g-3 mb-4">
  <div className="col-md-6">
    <label for="inputEmail4" className="form-label">Full Name</label>
    <input type="text" className="form-control" id="inputEmail4" value={shippingFullName} onChange={(e)=>setShippingFullName(e.target.value)} placeholder='Full Name'/>
  </div>
  <div className="col-md-6">
    <label for="inputPassword4" className="form-label">mobile Number</label>
    <input type="text" className="form-control" id="inputPassword4" value={shippingMobileNo} onChange={(e)=>setShippingMobileNo(e.target.value)} placeholder='mobile Number'/>
  </div>
  <div className="col-12">
    <label for="inputAddress" className="form-label">Address</label>
    <textarea className="form-control" id="inputAddress" value={shippingAddress} onChange={(e)=>setShippingAddress(e.target.value)} placeholder="Address"/>
  </div>
  <div className="col-md-12">
    <label for="inputCity" className="form-label">City</label>
    <input type="text" className="form-control" id="inputCity" value={shippingCity} onChange={(e)=>setShippingCity(e.target.value)} placeholder='City'/>
  </div>
  <div className="col-md-12">
    <label for="inputCity" className="form-label">Country</label>
    
    <select id="inputState"  onChange={(e)=>setShippingCountry(e.target.value)} className="form-select">
      <option selected>Choose</option>
      <option value={"india"}>india</option>
    </select>
  </div>
  <div className="col-md-6 ">
    <label for="inputState" className="form-label">State</label>
    <select id="inputState" onChange={(e)=>setShippingState(e.target.value)} className="form-select">
      <option selected value="">Choose...</option>
      <option value="Andhra Pradesh">Andhra Pradesh</option>
      <option value="Arunachal Pradesh">Arunachal Pradesh</option>
      <option value="Assam">Assam</option>
      <option value="Bihar">Bihar</option>
      <option value="Chhatishgadh">Chhatishgadh</option>
      <option value="Goa">Goa</option>
      <option value="Gujarat">Gujarat</option>
      <option value="Haryana">Haryana</option>
      <option value="Himachal Pradesh">Himachal Pradesh</option>
      <option value="jammu and Kashmir">jammu and Kashmir</option>
      <option value="Jharkhand">Jharkhand</option>
      <option value="Karnataka">Karnataka</option>
      <option value="kerala">kerala</option>
      <option value="Madhya pradesh">Madhya pradesh</option>
      <option value="Maharashtra">Maharashtra</option>
      <option value="Manipur">Manipur</option>
      <option value="Meghalaya">Meghalaya</option>
      <option value="Mizoram">Mizoram</option>
      <option value="Nagaland">Nagaland</option>
      <option value="Odisha">Odisha</option>
      <option value="Punjab">Punjab</option>
      <option value="Rajasthan">Rajasthan</option>
      <option value="Sikkim">Sikkim</option>
      <option value="Tamil Nadu">Tamil Nadu</option>
      <option value="Telangana">Telangana</option>
      <option value="Tripura">Tripura</option>
      <option value="Uttar Pradesh">Uttar Pradesh</option>
      <option value="Uttarakhand">Uttarakhand</option>
      <option value="West Bangal">West Bangal</option>
    </select>
  </div>
  <div className="col-md-6 mb-3">
    <label for="inputZip" className="form-label">Pincode</label>
    <input type="text" className="form-control" id="inputZip" value={shippingPinCode} onChange={(e)=>setShippingPinCode(e.target.value)} placeholder='Pincode'/>
  </div>
  <div className="col-md-12">
    <label for="inputCity" className="form-label">Company name</label>
    <input type="text" className="form-control" id="inputCity" value={shippingCompanyName} onChange={(e)=>setShippingCompanyName(e.target.value)} placeholder='Company name'/>
  </div>
  <div className="col-md-12">
    <label for="inputCity" className="form-label">Gst no.</label>
    <input type="text" className="form-control" value={shippingGstNo} onChange={(e)=>setShippingGstNo(e.target.value)} id="inputCity" placeholder='Gst no.'/>
  </div>
  <div className="col-md-12">
    <label for="inputCity" className="form-label">Company address</label>
    <textarea className="form-control" id="inputCity" value={shippingCompanyAddress} onChange={(e)=>setShippingCompanyAddress(e.target.value)} placeholder='Company address'/>
  </div>


 



 

<div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Ship to a different address</label>
  </div>

</form>
</section>








<section>
        <h3 className='fw-bold mb-4' >Billing Address</h3>
        
      <form className="row g-3">
  <div className="col-md-6">
    <label for="inputEmail4" className="form-label">Full Name</label>
    <input type="text" className="form-control" id="inputEmail4" value={billingFullName} onChange={(e)=>setBillingFullName(e.target.value)} placeholder='Full Name'/>
  </div>
  <div className="col-md-6">
    <label for="inputPassword4" className="form-label">mobile Number</label>
    <input type="text" className="form-control" id="inputPassword4" value={billingMobileNo} onChange={(e)=>setBillingMobileNo(e.target.value)} placeholder='mobile Number'/>
  </div>
  <div className="col-12">
    <label for="inputAddress" className="form-label">Address</label>
    <textarea className="form-control" id="inputAddress" value={billingAddress} onChange={(e)=>setBillingAddress(e.target.value)} placeholder="Address"/>
  </div>
  
  <div className="col-md-12">
    <label for="inputCity" className="form-label">City</label>
    <input type="text" className="form-control" id="inputCity" value={billingCity} onChange={(e)=>setBillingCity(e.target.value)} placeholder='City'/>
  </div>
  <div className="col-md-12">
    <label for="inputCity" className="form-label">Country</label>
    
    <select id="inputState" onChange={(e)=>setBillingCountry(e.target.value)} className="form-select">
      <option selected value={""}>Choose</option>
      <option value={""}>india</option>
    </select>
  </div>
  <div className="col-md-6 ">
    <label for="inputState" className="form-label">State</label>
    <select id="inputState" onChange={(e)=>setBillingState(e.target.value)} className="form-select">
      <option selected value="">Choose...</option>
      <option value="Andhra Pradesh">Andhra Pradesh</option>
      <option value="Arunachal Pradesh">Arunachal Pradesh</option>
      <option value="Assam">Assam</option>
      <option value="Bihar">Bihar</option>
      <option value="Chhatishgadh">Chhatishgadh</option>
      <option value="Goa">Goa</option>
      <option value="Gujarat">Gujarat</option>
      <option value="Haryana">Haryana</option>
      <option value="Himachal Pradesh">Himachal Pradesh</option>
      <option value="jammu and Kashmir">jammu and Kashmir</option>
      <option value="Jharkhand">Jharkhand</option>
      <option value="Karnataka">Karnataka</option>
      <option value="kerala">kerala</option>
      <option value="Madhya pradesh">Madhya pradesh</option>
      <option value="Maharashtra">Maharashtra</option>
      <option value="Manipur">Manipur</option>
      <option value="Meghalaya">Meghalaya</option>
      <option value="Mizoram">Mizoram</option>
      <option value="Nagaland">Nagaland</option>
      <option value="Odisha">Odisha</option>
      <option value="Punjab">Punjab</option>
      <option value="Rajasthan">Rajasthan</option>
      <option value="Sikkim">Sikkim</option>
      <option value="Tamil Nadu">Tamil Nadu</option>
      <option value="Telangana">Telangana</option>
      <option value="Tripura">Tripura</option>
      <option value="Uttar Pradesh">Uttar Pradesh</option>
      <option value="Uttarakhand">Uttarakhand</option>
      <option value="West Bangal">West Bangal</option>
    </select>
  </div>
  <div className="col-md-6 mb-3">
    <label for="inputZip" className="form-label">Pincode</label>
    <input type="text" className="form-control" id="inputZip" value={billingPinCode} onChange={(e)=>setBillingPinCode(e.target.value)} placeholder='Pincode'/>
  </div>
  <div className="col-md-12">
    <label for="inputCity" className="form-label">Company name</label>
    <input type="text" className="form-control" id="inputCity" value={billingCompanyName} onChange={(e)=>setBillingCompanyName(e.target.value)} placeholder='Company name'/>
  </div>
  <div className="col-md-12">
    <label for="inputCity" className="form-label">Gst no.</label>
    <input type="text" className="form-control" id="inputCity" value={billingGstNo} onChange={(e)=>setBillingGstNo(e.target.value)} placeholder='Gst no.'/>
  </div>
  <div className="col-md-12">
    <label for="inputCity" className="form-label">Company address</label>
    <textarea className="form-control" id="inputCity" value={billingCompanyAddress} onChange={(e)=>setBillingCompanyAddress(e.target.value)} placeholder='Company address'/>
  </div>


</form>
</section>

































    </div>
  )
}

export default CheckoutForm
