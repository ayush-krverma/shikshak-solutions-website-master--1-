import React from 'react'

function InvoiceTable() {
  return (
    <div>
      <h5 className='mb-4 container fw-bold'>Products</h5>
      <table class="table mt-3">
  <thead class="table-dark">
  <tr>
      <th scope="col">Description</th>
      <th scope="col">Quantity</th>
      <th scope="col">Unit Price</th>
     
    </tr>
  </thead>
  <tbody>
  <tr>
      <th scope="row">ss intermidiate robotics kit</th>
      <td><h6 className='mb-4 container fw-bold'>2</h6>
      <br></br>
      <h6 className='container fw-bold '>Subtotal</h6><br></br>
      <h6 className='container fw-bold'>Shipping</h6><br></br>
      <h6 className='mb-1 container fw-bold '>Tax</h6><br></br>
      <hr></hr>
      <h6 className='mb-1 container fw-bold '>Total</h6><br></br>
      </td>
      <td>
      <h6 className='mb-4 container fw-bold text-dark'>₹ 16999.00</h6>
      <br></br>
      <h6 className='container fw-bold text-dark'>₹ 33,998.00</h6><br></br>
      <h6 className='container fw-bold text-dark'>₹ 52.00</h6><br></br>
      <h6 className='mb-1 container fw-bold text-dark'>₹ 0.00</h6><br></br>
      <hr></hr>
      <h6 className='mb-4 container fw-bold '>₹ 33,998.00</h6>
      </td>
     
    </tr>
   
  </tbody>
</table>
<div className='d-flex mb-5'>
<h5 className='mb-4 container fw-bold'>Additional Notes</h5>
<h6 className='mb-4 container'>No Additional Notes</h6>
    </div>
    <hr className='hr mt-3'></hr>
    </div>
  )
}

export default InvoiceTable
