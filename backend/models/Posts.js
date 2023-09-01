import pool from './connection.js';
export const actionToGetPostApiCall = () => {
    return new Promise(function(resolve, reject) {
        const query = 'select * from posts';
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
