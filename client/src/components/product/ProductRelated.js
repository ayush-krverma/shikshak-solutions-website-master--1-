import React from 'react';
import intermediate from '../../image/product/intermediate.jpg';


function ProductRelated() {
  return (
    <div>
        <div className="cardbg"><br></br>
        <section>
        <h3 className='fw-bold mb-5'>Related Products:</h3>
        
        
      <div className="card-group col-md-12">
        <div className="d-block">
  <div className="card mb-6  px-10">
   
    <img src={intermediate} height={200} width={200}   alt="..."/>
      </div>
    
     <div className="card-body">
      <h5 className="card-title">Card title</h5>
        </div> 
    </div>
    <div className="d-block">
  <div className="card mb-6">
   
    <img src={intermediate} height={200} width={200}   alt="..."/>
      </div>
    
     <div className="card-body">
      <h5 className="card-title">Card title</h5>
       </div> 
    </div>
    <div className="d-block">
  <div className="card mb-6">
   
    <img src={intermediate} height={200} width={200}   alt="..."/>
      </div>
    
     <div className="card-body">
      <h5 className="card-title">Card title</h5>
       </div> 
    </div>
    <div className="d-block">
  <div className="card mb-6">
    
    <img src={intermediate} height={200} width={200}   alt="..."/>
      </div>
    
     <div className="card-body">
      <h5 className="card-title">Card title</h5>
       </div> 
    </div>
    <div className="d-block">
  <div className="card mb-6">
   
    <img src={intermediate} height={200} width={200}   alt="..."/>
      </div>
    
     <div className="card-body">
      <h5 className="card-title">Card title</h5>
       </div> 
    </div>
</div>
    
    </section>
    </div>
    </div>
  )
}

export default ProductRelated
