import React from 'react'
import {CNav, CNavItem, CTabContent} from '@coreui/react'
import {Navigate, NavLink, Route, Routes,useParams} from "react-router-dom";
import Products from "../components/product/Products";
import AddProducts from "../components/product/AddProducts";
import Categories from "../components/product/Categories";
import Brand from "../components/product/Brand";
import SubChildCategory from "../components/product/SubChildCategory";
import SubCategory from "../components/product/SubCategory";
import {useEffectOnce} from "../hooks/useEffectOnce";
import {
    actionToGetBrandsApiCall,
    actionToGetCategoriesApiCall,
    actionToGetProductsApiCall,
    actionToGetSubCategoriesApiCall,
    actionToGetSubChildCategoriesApiCall
} from "../store/action";
import {useDispatch} from "react-redux";
import EditProduct from "../components/product/EditProduct";
import GetProductImages from "../components/product/GetProductImages";

const Product = () => {
    const param = useParams();
    const dispatch = useDispatch();
    const addButton = ()=>{
        let buttonHtml='';
        let activePage= param['*'];
        if(activePage === 'home'){
            buttonHtml=<NavLink className="btn btn-primary" to={'/shikshak-admin/product/add-product'}>Add Product</NavLink>;
        }else if(activePage === 'add-product'){
            buttonHtml=<NavLink className="btn btn-primary" to={'/shikshak-admin/product/home'}>Close</NavLink>;
        }
        return buttonHtml;
    }

    useEffectOnce(() => {
        dispatch(actionToGetCategoriesApiCall());
        dispatch(actionToGetBrandsApiCall());
        dispatch(actionToGetSubCategoriesApiCall());
        dispatch(actionToGetSubChildCategoriesApiCall());
        dispatch(actionToGetProductsApiCall());
    }, []);
    return (
        <>
        <div className="d-flex mt-3">
            <CNav variant="tabs" className={"flex-grow-1 flex-nowrap"}>
                <CNavItem>
                    <NavLink className={"nav-link"} to={'/shikshak-admin/product/home'}>
                        Product
                    </NavLink>
                </CNavItem>
                <CNavItem>
                    <NavLink className={"nav-link"} to={'/shikshak-admin/product/category'}>Category</NavLink>
                </CNavItem>
                <CNavItem>
                    <NavLink className={"nav-link"} to={'/shikshak-admin/product/sub-category'}>Sub Category</NavLink>
                </CNavItem>
                <CNavItem>
                    <NavLink className={"nav-link"} to={'/shikshak-admin/product/sub-child-category'}>Sub Child Category</NavLink>
                </CNavItem>
                <CNavItem>
                    <NavLink className={"nav-link"} to={'/shikshak-admin/product/brand'}>Brand</NavLink>
                </CNavItem>

            </CNav>
            <span className="ml-auto text-nowrap border border-top-0 border-left-0 border-right-0">
                {addButton() }
            </span>
       </div>

            <CTabContent className="rounded-bottom white-background">

                <Routes>
                    <Route path="" exact element={<Navigate replace to="home"/>} />
                    <Route path={`home`} element={<Products/>} />
                    <Route path={`add-product`} element={<AddProducts/>} />
                    <Route path={`category`} element={<Categories/>} />
                    <Route path={`sub-category`} element={<SubCategory/>} />
                    <Route path={`sub-child-category`} element={<SubChildCategory/>} />
                    <Route path={`brand`} element={<Brand/>} />
                    <Route path={`edit/:id`} element={<EditProduct/>} />
                    <Route path={`category/:id`} element={<Categories/>} />
                    <Route path={`brand/:id`} element={<Brand/>} />
                    <Route path={`sub-category/:id`} element={<SubCategory/>} />
                    <Route path={`sub-child-category/:id`} element={<SubChildCategory/>} />
                    <Route path={`images/:product_id`} element={<GetProductImages/>} />
                </Routes>
            </CTabContent>

        </>
    )
}

export default Product
