import {api} from '../../hooks/api/ApiConfig';

const signup = (body) => {
    return api
        .post("/auth/signup", body)
        .then((response) => {
            if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }

            return response.data;
        });
};

const login = (email, password) => {
    return api
        .post("/auth/login", {
            email,
            password,
        })
        .then((response) => {
            if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }

            return response.data;
        });
};
const forgotPassword = (email) => {
    return api
        .post("/auth/forgot-password", {
            email
        })
        .then((response) => {

            return response.data;
        });
};
const getUserDetailsByForgotPasswordToken = (token) => {
    return api
        .post("/auth/user-details-by-forgot-password-token", {
            token
        })
        .then((response) => {

            return response.data;
        });
};
const changePassword = (token,password) => {
    return api
        .post("/auth/change-password", {
            token,password
        })
        .then((response) => {

            return response.data;
        });
};
const logout = () => {
    localStorage.removeItem("user");
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};
const parseJwt = (token) => {
    if (!token) { return; }
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
}
const authService = {
    signup,
    login,
    forgotPassword,
    getUserDetailsByForgotPasswordToken,
    changePassword,
    logout,
    getCurrentUser,
    parseJwt
};

export default authService;
