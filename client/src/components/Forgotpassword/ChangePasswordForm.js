import React, {useState} from 'react'
import {Link, useParams} from 'react-router-dom';
import {useEffectOnce} from "../../hooks/useEffectOnce";
import AuthService from "../services/auth.service";
import {NotificationManager} from "react-notifications";
function ChangePasswordForm() {
    const [password,setPassword]= useState(null);
    const [confirmPassword,setConfirmPassword]= useState(null);
    const [disableActionButton, setDisableActionButton] = useState(false);
    const [loadingForm, setLoadingForm] = useState(true);
    const [isLinkExpired, setIsLinkExpired] = useState(false);
    const [isInvalidLink, setIsInvalidLink] = useState(false);
    const [isPasswordChanged, setIsPasswordChanged] = useState(false);
    const [formErrors,setFormErrors] = useState({
        confirmPassword: "",
        password: ""
    });
    let { token } = useParams();

    const pwdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
    const handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formError = { ...formErrors };

        switch (name) {
            case "password":
                setPassword(value);
                formError.password = value.length <1 ? "Please Fill Password" :
                    pwdRegex.test(value) ? "" :
                        "Please enter valid password, minimum 8 characters required," +
                        " should be alphanumeric,minimum 1 letter capital,1 small letter and special character";
                break;
            case "confirmPassword":
                setConfirmPassword(value);
                formError.confirmPassword =
                    value !== password ? "password and confirm password does not match" : "";
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
            confirmPassword: confirmPassword,
            password: password
        }
        let errorArray = {
            password: "Please Fill password",
            confirmPassword: "Please Fill confirm password",
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
    const handleChangePassword = async (e) => {
        e.preventDefault();
        if(formValid()){
            try {
                setDisableActionButton(true);
                AuthService.changePassword(token,password).then(
                    (response) => {
                        if(response?.status==1){
                            setIsPasswordChanged(true);
                            NotificationManager.success("Password has been changed successfully.");
                        }
                       console.log(response,"response");
                    },
                    (error) => {
                        console.log(error);
                        setDisableActionButton(false);
                    }
                );
            } catch (err) {
                console.log(err);
            }
        }

    };
    useEffectOnce(()=>{
         AuthService.getUserDetailsByForgotPasswordToken(token).then(
            (response) => {
                setLoadingForm(false);
               if(response?.status===2){
                setIsLinkExpired(true);
               }
                if(response?.status===3){
                    setIsInvalidLink(true);
                }
            },
            (error) => {
                console.log(error);
                setDisableActionButton(false);
            }
        );
    })
    return (
        <div>
            {(loadingForm) ?<h3>Loading ... Please wait</h3> :
                <>
                    {(!isLinkExpired && !isInvalidLink && !isPasswordChanged)?
            <section>
                <h3 className='fw-bold mb-4' >Reset your password</h3>
                <h6 className='fw mb-4' >Please provide the email address that you used when you signed up for your account.</h6>
                {/* <h6 className='fw mb-4' >Email Address*</h6> */}
                <div className="form-group text_box">
                    <input type="password" placeholder={"Enter Password"}  className="form-control" name="password" value={password} onChange={handleChange}  />
                    {formErrors.password.length > 0 && (
                        <span className="errorMessage">{formErrors.password}</span>
                    )}
                </div>
                <div className="form-group text_box">
                    <input type="password" placeholder="Enter Confirm Password" className="form-control" name="confirmPassword" value={confirmPassword} onChange={handleChange}/>
                    {formErrors.confirmPassword.length > 0 && (
                        <span className="errorMessage">{formErrors.confirmPassword}</span>
                    )}
                </div>
                <h6 className='fw mb-4' >We will send you an email that will allow you to reset your password</h6>
                <button type="button" disabled={disableActionButton} onClick={handleChangePassword} class="btn btn-primary btn-sm col-md-2 mb-3 fw-bold">Reset Password</button>

            </section>:""}
            {(isLinkExpired && !isPasswordChanged) ? <>
                <section>
                <div className={"login-container"}>
                <h1 className="lf_title text-center">Link has been expired</h1>
                <p className="lf_sub_title mt-20 text-center">The link you are trying to access is no longer valid.</p>
                <div className="info_block sign_up_form_ele_mt">Back to <Link to={"/login"}>Login</Link></div>
                </div>
                </section>
                </> : <>{(isInvalidLink && !isPasswordChanged)
                ?
                <>
                    <section>
                <div className={"login-container"}>
                <h1 className="lf_title text-center">Forgot password link invalid</h1>
                <p className="lf_sub_title mt-20 text-center">The link you are trying to access is no longer valid.</p>
                <div className="info_block sign_up_form_ele_mt">Back to <Link to={"/login"}>Login</Link></div>
                </div>
                    </section>
                </>
                : ''}
                </>
            }
                    <>
                        {(isPasswordChanged)? <>
                            <section>
                                <div className={"login-container"}>
                                    <h2 className="lf_title text-center">Your Password has been changed successfully</h2>
                                    <div className="info_block sign_up_form_ele_mt">Back to <Link to={"/login"}>Login</Link></div>
                                </div>
                            </section>
                        </>:""}
                    </>
                </>

            }


        </div>
    )
}

export default ChangePasswordForm
