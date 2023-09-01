import {api} from "../../hooks/api/ApiConfig";
import {callInsertDataFunction, commonUpdateFunction} from "../../shikshak-admin/src/store/action";
import {handleWebSocketEvent} from '../../helper/WebSoketHelper';
import {ADD_CART_DATA} from "../constant/cartConstant";
import AuthService from "../../components/services/auth.service";

export const actionAddToCart = (payload) => async (dispatch,getState) => {

    const {data} = await api.post(`products/actionToCartDataByProductAnduserId`,{'productId':payload?.productId,'userId':payload?.userId});
    if(!data || data?.length ===0) {
        const aliasArray = ['?', '?', '?', '?'];
        const columnArray = ['productId', "qty", "custId", "createdAt"];
        const valuesArray = [payload?.productId, payload?.qty, payload?.userId, payload?.createdAt];
        const insertData = {alias: aliasArray, column: columnArray, values: valuesArray, tableName: 'carts'};
        return  await dispatch(callInsertDataFunction(insertData));
    }else{
        const setData = `qty = ?`;
        const whereCondition = `id = '${data[0]?.id}'`;
        const value = [data[0]?.qty+payload?.qty];
        const dataToSend = {column: setData, value, whereCondition, tableName: 'carts'};
        await dispatch(commonUpdateFunction(dataToSend));
    }
}
export const actionToGetTotalCartCount = (payload) => async (dispatch) => {

    const {data} = await api.post(`products/actionToGetAllCartCountDataByUserId`,{'userId':payload});
    dispatch({ type: 'UPDATE_CART_COUNT', payload: data[0]?.total_qty});
}

export const handleWebSocketEventCall = (data) => async (dispatch,getState) => {
    handleWebSocketEvent(dispatch,getState(),data);
}

export const getUserCartDetails = (payload) => async (dispatch) => {
    const {data} = await api.post(`products/actionToGetUserCartDataByUserId`,{'userId':payload});
    dispatch({ type: ADD_CART_DATA, payload: data});
}

export const removeProductFromCart = (payload) => async (dispatch) => {
    await api.post(`products/actionDeleteProductFromCartByCartId`,{'cartId':payload});
    const userInfo =  localStorage.getItem('user');
    let userRawData =   AuthService.parseJwt(JSON.parse(userInfo)?.accessToken);
    dispatch(getUserCartDetails(userRawData?.user?.id));
}

export const updateProductQuantityOnCart = (payload) => async (dispatch) => {
    await api.post(`products/actionUpdateProductQuantityOnCartByCartId`,{'cartId':payload?.cartId,'qty':payload?.qty});
    const userInfo =  localStorage.getItem('user');
    let userRawData =   AuthService.parseJwt(JSON.parse(userInfo)?.accessToken);
    dispatch(getUserCartDetails(userRawData?.user?.id));
}