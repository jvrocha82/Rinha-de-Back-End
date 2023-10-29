const express = require("express")
const router = express()
const db = require("../Db/db")

router.post('/pessoas', async (req, res) =>{
    await db.inserePessoa()

    res.sendStatus(200)
})


module.exports = router;