import React from 'react'

function OrderHistoryTable() {
  return (
    <div>

{/* <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav> */}
<h3 className='fw-bold mb-5'>Order History :</h3>

         <form class="d-flex mb-5">
        <input class="form-control me-2" type="search" placeholder="Search for OrderID or product" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      <table class="table table-striped mt-1">
      
  <thead>
    <tr>
      <th scope="col">OrderID</th>
      <th scope="col">Date</th>
      <th scope="col">Items</th>
      <th scope="col">Total amount</th>
      <th scope="col">Status</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>63747</td>
      <td>9-9-2023</td>
      <td>2</td>
      <td>16000</td>
      <td><button type="button" class="btn btn-light text-success">Shipped</button></td>
      <td><button type="button" class="btn btn-light text-danger">Cancle</button></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
       <td><button type="button" class="btn btn-light text-success">Shipped</button></td>
       <td><button type="button" class="btn btn-light text-danger">Cancle</button></td>
    </tr>
    
  </tbody>

</table>

<table class="table table-striped mt-5">
      
  <thead>
    <tr>
      <th scope="col">Shipping address</th>
      <th scope="col">Billing address</th>
      <th scope="col">Shiping Method</th>
      <th scope="col">Payment Method</th>
      <th scope="col">Tracking number</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>ravapar road morbi</td>
      <td>same as Shipping address</td>
      <td>Express delivery</td>
      <td>VISA**4536</td>
      <td>ID123657</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>@fat</td>
      <td>@fat</td>
    </tr>
    
  </tbody>











</table>

    </div>
  )
}

export default OrderHistoryTable
