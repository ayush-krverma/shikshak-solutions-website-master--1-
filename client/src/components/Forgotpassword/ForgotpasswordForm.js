import React, {useState} from 'react'
import AuthService from "../services/auth.service";
import {NotificationManager} from "react-notifications";
import {Link} from "react-router-dom";

function ForgotpasswordForm() {
    const [email, setEmail] = useState("");
    const [disableActionButton, setDisableActionButton] = useState(false);
    const [isSendForgotPasswordEmail, setIsSendForgotPasswordEmail] = useState(false);
    const [formErrors,setFormErrors] = useState({
        email: "",
        password: ""
    });
    const emailRegex = RegExp(
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );
    const handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formError = { ...formErrors };

        switch (name) {
            case "email":
                setEmail(value);
                formError.email = value.length <1 ? "Please Fill Email" : emailRegex.test(value)
                    ? ""
                    : "invalid email address";
                break;
            default:
                break;
        }
        setFormErrors(formError);
    };
    const formValid = () => {
        let valid = true;
        // validate form errors being empty
        Object.values(formErrors).forEach(val => {
            val.length > 0 && (valid = false);
        });
        let inputArray = {
            email: email
        }
        let errorArray = {
            email: "Please Fill Email"
        }
        let formError ={...formErrors};
        // validate the form was filled out
        Object.keys(inputArray).map((key) => {
            let val = inputArray[key];
            if(val.trim().length === 0){
                formError[key] = errorArray[key];
            }
        });
        setFormErrors(formError);
        return valid;
    };
    const handleForgotPassword = async (e) => {
        e.preventDefault();
        if(formValid()){
            try {
                setDisableActionButton(true);
                await AuthService.forgotPassword(email).then(
                    async (data) => {
                        if(data?.success){
                            NotificationManager.success(data?.success[0]?.msg);
                            setEmail("");
                            setDisableActionButton(false);
                            setIsSendForgotPasswordEmail(true);
                        }
                       console.log(data,"data")
                    },
                    (error) => {
                        console.log(error);
                    }
                );
            } catch (err) {
                console.log(err);
            }
        }

    };
  return (
    <div>
      <section>
          {(!isSendForgotPasswordEmail) ?
              <>
      <h3 className='fw-bold mb-4' >Reset your password</h3>
      <h6 className='fw mb-4' >Please provide the email address that you used when you signed up for your account.</h6>
      {/* <h6 className='fw mb-4' >Email Address*</h6> */}
      <div class="col-md-6 mb-4">
    <label for="inputEmail4" class="form-label">Email Address</label>
    <input type="email" class="form-control mb-0" name={"email"} value={email} onChange={handleChange} id="inputEmail4"/>
          {formErrors.email.length > 0 && (
              <span className="errorMessage">{formErrors.email}</span>
          )}
  </div>
      <h6 className='fw mb-4' >We will send you an email that will allow you to reset your password</h6>
     <button type="button" disabled={disableActionButton} onClick={handleForgotPassword} class="btn btn-primary btn-sm col-md-2 mb-3 fw-bold">Reset Password</button>
              </>
        :
              <div className={"login-container"}>
                  <h2 className="lf_title text-center">An email with change password link has been sent to your registered email address.</h2>

                  <div className="info_block sign_up_form_ele_mt">Back to <Link to={"/login"}>Login</Link></div>
              </div>
          }


      </section>



    </div>
  )
}

export default ForgotpasswordForm
