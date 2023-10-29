const {Client, Pool} = require("pg")
const client = new Client();


var db ={};

db.inserePessoa = async () =>{
    var pool = new Pool({
        user: 'rinha',
        host: 'localhost',
        database: 'rinha',
        password: 'rinha',
        port: 5432
    })
    var res = await pool.query('SELECT NOW()')
    await pool.end()
    return res;
}

module.exports = db;