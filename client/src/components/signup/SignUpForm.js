import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";
import { NotificationManager } from "react-notifications";
import AuthService from "../services/auth.service";
import {generateUniqueIdForBlock} from "../../helper/CommonHelper";


const SignUpForm =()=>{
    const navigate = useNavigate();
    const [formErrors,setFormErrors] = useState({
        firstName:"",
        email: "",
        password: "",
        confirmPassword: "",
        mobileNumber:"",
        agree:"",
        gender:""
    });
    const [firstName,setFirstName]= useState(null);
    const [agree,setAgree]= useState(false);
    const [email,setEmail]= useState(null);
    const [password,setPassword]= useState(null);
    const [gender,setGender]= useState(null);
    const [confirmPassword,setConfirmPassword]= useState(null);
    const [mobileNumber,setMobileNumber]= useState(null);
    const [disableActionButton, setDisableActionButton] = useState(false);
    const emailRegex = RegExp(
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );
    const pwdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

    const formValid = () => {
        let valid = true;
        // validate form errors being empty
        Object.values(formErrors).forEach(val => {
            val.length > 0 && (valid = false);
        });
        let inputArray = {
            firstName:firstName,
            email: email,
            password: password,
            mobileNumber:mobileNumber,
            agree:agree,
            gender:gender
        }
        let errorArray = {
            firstName:"Please Fill User name",
            email: "Please Fill Email",
            password: "Please Fill Password",
            mobileNumber:"Please Fill Mobile Number",
            gender:"Please Select your gender",
            agree:"Please check this box before submit"
        }
        let formError ={...formErrors};
        // validate the form was filled out
        Object.keys(inputArray).map((key) => {
            let val = inputArray[key];
            key === 'agree' ? val === false && (valid = false) :
            val === null && (valid = false);
            if((key === 'agree' && val === false) || val ===null)
            formError[key] = errorArray[key]
        });

        setFormErrors(formError);
        return valid;
    };

    const handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formError = { ...formErrors };

        switch (name) {
            case "firstName":
                setFirstName(value);
                formError.firstName = value.length <1 ? "Please Fill User name" :
                    value.length < 3 ? "minimum 3 characters required" : "";
                break;
            case "email":
                setEmail(value);
                formError.email = value.length <1 ? "Please Fill Email" : emailRegex.test(value)
                    ? ""
                    : "invalid email address";
                break;
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
             case "mobileNumber":
                 setMobileNumber(value);
                formError.mobileNumber = value.length <1 ? "Please Fill Mobile number" :
                    value.length <10  ? "please enter valid mobile number" : "";
                break;
             case "agree":
                 setAgree(!agree);
                formError.agree = !value ? "Please check this box before submit" : "";
                break;
             case "gender":
                 setGender(value);
                formError.gender = value==null ? "Please select your gender" : "";
                break;
            default:
                break;
        }
        setFormErrors(formError);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let id= generateUniqueIdForBlock()+'_user_'+generateUniqueIdForBlock();
        let data = {id:id,name: firstName, email: email, password: password,gender:gender, mobile: mobileNumber }
        if (formValid()) {
            try {
                try {
                    setDisableActionButton(true);
                    await AuthService.signup(data).then(
                        (response) => {
                            // check for token and user already exists with 200
                            if(response?.errors){
                                let formError = { ...formErrors };
                                formError.email = response?.errors[0]?.msg;
                                setFormErrors(formError);
                            }else{
                                NotificationManager.success("Successfully Added New User");
                                setTimeout(()=>{
                                    navigate("/home");
                                },500)
                            }
                            setDisableActionButton(false);

                        },
                        (error) => {
                            console.log(error);
                            setDisableActionButton(false);
                        }
                    );
                } catch (err) {
                    console.log(err);
                    setDisableActionButton(false);
                }


            } catch (err) {
                NotificationManager.error("Something is going wrong", "Input Error");
             /*   if (!err?.response) {
                    setErrMsg('No Server Response');
                } else if (err.response?.status === 409) {
                    setErrMsg('Username Taken');
                } else {
                    setErrMsg('Registration Failed')
                }
                errRef.current.focus();*/
            }
        } else{
            NotificationManager.error("Please check your Register", "Input Error");
        }

    }
        return (
                <div className="login_info">
                    <h2 className="f_p f_600 f_size_24 t_color3 mb_40">Sign Up</h2>
                            <form className="login-form sign-in-form">
                                <div className="form-group text_box">
                                    <input type='text' placeholder='Enter User Name' className="form-control" name="firstName" value={firstName} onChange={handleChange}/>
                                    {formErrors.firstName.length > 0 && (
                                        <span className="errorMessage">{formErrors.firstName}</span>
                                    )}
                                </div>
                                <div className="form-group text_box">
                                    <input type="text" placeholder={"Enter Email"} className="form-control" name="email" value={email} onChange={handleChange}  />
                                    {formErrors.email.length > 0 && (
                                        <span className="errorMessage">{formErrors.email}</span>
                                    )}
                                </div>
                                <div className="form-group text_box">
                                    <input type="text" placeholder={"Enter Mobile number"} className="form-control" name="mobileNumber" value={mobileNumber} onChange={handleChange}  />
                                    {formErrors.mobileNumber.length > 0 && (
                                        <span className="errorMessage">{formErrors.mobileNumber}</span>
                                    )}
                                </div>
                                <div className="form-group text_box">
                                    <select name={"gender"} value={gender} onChange={handleChange}>
                                        <option>Select gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                    {formErrors.gender.length > 0 && (
                                        <span className="errorMessage">{formErrors.gender}</span>
                                    )}
                                </div>
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
                                <div className="extra mb_20">
                                    <div className="checkbox remember">
                                        <label>
                                            <input type="checkbox" name={"agree"}
                                                   onChange={handleChange}/> I agree to terms and conditions of this website
                                        </label>
                                    </div>
                                    <div className="forgotten-password">
                                        <Link to={"/forgot-password"}>Forgot Password?</Link>
                                    </div>
                                </div>
                                <div>
                                    {formErrors.agree.length > 0 && (
                                        <span className="errorMessage">{formErrors.agree}</span>
                                    )}
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <button type="submit" className="btn_three" disabled={disableActionButton}  onClick={handleSubmit}>Sign Up</button>
                                    <div className="social_text d-flex ">
                                        <div className="lead-text">Or Sign up Using</div>
                                        <ul className="list-unstyled social_tag mb-0">
                                            <li><a href="/#"><i className="ti-facebook"></i></a></li>
                                            <li><a href="/#"><i className="ti-twitter-alt"></i></a></li>
                                            <li><a href="/#"><i className="ti-google"></i></a></li>
                                        </ul>
                                    </div>
                                </div>

                            </form>
                        </div>
        )
    }
export default SignUpForm
