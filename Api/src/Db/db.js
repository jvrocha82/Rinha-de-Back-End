const { Client, Pool } = require("pg")
const client = new Client();

const connectString = "postgres://rinha:rinha@db/rinha"
const access = {
    user: 'rinha',
    host: 'db',
    database: 'rinha',
    password: 'rinha',
    port: 5432
}
var db = {};

db.inserePessoa = async (people) => { 
    var pool = new Pool(access)
    var res = await pool.query(`
        INSERT INTO people(nome, apelido, aniversario, stack)
        VALUES ('${people.nome}', '${people.apelido}', '${people.nascimento}', '${people.stack.toString()}')
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
try{ 
    var pool = new Pool(access)
    var res = await pool.query(`
        select count(*) from people
    `)
    await pool.end()
    return res.rows[0];
}catch(ex){
    console.log(ex)
    return ex
}

}

db.buscaPessoaPorTermo = async (termoBusca) => {
    var pool = new Pool(access)
    var res = await pool.query(`
        select * from people
        where nome like '%${termoBusca}%'
        or nome like '%${termoBusca}%'
        or stack like '%${termoBusca}%'
    `)
    await pool.end()
    return res.rows;
}
module.exports = db;