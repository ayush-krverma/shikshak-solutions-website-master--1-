import {ADD_CART_DATA} from "../constant/cartConstant";

const INIT_STATE = {
    carts :[],
    cartsCount:0,
    userCartData:[]
};


export const cartReducer = (state=INIT_STATE,action)=>{
    switch(action.type){
        case "ADD_CART":
            const IteamIndex = state.carts.findIndex((iteam)=> iteam.id === action.payload.id);

            if(IteamIndex >= 0){
                state.carts[IteamIndex].qnty +=1
            }else{
                const temp = {...action.payload,qnty:1}
                return {
                    ...state,
                    carts:[...state.carts,temp]
                }
            }
        break;
        case "RMV_CART":
             const data = state.carts.filter((el)=>el.id !== action.payload);

             return {
                ...state,
                carts:data
             }

    case "RMV_ONE":
            const IteamIndex_dec = state.carts.findIndex((iteam)=> iteam.id === action.payload.id);
             if(state.carts[IteamIndex_dec].qnty >= 1){
                const dltitem = state.carts[IteamIndex_dec].qnty -= 1
                console.log([...state.carts,dltitem]);
                return{
                    ...state,
                    carts:[...state.carts]
                }
             }else if(state.carts[IteamIndex_dec].qnty === 1){

                const data = state.carts.filter((el)=>el.id !== action.payload);

                return {
                   ...state,
                   carts:data
                }
             }
            break;
        case "UPDATE_CART_COUNT":
            return { ...state, cartsCount: action.payload };
        case ADD_CART_DATA:
            return { ...state, userCartData: action.payload };

    default :
            return state
    }
}
