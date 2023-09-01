import React, {useEffect, useState} from "react";
import {actionToSignInUserIntoApp} from "../../actions/CommonAction";
import {useDispatch,useSelector} from "react-redux";

function LoginComponentSection(){
    const [password,setPassword] = useState('');
    const [errorPassword,serErrorPassword] = useState(false);
    const [onLoadingMode,setLoadingMode] = useState(false);
    const {error} = useSelector((state) => state.userSignin);
    const windowResizeCount = useSelector((state) => state.windowResizeCount);

    const dispatch = useDispatch();

    const callToSignInUserIntoApp = ()=>{
        if(password?.trim()?.length && !onLoadingMode) {
            setLoadingMode(true);
            setTimeout(function () {
                dispatch(actionToSignInUserIntoApp(password))
            })
        }
    }

    const callFunctionToSubmitLogin = (e)=>{
        if(e.keyCode === 13 && password?.trim()?.length && !onLoadingMode) {
            setLoadingMode(true);
            setTimeout(function () {
                dispatch(actionToSignInUserIntoApp(password))
            })
        }
    }

    useEffect(()=>{
        if(error){
            serErrorPassword(true);
        }else{
            serErrorPassword(false);
        }
        setLoadingMode(false);
    },[error])

    return (
        <div className={"login_page_main_password_panel"}>
            <div className={"login_page_main_password_inner_section_form"}>
            {(windowResizeCount >= 800) ?
                <div className={"login_page_heading_bar"}>
                    <div></div>
                </div>
                : ''
            }
            <div className={"login_page_input_form_section"}>
                <div className={"login_page_input_form_section_heading"}>
                    Enter Panel Password To Login.
                </div>
                {(errorPassword) ?
                    <div className={"login_page_input_form_section_heading_error"}>
                        Invalid Password!
                    </div>
                    : ''
                }
                <div className={"login_page_input_form_section_password_input"}>
                    <input
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        type={"password"}
                        onKeyUp={(e)=>callFunctionToSubmitLogin(e)}
                        autoFocus={true}/>
                    <br/>
                    <button
                        onClick={callToSignInUserIntoApp}
                        type={"button"}
                        disabled={!password?.trim()?.length}>
                        {onLoadingMode ? 'Wait' : 'Login'}
                    </button>
                </div>
            </div>
            </div>
        </div>
    )
}
export const LoginComponent = React.memo(LoginComponentSection);
