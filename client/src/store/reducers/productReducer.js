import {
    CATEGORY_DATA_CP,
    POST_DATA,
    SUB_CATEGORY_LIST,
    SUB_CHILD_CATEGORY_LIST,
    PRODUCT_DETAILS_DATA_CP,
    BRAND_DATA,
    PRODUCT_DATA_CP
} from "../constant/productConstant";

const initialState = {
    sidebarShow: true,
    sidebarUnfoldable:true,
    postData:[],
    brandData:[],
    categoryData:[],
    productData:[],
    productDetailsData:[],
    subCategoryData:[],
    subChildCategoryData:[],
}
export  const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'set':
            return { ...state, ...action.rest }
        case POST_DATA:
            return { ...state, postData: action.payload };
        case BRAND_DATA:
            return { ...state, brandData: action.payload };
         case CATEGORY_DATA_CP:
            return { ...state, categoryData: action.payload };
        case PRODUCT_DATA_CP:
            return { ...state, productData: action.payload };
        case PRODUCT_DETAILS_DATA_CP:
            return { ...state, productDetailsData: action.payload };
        case SUB_CATEGORY_LIST:
            return { ...state, subCategoryData: action.payload };
        case SUB_CHILD_CATEGORY_LIST:
            return { ...state, subChildCategoryData: action.payload };
        default:
            return state
    }
}
