import pool from './connection.js';
export const actionToGetProductsApiCall = (body) => {
    let {condition} = body;
    return new Promise(function(resolve, reject) {
        let where = (condition) ? ` ${condition} ` : '';
        const query = `select products.*,categories.name as category,subcategories.sub_name as sub_category,subcategories.categoryId as categoryId,
        subchildcategories.subcategoryId as subCategoryId,subchildcategories.name as sub_child_category,brand.name as brand_name from products
                         left join subchildcategories on subchildcategories.id = products.childCategoryId
                         left join subcategories on subcategories.id = subchildcategories.subcategoryId            
                        left join categories on categories.id = subcategories.categoryId 
                       left join brand on brand.id = products.brand ${where}`;
        pool.query(query, (error, results) => {
            if (error) {
                reject(query)
            }
            let data = [];
            if(results?.length){
                data = results;
            }
            resolve(data);
        })
    })
}
export const actionToGetCategoriesApiCall = (body) => {
    let {condition} = body;
    return new Promise(function(resolve, reject) {
        let where = (condition) ? ` ${condition} ` : '';
        const query = `select categories.* from categories ${where}`;
        pool.query(query, (error, results) => {
            if (error) {
                reject(query)
            }
            let data = [];
            if(results?.length){
                data = results;
            }
            resolve(data);
        })
    })
}
export const actionToGetBrandsApiCall = (body) => {
    let {condition} = body;
    return new Promise(function(resolve, reject) {
        let where = (condition) ? ` ${condition} ` : '';
        const query = `select brand.* from brand ${where}`;
        pool.query(query, (error, results) => {
            if (error) {
                reject(query)
            }
            let data = [];
            if(results?.length){
                data = results;
            }
            resolve(data);
        })
    })
}
export const actionToGetSubCategoriesApiCall = (body) => {
    let {condition} = body;
    return new Promise(function(resolve, reject) {
        let where = (condition) ? ` ${condition} ` : '';
        const query = `select subcategories.*,categories.name as category from subcategories left join categories on categories.id = subcategories.categoryId ${where}`;
        pool.query(query, (error, results) => {
            if (error) {
                reject(query)
            }
            let data = [];
            if(results?.length){
                data = results;
            }
            resolve(data);
        })
    })
}
export const actionToGetSubChildCategoriesApiCall = (body) => {
    let {condition} = body;
    return new Promise(function(resolve, reject) {
        let where = (condition) ? ` ${condition} ` : '';
        const query = `select subchildcategories.*,categories.name as category,subcategories.sub_name as subcategory,subcategories.categoryId as categoryId from subchildcategories left join subcategories
        on subcategories.id=subchildcategories.subcategoryId left join categories on categories.id = subcategories.categoryId ${where}`;
        pool.query(query, (error, results) => {
            if (error) {
                reject(query)
            }
            let data = [];
            if(results?.length){
                data = results;
            }
            resolve(data);
        })
    })
}

export const actionToGetProductImagesApiCall = (body) => {
    let {id} = body;
    return new Promise(function(resolve, reject) {
        const query = `select * from product_photos where productId = ${id}`;
        pool.query(query, (error, results) => {
            if (error) {
                reject(query)
            }
            let data = [];
            if(results?.length){
                data = results;
            }
            resolve(data);
        })
    })
}

export const actionToGetCartDataByProductAndUserIdApiCall = (body) => {
    let {productId,userId} = body;
    return new Promise(function(resolve, reject) {
        const query = `SELECT * FROM carts WHERE carts.productId=${productId} AND carts.custId='${userId}' and carts.orderId is NULL`;
        pool.query(query, (error, results) => {
            if (error) {
                reject(query)
            }
            let data = [];
            if(results?.length){
                data = results;
            }
            resolve(data);
        })
    })
}
export const actionToGetAllCartCountDataByUserId = (body) => {
    let {userId} = body;
    return new Promise(function(resolve, reject) {
        const query = `SELECT SUM(carts.qty) as total_qty FROM carts WHERE carts.custId='${userId}' and carts.orderId is NULL group by custId`;
        pool.query(query, (error, results) => {
            if (error) {
                reject(query)
            }
            let data = [];
            if(results?.length){
                data = results;
            }
            resolve(data);
        })
    })
}


export const actionToGetUserCartDataByUserId = (body) => {
    let {userId} = body;
    return new Promise(function(resolve, reject) {
        const query = `SELECT carts.id as id, carts.qty as qty, carts.productId as productId, carts.custId as custId, products.name as name, products.photo as photo, products.price as price FROM carts left join products on products.id = carts.productId WHERE carts.custId='${userId}' and carts.orderId is NULL`;
        pool.query(query, (error, results) => {
            if (error) {
                reject(query)
            }
            let data = [];
            if(results?.length){
                data = results;
            }
            resolve(data);
        })
    })
}

export const actionDeleteProductFromCartByCartId = (body) => {
    let {cartId} = body;
    return new Promise(function(resolve, reject) {
        const query = `DELETE FROM carts WHERE carts.id='${cartId}'`;
        pool.query(query, (error, results) => {
            if (error) {
                reject(query)
            }
            let data = [];
            if(results?.length){
                data = results;
            }
            resolve(data);
        })
    })
}


export const actionUpdateProductQuantityOnCartByCartId = (body) => {
    let {cartId, qty} = body;
    return new Promise(function(resolve, reject) {
        const query = `UPDATE carts set carts.qty = '${qty}' WHERE carts.id='${cartId}'`;
        pool.query(query, (error, results) => {
            if (error) {
                reject(query)
            }
            let data = [];
            if(results?.length){
                data = results;
            }
            resolve(data);
        })
    })
}


