import pool from './connection.js';

/**
 * This method is used to get all user details
 * @returns {Promise<unknown>}
 */
export const actionToGetAllUserApiCall = () => {
    try {
    return new Promise(function(resolve, reject) {
        const query = `select * from app_user`;
        pool.query(query, (error, results) => {
            if (error) {
                reject(query)
            }
            let data = {};
            if(results?.length){
                data = results;
            }
            resolve(data);
        })
    })
    }catch (e){
        console.log(e);
    }
}
/**
 * This method is used to get user details by email address
 * @param email
 * @returns {Promise<unknown>}
 */
export const actionToGetUserIsExistApiCall = async (email) => {
    try {
    return new Promise(function(resolve, reject) {
        const query = `select * from app_user where email = '${email}'`;
        pool.query(query, (error, results) => {
            if (error) {
                reject(query)
            }
            let data = {};
            if(results?.length){
                data = results[0];
            }
            resolve(data);
        })
    })
    }catch (e){
        console.log(e);
    }
}
/**
 * This method is used to insert a new entry on user table when user signup
 * @param body
 * @returns {Promise<unknown>}
 */
export const actionToInsertUserApi = async (body) => {
    try {
    let {email,name,password,mobile,gender,id} = body;
    return new Promise(function(resolve, reject) {
        const query = `INSERT INTO app_user (id,email,name,password,mobile,gender,role,source)
                       VALUES ('${id}','${email}','${name}','${password}','${mobile}','${gender}',4,'website')`;
        pool.query(query, (error, results) => {
            if (error) {
                reject(query)
            }
            let data = {};
            if(results?.length){
                data = results;
            }
            resolve(data);
        })
    })
    }catch (e){
        console.log(e);
    }
}
/**
 * This method is used to get the user details by forgot password token
 * @param token
 * @returns {Promise<unknown>}
 */
export const actionToGetUserDetailsByForgotPasswordTokenApiCall = async (token) => {
    try {
        return new Promise(function(resolve, reject) {
            const query = `select * from app_user where token_forgot_password = '${token}'`;
            pool.query(query, (error, results) => {
                if (error) {
                    reject(query)
                }
                let data = {};
                if(results?.length){
                    data = results[0];
                }
                resolve(data);
            })
        })
    }catch (e){
        console.log(e);
    }
}