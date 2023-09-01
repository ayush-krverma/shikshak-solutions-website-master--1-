import React, { Suspense } from "react";
import "./assets/backend.css";

import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
/*------ Pages-----*/
import RequireAuth from "./components/auth/RequireAuth";
import {useEffectOnce} from "../../hooks/useEffectOnce";
import AuthService from "./components/services/auth.service";
import useAuth from "./hooks/useAuth";
// if you want to show the loader when React loads data again
const loading = (
    <div className="pt-3 text-center">
        <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
)
const Login = React.lazy(() => import('./Pages/Login'))
const AdminLayout = React.lazy(() => import('./components/layout/AdminLayout'))
const Unauthorized = React.lazy(() => import('./components/auth/Unauthorized'))
const Page404 = React.lazy(() => import('./Pages/Page404'))
const Post = React.lazy(() => import('./Pages/Post'))
const Dashboard = React.lazy(() => import('./Pages/Dashboard'))
const Product = React.lazy(() => import('./Pages/Product'))
/*------ Pages-----*/
/*------ Pages-----*/
const ROLES = {
    'User': 2001,
    'Editor': 1984,
    'Admin': 5
}
const AdminApp = ()=> {
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
        authorized();

    })
        return (
            <BrowserRouter>
                <Suspense fallback={loading}>
                    <Routes>
                        <Route path="/shikshak-admin" >
                            <Route path="" exact element={<Navigate to="dashboard" replace />} />
                            <Route exact path="login" name="Login Page" element={<Login />} />
                            <Route exact path="unauthorized"  element={<Unauthorized />} />
                            <Route path="" element={<AdminLayout />}>

                                <Route element={<RequireAuth allowedRoles={[ROLES.Admin,ROLES.Editor]} />}>
                                    <Route path="post" element={<Post />}/>
                                    <Route exact path="dashboard" element={<Dashboard />}/>
                                    <Route path="product/*" element={<Product />}/>
                                </Route>
                            </Route>
                            {/* catch all */}
                            <Route path="404" element={<Page404 />}/>
                            <Route path="*" element={<Page404 />}/>
                        </Route>
                    </Routes>
                </Suspense>
            </BrowserRouter>
        );
}

export default AdminApp;
