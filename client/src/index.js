import 'react-app-polyfill/stable';
import 'core-js';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./assets/themify-icon/themify-icons.css";
import "./assets/simple-line-icon/simple-line-icons.css";
import "./assets/font-awesome/css/all.css";
import "./assets/elagent/style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./assets/animate.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/main.css";
import "./assets/responsive.css";
import "./assets/custom.css";
import "./assets/style.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "popper.js";
import App from './App';
import AdminApp from './shikshak-admin/src/AdminApp';
import adminStore from './shikshak-admin/src/store/adminStore';
import {Provider} from 'react-redux';
import { AuthProvider } from './context/AuthProvider';
import store from './store/store'
import reportWebVitals from './reportWebVitals';
const loader = document.querySelector("#preloader");

// if you want to show the loader when React loads data again
//const showLoader = () => loader.classList.remove("loader--hide");

const hideLoader = () => loader.classList.add("loader--hide");
const showLoader = () => loader.classList.remove("loader--hide");

const root = ReactDOM.createRoot(document.getElementById('root'));
if(window.location.pathname.indexOf('shikshak-admin') !== -1){
    setTimeout(
        () =>
            // the show/hide functions are passed as props
            root.render(
                <Provider store={adminStore}>
                    <AuthProvider>
                        <AdminApp />
                    </AuthProvider>
                </Provider>
            )
        ,
        100
    );
}else{
    showLoader();
    setTimeout(
        () =>
            // the show/hide functions are passed as props
            root.render(
                <Provider store={store}>
                    <AuthProvider>
                        <App hideLoader={hideLoader}/>
                    </AuthProvider>

                </Provider>
            )
        ,
        1000
    );
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
