const express = require("express")
const router = express()
const db = require("../Db/db")
router.use(express.json())


router.post('/pessoas', async (req, res) => {
    let people = req.body;

    await db.inserePessoa(people)

    res.sendStatus(200)
})

router.get('/pessoas/:id', async (req, res) => {
    let id = req.params.id;

    let pessoa = await db.buscaPessoa(id)

    res.status(200).send(pessoa)
})

router.get('/pessoas', async (req, res) => {
    let termoBusca = req.query.t;
    
    let pessoas = await db.buscaPessoaPorTermo(termoBusca)
    res.status(200).send(pessoas)
})

router.get('/contagem-pessoas', async (req, res) => {
    let numeroPessoa = await db.contaPessoas()
    res.status(200).send(numeroPessoa)
})

module.exports = router;