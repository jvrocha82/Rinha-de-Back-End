const express = require("express")
const app = express()
const port = 3000
const peopleRoutes = require("./src/Rotes/People")

app.use('/', peopleRoutes)

app.listen('3000',()=>{
    console.log('App running on http://localhost:3000')
})