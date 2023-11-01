const express = require("express")
const app = express()
app.use(express.urlencoded());

const port = 3000
const peopleRoutes = require("./src/Rotes/People")

app.use('/', peopleRoutes)

app.listen(port,()=>{
    console.log(`App running on http://localhost:${port}`)
})