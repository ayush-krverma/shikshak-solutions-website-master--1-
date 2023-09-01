import {api} from "../../hooks/api/ApiConfig";
import {CATEGORY_DATA_CP, PRODUCT_DATA_CP,PRODUCT_DETAILS_DATA_CP} from "../constant/productConstant";

export const actionToGetProductsApiCall = () => async (dispatch) => {
    const {data} = await api.post(`products/actionToGetProductsApiCall`);
    dispatch({ type: PRODUCT_DATA_CP, payload: data });
    return data;
}
export const actionToGetCategoriesApiCall = () => async (dispatch) => {
    const {data} = await api.post(`products/actionToGetCategoriesApiCall`);
    dispatch({ type: CATEGORY_DATA_CP, payload: data });
    return data;
}
export const actionToGetProductDataApiCall = (payload) => async (dispatch) => {
    const {data} = await api.post(`products/actionToGetProductsApiCall`,payload);
    dispatch({ type: PRODUCT_DETAILS_DATA_CP, payload: data[0] });
    return data;
}