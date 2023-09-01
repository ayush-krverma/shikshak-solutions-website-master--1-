import {
    CATEGORY_DATA,
    POST_DATA,
    PRODUCT_DATA,
    SUB_CATEGORY_LIST,
    SUB_CHILD_CATEGORY_LIST,
    BRAND_DATA,
    UPDATE_PRODUCT_FORM_DATA,
    PRODUCT_IMAGE_DATA
} from "../constant";

const initialState = {
    sidebarShow: true,
    sidebarUnfoldable:true,
    postData:[],
    brandData:[],
    categoryData:[],
    productData:[],
    productImageData:[],
    subCategoryData:[],
    subChildCategoryData:[],
    updateProductFormData:[]
}
export  const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'set':
            return { ...state, ...action.rest }
        case POST_DATA:
            return { ...state, postData: action.payload };
        case BRAND_DATA:
            return { ...state, brandData: action.payload };
         case CATEGORY_DATA:
            return { ...state, categoryData: action.payload };
        case PRODUCT_DATA:
            return { ...state, productData: action.payload };
        case SUB_CATEGORY_LIST:
            return { ...state, subCategoryData: action.payload };
        case SUB_CHILD_CATEGORY_LIST:
            return { ...state, subChildCategoryData: action.payload };
        case PRODUCT_IMAGE_DATA:
            return { ...state, productImageData: action.payload };
        case UPDATE_PRODUCT_FORM_DATA:
            return { ...state, updateProductFormData: action.payload };
        default:
            return state
    }
}
