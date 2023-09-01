
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Email = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_72rbvvt', 'template_oz7dq6p', form.current, 'Rxy5KnNMjVencujWh')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  return (

    
    <div>
        <h5 className='mb-4 container fw-bold'>Email Template</h5>
         <form ref={form} onSubmit={sendEmail}>
  

      <div className="col-md-12 mt-4">
     <label for="inputEmail4" className="form-label fw-bold">Name</label>
     <input type="text" name='name' className="form-control" id="inputEmail4" placeholder='Name'/>
   </div>
   <div className="col-md-12 mt-3">
     <label for="inputPassword4" className="form-label fw-bold">Email</label>
     <input type="email" name='user_email' className="form-control" id="inputPassword4" placeholder='Email'/>
   </div>
   <div className="col-12 mb-3 mt-3">
     <label for="inputAddress" className="form-label fw-bold">Message</label>
     <textarea className="form-control" name="message" id="inputAddress" placeholder="message"/>
   </div>
   <input type="submit" class="btn btn-success"  value="Send" />

    </form>
    </div>
  )
}

export default Email










































// import React from 'react'
// import emailjs from 'emailjs-com'
// import { error } from 'jquery';

// function Email() {

//     function sendEmail(e){
//         e.preventDefault();

//         emailjs.sendForm('service_72rbvvt','template_oz7dq6p',e.target).then(res=>{
//             console.log(res);

//         }).catch(err=> console.log(err));
//     }

//   return (
//     <div>
//       <h4 className='mb-5 container fw-bold'>Welcome To Shikshak Sholution</h4>
//       <h6 className='mb-4 container fw-bold text-dark'>Hello Eric Cabrel, we are happy to have you on board!</h6>
//       <h6 className='mb-5 container fw-bold text-dark'>To access the optimal experience for shipment management, you only need to activate your account below.</h6>
//       <div class="d-grid gap-2 col-6 mx-auto">
//       <form className="row g-3 mb-4" onSubmit={sendEmail}>
//   <div className="col-md-12">
//     <label for="inputEmail4" className="form-label">Full Name</label>
//     <input type="text" name='name' className="form-control" id="inputEmail4" placeholder='Full Name'/>
//   </div>
//   <div className="col-md-12">
//     <label for="inputPassword4" className="form-label">Email</label>
//     <input type="email" name='user_email' className="form-control" id="inputPassword4" placeholder='Email'/>
//   </div>
//   <div className="col-12">
//     <label for="inputAddress" className="form-label">message</label>
//     <textarea className="form-control" name='message' id="inputAddress" placeholder="message"/>
//   </div>
//   </form>
//   <button class="btn btn-success text-white fw-bold" type="button">Activate my account</button>
 
// </div>
//     </div>
//   )
// }

// export default Email
