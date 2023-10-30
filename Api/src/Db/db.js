const { Client, Pool } = require("pg")
const client = new Client();

const access = {
    user: 'rinha',
    host: 'localhost',
    database: 'rinha',
    password: 'rinha',
    port: 5432
}
var db = {};

db.inserePessoa = async (people) => {
    var pool = new Pool(access)
    var res = await pool.query(`
        INSERT INTO people(nome,apelido,aniversario)
        VALUES ('${people.nome}', '${people.apelido}', '${people.nascimento}')
    `)
    await pool.end()
    return res;
}

db.buscaPessoa = async (id) => {
    var pool = new Pool(access)
    var res = await pool.query(`
        select * from people 
	    where id = ${id}
    `)
    await pool.end()
    return res.rows[0];
}

db.contaPessoas = async () => {

    var pool = new Pool(access)
    var res = await pool.query(`
        select count(*) from people
    `)
    await pool.end()
    return res.rows[0];


}
module.exports = db;