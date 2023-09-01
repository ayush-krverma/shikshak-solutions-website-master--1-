import React from 'react';
import profile from "../../image/profile.png";


function BillingTable() {
  return (
    <div>
        <h3 className='mb-4 container'>Billing History</h3>
        
       
     <table class="table table-hover mt-3">
     
  <thead>
    <tr>
      <th scope="col">Billing Admin</th>
      <th scope="col">Billing Date</th>
      <th scope="col">Amount</th>
      <th scope="col">Users</th>
      <a href='HTML.zip'><button type="button" class="btn btn-light text-success">Download All</button></a>
      {/* <th scope="col"></th> */}
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" className='d-flex'>
        <div>
      <img src={profile} height={50} width={50}   alt="..."/>
      </div>
      <div className='col-md-5'>
      <h6 className='mb-3 container'>Redx Technology</h6>
    <h6 className='mb-4 container '>redx@gmail.com</h6>
      </div>


      </th>
      <td>Dec 1,2022</td>
      <td>₹ 16999.00</td>
      <td>10Users</td>
      <button type="button" class="btn btn-light text-success">Download</button>
    </tr>
    <tr>
      <th scope="row" className='d-flex'>
        <div>
      <img src={profile} height={50} width={50}   alt="..."/>
      </div>
      <div className='col-md-5'>
      <h6 className='mb-3 container'>Redx Technology</h6>
    <h6 className='mb-4 container '>redx@gmail.com</h6>
      </div>


      </th>
      <td>Dec 1,2022</td>
      <td>₹ 16999.00</td>
      <td>10Users</td>
      <button type="button" class="btn btn-light text-success">Download</button>
    </tr>
    <tr>
      <th scope="row" className='d-flex'>
        <div>
      <img src={profile} height={50} width={50}   alt="..."/>
      </div>
      <div className='col-md-5'>
      <h6 className='mb-3 container'>Redx Technology</h6>
    <h6 className='mb-4 container '>redx@gmail.com</h6>
      </div>


      </th>
      <td>Dec 1,2022</td>
      <td>₹ 16999.00</td>
      <td>10Users</td>
      <button type="button" class="btn btn-light text-success">Download</button>
    </tr>
  </tbody>

</table>
    </div>
  )
}

export default BillingTable
