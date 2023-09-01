import React, { Suspense } from "react";
import './App.css';
import './scss/style.scss';


import { BrowserRouter, Route,Routes } from "react-router-dom";
/*------ Pages-----*/
import  {Home} from "./Pages/Home";
import Contacts from "./Pages/Contacts";
import CommingSoon from "./Pages/CommingSoon";
import ErrorPage from "./Pages/ErrorPage";
import About from "./Pages/About";
import Offering from "./Pages/Offering";
import Portfolio from "./Pages/Portfolio";
import TermAndCond from "./Pages/TermAndCond";
import PrivacyPolicies from "./Pages/PrivacyPolicies";
import SocialSites from "./Pages/SSSocialSites";
import Products from "./Pages/Products";
import Cards from "./Pages/Cards";
//*import ProductDetails from "./components/product/ProductDetails";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import CardsDetails from "./Pages/CardsDetails";
import Forgotpassword from "./Pages/Forgotpassword";
import MyOrder from "./components/my order/MyOrder";
import MyAccount from "./components/MyAccount/MyAccount";
import RequireAuth from "./components/auth/RequireAuth";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import OrderHistory from "./components/OrderHistory/OrderHistory";
import Billing from "./components/Billing page/Billing";
import Invoice from "./components/Invoice/Invoice";
import EmailTemplet from "./components/EmailTemplet/EmailTemplet";
import useAuth from "./shikshak-admin/src/hooks/useAuth";
import AuthService from "./shikshak-admin/src/components/services/auth.service";
import {useEffectOnce} from "./hooks/useEffectOnce";
import ChangePassword from "./Pages/ChangePassword";
import {NotificationContainer} from "react-notifications";



// import cart from "./Pages/Frontend/cart";
// if you want to show the loader when React loads data again
const loading = (
    <div className="pt-3 text-center">
        <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
)
/*------ Pages-----*/
const ROLES = {
    'User': 2001,
    'Editor': 1984,
    'Admin': 5150
}
const App = (props)=> {
        const { setAuth } = useAuth();
        const authorized = async()=>{
            if(localStorage.getItem('user')){
                const data = JSON.parse(localStorage.getItem('user'));
                if (data.accessToken ) {
                    let user =  await AuthService.parseJwt(data.accessToken);
                    let value  = user.user
                    setAuth({...value});
                }
            }
        }
        useEffectOnce(()=>{
            props.hideLoader();
            authorized();

        })
        return (
            <BrowserRouter>
                <Suspense fallback={loading}>
                    {(localStorage.getItem('user')) ?
                <Routes>
                    <Route exact path="/" element={<Home />}/>
                    <Route exact path="/MyOrder" element={<MyOrder />}/>
                    <Route path="/home" element={<Home />}/>
                    <Route path="/contact" element={<Contacts />}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="/our-work" element={<Portfolio />}/>
                    <Route path="/term-and-condition" element={<TermAndCond />}/>
                    <Route path="/privacy-policy" element={<PrivacyPolicies />}/>
                    <Route path="/social-sites" element={<SocialSites />}/>
                    <Route path="/products" element={<Products />}/>
                    <Route exact path="/Billing" element={<Billing />}/>
                    <Route exact path="/EmailTemplet" element={<EmailTemplet />}/>
                    <Route exact path="/OrderHistory" element={<OrderHistory />}/>
                    <Route exact path="/Invoice" element={<Invoice />}/>
                    <Route exact path="/MyAccount" element={<MyAccount />}/>
                    <Route exact path="/Cart" element={<Cart />}/>
                    <Route exact path="/Checkout" element={<Checkout />}/>
                    <Route exact path="/cart/:id" element={<CardsDetails />}/>
                    <Route path="/Cards" element={<Cards />}/>
                    <Route path="/products/:cat" element={<Products />}/>
                    <Route path="/product/:id" element={<CommingSoon />}/>
                    <Route path="/our-offering" element={<Offering />}/>
                    <Route path="/our-offering/:cat" element={<Offering />}/>
                    <Route exact path="/forgot-password" element={<Home />}/>
                    <Route exact path="/reset-password/:token" element={<Home />}/>
                    {/* we want to protect these routes */}
                    <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
                        <Route path="/" element={<Home />} />
                    </Route>

                    {/* catch all */}
                    <Route path="/*" element={<ErrorPage />}/>
                </Routes>:<Routes>
                            <Route exact path="/" element={<Home />}/>
                            <Route exact path="/Signup" element={<SignUp />}/>
                            <Route exact path="/login" element={<Login />}/>
                            <Route exact path="/forgot-password" element={<Forgotpassword />}/>
                            <Route exact path="/reset-password/:token" element={<ChangePassword />}/>
                            <Route path="/home" element={<Home />}/>
                            <Route path="/contact" element={<Contacts />}/>
                            <Route path="/about" element={<About />}/>
                            <Route path="/our-work" element={<Portfolio />}/>
                            <Route path="/term-and-condition" element={<TermAndCond />}/>
                            <Route path="/privacy-policy" element={<PrivacyPolicies />}/>
                            <Route path="/social-sites" element={<SocialSites />}/>
                            <Route path="/products" element={<Products />}/>
                            <Route path="/product/:id" element={<CommingSoon />}/>
                            <Route path="/our-offering" element={<Offering />}/>
                            <Route path="/*" element={<ErrorPage />}/>
                        </Routes>}
                    <NotificationContainer />
                </Suspense>
            </BrowserRouter>
        );
}

export default App;
