import React, { useState } from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import AuthService from "../services/auth.service";
import useAuth from '../../hooks/useAuth';
import {actionToGetTotalCartCount} from "../../store/actions/shopAction";
import {useDispatch} from "react-redux";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [signInError, setSignInError] = useState("");
    const [disableActionButton, setDisableActionButton] = useState(false);
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();
    const { setAuth } = useAuth();
    const dispatch = useDispatch();
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
            case "password":
                setPassword(value);
                formError.password = value.length <1 ? "Please Fill Password" :"";
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
            email: email,
            password: password
        }
        let errorArray = {
            email: "Please Fill Email",
            password: "Please Fill Password"
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
    const handleLogin = async (e) => {
        e.preventDefault();
        if(formValid()){
            try {
                setDisableActionButton(true);
                await AuthService.login(email, password).then(
                    async (data) => {
                        if (data.accessToken) {
                            let user =  await AuthService.parseJwt(data.accessToken);
                            dispatch(actionToGetTotalCartCount(user?.user?.id));
                            let value  = user.user
                            setAuth({...value});
                            navigate(from, { replace: true });
                            setDisableActionButton(false);
                        }
                    },
                    (error) => {
                        console.log(error);
                        setSignInError(error?.response?.data?.errors[0]?.msg)
                        setDisableActionButton(false);
                    }
                );
            } catch (err) {
                console.log(err);
                setDisableActionButton(false);
            }
        }

    };

    return (
        <div className="login_info">
            <h2 className="f_p f_600 f_size_24 t_color3 mb_40">Sign In</h2>
            <form onSubmit={handleLogin} className="login-form sign-in-form">
                <div className="form-group text_box">
                    <label className="f_p text_c f_400">Email </label>
                    <input type="text" name={"email"} placeholder="Please enter email"
                           value={email}
                           onChange={handleChange}/>
                    {formErrors.email.length > 0 && (
                        <span className="errorMessage">{formErrors.email}</span>
                    )}
                </div>
                <div className="form-group text_box">
                    <label className="f_p text_c f_400">Password</label>
                    <input type="password" name={"password"} placeholder="Please enter password"  value={password}
                           onChange={handleChange}/>
                    {formErrors.password.length > 0 && (
                        <span className="errorMessage">{formErrors.password}</span>
                    )}
                </div>
                {signInError.length > 0 && (
                    <span className="errorMessage">{signInError}</span>
                )}
                <div className="extra mb_20">
                    <div className="checkbox remember">
                        <label>
                            <input type="checkbox"/> Keep me Signed in
                        </label>
                    </div>

                    <div className="forgotten-password">
                        <Link to={"/forgot-password"}>Forgot Password?</Link>
                    </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <button type="submit" disabled={disableActionButton} className="btn_three">Sign in</button>
                    <div className="social_text d-flex ">
                        <div className="lead-text">Don't have an account?</div>
                        <Link to={"/signup"}>Signup</Link>
                        <ul className="list-unstyled social_tag mb-0">
                            <li><a href="/#"><i className="ti-facebook"></i></a></li>
                            <li><a href="/#"><i className="ti-twitter-alt"></i></a></li>
                            <li><a href="/#"><i className="ti-google"></i></a></li>
                        </ul>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
