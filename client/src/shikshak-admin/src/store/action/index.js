import {api} from '../../hooks/api/ApiConfig';
import {
    POST_DATA,
    SUB_CATEGORY_LIST,
    SUB_CHILD_CATEGORY_LIST,
    CATEGORY_DATA,
    PRODUCT_DATA,
    BRAND_DATA, UPDATE_PRODUCT_FORM_DATA,
    PRODUCT_IMAGE_DATA
} from "../constant";
import AWS from 'aws-sdk';

const AWS_ACCESS_KEY_ID='AKIA5BAMSD7MAS6P43HN';
const AWS_SECRET_ACCESS_KEY='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';
const AWS_DEFAULT_REGION='eu-north-1';
const AWS_BUCKET = 'shikshak-solutions';
const S3Bucket = new AWS.S3({
    params: {Bucket: AWS_BUCKET},
    region: AWS_DEFAULT_REGION,
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
})


export const actionToUploadDataToS3BucketStore = (payload) => async () => {
    const params = {
        ACL: 'public-read',
        Body: payload.blobData,
        Bucket: AWS_BUCKET,
        Key: payload.key,
        ContentType:payload.type
    };
    S3Bucket.putObject(params)
        .send((err) => {
            console.log(err,'error');
        })
    return `https://shikshak-solutions.s3.eu-north-1.amazonaws.com/${payload.key}`;
}

export const actionToDeleteAwsObject = (payload)=> async()=>{
    const params = { Bucket: AWS_BUCKET,  Key:payload.key};
    return S3Bucket.deleteObject(params);
}
export const callInsertDataFunction = (payload) => async () => {
    try {
        const { data } = await api.post('common/insertCommonApiCall',payload);
        return data;
    } catch (error) {
        console.log(error,'error');
    }
}
export const callDeleteDataFunction = (payload) => async () => {
    try {
        const { data } = await api.post('common/deleteCommonApiCall',payload);
        return data;
    } catch (error) {
        console.log(error,'error');
    }
}
export const commonUpdateFunction = (payload) => async () => {
    try {
        const { data } = await api.post('common/updateCommonApiCall',payload);
        return data;
    } catch (error) {
        console.log(error,'error');
    }
}
export const actionToCreatePost = (payload) => async (dispatch) =>{
    const aliasArray = ['?','?','?'];
    const columnArray = ['title','username','postText'];
    const valuesArray = [payload?.title,payload?.username,payload?.postText];
    const insertData = {alias:aliasArray,column:columnArray,values:valuesArray,tableName:'posts'};
    await dispatch(callInsertDataFunction(insertData));
}
export const actionToSetUpdateFromData = (data) => async (dispatch) => {
    dispatch({type: UPDATE_PRODUCT_FORM_DATA, payload: data});
}
export const actionToGetPostApiCall = () => async (dispatch) => {
    const {data} = await api.post(`posts/actionToGetPostApiCall`);
    dispatch({ type: POST_DATA, payload: data });
    return data;
}
export const actionToGetProductsApiCall = () => async (dispatch) => {
    const {data} = await api.post(`products/actionToGetProductsApiCall`);
    dispatch({ type: PRODUCT_DATA, payload: data });
    return data;
}
export const actionToGetBrandsApiCall = () => async (dispatch) => {
    const {data} = await api.post(`products/actionToGetBrandsApiCall`);
    dispatch({ type: BRAND_DATA, payload: data });
    return data;
}
export const actionToGetCategoriesApiCall = () => async (dispatch) => {
    const {data} = await api.post(`products/actionToGetCategoriesApiCall`);
    dispatch({ type: CATEGORY_DATA, payload: data });
    return data;
}
export const actionToGetSubCategoriesApiCall = () => async (dispatch) => {
    const {data} = await api.post(`products/actionToGetSubCategoriesApiCall`);
    dispatch({ type: SUB_CATEGORY_LIST, payload: data });
    return data;
}
export const actionToGetSubChildCategoriesApiCall = () => async (dispatch) => {
    const {data} = await api.post(`products/actionToGetSubChildCategoriesApiCall`);
    dispatch({ type: SUB_CHILD_CATEGORY_LIST, payload: data });
    return data;
}
export const actionToGetProductImagesApiCall = (payload) => async (dispatch) => {
    const {data} = await api.post(`products/actionToGetProductImagesApiCall`,{id:payload?.productId});
    dispatch({ type: PRODUCT_IMAGE_DATA, payload: data });
    return data;
}
export const actionToGetCategoriesOfIdApiCall = (payload) => async () => {
    let condition = ` where categories.id = ${payload.id} `
    const {data} = await api.post(`products/actionToGetCategoriesApiCall`,{condition:condition});
    return data;
}
export const actionToGetBrandsOfIdApiCall = (payload) => async () => {
    let condition = ` where brand.id = ${payload.id} `
    const {data} = await api.post(`products/actionToGetBrandsApiCall`,{condition:condition});
    return data;
}
export const actionToGetSubCategoriesOfIdApiCall = (payload) => async () => {
    let condition =(payload.categoryId) ? ` where subcategories.categoryId = ${payload.categoryId} ` : ` where subcategories.id = ${payload.id} `
    const {data} = await api.post(`products/actionToGetSubCategoriesApiCall`,{condition:condition});
    return data;
}
export const actionToGetSubChildCategoriesOfIdApiCall = (payload) => async () => {
    let condition = (payload.subCategoryId) ? ` where subchildcategories.subcategoryId = ${payload.subCategoryId} ` :  ` where subchildcategories.id = ${payload.id} `;
    const {data} = await api.post(`products/actionToGetSubChildCategoriesApiCall`,{condition:condition});
    return data;
}

export const actionToCreateCategories = (payload) => async (dispatch) =>{
    const aliasArray = ['?','?'];
    const columnArray = ['name','slug'];
    const valuesArray = [payload?.name,payload?.slug];
    const insertData = {alias:aliasArray,column:columnArray,values:valuesArray,tableName:'categories'};
    await dispatch(callInsertDataFunction(insertData));
    dispatch(actionToGetCategoriesApiCall());
}
export const actionToCreateSubCategories = (payload) => async (dispatch) =>{
    const aliasArray = ['?','?'];
    const columnArray = ['categoryId','sub_name'];
    const valuesArray = [payload?.categoryId,payload?.sub_name];
    const insertData = {alias:aliasArray,column:columnArray,values:valuesArray,tableName:'subcategories'};
    await dispatch(callInsertDataFunction(insertData));
    dispatch(actionToGetSubCategoriesApiCall());
}
export const actionToCreateSubChildCategories = (payload) => async (dispatch) =>{
    const aliasArray = ['?','?'];
    const columnArray = ['name','subcategoryId'];
    const valuesArray = [payload?.name,payload?.subcategoryId];
    const insertData = {alias:aliasArray,column:columnArray,values:valuesArray,tableName:'subchildcategories'};
    await dispatch(callInsertDataFunction(insertData));
    dispatch(actionToGetSubChildCategoriesApiCall());
}
export const actionToCreateProducts = (payload) => async (dispatch) =>{
    let filename = `products/ss-kit-${new Date().getTime()}.png`;
    let imagePayload = {
        blobData:payload?.photo,
        key:filename,
        type:'img/png',
    }
    let image = await dispatch(actionToUploadDataToS3BucketStore(imagePayload));
    const aliasArray = ['?','?','?','?','?','?','?','?','?','?','?','?','?','?','?','?'];
    const columnArray = ['childCategoryId','name','slug','brand','status','unitSize','description',
        'sortDesc','photo','buyerPrice','price','qty','discountPer','discount','total','netPrice'];
    const valuesArray = [payload?.childCategoryId,payload?.name,
        payload?.slug,payload?.brand,payload?.status,payload?.unitSize,payload?.desc,payload?.sortDesc,image
        ,payload?.buyerPrice,payload?.price,payload?.qty,payload?.discountPer,payload?.discount,payload?.total,payload?.netPrice];
    const insertData = {alias:aliasArray,column:columnArray,values:valuesArray,tableName:'products'};
    await dispatch(callInsertDataFunction(insertData)).then(()=>{
        dispatch(actionToGetProductsApiCall());
    });
}
