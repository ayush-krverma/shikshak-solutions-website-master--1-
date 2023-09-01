// Load module
import mysql from 'mysql'

// Initialize pool
/*var pool = mysql.createPool({
    connectionLimit : 10,
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'shikshak_solution',
    debug    :  true
});*/
// Initialize pool
var pool = mysql.createPool({
    connectionLimit : 10,
    host     : '97.74.95.243',
    user     : 'apnafinances',
    password : 'Pa$$W0rd',
    database : 'shikshak_solution',
    debug    :  false
});
export default pool;
