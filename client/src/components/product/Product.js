import React, {useState} from 'react';

import ProductList from "./ProductList";
import ProductFilter from "./ProductFilter";
import {useDispatch, useSelector} from "react-redux";
import {actionToGetCategoriesApiCall, actionToGetProductsApiCall} from "../../store/actions/productAction";
import {useEffectOnce} from "../../hooks/useEffectOnce";
export default function Product(){
    const [filterCategoryTypes, setFilterCategoryTypes] = useState([]);
    const [filterPriceRange, setFilterPriceRange] = useState([]);

    const dispatch  = useDispatch();
    useEffectOnce(()=>{
        dispatch(actionToGetProductsApiCall());
        dispatch(actionToGetCategoriesApiCall());
    })
    const listOfProducts = useSelector((state) => state.productReducer.productData)
    const listOfCategory = useSelector((state) => state.productReducer.categoryData)
    const checkPriceRangeFilter= (productData)=>{
         let isProductWithinFilterPriceRange =false;
             filterPriceRange.map((priceRange) => {
              let priceRangeArray = priceRange.split("-")
                if(productData?.price>=parseInt(priceRangeArray[0]) && productData?.price <=parseInt(priceRangeArray[1])){
                     isProductWithinFilterPriceRange =true;
                        }
                    });
         return isProductWithinFilterPriceRange;
     };

        return(
            
            <section className="product_list_area sec_pad">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <ProductFilter listOfCategory={listOfCategory}  filterCategoryTypes={filterCategoryTypes} setFilterCategoryTypes={setFilterCategoryTypes} filterPriceRange={filterPriceRange} setFilterPriceRange={setFilterPriceRange}/>
                        </div>
                        <div className="col-md-9">
                            <div className="row product-list">
                                {
                                    listOfProducts.map((productContent, index) => {
                                        if(filterCategoryTypes?.includes(productContent?.categoryId) || filterCategoryTypes?.length ===0) {
                                            if(checkPriceRangeFilter(productContent) || filterPriceRange?.length ===0) {
                                                return (
                                                    <div className="col-md-4">
                                                        <ProductList key={index} item={productContent}/>
                                                    </div>
                                                )
                                            }
                                        }
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
};

